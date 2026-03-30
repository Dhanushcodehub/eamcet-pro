import { useState, useEffect, useRef } from "react";
import { Routes, Route, useNavigate, useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, collection, getDocs, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { LayoutDashboard, FileText, TrendingUp, Trophy, BookOpen, Flame, CheckCircle, Star, BarChart2, Medal, Target, Zap, Award, Flag, Timer, PenTool, Check, X, SkipForward, Atom, FlaskConical, Compass, Dna } from "lucide-react";

// Firebase initialized in main.jsx and accessible via window._firebaseDb / window._firebaseAuth

// ─── Mock Data ─────────────────────────────────────────────────────────────────
export const SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Biology"];
import { QUESTION_BANK, PAPER_SETS } from "./data/papers.js";

// ─── Firebase SDK Initialized above ───────────────────────────────────────────
//
// OR if using npm: import { initializeApp } from "firebase/app"; etc.

// ─── Session local-cache helpers (instant read, no async delay) ─────────────
function localSave(uid, sessions) {
  try { localStorage.setItem(`eamcet_sessions_${uid}`, JSON.stringify(sessions)); } catch (_) { }
}
function localLoad(uid) {
  try { return JSON.parse(localStorage.getItem(`eamcet_sessions_${uid}`)) || []; } catch (_) { return []; }
}

// ─── Real Firebase Firestore Helpers ──────────────────────────────────────────

const MOCK_STORE = {};

const db = {
  // ── get a document ──
  async get(path) {
    if (window._firebaseDb) {
      const snap = await getDoc(doc(window._firebaseDb, ...path.split("/")));
      return snap.exists() ? snap.data() : null;
    }
    return MOCK_STORE[path] || null;
  },

  // ── set (overwrite) a document ──
  async set(path, data) {
    if (window._firebaseDb) {
      await setDoc(doc(window._firebaseDb, ...path.split("/")), data);
      return true;
    }
    MOCK_STORE[path] = data;
    return true;
  },

  // ── merge-update a document ──
  async update(path, data) {
    if (window._firebaseDb) {
      await setDoc(doc(window._firebaseDb, ...path.split("/")), data, { merge: true });
      return true;
    }
    MOCK_STORE[path] = { ...(MOCK_STORE[path] || {}), ...data };
    return true;
  },

  // ── fetch ALL documents in a collection ──
  async getCollection(collectionPath) {
    if (window._firebaseDb) {
      const q = query(
        collection(window._firebaseDb, collectionPath),
        limit(50)
      );
      const snap = await getDocs(q);
      return snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
    // Mock: return any leaderboard entries saved during this session
    return Object.entries(MOCK_STORE)
      .filter(([k]) => k.startsWith("leaderboard/"))
      .map(([k, v]) => ({ id: k.split("/")[1], ...v }))
      .sort((a, b) => (b.streak || 0) - (a.streak || 0));
  },
};

// ─── Utility Functions ─────────────────────────────────────────────────────────
function getTodayStr() {
  return new Date().toISOString().split("T")[0];
}

function calcStreak(sessions) {
  if (!sessions || sessions.length === 0) return 0;
  const dates = [...new Set(sessions.map(s => s.date))].sort().reverse();
  let streak = 0;
  let curr = new Date();
  curr.setHours(0, 0, 0, 0);
  for (const d of dates) {
    const dDate = new Date(d);
    const diff = Math.round((curr - dDate) / 86400000);
    if (diff <= 1) { streak++; curr = dDate; }
    else break;
  }
  return streak;
}

function calcAccuracy(sessions) {
  if (!sessions?.length) return 0;
  const total = sessions.reduce((a, s) => a + (s.total || 0), 0);
  const correct = sessions.reduce((a, s) => a + (s.correct || 0), 0);
  return total ? Math.round((correct / total) * 100) : 0;
}

// --- CSS STYLES ---
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700&display=swap');
    
    .auth-container { 
      min-height: 100vh; background: #f0f7ff;
      display: flex; align-items: center; justify-content: center;
      font-family: 'Inter', 'Sora', sans-serif;
      position: relative; overflow: hidden;
      width: 100%; 
    }
    
    .auth-card { 
      width: 460px; max-width: 92%; padding: 48px 40px; 
      background: #ffffff; border: 1px solid #e2e8f0; 
      border-radius: 20px; position: relative; z-index: 10;
      box-shadow: 0 20px 50px rgba(37, 99, 235, 0.08);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-sizing: border-box;
    }

    .auth-input { transition: all 0.2s; border-radius: 12px; }
    .auth-input:focus { border-color: #2563eb !important; box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.1); outline: none; background: #ffffff !important; }
    .auth-input::placeholder { color: #94a3b8; font-weight: 400; }

    .auth-tab-btn { flex: 1; padding: 12px 0; border: none; border-radius: 10px; cursor: pointer; font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; transition: all 0.2s ease; }
    .auth-tab-btn.active { background: #2563eb!important; color: #ffffff!important; }
    .auth-tab-btn:not(.active) { background: transparent; color: #475569; }
    .auth-tab-btn:not(.active):hover { background: #f0f4f8; }

    .btn-primary { 
      width: 100%; padding: 15px; 
      background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); 
      border: none; border-radius: 99px; color: #ffffff; 
      font-size: 15px; font-weight: 700; cursor: pointer; 
      font-family: 'Inter', sans-serif; transition: all 0.2s; 
      margin-bottom: 20px; box-shadow: 0 8px 20px rgba(37, 99, 235, 0.2); 
    }
    .btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(37, 99, 235, 0.25); opacity: 0.95; }
    .btn-primary:active:not(:disabled) { transform: translateY(0); }
    .btn-primary:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

    .auth-google-btn { 
      width: 100%; padding: 14px; background: #ffffff; 
      border: 1.5px solid #e2e8f0; border-radius: 99px; 
      color: #171c1f; font-size: 14px; font-weight: 600; 
      cursor: pointer; font-family: 'Inter', sans-serif; 
      display: flex; align-items: center; justify-content: center; gap: 10px;
      transition: all 0.2s;
    }
    .auth-google-btn:hover:not(:disabled) { background: #f8faff; border-color: #cbd5e1; transform: translateY(-1px); }

    @media screen and (max-width: 640px) {
      .auth-container { align-items: flex-start !important; padding: 0 !important; overflow-y: auto !important; width: 100% !important; min-height: 100vh !important; }
      .auth-card { 
        max-width: none !important; width: 100% !important; min-height: 100vh !important; 
        border-radius: 0 !important; border: none !important; padding: 60px 24px 40px !important; 
        display: flex !important; flex-direction: column !important; justify-content: flex-start !important;
        box-shadow: none !important; margin: 0 !important;
      }
      .auth-decorative { display: none !important; }
    }
  `}} />
);

// ─── SEO Component ─────────────────────────────────────────────────────────────
const SEO = ({ title, description, path = "" }) => {
  const fullTitle = `${title} | EAMCET Pro`;
  const url = `https://eamcetpro.vercel.app${path}`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content="https://eamcetpro.vercel.app/og-image.png?v=2" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:image" content="https://eamcetpro.vercel.app/og-image.png?v=2" />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": fullTitle,
          "description": description,
          "url": url,
          "publisher": {
            "@type": "Organization",
            "name": "EAMCET Pro",
            "logo": {
              "@type": "ImageObject",
              "url": "https://eamcetpro.vercel.app/og-image.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

// ─── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [bootstrapping, setBootstrapping] = useState(true);
  const [activePaper, setActivePaper] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [sessions, setSessions] = useState([]);

  // Listen for Auth changes (persistence)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(window._firebaseAuth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User",
          email: firebaseUser.email,
        });
        // Redirect to dashboard if on home or login
        if (window.location.pathname === "/" || window.location.pathname === "/login") {
          navigate("/dashboard", { replace: true });
        }
      } else {
        setUser(null);
        setSessions([]);
        if (window.location.pathname !== "/") {
          navigate("/", { replace: true });
        }
      }
      setBootstrapping(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  // Load user data – first show cached sessions instantly, then refresh from Firestore
  useEffect(() => {
    if (user) {
      // 1. Instant: show localStorage immediately while Firestore loads
      const cached = localLoad(user.uid);
      if (cached.length > 0) setSessions(cached);

      // 2. Authoritative: load from Firestore and update ONLY if Firestore has real data
      db.get(`users/${user.uid}`)
        .then(d => {
          const remote = d?.sessions || [];
          if (remote.length > 0) {
            // Firestore has data — merge: take the larger set (most sessions wins)
            // This handles the case where localStorage has newer data than Firestore
            setSessions(prev => remote.length >= prev.length ? remote : prev);
            localSave(user.uid, remote.length >= cached.length ? remote : cached);
          }
          // If remote is empty, keep what localStorage showed — don't wipe it
        })
        .catch(() => {
          // Firestore read failed (e.g. permission denied)
          // localStorage data is already displayed — nothing to do
        });
    } else {
      setSessions([]);
    }
  }, [user]);

  const saveSession = async (rawSession) => {
    // Firestore crashes if an object contains `undefined` values (which happens if a user
    // skips a question, resulting in `userAnswer: undefined`, or optional fields like `topic`).
    // This JSON stringify/parse completely removes all undefined keys.
    const session = JSON.parse(JSON.stringify(rawSession));

    // Use functional updater to avoid stale closure over sessions
    let updated;
    setSessions(prev => {
      updated = [...prev, session];
      return updated;
    });

    await Promise.resolve();

    // Save to localStorage immediately for instant reload recovery
    localSave(user.uid, updated);

    try {
      // 1) Save to Firestore
      await db.set(`users/${user.uid}`, { sessions: updated });

      // 2) Update leaderboard
      const newStreak = calcStreak(updated);
      const newAccuracy = calcAccuracy(updated);
      await db.set(`leaderboard/${user.uid}`, {
        uid: user.uid,
        name: user.name,
        streak: newStreak,
        accuracy: newAccuracy,
        papers: updated.length,
        lastActive: getTodayStr(),
        updatedAt: Date.now(),
      });
    } catch (e) {
      console.error("Failed to save to Firestore:", e);
      // localStorage already has the data, so user won't lose it
    }
  };

  const streak = calcStreak(sessions);
  const accuracy = calcAccuracy(sessions);
  const totalPapers = sessions.length;

  if (bootstrapping) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8faff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ width: 40, height: 40, border: "3px solid rgba(37,99,235,0.1)", borderTop: "3px solid #2563eb", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  const handleLogout = async () => {
    if (window._firebaseAuth) await signOut(window._firebaseAuth);
    setUser(null);
    navigate("/", { replace: true });
  };

  if (!user) {
    return (
      <Routes>
        <Route path="/" element={<AuthPage onLogin={u => { setUser(u); navigate("/dashboard"); }} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      {/* App Shell Routes */}
      <Route path="/*" element={<Shell user={user} onLogout={handleLogout}>
        <Routes>
          <Route path="dashboard" element={<>
            <SEO title="Dashboard" description="Your EAMCET Pro dashboard. Track your streak, accuracy, and recent activity." path="/dashboard" />
            <Dashboard streak={streak} accuracy={accuracy} totalPapers={totalPapers} sessions={sessions} onStartPaper={p => { setActivePaper(p); navigate("/exam"); }} />
          </>} />
          <Route path="papers" element={<>
            <SEO title="Practice Papers" description="Access full-length EAMCET practice papers and mock tests." path="/papers" />
            <PapersPage sessions={sessions} onStart={p => { setActivePaper(p); navigate("/exam"); }} />
          </>} />
          <Route path="progress" element={<>
            <SEO title="My Progress" description="Detailed analysis of your preparation progress and subject-wise accuracy." path="/progress" />
            <ProgressPage sessions={sessions} streak={streak} accuracy={accuracy} />
          </>} />
          <Route path="leaderboard" element={<>
            <SEO title="Leaderboard" description="See where you stand among thousands of EAMCET aspirants." path="/leaderboard" />
            <LeaderboardPage user={user} streak={streak} accuracy={accuracy} sessions={sessions} />
          </>} />
          <Route path="syllabus" element={<>
            <SEO title="Syllabus" description="Complete EAMCET syllabus for Physics, Chemistry, Mathematics, and Biology." path="/syllabus" />
            <SyllabusPage />
          </>} />
          {/* Default to dashboard for authenticated users */}
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Shell>} />

      {/* Full-screen Routes */}
      <Route path="/exam" element={
        activePaper ? (
          <ExamPage
            paper={activePaper}
            user={user}
            onSubmit={(result) => {
              saveSession({ ...result, date: getTodayStr(), paperId: activePaper.id });
              setAnalysisData(result);
              navigate("/analysis");
            }}
            onExit={() => navigate("/dashboard")}
          />
        ) : <Navigate to="/dashboard" replace />
      } />

      <Route path="/analysis" element={
        analysisData ? (
          <AnalysisPage
            data={analysisData}
            onBack={() => { setActivePaper(null); setAnalysisData(null); navigate("/dashboard"); }}
          />
        ) : <Navigate to="/dashboard" replace />
      } />
    </Routes>
  );
}

// ─── Notification Component ───────────────────────────────────────────────────────
function NotificationBar({ message, type = "error", onClose }) {
  if (!message) return null;
  const isError = type === "error";
  return (
    <div style={{
      position: "fixed", top: 24, left: "50%", transform: "translateX(-50%)", zIndex: 9999,
      background: isError ? "#fef2f2" : "#fffbeb",
      border: `1px solid ${isError ? "#fecaca" : "#fde68a"}`,
      padding: "16px 24px", borderRadius: 12, boxShadow: "0 24px 48px rgba(0,0,0,0.12)",
      display: "flex", alignItems: "flex-start", gap: 14, width: "90%", maxWidth: 420,
      animation: "slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
    }}>
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translate(-50%, -24px) scale(0.96); } to { opacity: 1; transform: translate(-50%, 0) scale(1); } }
      `}</style>
      <div style={{ color: isError ? "#ef4444" : "#f59e0b", marginTop: 1 }}>
        {isError
          ? <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          : <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        }
      </div>
      <div style={{ flex: 1 }}>
        <p style={{ color: isError ? "#b91c1c" : "#b45309", fontSize: 13.5, margin: 0, fontWeight: 600, letterSpacing: "-0.2px" }}>{isError ? "Authentication Error" : "Warning"}</p>
        <p style={{ color: isError ? "#dc2626" : "#d97706", fontSize: 13, margin: "4px 0 0 0", lineHeight: 1.4 }}>{message}</p>
      </div>
      <button onClick={onClose} style={{ background: "none", border: "none", color: isError ? "#f87171" : "#fbbf24", cursor: "pointer", padding: 4, display: "flex", borderRadius: 6, transition: "background 0.2s" }} onMouseOver={e => e.currentTarget.style.background = isError ? "#fee2e2" : "#fef3c7"} onMouseOut={e => e.currentTarget.style.background = "transparent"}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  );
}

// ─── Auth Page ─────────────────────────────────────────────────────────────────
function AuthPage({ onLogin }) {
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [processingRedirect, setProcessingRedirect] = useState(
    // Start in loading state if there might be a pending redirect
    // (main.jsx already kicked off the promise before React mounted)
    !!window._redirectResultPromise
  );

  // Handle Google redirect result — await the promise started in main.jsx
  useEffect(() => {
    const pending = window._redirectResultPromise;
    if (!pending) return;

    // Clear it so re-renders don't re-await
    window._redirectResultPromise = null;

    pending
      .then((result) => {
        if (result?.user) {
          const u = result.user;
          onLogin({
            uid: u.uid,
            name: u.displayName || u.email?.split("@")[0] || "User",
            email: u.email,
          });
        } else {
          // No pending redirect — show the login form
          setProcessingRedirect(false);
        }
      })
      .catch((e) => {
        console.error("[getRedirectResult error]", e.code, e.message);
        const msgs = {
          "auth/operation-not-allowed": "Google Sign-In is not enabled. Go to Firebase Console → Authentication → Sign-in method → Google → Enable.",
          "auth/unauthorized-domain": `Domain '${window.location.hostname}' not authorized. Add it in Firebase Console → Authentication → Settings → Authorized Domains.`,
          "auth/account-exists-with-different-credential": "An account already exists with this email using a different sign-in method.",
        };
        if (e.code) setErr(msgs[e.code] || `Error [${e.code}]: ${e.message}`);
        setProcessingRedirect(false);
      });
  }, []);

  // Show a dedicated loading screen while processing redirect
  if (processingRedirect) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f8faff", fontFamily: "'Sora', sans-serif", gap: 16 }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ width: 44, height: 44, border: "3px solid #e2e8f0", borderTop: "3px solid #2563eb", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
        <p style={{ color: "#475569", fontSize: 14, fontWeight: 500, margin: 0 }}>Completing Google sign-in…</p>
        <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>Please wait</p>
      </div>
    );
  }

  const handle = async () => {
    if (!email || !pwd) { setErr("Please fill all fields"); return; }
    if (mode === "signup" && !name) { setErr("Please enter your full name"); return; }
    if (pwd.length < 6) { setErr("Password must be at least 6 characters"); return; }

    setLoading(true); setErr("");

    try {
      if (window._firebaseAuth) {
        let cred;
        if (mode === "login") {
          cred = await signInWithEmailAndPassword(window._firebaseAuth, email, pwd);
        } else {
          cred = await createUserWithEmailAndPassword(window._firebaseAuth, email, pwd);
          await updateProfile(cred.user, { displayName: name });
        }
        onLogin({
          uid: cred.user.uid,
          name: cred.user.displayName || email.split("@")[0],
          email: cred.user.email,
        });
      } else {
        // Fallback to mock login if Firebase is not properly connected
        await new Promise(r => setTimeout(r, 900));
        const uid = email.replace(/[^a-z0-9]/gi, "_");
        onLogin({ uid, name: name || email.split("@")[0], email });
      }
    } catch (e) {
      console.error("[Auth Error]", e.code, e.message);
      const messages = {
        "auth/invalid-credential": "Incorrect email or password. Please try again.",
        "auth/user-not-found": "No account found for this email address.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/email-already-in-use": "An account already exists with this email address.",
        "auth/weak-password": "Your password is too weak. It must be at least 6 characters.",
        "auth/too-many-requests": "Too many failed login attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Please check your internet connection."
      };
      setErr(messages[e.code] || "Authentication failed. Please try again.");
    }

    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true); setErr("");
    try {
      if (window._firebaseAuth) {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });

        try {
          // Try popup first — fast, reliable, works on localhost & Vercel
          const cred = await signInWithPopup(window._firebaseAuth, provider);
          onLogin({
            uid: cred.user.uid,
            name: cred.user.displayName || cred.user.email?.split("@")[0] || "User",
            email: cred.user.email,
          });
          return;
        } catch (popupErr) {
          // If popup was blocked by browser, automatically fall back to redirect
          if (
            popupErr.code === "auth/popup-blocked" ||
            popupErr.code === "auth/popup-closed-by-user"
          ) {
            console.warn("[Auth] Popup blocked — falling back to redirect flow");
            await signInWithRedirect(window._firebaseAuth, provider);
            return; // Page navigates away
          }
          // For all other popup errors, bubble up to outer catch
          throw popupErr;
        }
      } else {
        // Mock fallback for local dev without Firebase
        await new Promise(r => setTimeout(r, 900));
        onLogin({ uid: "mock_google_id", name: "Google User", email: "google@example.com" });
      }
    } catch (e) {
      console.error("[Google Auth Error] code:", e.code, "message:", e.message);
      const errorMessages = {
        "auth/operation-not-allowed": "Google Sign-In is not enabled. Go to Firebase Console → Authentication → Sign-in method → Google → Enable it.",
        "auth/unauthorized-domain": `Domain not authorized. Add '${window.location.hostname}' to Firebase Console → Authentication → Settings → Authorized Domains.`,
        "auth/cancelled-popup-request": "Sign-in was cancelled. Please try again.",
        "auth/invalid-api-key": "Firebase API key is invalid. Check your .env file.",
        "auth/network-request-failed": "Network error. Please check your internet connection.",
        "auth/account-exists-with-different-credential": "An account already exists with this email. Try signing in with email/password.",
      };
      setErr(
        errorMessages[e.code] ||
        `Error [${e.code || 'unknown'}]: ${e.message || 'Google Sign-In failed. Please try again.'}`
      );
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <GlobalStyles />
      {/* Decorative circles */}
      <div className="auth-decorative" style={{ position: "absolute", top: "-100px", right: "-100px", width: 400, height: 400, borderRadius: "50%", border: "1.5px solid rgba(0, 21, 42, 0.05)", pointerEvents: "none" }} />
      <div className="auth-decorative" style={{ position: "absolute", bottom: "-150px", left: "-100px", width: 500, height: 500, borderRadius: "50%", border: "1.5px solid rgba(0, 21, 42, 0.05)", pointerEvents: "none" }} />

      <div className="auth-card">
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, color: "#ffffff" }}>E</div>
            <span style={{ fontSize: 24, fontWeight: 800, color: "#171c1f", letterSpacing: -0.8 }}>EAMCET <span style={{ color: "#2563eb" }}>Pro</span></span>
          </div>
          <p style={{ color: "#43474d", fontSize: 13, margin: 0, fontWeight: 500, letterSpacing: 0.2 }}>The Curated Intelligence Practice Platform</p>
        </div>

        {/* Tabs */}
        <div role="tablist" style={{ display: "flex", background: "#f1f5f9", borderRadius: 14, padding: 4, marginBottom: 32 }}>
          {["login", "signup"].map(m => (
            <button key={m} role="tab" aria-selected={mode === m} onClick={() => { setMode(m); setErr(""); }}
              className={`auth-tab-btn ${mode === m ? "active" : ""}`}>
              {m === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        <form onSubmit={(e) => { e.preventDefault(); handle(); }}>
          {/* Fields */}
          <div style={{ marginBottom: 24 }}>
            {mode === "signup" && (
              <Field label="Full Name" value={name} onChange={setName} placeholder="Ravi Kumar" />
            )}
            <Field
              label="Email Address"
              value={email}
              onChange={setEmail}
              placeholder="student@example.com"
              type="email"
              autoComplete="email"
              hint={email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "Please enter a valid email" : email && !email.toLowerCase().endsWith("@gmail.com") ? "Gmail recommended for better sync" : ""}
              hintType={email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "success" : "error"}
            />
            <Field
              label="Password"
              value={pwd}
              onChange={setPwd}
              placeholder="••••••••"
              type="password"
              autoComplete="current-password"
              hint={pwd && pwd.length < 6 ? "Minimum 6 characters required" : pwd.length >= 6 ? "Password looks good" : ""}
              hintType={pwd.length >= 6 ? "success" : "error"}
            />
          </div>

          <NotificationBar message={err} type="error" onClose={() => setErr("")} />

          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Optimizing..." : mode === "login" ? "Enter Dashboard →" : "Create Account →"}
          </button>
        </form>

        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div style={{ flex: 1, height: 1, background: "#eef2f6" }} />
          <span style={{ color: "#94a3b8", fontSize: 10, textTransform: "uppercase", letterSpacing: 1.5, fontWeight: 700 }}>OR</span>
          <div style={{ flex: 1, height: 1, background: "#eef2f6" }} />
        </div>

        <button className="auth-google-btn" onClick={handleGoogleLogin} disabled={loading}>
          {loading ? (
            <span style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b" }}>
              <span style={{ width: 16, height: 16, border: "2px solid #e2e8f0", borderTop: "2px solid #102a43", borderRadius: "50%", display: "inline-block", animation: "spin 0.8s linear infinite" }} />
              Connecting…
            </span>
          ) : (
            <>
              <svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" /><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" /><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></svg>
              Continue with Google
            </>
          )}
        </button>
        <br></br>
        <p style={{ color: "#555b66", fontSize: 11, textAlign: "center", margin: 0, fontWeight: 500 }}>
          Quiet Focus Interface • Secure Data Sync
        </p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text", hint = "", hintType = "error", autoComplete = "off" }) {
  const isError = hintType === "error";
  const fieldId = `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <div style={{ marginBottom: 20 }}>
      <label htmlFor={fieldId} style={{ display: "block", color: "#171c1f", fontSize: 10, fontWeight: 800, marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>{label}</label>
      <input
        id={fieldId}
        className="auth-input"
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "15px 18px",
          background: "#f8faff",
          border: `1.5px solid ${hint && isError ? "#fca5a5" : "#e2e8f0"}`,
          borderRadius: 14,
          color: "#171c1f",
          fontSize: 14,
          fontWeight: 500,
          fontFamily: "'Inter', sans-serif",
          boxSizing: "border-box"
        }}
      />
      {hint && (
        <p style={{ margin: "8px 0 0 4px", fontSize: 11, fontWeight: 600, color: isError ? "#f87171" : "#10b981", display: "flex", alignItems: "center", gap: 6, letterSpacing: -0.1 }}>
          <span style={{ fontSize: 14 }}>{isError ? "✕" : "✓"}</span> {hint}
        </p>
      )}
    </div>
  );
}

// ─── Shell (Navigation) ────────────────────────────────────────────────────────
function Shell({ user, onLogout, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "papers", label: "Papers", path: "/papers", icon: <FileText size={18} /> },
    { id: "progress", label: "Progress", path: "/progress", icon: <TrendingUp size={18} /> },
    { id: "leaderboard", label: "Leaderboard", path: "/leaderboard", icon: <Trophy size={18} /> },
    { id: "syllabus", label: "Syllabus", path: "/syllabus", icon: <BookOpen size={18} /> },
  ];

  const currentId = location.pathname.split("/")[1] || "dashboard";

  return (
    <div className="app-layout">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: #64748b; border-radius: 2px; }
        * { box-sizing: border-box; }
        
        /* Responsive Layouts */
        .app-layout { min-height: 100vh; background: #f8faff; font-family: 'Sora', sans-serif; display: flex; flex-direction: row; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .sidebar { width: 220px; background: #ffffff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 24px 16px; flex-shrink: 0; position: sticky; top: 0; align-self: flex-start; height: 100vh; overflow-y: auto; z-index: 50; }
        .nav-list { display: flex; flex-direction: column; gap: 4px; flex: 1; width: 100%; }
        .nav-btn { width: 100%; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; border: none; cursor: pointer; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 500; transition: all 0.15s; }
        .main-content { flex: 1; min-width: 0; overflow-y: auto; padding: 32px 20px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 900px) {
          .app-layout { flex-direction: column; }
          .sidebar { width: 100%; height: auto; flex-direction: row; flex-wrap: wrap; align-items: center; border-right: none; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; padding: 12px 16px; z-index: 100; }
          .sidebar-logo { order: 1; margin-bottom: 0 !important; padding-left: 0 !important; }
          .sidebar-profile { order: 2; border-top: none !important; padding-top: 0 !important; display: flex; align-items: center; margin-left: auto; }
          .sidebar-profile-info { display: none !important; }
          .sidebar-logout { width: auto !important; padding: 8px 14px !important; margin: 0 !important; }
          .nav-list { order: 3; flex: 0 0 100% !important; margin-top: 12px; margin-bottom: 0; flex-direction: row !important; flex-wrap: wrap !important; gap: 8px !important; align-items: center; }
          .nav-btn { flex: 1 1 auto !important; width: auto !important; margin: 0 !important; padding: 8px 12px !important; justify-content: center !important; }
          .main-content { padding: 20px 12px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-2 { grid-template-columns: 1fr; }
          .analysis-top { flex-direction: column; align-items: center; text-align: center; }
        }
        
        .question-text { color: #0f172a; font-size: 17px; line-height: 1.7; margin-bottom: 28px; font-weight: 500; }
        .option-btn { text-align: left; padding: 14px 18px; border-radius: 12px; font-size: 14px; cursor: pointer; font-family: 'Sora', sans-serif; transition: all 0.15s; display: flex; align-items: center; gap: 12px; }
        
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
          .exam-header h2 { font-size: 14px !important; }
          .question-text { font-size: 15px; margin-bottom: 20px; }
          .option-btn { padding: 12px 14px; font-size: 13px; gap: 10px; }
          .option-btn span { width: 20px !important; height: 20px !important; font-size: 10px !important; }
        }

      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-logo" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36, paddingLeft: 8 }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#ffffff" }}>E</div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", letterSpacing: -0.5 }}>EAMCET <span style={{ color: "#2563eb" }}>Pro</span></span>
        </div>
        <nav className="nav-list">
          {navItems.map(item => (
            <button key={item.id} className="nav-btn" onClick={() => navigate(item.path)}
              style={{
                background: currentId === item.id ? "#e2e8f0" : "transparent",
                color: currentId === item.id ? "#3b82f6" : "#475569",
                borderLeft: currentId === item.id ? "2.5px solid #2563eb" : "2.5px solid transparent"
              }}>
              <span>{item.icon}</span> {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-profile" style={{ borderTop: "1px solid #e2e8f0", paddingTop: 16 }}>
          <div className="sidebar-profile-info" style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px", marginBottom: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "#ffffff" }}>
              {user?.name?.[0]?.toUpperCase()}
            </div>
            <div>
              <p style={{ margin: 0, color: "#0f172a", fontSize: 12, fontWeight: 600 }}>{user?.name}</p>
              <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Student</p>
            </div>
          </div>
          <button className="sidebar-logout" onClick={onLogout} style={{ width: "100%", padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 8, background: "transparent", color: "#64748b", fontSize: 12, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>Sign Out</button>
        </div>
      </div>

      {/* Main */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

// ─── Dashboard ─────────────────────────────────────────────────────────────────
// function Dashboard({ streak, accuracy, totalPapers, sessions, onStartPaper }) {
//   const today = getTodayStr();
//   const solvedToday = sessions.filter(s => s.date === today).length;
//   const todayPaper = PAPER_SETS[Math.floor(new Date().getDate() % PAPER_SETS.length)];

//   return (
//     <div>
//       <div style={{ marginBottom: 28 }}>
//         <h1 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: "#0f172a", letterSpacing: -0.5 }}>Welcome back! <span style={{display:"inline-block",verticalAlign:"middle"}}><Flame color="#f97316" size={26} /></span></h1>
//         <p style={{ margin: "6px 0 0", color: "#64748b", fontSize: 14 }}>Keep your streak alive — solve today's paper</p>
//       </div>

//       {/* Stats Row */}
//       <div className="grid-4" style={{ marginBottom: 28 }}>
//         <StatCard icon={<Flame size={28} color="#f97316" />} value={streak} label="Day Streak" accent="#f97316" />
//         <StatCard icon={<CheckCircle size={28} color="#10b981" />} value={`${accuracy}%`} label="Accuracy" accent="#10b981" />
//         <StatCard icon={<FileText size={28} color="#2563eb" />} value={totalPapers} label="Papers Done" accent="#2563eb" />
//         <StatCard icon={<Star size={28} color="#f59e0b" />} value={solvedToday} label="Today's Papers" accent="#f59e0b" />
//       </div>

//       {/* Streak Calendar */}
//       <div className="grid-2" style={{ marginBottom: 28 }}>
//         <StreakCalendar sessions={sessions} />
//         <SubjectProgress sessions={sessions} />
//       </div>

//       {/* Today's Paper */}
//       <div style={{ background: "linear-gradient(135deg, #e2e8f0, #f1f5f9)", border: "1px solid #64748b", borderRadius: 16, padding: 24, marginBottom: 24 }}>
//         <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//           <div>
//             <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
//               <span style={{ background: "#f97316", color: "#0f172a", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>TODAY'S CHALLENGE</span>
//               {solvedToday > 0 && <span style={{ background: "#10b981", color: "#0f172a", fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 20 }}>✓ COMPLETED</span>}
//             </div>
//             <h3 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 18, fontWeight: 700 }}>{todayPaper.label}</h3>
//             <p style={{ margin: 0, color: "#334155", fontSize: 13 }}>{todayPaper.questions} Questions • {todayPaper.duration} Minutes • {todayPaper.subjects.join(", ")}</p>
//           </div>
//           <button onClick={() => onStartPaper(todayPaper)}
//             style={{ padding: "12px 24px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", borderRadius: 12, color: "#0f172a", fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", whiteSpace: "nowrap" }}>
//             {solvedToday > 0 ? "Retake →" : "Start Now →"}
//           </button>
//         </div>
//       </div>

//       {/* Recent Activity */}
//       <div>
//         <h3 style={{ color: "#0f172a", fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Recent Activity</h3>
//         {sessions.length === 0
//           ? <p style={{ color: "#64748b", fontSize: 13 }}>No sessions yet. Start your first paper!</p>
//           : sessions.slice(-5).reverse().map((s, i) => (
//             <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "#ffffff", borderRadius: 10, marginBottom: 8, border: "1px solid #ffffff" }}>
//               <div>
//                 <p style={{ margin: 0, color: "#0f172a", fontSize: 13, fontWeight: 500 }}>{s.paperLabel || "Practice Paper"}</p>
//                 <p style={{ margin: 0, color: "#64748b", fontSize: 11 }}>{s.date}</p>
//               </div>
//               <div style={{ textAlign: "right" }}>
//                 <p style={{ margin: 0, color: s.correct / s.total >= 0.6 ? "#10b981" : "#f87171", fontSize: 14, fontWeight: 700 }}>{s.correct}/{s.total}</p>
//                 <p style={{ margin: 0, color: "#64748b", fontSize: 11 }}>{Math.round((s.correct / s.total) * 100)}%</p>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// function StatCard({ icon, value, label, accent }) {
//   return (
//     <div style={{ background: "#ffffff", border: `1px solid ${accent}22`, borderRadius: 14, padding: "20px 18px", position: "relative", overflow: "hidden" }}>
//       <div style={{ position: "absolute", top: -10, right: -10, width: 60, height: 60, borderRadius: "50%", background: `${accent}11` }} />
//       <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
//       <div style={{ fontSize: 28, fontWeight: 700, color: accent, fontFamily: "'Space Mono', monospace", letterSpacing: -1 }}>{value}</div>
//       <div style={{ fontSize: 12, color: "#64748b", marginTop: 2 }}>{label}</div>
//     </div>
//   );
// }

// function StreakCalendar({ sessions }) {
//   const dates = new Set(sessions.map(s => s.date));
//   const days = [];
//   for (let i = 41; i >= 0; i--) {
//     const d = new Date();
//     d.setDate(d.getDate() - i);
//     const str = d.toISOString().split("T")[0];
//     days.push({ str, active: dates.has(str), day: d.getDate() });
//   }

//   return (
//     <div style={{ background: "#ffffff", border: "1px solid #ffffff", borderRadius: 16, padding: 24, display: "flex", flexDirection: "column" }}>
//       <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
//         <Flame size={18} color="#3b82f6" />
//         <h4 style={{ margin: 0, color: "#0f172a", fontSize: 15, fontWeight: 600 }}>Streak Calendar</h4>
//       </div>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 6, flex: 1 }}>
//         {days.map((d, i) => (
//           <div key={i} title={d.str} style={{ width: "100%", aspectRatio: "1", borderRadius: 6, background: d.active ? "linear-gradient(135deg, #818cf8, #c084fc)" : "#ffffff", border: d.active ? "none" : "1px solid #ffffff", transition: "transform 0.2s, background 0.2s" }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
//         ))}
//       </div>
//       <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 16 }}>
//         <div style={{ width: 8, height: 8, borderRadius: 3, background: "linear-gradient(135deg, #818cf8, #c084fc)" }} />
//         <span style={{ color: "#64748b", fontSize: 11, fontWeight: 500 }}>Solved • Last 6 Weeks</span>
//       </div>
//     </div>
//   );
// }

// function SubjectProgress({ sessions }) {
//   const subjectScores = {};
//   sessions.forEach(s => {
//     if (s.subjectBreakdown) {
//       Object.entries(s.subjectBreakdown).forEach(([subj, data]) => {
//         if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
//         subjectScores[subj].correct += data.correct;
//         subjectScores[subj].total += data.total;
//       });
//     }
//   });

//   const subjects = ["Physics", "Chemistry", "Mathematics"];
//   const colors = { Physics: "#2563eb", Chemistry: "#10b981", Mathematics: "#f59e0b" };

//   return (
//     <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 20 }}>
//       <h4 style={{ margin: "0 0 16px", color: "#0f172a", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}><BarChart2 size={18} color="#2563eb" /> Subject Mastery</h4>
//       {subjects.map(subj => {
//         const data = subjectScores[subj];
//         const pct = data ? Math.round((data.correct / data.total) * 100) : 0;
//         return (
//           <div key={subj} style={{ marginBottom: 12 }}>
//             <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
//               <span style={{ color: "#334155", fontSize: 12 }}>{subj}</span>
//               <span style={{ color: colors[subj], fontSize: 12, fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{pct}%</span>
//             </div>
//             <div style={{ height: 6, background: "#e2e8f0", borderRadius: 3 }}>
//               <div style={{ height: "100%", width: `${pct}%`, background: colors[subj], borderRadius: 3, transition: "width 1s ease" }} />
//             </div>
//           </div>
//         );
//       })}
//       {!sessions.length && <p style={{ color: "#64748b", fontSize: 12, margin: 0 }}>Complete papers to see subject breakdown</p>}
//     </div>
//   );
// }
// ─── Dashboard ─────────────────────────────────────────────────────────────────
// Replace Dashboard, StatCard, StreakCalendar, SubjectProgress with this.
// No changes needed to Shell or any other component.

function Dashboard({ streak, accuracy, totalPapers, sessions, onStartPaper }) {
  const today = getTodayStr();
  const solvedToday = sessions.filter(s => s.date === today).length;
  const todayPaper = PAPER_SETS[Math.floor(new Date().getDate() % PAPER_SETS.length)];
  const bestScore = sessions.length
    ? Math.max(...sessions.map(s => Math.round((s.correct / s.total) * 100)))
    : 0;

  return (
    <div>
      <style>{`
        .dash-grid-mid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 860px) { .dash-grid-mid { grid-template-columns: 1fr; } }

        @keyframes dashFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .dash-fade { animation: dashFadeUp 0.36s ease both; }
        .dash-f1 { animation-delay: 0.03s; } .dash-f2 { animation-delay: 0.08s; }
        .dash-f3 { animation-delay: 0.12s; } .dash-f4 { animation-delay: 0.16s; }
        .dash-f5 { animation-delay: 0.20s; } .dash-f6 { animation-delay: 0.24s; }

        .stat-card-new {
          border-radius: 16px; padding: 18px 16px;
          position: relative; overflow: hidden;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .stat-card-new:hover { transform: translateY(-3px); box-shadow: 0 10px 28px #64748b; }

        .activity-row {
          display: flex; align-items: center; justify-content: space-between;
          padding: 11px 14px; border-radius: 11px; margin-bottom: 7px;
          border: 1px solid #ffffff;
          background: #ffffff;
          transition: background 0.15s, border-color 0.15s;
        }
        .activity-row:hover { background: #ffffff; border-color: #ffffff; }

        .today-card-btn {
          padding: 10px 20px;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          border: none; border-radius: 10px; color: #ffffff;
          box-shadow: 0 4px 12px rgba(37,99,235,0.25);
          font-size: 13px; font-weight: 700; cursor: pointer;
          font-family: 'Sora', sans-serif; white-space: nowrap;
          transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s;
          flex-shrink: 0;
        }
        .today-card-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(37,99,235,0.4); }

        /* ── Streak calendar ── */
        .sc-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          gap: 4px;
        }
        .sc-cell {
          aspect-ratio: 1;
          border-radius: 4px;
          position: relative;
          cursor: default;
          transition: transform 0.15s, filter 0.15s;
          display: flex; align-items: center; justify-content: center;
        }
        .sc-cell:hover { transform: scale(1.3); z-index: 3; filter: brightness(1.15); }
        .sc-cell svg { pointer-events: none; }
      `}</style>

      {/* ── Header ── */}
      <div className="dash-fade dash-f1" style={{ marginBottom: 22 }}>
        <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#0f172a", letterSpacing: -0.4, display: "flex", alignItems: "center", gap: 10 }}>
          Welcome back!
          <span style={{ display: "inline-flex", padding: "3px 10px", background: "#f1f5f9", border: "1px solid rgba(249,115,22,0.28)", borderRadius: 20, alignItems: "center", gap: 5 }}>
            <Flame size={13} color="#f97316" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#f97316", fontFamily: "'Space Mono',monospace" }}>{streak}</span>
          </span>
        </h1>
        <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: 12 }}>
          {solvedToday > 0
            ? `Great! You've solved ${solvedToday} paper${solvedToday > 1 ? "s" : ""} today. Keep it up!`
            : "Keep your streak alive — solve today's paper"}
        </p>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid-4 dash-fade dash-f2" style={{ marginBottom: 18 }}>
        <StatCard icon={<Flame size={20} color="#f97316" />} value={streak} label="Day Streak" accent="#f97316" sublabel={streak >= 3 ? "🔥 On fire!" : "Build it up"} />
        <StatCard icon={<CheckCircle size={20} color="#10b981" />} value={`${accuracy}%`} label="Accuracy" accent="#10b981" sublabel={accuracy >= 70 ? "Excellent" : accuracy >= 50 ? "Good" : "Needs work"} />
        <StatCard icon={<FileText size={20} color="#2563eb" />} value={totalPapers} label="Papers Done" accent="#2563eb" sublabel={`${solvedToday} today`} />
        <StatCard icon={<Star size={20} color="#f59e0b" />} value={`${bestScore}%`} label="Best Score" accent="#f59e0b" sublabel="All time high" />
      </div>

      {/* ── TODAY'S CHALLENGE — moved to top ── */}
      <div className="dash-fade dash-f3" style={{
        position: "relative", overflow: "hidden",
        background: "linear-gradient(135deg, rgba(99,102,241,0.13) 0%, #e2e8f0 100%)",
        border: "1px solid rgba(99,102,241,0.26)", borderRadius: 16,
        padding: "18px 20px", marginBottom: 18,
      }}>
        <div style={{ position: "absolute", top: -28, right: -28, width: 110, height: 110, borderRadius: "50%", background: "rgba(99,102,241,0.09)", pointerEvents: "none" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7, flexWrap: "wrap" }}>
              <span style={{ background: "#f97316", color: "#ffffff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: 0.7, textTransform: "uppercase" }}>Today's Challenge</span>
              {solvedToday > 0 && (
                <span style={{ background: "rgba(16,185,129,0.14)", border: "1px solid #64748b", color: "#10b981", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: 0.7, textTransform: "uppercase" }}>✓ Completed</span>
              )}
            </div>
            <h3 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>{todayPaper.label}</h3>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 3 }}>
                <FileText size={11} /> {todayPaper.questions} Questions
              </span>
              <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 3 }}>
                <Timer size={11} /> {todayPaper.duration} mins
              </span>
              <span style={{ color: "#64748b", fontSize: 11 }}>{todayPaper.subjects.join(" · ")}</span>
            </div>
          </div>
          <button className="today-card-btn" onClick={() => onStartPaper(todayPaper)}>
            {solvedToday > 0 ? "Retake →" : "Start Now →"}
          </button>
        </div>
      </div>

      {/* ── Streak Calendar + Subject Mastery ── */}
      <div className="dash-grid-mid dash-fade dash-f4" style={{ marginBottom: 18 }}>
        <StreakCalendar sessions={sessions} streak={streak} />
        <SubjectProgress sessions={sessions} />
      </div>

      {/* ── Recent Activity ── */}
      <div className="dash-fade dash-f5">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 style={{ margin: 0, color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Recent Activity</h3>
          {sessions.length > 0 && (
            <span style={{ color: "#64748b", fontSize: 11 }}>{sessions.length} session{sessions.length !== 1 ? "s" : ""} total</span>
          )}
        </div>

        {sessions.length === 0 ? (
          <div style={{ textAlign: "center", padding: "28px 16px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 13 }}>
            <div style={{ width: 40, height: 40, borderRadius: 11, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
              <FileText size={18} color="#2563eb" />
            </div>
            <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 3px" }}>No sessions yet</p>
            <p style={{ color: "rgba(37,99,235,0.1)", fontSize: 11, margin: 0 }}>Start your first paper to see activity here</p>
          </div>
        ) : (
          sessions.slice(-5).reverse().map((s, i) => {
            const pct = Math.round((s.correct / s.total) * 100);
            const good = pct >= 60;
            return (
              <div key={i} className="activity-row">
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 34, height: 34, borderRadius: 9, background: good ? "#f1f5f9" : "#f1f5f9", border: `1px solid ${good ? "rgba(16,185,129,0.22)" : "rgba(239,68,68,0.22)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {good ? <CheckCircle size={14} color="#10b981" /> : <Target size={14} color="#f87171" />}
                  </div>
                  <div>
                    <p style={{ margin: 0, color: "#0f172a", fontSize: 12, fontWeight: 600 }}>{s.paperLabel || "Practice Paper"}</p>
                    <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: 10 }}>{s.date}</p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  <div style={{ width: 52, height: 4, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${pct}%`, background: good ? "#10b981" : "#f87171", borderRadius: 3 }} />
                  </div>
                  <div style={{ textAlign: "right", minWidth: 44 }}>
                    <p style={{ margin: 0, color: good ? "#10b981" : "#f87171", fontSize: 13, fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{s.correct}/{s.total}</p>
                    <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>{pct}%</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

// ─── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({ icon, value, label, accent, sublabel }) {
  return (
    <div className="stat-card-new" style={{ background: "#ffffff", border: `1px solid ${accent}1e` }}>
      <div style={{ position: "absolute", top: -12, right: -12, width: 60, height: 60, borderRadius: "50%", background: `${accent}12`, pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", padding: "7px", borderRadius: 10, background: `${accent}14`, border: `1px solid ${accent}26`, marginBottom: 12 }}>
        {icon}
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 24, fontWeight: 700, color: accent, letterSpacing: -1, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, fontWeight: 500 }}>{label}</div>
      {sublabel && (
        <div style={{ fontSize: 9, color: `${accent}aa`, marginTop: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{sublabel}</div>
      )}
    </div>
  );
}

// ─── Streak Calendar ───────────────────────────────────────────────────────────
function StreakCalendar({ sessions, streak }) {
  const dates = new Set(sessions.map(s => s.date));

  // 5 weeks × 7 = 35 cells (smaller than before)
  const DAYS = 35;
  const cells = [];
  for (let i = DAYS - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const str = d.toISOString().split("T")[0];
    cells.push({
      str,
      active: dates.has(str),
      isToday: i === 0,
      label: d.toLocaleDateString("en", { weekday: "short", month: "short", day: "numeric" }),
    });
  }

  const activeDays = cells.filter(c => c.active).length;
  const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div style={{
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: 16,
      padding: "16px 16px 14px",
    }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f1f5f9", border: "1px solid rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={14} color="#3b82f6" />
          </div>
          <div>
            <h4 style={{ margin: 0, color: "#0f172a", fontSize: 13, fontWeight: 700 }}>Streak Calendar</h4>
            <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Last 5 weeks</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#f1f5f9", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 20, padding: "4px 10px" }}>
          <Flame size={11} color="#f97316" />
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, color: "#f97316" }}>{streak}</span>
          <span style={{ fontSize: 9, color: "#64748b", fontWeight: 600 }}>day</span>
        </div>
      </div>

      {/* Day-of-week labels */}
      <div className="sc-grid" style={{ marginBottom: 3 }}>
        {DAY_LABELS.map((d, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 8, fontWeight: 700, color: "rgba(37,99,235,0.1)", letterSpacing: 0.2, paddingBottom: 3 }}>
            {d}
          </div>
        ))}
      </div>

      {/* Cells */}
      <div className="sc-grid">
        {cells.map((cell, idx) => {
          // Style logic
          let bg = "#ffffff";
          let border = "1px solid #e2e8f0";
          let shadow = "none";
          let outline = "none";

          if (cell.active) {
            bg = "linear-gradient(135deg, #2563eb, #1d4ed8)";
            border = "1px solid transparent";
            shadow = "0 1px 3px rgba(0,0,0,0.05)";
          }
          if (cell.isToday && !cell.active) {
            bg = "#e2e8f0";
            border = "1px solid rgba(165,180,252,0.42)";
            outline = "2px solid rgba(165,180,252,0.18)";
          }
          if (cell.isToday && cell.active) {
            // today + solved — brighter ring
            shadow = "0 0 8px #475569";
            outline = "2px solid #64748b";
          }

          return (
            <div
              key={idx}
              className="sc-cell"
              title={`${cell.label}${cell.active ? " ✓ Solved" : ""}`}
              style={{ background: bg, border, boxShadow: shadow, outline, outlineOffset: "2px" }}
            >
              {/* Check icon on solved cells */}
              {cell.active && (
                <div style={{ color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Check size={12} strokeWidth={3} />
                </div>
              )}
              {/* Dot on today (unsolved) */}
              {cell.isToday && !cell.active && (
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#3b82f6" }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }} />
            <span style={{ color: "#64748b", fontSize: 9 }}>Solved</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: "#ffffff", border: "1px solid #64748b" }} />
            <span style={{ color: "#64748b", fontSize: 9 }}>Today</span>
          </div>
        </div>
        <span style={{ color: "#64748b", fontSize: 9 }}>
          <span style={{ color: "#3b82f6", fontWeight: 700 }}>{activeDays}</span> active
        </span>
      </div>
    </div>
  );
}

// ─── Subject Progress ──────────────────────────────────────────────────────────
function SubjectProgress({ sessions }) {
  const subjectScores = {};
  sessions.forEach(s => {
    if (s.subjectBreakdown) {
      Object.entries(s.subjectBreakdown).forEach(([subj, data]) => {
        if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
        subjectScores[subj].correct += data.correct;
        subjectScores[subj].total += data.total;
      });
    }
  });

  const subjects = [
    { name: "Physics", color: "#2563eb", icon: <Atom size={14} color="#2563eb" /> },
    { name: "Chemistry", color: "#10b981", icon: <FlaskConical size={14} color="#10b981" /> },
    { name: "Mathematics", color: "#f59e0b", icon: <Compass size={14} color="#f59e0b" /> },
  ];

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "16px 16px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f1f5f9", border: "1px solid rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BarChart2 size={14} color="#818cf8" />
        </div>
        <div>
          <h4 style={{ margin: 0, color: "#0f172a", fontSize: 13, fontWeight: 700 }}>Subject Mastery</h4>
          <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Performance per subject</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {subjects.map(({ name, color, icon }) => {
          const data = subjectScores[name];
          const pct = data ? Math.round((data.correct / data.total) * 100) : 0;
          const hasData = !!data;
          return (
            <div key={name}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13 }}>{icon}</span>
                  <span style={{ color: "#334155", fontSize: 12, fontWeight: 600 }}>{name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  {hasData && <span style={{ color: "#64748b", fontSize: 9 }}>{data.correct}/{data.total}</span>}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, color: hasData ? color : "rgba(37,99,235,0.15)", minWidth: 34, textAlign: "right" }}>
                    {hasData ? `${pct}%` : "—"}
                  </span>
                </div>
              </div>
              <div style={{ height: 6, background: "#ffffff", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${color}bb, ${color})`, borderRadius: 4, boxShadow: hasData ? `0 0 7px ${color}55` : "none", transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)" }} />
              </div>
            </div>
          );
        })}
      </div>

      {!sessions.length && (
        <p style={{ color: "#64748b", fontSize: 11, margin: "10px 0 0", textAlign: "center" }}>
          Complete papers to see subject breakdown
        </p>
      )}
    </div>
  );
}

// ─── Papers Page ───────────────────────────────────────────────────────────────
function PapersPage({ sessions, onStart }) {
  const [filter, setFilter] = useState("All");
  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020"];
  const solved = new Set(sessions.map(s => s.paperId));
  const filtered = filter === "All" ? PAPER_SETS : PAPER_SETS.filter(p => p.year === filter);

  return (
    <div>
      <h1 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Previous Year Papers</h1>
      <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 13 }}>Practice official TG EAMCET papers from past years</p>

      {/* Filter Pills */}
      <div style={{ display: "flex", gap: 7, marginBottom: 20, flexWrap: "wrap" }}>
        {years.map(y => (
          <button key={y} onClick={() => setFilter(y)}
            style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #f1f5f9", background: filter === y ? "#2563eb" : "transparent", color: filter === y ? "#ffffff" : "#64748b", fontSize: 12, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontWeight: 600, transition: "all 0.15s" }}>
            {y}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {filtered.map(paper => {
          const done = solved.has(paper.id);
          const paperSessions = sessions.filter(s => s.paperId === paper.id);
          const best = paperSessions.length ? Math.max(...paperSessions.map(s => Math.round((s.correct / s.total) * 100))) : null;

          return (
            <div key={paper.id} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, transition: "all 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 7, flexWrap: "wrap" }}>
                    <span style={{ background: "rgba(99,102,241,0.18)", color: "#3b82f6", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{paper.year}</span>
                    <span style={{ background: "#e2e8f0", color: "#64748b", fontSize: 9, padding: "2px 8px", borderRadius: 20 }}>{paper.shift}</span>
                    {done && <span style={{ background: "#e2e8f0", color: "#10b981", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>Done</span>}
                  </div>
                  <h3 style={{ margin: 0, color: "#0f172a", fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{paper.label}</h3>
                </div>
                {best !== null && (
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: best >= 60 ? "#10b981" : "#f87171", fontFamily: "'Space Mono',monospace" }}>{best}%</div>
                    <div style={{ fontSize: 9, color: "#64748b" }}>Best Score</div>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <FileText size={11} /> {paper.questions} Qs
                </span>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <Timer size={11} /> {paper.duration} min
                </span>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <BookOpen size={11} /> {paper.subjects.length} subjects
                </span>
              </div>

              <button onClick={() => onStart(paper)}
                style={{ width: "100%", padding: "10px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", borderRadius: 10, color: "#ffffff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s", boxShadow: "0 4px 12px rgba(37,99,235,0.2)" }}>
                {done ? "Retake Paper →" : "Start Paper →"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// // ─── Exam Page ─────────────────────────────────────────────────────────────────
// function ExamPage({ paper, onSubmit, onExit }) {
//   const year = paper.year;
//   const allQs = paper.subjects.flatMap(subj => (QUESTION_BANK[year]?.[subj] || []).map(q => ({ ...q, subject: subj })));
//   const [answers, setAnswers] = useState({});
//   const [current, setCurrent] = useState(0);
//   const [timeLeft, setTimeLeft] = useState(paper.duration * 60);
//   const [showConfirm, setShowConfirm] = useState(false);
//   const [flagged, setFlagged] = useState(new Set());
//   const timerRef = useRef();

//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setTimeLeft(t => {
//         if (t <= 1) { clearInterval(timerRef.current); handleSubmit(); return 0; }
//         return t - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, []);

//   const handleSubmit = () => {
//     clearInterval(timerRef.current);
//     let correct = 0;
//     const subjectBreakdown = {};
//     const questionResults = allQs.map(q => {
//       const subj = q.subject;
//       if (!subjectBreakdown[subj]) subjectBreakdown[subj] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
//       subjectBreakdown[subj].total++;
//       const userAns = answers[q.id];
//       const isCorrect = userAns === q.ans;
//       if (userAns === undefined) subjectBreakdown[subj].skipped++;
//       else if (isCorrect) { correct++; subjectBreakdown[subj].correct++; }
//       else subjectBreakdown[subj].wrong++;
//       return { ...q, userAnswer: userAns, isCorrect, subject: subj };
//     });

//     onSubmit({
//       correct, total: allQs.length, subjectBreakdown, questionResults,
//       timeTaken: paper.duration * 60 - timeLeft, paperLabel: paper.label,
//     });
//   };

//   const q = allQs[current];
//   const mins = Math.floor(timeLeft / 60);
//   const secs = timeLeft % 60;
//   const answered = Object.keys(answers).length;
//   const isLow = timeLeft < 600;

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif", display: "flex", flexDirection: "column" }}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');* { box-sizing: border-box; }`}</style>

//       {/* Header */}
//       <div className="exam-header" style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//         <div>
//           <h2 style={{ margin: 0, color: "#0f172a", fontSize: 16, fontWeight: 600 }}>{paper.label}</h2>
//           <p style={{ margin: 0, color: "#64748b", fontSize: 12 }}>{answered}/{allQs.length} answered</p>
//         </div>
//         <div className="exam-header-right" style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <div style={{ background: isLow ? "#e2e8f0" : "#e2e8f0", border: `1px solid ${isLow ? "#64748b" : "#64748b"}`, borderRadius: 10, padding: "8px 16px", textAlign: "center" }}>
//             <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 20, fontWeight: 700, color: isLow ? "#f87171" : "#3b82f6" }}>
//               {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
//             </div>
//           </div>
//           <button onClick={() => setShowConfirm(true)} style={{ padding: "8px 18px", background: "#e2e8f0", border: "1px solid #64748b", borderRadius: 8, color: "#f87171", fontSize: 13, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontWeight: 500 }}>Submit</button>
//         </div>
//       </div>

//       <div className="exam-layout">
//         {/* Question Panel */}
//         <div className="exam-main">
//           {/* Difficulty + Topic */}
//           <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
//             <span style={{ background: "#e2e8f0", color: "#3b82f6", fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{q?.topic}</span>
//             <span style={{ background: { Easy: "#e2e8f0", Medium: "#e2e8f0", Hard: "#e2e8f0" }[q?.difficulty], color: { Easy: "#10b981", Medium: "#f59e0b", Hard: "#f87171" }[q?.difficulty], fontSize: 11, padding: "3px 10px", borderRadius: 20, fontWeight: 600 }}>{q?.difficulty}</span>
//             <button onClick={() => setFlagged(f => { const n = new Set(f); n.has(q.id) ? n.delete(q.id) : n.add(q.id); return n; })}
//               style={{ marginLeft: "auto", background: flagged.has(q?.id) ? "#e2e8f0" : "transparent", border: `1px solid ${flagged.has(q?.id) ? "#64748b" : "#f1f5f9"}`, borderRadius: 8, color: flagged.has(q?.id) ? "#f59e0b" : "#64748b", fontSize: 12, padding: "4px 12px", cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
//               <Flag size={14} /> {flagged.has(q?.id) ? "Flagged" : "Flag"}
//             </button>
//           </div>

//           <div style={{ marginBottom: 8, color: "#64748b", fontSize: 13 }}>Question {current + 1} of {allQs.length}</div>
//           <p className="question-text">{q?.q}</p>

//           <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
//             {q?.options.map((opt, i) => {
//               const selected = answers[q.id] === i;
//               return (
//                 <button key={i} className="option-btn" onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}
//                   style={{ border: `1px solid ${selected ? "#2563eb" : "#e2e8f0"}`, background: selected ? "#e2e8f0" : "#ffffff", color: selected ? "#3b82f6" : "#334155", fontWeight: selected ? 600 : 400 }}>
//                   <span style={{ width: 24, height: 24, borderRadius: "50%", border: `2px solid ${selected ? "#2563eb" : "#e2e8f0"}`, background: selected ? "#2563eb" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, color: selected ? "#0f172a" : "#64748b" }}>
//                     {String.fromCharCode(65 + i)}
//                   </span>
//                   {opt}
//                 </button>
//               );
//             })}
//           </div>

//           <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
//             <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
//               style={{ padding: "10px 22px", border: "1px solid #f1f5f9", borderRadius: 10, background: "transparent", color: "#334155", cursor: current === 0 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13 }}>← Prev</button>
//             <button onClick={() => setCurrent(c => Math.min(allQs.length - 1, c + 1))} disabled={current === allQs.length - 1}
//               style={{ padding: "10px 22px", border: "none", borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#0f172a", cursor: current === allQs.length - 1 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600 }}>Next →</button>
//           </div>
//         </div>

//         {/* Question Grid Sidebar */}
//         <div className="exam-side">
//           <p style={{ color: "#334155", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 12 }}>Question Map</p>
//           {['Physics', 'Chemistry', 'Mathematics'].map(subj => {
//             const subjQs = allQs.map((q, i) => ({ ...q, globalIndex: i })).filter(q => q.subject === subj);
//             if (subjQs.length === 0) return null;
//             return (
//               <div key={subj} style={{ marginBottom: 16 }}>
//                 <div style={{ color: "#334155", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, letterSpacing: 0.5 }}>{subj}</div>
//                 <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
//                   {subjQs.map((q2) => {
//                     const i = q2.globalIndex;
//                     const done = answers[q2.id] !== undefined;
//                     const isCur = i === current;
//                     const isFlag = flagged.has(q2.id);
//                     return (
//                       <button key={i} onClick={() => setCurrent(i)}
//                         style={{ padding: "6px 0", borderRadius: 6, border: isCur ? "2px solid #2563eb" : "1px solid transparent", background: isFlag ? "#64748b" : done ? "#64748b" : "#e2e8f0", color: isCur ? "#3b82f6" : done ? "#c4b5fd" : "#64748b", fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',monospace", fontWeight: 700, transition: "all 0.15s" }}>
//                         {i + 1}
//                       </button>
//                     );
//                   })}
//                 </div>
//               </div>
//             );
//           })}
//           <div style={{ marginTop: 16, display: "flex", flexDirection: "column", gap: 6 }}>
//             {[["#64748b", "Answered"], ["#e2e8f0", "Not Answered"], ["#64748b", "Flagged"]].map(([bg, label]) => (
//               <div key={label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
//                 <div style={{ width: 12, height: 12, borderRadius: 3, background: bg }} />
//                 <span style={{ color: "#64748b", fontSize: 10 }}>{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {showConfirm && (
//         <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
//           <div style={{ background: "#13172a", border: "1px solid #f1f5f9", borderRadius: 18, padding: 32, width: 380, textAlign: "center" }}>
//             <h3 style={{ color: "#0f172a", margin: "0 0 8px" }}>Submit Paper?</h3>
//             <p style={{ color: "#334155", fontSize: 14, marginBottom: 24 }}>
//               Answered: {answered}/{allQs.length} • Unattempted: {allQs.length - answered}
//             </p>
//             <div style={{ display: "flex", gap: 12 }}>
//               <button onClick={() => setShowConfirm(false)} style={{ flex: 1, padding: 12, border: "1px solid #f1f5f9", borderRadius: 10, background: "transparent", color: "#0f172a", cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>Go Back</button>
//               <button onClick={handleSubmit} style={{ flex: 1, padding: 12, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", borderRadius: 10, color: "#0f172a", fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>Submit →</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// ─── Exam Page ─────────────────────────────────────────────────────────────────
function ExamPage({ paper, onSubmit, onExit }) {
  const year = paper.year;
  const allQs = paper.subjects.flatMap(subj =>
    (QUESTION_BANK[year]?.[subj] || []).map(q => ({ ...q, subject: subj }))
  );
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(paper.duration * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  const [flagged, setFlagged] = useState(new Set());
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); handleSubmit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    let correct = 0;
    const subjectBreakdown = {};
    const questionResults = allQs.map(q => {
      const subj = q.subject;
      if (!subjectBreakdown[subj]) subjectBreakdown[subj] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
      subjectBreakdown[subj].total++;
      const userAns = answers[q.id];
      const isCorrect = userAns === q.ans;
      if (userAns === undefined) subjectBreakdown[subj].skipped++;
      else if (isCorrect) { correct++; subjectBreakdown[subj].correct++; }
      else subjectBreakdown[subj].wrong++;
      return { ...q, userAnswer: userAns, isCorrect, subject: subj };
    });
    onSubmit({
      correct, total: allQs.length, subjectBreakdown, questionResults,
      timeTaken: paper.duration * 60 - timeLeft, paperLabel: paper.label,
    });
  };

  const q = allQs[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const answered = Object.keys(answers).length;
  const isLow = timeLeft < 600;
  const progress = Math.round((answered / allQs.length) * 100);

  const subjectColors = { Physics: "#2563eb", Chemistry: "#10b981", Mathematics: "#f59e0b", Biology: "#ec4899" };
  const diffColors = { Easy: { bg: "#f1f5f9", color: "#10b981" }, Medium: { bg: "#f1f5f9", color: "#f59e0b" }, Hard: { bg: "#f1f5f9", color: "#f87171" } };

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }

        .exam-layout { display: flex; flex: 1; overflow: hidden; }
        .exam-main   { flex: 1; padding: 36px 44px; overflow-y: auto; }
        .exam-side   { width: 272px; background: #ffffff; border-left: 1px solid #e2e8f0; padding: 24px 18px; overflow-y: auto; flex-shrink: 0; }

        .opt-btn {
          display: flex; align-items: flex-start; gap: 14px;
          width: 100%; text-align: left; padding: 16px 20px;
          border-radius: 14px; font-size: 14px; line-height: 1.55;
          cursor: pointer; font-family: 'Sora', sans-serif;
          transition: all 0.18s ease; border: 1.5px solid #e2e8f0;
          background: #ffffff; color: #334155;
        }
        .opt-btn:hover { border-color: rgba(99,102,241,0.45); background: #e2e8f0; color: #0f172a; transform: translateX(3px); }
        .opt-btn.selected { border-color: #2563eb; background: rgba(99,102,241,0.18); color: #0f172a; }

        .q-nav-btn {
          aspect-ratio: 1; border-radius: 8px; font-size: 11px; font-weight: 700;
          cursor: pointer; font-family: 'Space Mono', monospace;
          border: 1.5px solid transparent; transition: all 0.15s;
        }
        .q-nav-btn:hover { transform: scale(1.08); }

        .exam-progress-bar { height: 3px; background: #e2e8f0; }
        .exam-progress-fill { height: 100%; background: linear-gradient(90deg, #2563eb, #1d4ed8); border-radius: 99px; transition: width 0.4s ease; }

        @media (max-width: 900px) {
          .exam-layout { flex-direction: column; overflow-y: auto; overflow-x: hidden; }
          .exam-main   { padding: 20px 16px; overflow: visible; flex: none; }
          .exam-side   { width: 100%; border-left: none; border-top: 1px solid #e2e8f0; order: 2; flex: none; height: auto; }
        }
        @media (max-width: 600px) {
          .exam-main { padding: 16px 12px; }
          .opt-btn { font-size: 13px; padding: 13px 15px; gap: 10px; }
        }
      `}</style>

      {/* ── Top Header ── */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62, flexShrink: 0 }}>
        {/* Left: paper info */}
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PenTool size={16} color="#ffffff" />
          </div>
          <div>
            <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>{paper.label}</div>
            <div style={{ color: "#64748b", fontSize: 11, marginTop: 1 }}>
              {answered} of {allQs.length} answered
              {flagged.size > 0 && <span style={{ marginLeft: 8, color: "#f59e0b" }}>• {flagged.size} flagged</span>}
            </div>
          </div>
        </div>

        {/* Right: timer + submit */}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {/* Timer */}
          <div style={{
            display: "flex", alignItems: "center", gap: 10, padding: "8px 18px",
            borderRadius: 12, border: `1.5px solid ${isLow ? "#64748b" : "#64748b"}`,
            background: isLow ? "#e2e8f0" : "#e2e8f0",
          }}>
            <Timer size={15} color={isLow ? "#f87171" : "#3b82f6"} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 19, fontWeight: 700, color: isLow ? "#f87171" : "#3b82f6", letterSpacing: 1 }}>
              {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </span>
          </div>
          <button onClick={() => setShowConfirm(true)} style={{
            padding: "9px 20px", background: "linear-gradient(135deg,#2563eb,#1d4ed8)",
            border: "none", borderRadius: 10, color: "#ffffff", fontSize: 13, fontWeight: 600,
            cursor: "pointer", fontFamily: "'Sora',sans-serif", letterSpacing: 0.2, boxShadow: "0 4px 12px rgba(37,99,235,0.2)"
          }}>Submit Paper</button>
        </div>
      </div>

      {/* Progress bar */}
      <div className="exam-progress-bar">
        <div className="exam-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="exam-layout">
        {/* ── Question Panel ── */}
        <div className="exam-main">
          {/* Breadcrumb badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
            <span style={{ background: `${subjectColors[q?.subject] || "#2563eb"}18`, color: subjectColors[q?.subject] || "#3b82f6", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${subjectColors[q?.subject] || "#2563eb"}33`, letterSpacing: 0.3 }}>
              {q?.subject}
            </span>
            {q?.topic && (
              <span style={{ background: "#ffffff", color: "#334155", fontSize: 11, padding: "4px 12px", borderRadius: 20, border: "1px solid #e2e8f0" }}>
                {q.topic}
              </span>
            )}
            {q?.difficulty && (
              <span style={{ background: diffColors[q.difficulty]?.bg, color: diffColors[q.difficulty]?.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${diffColors[q.difficulty]?.color}33` }}>
                {q.difficulty}
              </span>
            )}
            <button onClick={() => setFlagged(f => { const n = new Set(f); n.has(q.id) ? n.delete(q.id) : n.add(q.id); return n; })}
              style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: flagged.has(q?.id) ? "#f1f5f9" : "transparent", border: `1.5px solid ${flagged.has(q?.id) ? "rgba(245,158,11,0.5)" : "#f1f5f9"}`, borderRadius: 8, color: flagged.has(q?.id) ? "#f59e0b" : "#64748b", fontSize: 12, fontWeight: 600, padding: "5px 13px", cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s" }}>
              <Flag size={13} /> {flagged.has(q?.id) ? "Flagged" : "Flag"}
            </button>
          </div>

          {/* Question number + text */}
          <div style={{ marginBottom: 6, color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8 }}>
            Question {current + 1} / {allQs.length}
          </div>
          <p style={{ color: "#0f172a", fontSize: 17, lineHeight: 1.75, fontWeight: 500, marginBottom: 30, marginTop: 0 }}>
            {q?.q}
          </p>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 36 }}>
            {q?.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              return (
                <button key={i} className={`opt-btn${selected ? " selected" : ""}`} onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}>
                  <span style={{
                    minWidth: 28, height: 28, borderRadius: "50%", flexShrink: 0, marginTop: 1,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 12, fontWeight: 700,
                    background: selected ? "#2563eb" : "#e2e8f0",
                    border: selected ? "none" : "1.5px solid #f1f5f9",
                    color: selected ? "#ffffff" : "#64748b",
                    transition: "all 0.18s",
                  }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {selected && <Check size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: 3 }} />}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
              style={{ padding: "10px 22px", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "transparent", color: current === 0 ? "#cbd5e1" : "#0f172a", cursor: current === 0 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.15s" }}>
              ← Prev
            </button>

            {/* Clear answer */}
            {answers[q?.id] !== undefined && (
              <button onClick={() => setAnswers(a => { const n = { ...a }; delete n[q.id]; return n; })}
                style={{ padding: "10px 18px", border: "1.5px solid rgba(239,68,68,0.25)", borderRadius: 10, background: "#e2e8f0", color: "#f87171", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                <X size={13} /> Clear
              </button>
            )}

            <div style={{ flex: 1 }} />

            {/* Skip */}
            <button onClick={() => setCurrent(c => Math.min(allQs.length - 1, c + 1))} disabled={current === allQs.length - 1}
              style={{ padding: "10px 18px", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "transparent", color: "#64748b", cursor: current === allQs.length - 1 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
              Skip <SkipForward size={13} />
            </button>

            <button onClick={() => setCurrent(c => Math.min(allQs.length - 1, c + 1))} disabled={current === allQs.length - 1}
              style={{ padding: "10px 26px", border: "none", borderRadius: 10, background: current === allQs.length - 1 ? "#64748b" : "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#ffffff", cursor: current === allQs.length - 1 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.15s", boxShadow: current === allQs.length - 1 ? "none" : "0 4px 12px rgba(37,99,235,0.2)" }}>
              Next →
            </button>
          </div>
        </div>

        {/* ── Right Sidebar: Question Map ── */}
        <div className="exam-side">
          {/* Mini stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
            {[
              { label: "Done", value: answered, color: "#818cf8" },
              { label: "Left", value: allQs.length - answered, color: "#64748b" },
              { label: "Flagged", value: flagged.size, color: "#f59e0b" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 18, fontWeight: 700, color }}>{value}</div>
                <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ color: "#64748b", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Question Map</p>

          {['Physics', 'Chemistry', 'Mathematics', 'Biology'].map(subj => {
            const subjQs = allQs.map((q2, i) => ({ ...q2, globalIndex: i })).filter(q2 => q2.subject === subj);
            if (subjQs.length === 0) return null;
            const subjColor = subjectColors[subj] || "#2563eb";
            return (
              <div key={subj} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: subjColor, flexShrink: 0 }} />
                  <span style={{ color: subjColor, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{subj}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(32px, 1fr))", gap: 6 }}>
                  {subjQs.map((q2) => {
                    const i = q2.globalIndex;
                    const done = answers[q2.id] !== undefined;
                    const isCur = i === current;
                    const isFlag = flagged.has(q2.id);
                    return (
                      <button key={i} onClick={() => setCurrent(i)} className="q-nav-btn"
                        style={{
                          background: isCur ? subjColor : isFlag ? "rgba(245,158,11,0.25)" : done ? `${subjColor}28` : "#ffffff",
                          border: isCur ? `2px solid ${subjColor}` : isFlag ? "1.5px solid #64748b" : done ? `1.5px solid ${subjColor}44` : "1.5px solid #e2e8f0",
                          color: isCur ? "#ffffff" : isFlag ? "#f59e0b" : done ? subjColor : "#64748b",
                          padding: "7px 0",
                        }}>
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div style={{ marginTop: 20, padding: "14px 12px", background: "#ffffff", borderRadius: 10, border: "1px solid #ffffff" }}>
            {[
              { bg: "#2563eb", label: "Current" },
              { bg: "rgba(99,102,241,0.28)", label: "Answered" },
              { bg: "rgba(245,158,11,0.25)", label: "Flagged" },
              { bg: "#ffffff", label: "Unattempted" },
            ].map(({ bg, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 12, height: 12, borderRadius: 4, background: bg, flexShrink: 0 }} />
                <span style={{ color: "#64748b", fontSize: 10 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Submit Confirm Modal ── */}
      {showConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.4)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "36px 32px", width: 400, textAlign: "center", boxShadow: "0 40px 80px rgba(0,0,0,0.15)" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "#f8faff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Zap size={24} color="#3b82f6" />
            </div>
            <h3 style={{ color: "#0f172a", margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Submit Paper?</h3>
            <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              You've answered <span style={{ color: "#3b82f6", fontWeight: 700 }}>{answered}</span> of <span style={{ color: "#0f172a", fontWeight: 700 }}>{allQs.length}</span> questions.
              {allQs.length - answered > 0 && <> <span style={{ color: "#f87171", fontWeight: 700 }}>{allQs.length - answered}</span> left unattempted.</>}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowConfirm(false)}
                style={{ flex: 1, padding: "12px 0", border: "1.5px solid #e2e8f0", borderRadius: 12, background: "#ffffff", color: "#475569", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 600, transition: "background 0.15s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f8faff"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#ffffff"}>
                Keep Going
              </button>
              <button onClick={handleSubmit}
                style={{ flex: 1, padding: "12px 0", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", borderRadius: 12, color: "#ffffff", fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 14, boxShadow: "0 8px 16px rgba(37,99,235,0.3)" }}>
                Submit Now →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Analysis Page ─────────────────────────────────────────────────────────────
// function AnalysisPage({ data, onBack }) {
//   const { correct, total, subjectBreakdown, questionResults, timeTaken, paperLabel } = data;
//   const pct = Math.round((correct / total) * 100);
//   const wrong = total - correct - (questionResults?.filter(q => q.userAnswer === undefined).length || 0);
//   const skipped = questionResults?.filter(q => q.userAnswer === undefined).length || 0;
//   const [tab, setTab] = useState("overview");

//   return (
//     <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif", padding: "32px 40px" }}>
//       <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');* { box-sizing: border-box; }`}</style>

//       <button onClick={onBack} style={{ background: "transparent", border: "1px solid #f1f5f9", borderRadius: 8, color: "#334155", padding: "8px 16px", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, marginBottom: 24 }}>← Back to Dashboard</button>

//       <div className="analysis-top" style={{ display: "flex", gap: 32, marginBottom: 32 }}>
//         <div>
//           <h1 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 26, fontWeight: 700 }}>Paper Analysis</h1>
//           <p style={{ margin: 0, color: "#64748b", fontSize: 14 }}>{paperLabel}</p>
//         </div>
//         {/* Score Ring */}
//         <div style={{ flexShrink: 0, position: "relative", width: 120, height: 120 }}>
//           <svg viewBox="0 0 120 120" width={120} height={120}>
//             <circle cx={60} cy={60} r={52} fill="none" stroke="#e2e8f0" strokeWidth={10} />
//             <circle cx={60} cy={60} r={52} fill="none" stroke={pct >= 60 ? "#10b981" : pct >= 40 ? "#f59e0b" : "#f87171"} strokeWidth={10}
//               strokeDasharray={`${2 * Math.PI * 52}`}
//               strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
//               strokeLinecap="round" transform="rotate(-90 60 60)" />
//           </svg>
//           <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
//             <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 24, fontWeight: 700, color: "#0f172a" }}>{pct}%</div>
//             <div style={{ fontSize: 10, color: "#64748b" }}>Score</div>
//           </div>
//         </div>
//       </div>

//       {/* Score Cards */}
//       <div className="grid-4" style={{ marginBottom: 28 }}>
//         {[
//           { v: correct, l: "Correct", c: "#10b981" },
//           { v: wrong, l: "Wrong", c: "#f87171" },
//           { v: skipped, l: "Skipped", c: "#f59e0b" },
//           { v: `${Math.floor(timeTaken / 60)}m`, l: "Time Taken", c: "#2563eb" },
//         ].map(({ v, l, c }) => (
//           <div key={l} style={{ background: "#ffffff", border: `1px solid ${c}22`, borderRadius: 12, padding: "16px 18px" }}>
//             <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 26, fontWeight: 700, color: c }}>{v}</div>
//             <div style={{ fontSize: 12, color: "#64748b", marginTop: 3 }}>{l}</div>
//           </div>
//         ))}
//       </div>

//       {/* Tabs */}
//       <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#ffffff", borderRadius: 10, padding: 4, width: "fit-content" }}>
//         {["overview", "questions", "topics"].map(t => (
//           <button key={t} onClick={() => setTab(t)}
//             style={{ padding: "8px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, background: tab === t ? "#2563eb" : "transparent", color: tab === t ? "#0f172a" : "#334155", textTransform: "capitalize" }}>
//             {t}
//           </button>
//         ))}
//       </div>

//       {tab === "overview" && (
//         <div>
//           <h3 style={{ color: "#0f172a", fontSize: 16, marginBottom: 16 }}>Subject-wise Breakdown</h3>
//           {Object.entries(subjectBreakdown || {}).map(([subj, d]) => {
//             const p = Math.round((d.correct / d.total) * 100);
//             return (
//               <div key={subj} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 12, padding: 18, marginBottom: 12 }}>
//                 <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
//                   <span style={{ color: "#0f172a", fontWeight: 600 }}>{subj}</span>
//                   <span style={{ color: p >= 60 ? "#10b981" : "#f87171", fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{p}%</span>
//                 </div>
//                 <div style={{ display: "flex", gap: 16, marginBottom: 10 }}>
//                   {[["<Check size={14} />", d.correct, "#10b981"], ["<X size={14} />", d.wrong, "#f87171"], ["<SkipForward size={14} />", d.skipped, "#f59e0b"]].map(([ic, val, c]) => (
//                     <span key={ic} style={{ color: "#334155", fontSize: 12 }}>{ic} <span style={{ color: c, fontWeight: 700 }}>{val}</span></span>
//                   ))}
//                 </div>
//                 <div style={{ height: 6, background: "#e2e8f0", borderRadius: 3 }}>
//                   <div style={{ height: "100%", width: `${p}%`, background: p >= 60 ? "#10b981" : "#f87171", borderRadius: 3 }} />
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}

//       {tab === "questions" && (
//         <div>
//           {(questionResults || []).map((q, i) => (
//             <div key={i} style={{ background: "#ffffff", border: `1px solid ${q.isCorrect ? "rgba(37,99,235,0.1)" : q.userAnswer === undefined ? "rgba(37,99,235,0.1)" : "rgba(37,99,235,0.1)"}`, borderRadius: 12, padding: 16, marginBottom: 10 }}>
//               <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
//                 <span style={{ color: "#475569", fontSize: 12 }}>Q{i + 1} • {q.topic}</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: q.isCorrect ? "#10b981" : q.userAnswer === undefined ? "#f59e0b" : "#f87171" }}>
//                   {q.isCorrect ? "✓ Correct" : q.userAnswer === undefined ? "Skipped" : "✗ Wrong"}
//                 </span>
//               </div>
//               <p style={{ color: "#0f172a", fontSize: 13, margin: "0 0 8px" }}>{q.q}</p>
//               <div style={{ display: "flex", gap: 12 }}>
//                 <span style={{ color: "#10b981", fontSize: 12 }}>✓ Correct: {q.options[q.ans]}</span>
//                 {!q.isCorrect && q.userAnswer !== undefined && (
//                   <span style={{ color: "#f87171", fontSize: 12 }}>✗ Your answer: {q.options[q.userAnswer]}</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {tab === "topics" && (
//         <div>
//           {(() => {
//             const topicMap = {};
//             (questionResults || []).forEach(q => {
//               if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0 };
//               topicMap[q.topic].total++;
//               if (q.isCorrect) topicMap[q.topic].correct++;
//             });
//             return Object.entries(topicMap).sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total)).map(([topic, d]) => {
//               const p = Math.round((d.correct / d.total) * 100);
//               return (
//                 <div key={topic} style={{ display: "flex", alignItems: "center", gap: 16, padding: "12px 16px", background: "#ffffff", borderRadius: 10, marginBottom: 8 }}>
//                   <div style={{ flex: 1 }}>
//                     <div style={{ color: "#0f172a", fontSize: 13, fontWeight: 500, marginBottom: 4 }}>{topic}</div>
//                     <div style={{ height: 4, background: "#e2e8f0", borderRadius: 2 }}>
//                       <div style={{ height: "100%", width: `${p}%`, background: p >= 60 ? "#10b981" : p >= 40 ? "#f59e0b" : "#f87171", borderRadius: 2 }} />
//                     </div>
//                   </div>
//                   <div style={{ textAlign: "right", flexShrink: 0 }}>
//                     <div style={{ color: p >= 60 ? "#10b981" : "#f87171", fontWeight: 700, fontFamily: "'Space Mono',monospace", fontSize: 15 }}>{p}%</div>
//                     <div style={{ color: "#64748b", fontSize: 10 }}>{d.correct}/{d.total}</div>
//                   </div>
//                 </div>
//               );
//             });
//           })()}
//         </div>
//       )}
//     </div>
//   );
// }


// ─── Analysis Page ─────────────────────────────────────────────────────────────
function AnalysisPage({ data, onBack }) {
  const { correct, total, subjectBreakdown, questionResults, timeTaken, paperLabel } = data;
  const pct = Math.round((correct / total) * 100);
  const wrong = total - correct - (questionResults?.filter(q => q.userAnswer === undefined).length || 0);
  const skipped = questionResults?.filter(q => q.userAnswer === undefined).length || 0;
  const [tab, setTab] = useState("overview");
  const [expandedQ, setExpandedQ] = useState(null);

  const scoreColor = pct >= 70 ? "#10b981" : pct >= 45 ? "#f59e0b" : "#f87171";
  const scoreLabel = pct >= 70 ? "Great Work!" : pct >= 45 ? "Good Effort" : "Keep Practicing";
  const subjectColors = { Physics: "#2563eb", Chemistry: "#10b981", Mathematics: "#f59e0b", Biology: "#ec4899" };

  const circumference = 2 * Math.PI * 54;

  // Build topic map for topics tab
  const topicMap = {};
  (questionResults || []).forEach(q => {
    if (!topicMap[q.topic]) topicMap[q.topic] = { correct: 0, total: 0, subject: q.subject };
    topicMap[q.topic].total++;
    if (q.isCorrect) topicMap[q.topic].correct++;
  });
  const topicEntries = Object.entries(topicMap).sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total));

  const tabs = [
    { id: "overview", label: "Overview", icon: <BarChart2 size={14} /> },
    { id: "questions", label: "Questions", icon: <FileText size={14} /> },
    { id: "topics", label: "Topics", icon: <Target size={14} /> },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }

        .an-wrap { width: 100%; margin: 0; padding: 36px 20px; }
        .an-hero  { display: grid; grid-template-columns: 1fr auto; gap: 32px; align-items: center; margin-bottom: 32px; }
        .an-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; margin-bottom: 28px; }
        .an-subj-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .an-topic-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }

        .an-stat-card {
          border-radius: 14px; padding: 18px 20px;
          border: 1px solid #e2e8f0;
          background: #ffffff;
          transition: transform 0.18s, border-color 0.18s;
        }
        .an-stat-card:hover { transform: translateY(-2px); border-color: #f1f5f9; }

        .an-subj-card {
          border-radius: 16px; padding: 20px 22px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          transition: transform 0.18s;
        }
        .an-subj-card:hover { transform: translateY(-2px); }

        .an-q-row {
          border-radius: 12px; padding: 16px 18px; margin-bottom: 8px;
          cursor: pointer; transition: all 0.18s;
          border: 1px solid #ffffff;
          background: #ffffff;
        }
        .an-q-row:hover { background: #ffffff; }

        .an-tab-pill {
          display: flex; align-items: center; gap: 6px;
          padding: 8px 18px; border-radius: 9px; border: none;
          cursor: pointer; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 600;
          transition: all 0.18s;
        }

        .score-ring-track { transition: stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .an-fade { animation: fadeUp 0.4s ease both; }
        .an-fade-1 { animation-delay: 0.05s; }
        .an-fade-2 { animation-delay: 0.1s; }
        .an-fade-3 { animation-delay: 0.15s; }
        .an-fade-4 { animation-delay: 0.2s; }

        @media (max-width: 768px) {
          .an-wrap  { padding: 20px 12px; }
          .an-hero  { grid-template-columns: 1fr; gap: 24px; }
          .an-ring  { display: flex; justify-content: center; }
          .an-stats { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .an-subj-grid  { grid-template-columns: 1fr; }
          .an-topic-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .an-stats { grid-template-columns: repeat(2, 1fr); }
          .an-tab-pill { padding: 7px 12px; font-size: 12px; }
        }
      `}</style>

      <div className="an-wrap">

        {/* ── Back Button ── */}
        <button onClick={onBack} style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "transparent", border: "1px solid #f1f5f9",
          borderRadius: 9, color: "#334155", padding: "8px 16px",
          cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13,
          marginBottom: 28, transition: "all 0.15s",
        }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#64748b"; e.currentTarget.style.color = "#0f172a"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.color = "#334155"; }}
        >
          ← Back to Dashboard
        </button>

        {/* ── Hero: Title + Score Ring ── */}
        <div className="an-hero an-fade">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <div style={{ width: 38, height: 38, borderRadius: 11, background: `linear-gradient(135deg, ${scoreColor}33, ${scoreColor}11)`, border: `1px solid ${scoreColor}44`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Trophy size={18} color={scoreColor} />
              </div>
              <span style={{ fontSize: 12, fontWeight: 700, color: scoreColor, textTransform: "uppercase", letterSpacing: 1 }}>{scoreLabel}</span>
            </div>
            <h1 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 28, fontWeight: 700, letterSpacing: -0.5, lineHeight: 1.2 }}>
              Paper Analysis
            </h1>
            <p style={{ margin: "0 0 14px", color: "#64748b", fontSize: 14 }}>{paperLabel}</p>

            {/* Quick pill summary */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <span style={{ background: "#f1f5f9", border: "1px solid rgba(16,185,129,0.25)", color: "#10b981", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>
                ✓ {correct} correct
              </span>
              <span style={{ background: "#f1f5f9", border: "1px solid rgba(239,68,68,0.25)", color: "#f87171", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>
                ✗ {wrong} wrong
              </span>
              {skipped > 0 && (
                <span style={{ background: "#f1f5f9", border: "1px solid rgba(245,158,11,0.25)", color: "#f59e0b", fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 20 }}>
                  ⊘ {skipped} skipped
                </span>
              )}
            </div>
          </div>

          {/* Score Ring */}
          <div className="an-ring" style={{ position: "relative", width: 148, height: 148, flexShrink: 0 }}>
            <svg viewBox="0 0 148 148" width={148} height={148} style={{ transform: "rotate(-90deg)" }}>
              {/* Track */}
              <circle cx={74} cy={74} r={54} fill="none" stroke="#ffffff" strokeWidth={12} />
              {/* Fill */}
              <circle cx={74} cy={74} r={54} fill="none"
                stroke={scoreColor} strokeWidth={12}
                strokeDasharray={circumference}
                strokeDashoffset={circumference * (1 - pct / 100)}
                strokeLinecap="round"
                className="score-ring-track"
                style={{ filter: `drop-shadow(0 0 8px ${scoreColor}88)` }}
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 30, fontWeight: 700, color: "#0f172a", lineHeight: 1 }}>{pct}%</div>
              <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, fontWeight: 600 }}>{correct}/{total}</div>
            </div>
          </div>
        </div>

        {/* ── Stat Cards ── */}
        <div className="an-stats">
          {[
            { v: correct, l: "Correct", c: "#10b981", icon: <CheckCircle size={18} color="#10b981" />, bg: "#e2e8f0" },
            { v: wrong, l: "Wrong", c: "#f87171", icon: <X size={18} color="#f87171" />, bg: "#e2e8f0" },
            { v: skipped, l: "Skipped", c: "#f59e0b", icon: <SkipForward size={18} color="#f59e0b" />, bg: "#e2e8f0" },
            { v: `${Math.floor(timeTaken / 60)}m ${timeTaken % 60}s`, l: "Time Taken", c: "#2563eb", icon: <Timer size={18} color="#2563eb" />, bg: "#e2e8f0" },
          ].map(({ v, l, c, icon, bg }, idx) => (
            <div key={l} className={`an-stat-card an-fade an-fade-${idx + 1}`} style={{ borderColor: `${c}22` }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ width: 34, height: 34, borderRadius: 10, background: bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {icon}
                </div>
                <div style={{ fontSize: 10, color: "#64748b", fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8 }}>{l}</div>
              </div>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 26, fontWeight: 700, color: c, letterSpacing: -1 }}>{v}</div>
            </div>
          ))}
        </div>

        {/* ── Tabs ── */}
        <div style={{ display: "flex", gap: 4, marginBottom: 24, background: "#ffffff", borderRadius: 12, padding: 4, width: "fit-content" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className="an-tab-pill"
              style={{ background: tab === t.id ? "#2563eb" : "transparent", color: tab === t.id ? "#ffffff" : "#64748b" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {/* ── Overview Tab ── */}
        {tab === "overview" && (
          <div>
            <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Subject Breakdown</div>
            <div className="an-subj-grid">
              {Object.entries(subjectBreakdown || {}).map(([subj, d]) => {
                const p = Math.round((d.correct / d.total) * 100);
                const sc = subjectColors[subj] || "#2563eb";
                return (
                  <div key={subj} className="an-subj-card" style={{ borderColor: `${sc}22` }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                        <div style={{ width: 10, height: 10, borderRadius: "50%", background: sc, boxShadow: `0 0 8px ${sc}88` }} />
                        <span style={{ color: "#0f172a", fontWeight: 700, fontSize: 15 }}>{subj}</span>
                      </div>
                      <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 22, fontWeight: 700, color: p >= 60 ? "#10b981" : p >= 40 ? "#f59e0b" : "#f87171" }}>{p}%</span>
                    </div>

                    {/* Mini stat row */}
                    <div style={{ display: "flex", gap: 8, marginBottom: 14 }}>
                      {[
                        { label: "Correct", val: d.correct, c: "#10b981" },
                        { label: "Wrong", val: d.wrong, c: "#f87171" },
                        { label: "Skipped", val: d.skipped, c: "#f59e0b" },
                      ].map(({ label, val, c }) => (
                        <div key={label} style={{ flex: 1, background: `${c}0f`, border: `1px solid ${c}22`, borderRadius: 8, padding: "7px 0", textAlign: "center" }}>
                          <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 16, fontWeight: 700, color: c }}>{val}</div>
                          <div style={{ fontSize: 9, color: "#64748b", marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Progress bar with segments */}
                    <div style={{ display: "flex", height: 8, borderRadius: 6, overflow: "hidden", gap: 2 }}>
                      <div style={{ width: `${(d.correct / d.total) * 100}%`, background: "#10b981", borderRadius: "6px 0 0 6px", transition: "width 1s ease" }} />
                      <div style={{ width: `${(d.wrong / d.total) * 100}%`, background: "#f87171" }} />
                      <div style={{ width: `${(d.skipped / d.total) * 100}%`, background: "#f59e0b", borderRadius: "0 6px 6px 0" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                      <span style={{ color: "#64748b", fontSize: 10 }}>{d.total} questions</span>
                      <span style={{ color: "#64748b", fontSize: 10 }}>{d.correct}/{d.total} correct</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Questions Tab ── */}
        {tab === "questions" && (
          <div>
            <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
              All {total} Questions
            </div>
            {(questionResults || []).map((q, i) => {
              const isOpen = expandedQ === i;
              const statusColor = q.isCorrect ? "#10b981" : q.userAnswer === undefined ? "#f59e0b" : "#f87171";
              const statusLabel = q.isCorrect ? "Correct" : q.userAnswer === undefined ? "Skipped" : "Wrong";
              const statusBg = q.isCorrect ? "#f1f5f9" : q.userAnswer === undefined ? "#f1f5f9" : "#f1f5f9";

              return (
                <div key={i} className="an-q-row"
                  style={{ borderColor: isOpen ? `${statusColor}33` : "#ffffff", background: isOpen ? `${statusColor}08` : "#ffffff" }}
                  onClick={() => setExpandedQ(isOpen ? null : i)}>

                  {/* Row header */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Q number */}
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: `${statusColor}18`, border: `1px solid ${statusColor}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, fontWeight: 700, color: statusColor }}>{i + 1}</span>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ margin: 0, color: "#334155", fontSize: 13, fontWeight: 500, lineHeight: 1.45, display: "-webkit-box", WebkitLineClamp: isOpen ? "unset" : 2, WebkitBoxOrient: "vertical", overflow: isOpen ? "visible" : "hidden" }}>
                        {q.q}
                      </p>
                      {q.topic && <span style={{ fontSize: 10, color: "#64748b", marginTop: 3, display: "inline-block" }}>{q.subject} • {q.topic}</span>}
                    </div>

                    {/* Status badge */}
                    <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
                      <span style={{ background: statusBg, border: `1px solid ${statusColor}33`, color: statusColor, fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 20 }}>{statusLabel}</span>
                      <span style={{ color: "#64748b", fontSize: 12 }}>{isOpen ? "▲" : "▼"}</span>
                    </div>
                  </div>

                  {/* Expanded answer detail */}
                  {isOpen && (
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid #e2e8f0" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {q.options.map((opt, oi) => {
                          const isCorrectOpt = oi === q.ans;
                          const isUserOpt = oi === q.userAnswer;
                          let bg = "#ffffff";
                          let border = "#e2e8f0";
                          let textColor = "#334155";
                          if (isCorrectOpt) { bg = "#f1f5f9"; border = "#64748b"; textColor = "#10b981"; }
                          else if (isUserOpt && !isCorrectOpt) { bg = "#f1f5f9"; border = "#64748b"; textColor = "#f87171"; }

                          return (
                            <div key={oi} style={{ display: "flex", alignItems: "center", gap: 10, padding: "9px 13px", borderRadius: 9, background: bg, border: `1px solid ${border}` }}>
                              <span style={{ width: 22, height: 22, borderRadius: "50%", background: isCorrectOpt ? "#10b981" : isUserOpt ? "#f87171" : "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: 700, color: isCorrectOpt || isUserOpt ? "#0f172a" : "#64748b", flexShrink: 0 }}>
                                {String.fromCharCode(65 + oi)}
                              </span>
                              <span style={{ fontSize: 13, color: textColor, flex: 1 }}>{opt}</span>
                              {isCorrectOpt && <Check size={14} color="#10b981" />}
                              {isUserOpt && !isCorrectOpt && <X size={14} color="#f87171" />}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ── Topics Tab ── */}
        {tab === "topics" && (
          <div>
            <div style={{ color: "#64748b", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>
              Performance by Topic — {topicEntries.length} topics
            </div>
            <div className="an-topic-grid">
              {topicEntries.map(([topic, d]) => {
                const p = Math.round((d.correct / d.total) * 100);
                const tc = p >= 60 ? "#10b981" : p >= 40 ? "#f59e0b" : "#f87171";
                const sc = subjectColors[d.subject] || "#2563eb";
                return (
                  <div key={topic} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 13, padding: "14px 16px", transition: "transform 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                    onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                      <div>
                        <div style={{ color: "#0f172a", fontSize: 13, fontWeight: 600, lineHeight: 1.3, marginBottom: 4 }}>{topic}</div>
                        <span style={{ background: `${sc}18`, color: sc, fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 20, border: `1px solid ${sc}55` }}>{d.subject}</span>
                      </div>
                      <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 10 }}>
                        <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 20, fontWeight: 700, color: tc, lineHeight: 1 }}>{p}%</div>
                        <div style={{ fontSize: 10, color: "#64748b", marginTop: 3 }}>{d.correct}/{d.total}</div>
                      </div>
                    </div>
                    <div style={{ height: 5, background: "#e2e8f0", borderRadius: 3 }}>
                      <div style={{ height: "100%", width: `${p}%`, background: tc, borderRadius: 3, transition: "width 0.8s cubic-bezier(0.4,0,0.2,1)", boxShadow: `0 0 6px ${tc}66` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

// ─── Progress Page ─────────────────────────────────────────────────────────────
// function ProgressPage({ sessions, streak, accuracy }) {
//   const weekly = [];
//   for (let i = 6; i >= 0; i--) {
//     const d = new Date();
//     d.setDate(d.getDate() - i);
//     const str = d.toISOString().split("T")[0];
//     const daySessions = sessions.filter(s => s.date === str);
//     const dayAcc = daySessions.length ? Math.round(daySessions.reduce((a, s) => a + (s.correct / s.total), 0) / daySessions.length * 100) : 0;
//     weekly.push({ day: d.toLocaleDateString("en", { weekday: "short" }), sessions: daySessions.length, accuracy: dayAcc });
//   }

//   return (
//     <div>
//       <h2 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 24, fontWeight: 700 }}>Your Progress</h2>
//       <p style={{ margin: "0 0 28px", color: "#64748b", fontSize: 14 }}>Track your improvement over time</p>

//       <div className="grid-3" style={{ marginBottom: 28 }}>
//         <StatCard icon={<Flame size={28} color="#f97316" />} value={streak} label="Current Streak" accent="#f97316" />
//         <StatCard icon={<CheckCircle size={28} color="#10b981" />} value={`${accuracy}%`} label="Overall Accuracy" accent="#10b981" />
//         <StatCard icon={<FileText size={28} color="#2563eb" />} value={sessions.length} label="Total Papers Solved" accent="#2563eb" />
//       </div>

//       {/* Weekly Bar Chart */}
//       <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24, marginBottom: 24 }}>
//         <h4 style={{ color: "#0f172a", margin: "0 0 20px", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><TrendingUp size={18} color="#10b981" /> This Week's Activity</h4>
//         <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 140 }}>
//           {weekly.map((d, i) => (
//             <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
//               <div style={{ fontSize: 11, color: "#64748b", fontFamily: "'Space Mono',monospace" }}>{d.sessions > 0 ? d.sessions : ""}</div>
//               <div style={{ width: "100%", background: d.sessions > 0 ? "linear-gradient(180deg,#2563eb,#1d4ed8)" : "#e2e8f0", borderRadius: "6px 6px 0 0", height: d.sessions > 0 ? `${Math.max(20, d.sessions * 50)}px` : "8px", transition: "height 0.5s ease" }} />
//               <div style={{ fontSize: 11, color: "#64748b" }}>{d.day}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Achievements */}
//       <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 24 }}>
//         <h4 style={{ color: "#0f172a", margin: "0 0 16px", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><Award size={18} color="#f59e0b" /> Achievements</h4>
//         <div className="grid-3">
//           {[
//             { icon: <Flame size={24} />, label: "7-Day Streak", unlocked: streak >= 7 },
//             { icon: <FileText size={24} />, label: "5 Papers Done", unlocked: sessions.length >= 5 },
//             { icon: <Target size={24} />, label: "80% Accuracy", unlocked: accuracy >= 80 },
//             { icon: <Zap size={24} />, label: "First Paper", unlocked: sessions.length >= 1 },
//             { icon: <Trophy size={24} />, label: "30-Day Streak", unlocked: streak >= 30 },
//             { icon: <Award size={24} />, label: "Perfect Score", unlocked: sessions.some(s => s.correct === s.total) },
//           ].map(({ icon, label, unlocked }) => (
//             <div key={label} style={{ padding: "14px", borderRadius: 12, border: `1px solid ${unlocked ? "#64748b" : "#e2e8f0"}`, background: unlocked ? "#f1f5f9" : "#ffffff", textAlign: "center", opacity: unlocked ? 1 : 0.4 }}>
//               <div style={{ fontSize: 24, marginBottom: 6 }}>{icon}</div>
//               <div style={{ color: unlocked ? "#3b82f6" : "#64748b", fontSize: 11, fontWeight: 600 }}>{label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── Removed duplicate LeaderboardPage ───────────────────────────────────────

// // ─── Syllabus Page ─────────────────────────────────────────────────────────────
// function SyllabusPage() {
//   const syllabus = {
//     Physics: ["Units & Measurements", "Kinematics", "Laws of Motion", "Work, Energy & Power", "Rotational Motion", "Gravitation", "Elasticity & Fluid Mechanics", "Thermal Properties", "Thermodynamics", "Kinetic Theory", "Oscillations", "Waves", "Electrostatics", "Current Electricity", "Magnetism", "EMI & AC", "Optics", "Modern Physics", "Semiconductor Devices"],
//     Chemistry: ["Atomic Structure", "Periodic Table", "Chemical Bonding", "States of Matter", "Thermodynamics", "Chemical Equilibrium", "Ionic Equilibrium", "Redox Reactions", "Surface Chemistry", "Metals & Non-metals", "P-Block Elements", "D & F Block", "Coordination Compounds", "Organic Chemistry Basics", "Hydrocarbons", "Haloalkanes", "Alcohols & Ethers", "Carbonyl Compounds", "Amines", "Biomolecules"],
//     Mathematics: ["Algebra", "Trigonometry", "Coordinate Geometry", "Vectors & 3D", "Calculus", "Differential Equations", "Probability & Statistics", "Matrices & Determinants", "Complex Numbers", "Sequences & Series", "Binomial Theorem", "Permutations & Combinations", "Logarithms", "Functions & Relations", "Limits & Continuity"],
//   };
//   const [open, setOpen] = useState("Physics");
//   const colors = { Physics: "#2563eb", Chemistry: "#10b981", Mathematics: "#f59e0b" };

//   return (
//     <div>
//       <h2 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 24, fontWeight: 700 }}>TG EMCET Syllabus</h2>
//       <p style={{ margin: "0 0 28px", color: "#64748b", fontSize: 14 }}>Official chapter-wise breakdown</p>

//       {Object.entries(syllabus).map(([subj, topics]) => (
//         <div key={subj} style={{ marginBottom: 16 }}>
//           <button onClick={() => setOpen(open === subj ? null : subj)}
//             style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", background: "#ffffff", border: `1px solid ${open === subj ? colors[subj] + "44" : "#e2e8f0"}`, borderRadius: open === subj ? "12px 12px 0 0" : 12, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
//             <span style={{ color: "#0f172a", fontWeight: 600, fontSize: 15 }}>{subj}</span>
//             <span style={{ color: "#64748b", fontSize: 13 }}>{topics.length} chapters {open === subj ? "▲" : "▼"}</span>
//           </button>
//           {open === subj && (
//             <div style={{ background: "#ffffff", border: `1px solid ${colors[subj]}22`, borderTop: "none", borderRadius: "0 0 12px 12px", padding: "12px 20px" }}>
//               <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
//                 {topics.map((t, i) => (
//                   <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "#ffffff", borderRadius: 8 }}>
//                     <div style={{ width: 6, height: 6, borderRadius: "50%", background: colors[subj], flexShrink: 0 }} />
//                     <span style={{ color: "#475569", fontSize: 12 }}>{t}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
//}

// ─── Progress Page ─────────────────────────────────────────────────────────────
// Replace the entire ProgressPage function in your App.jsx with the code below.
// No changes needed to Shell or any other component.

function ProgressPage({ sessions, streak, accuracy }) {
  // ── Weekly data (last 7 days) ──────────────────────────────────────────────
  const weekly = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const str = d.toISOString().split("T")[0];
    const daySessions = sessions.filter(s => s.date === str);
    const dayAcc = daySessions.length
      ? Math.round(daySessions.reduce((a, s) => a + (s.correct / s.total), 0) / daySessions.length * 100)
      : 0;
    weekly.push({
      day: d.toLocaleDateString("en", { weekday: "short" }),
      date: str,
      sessions: daySessions.length,
      accuracy: dayAcc,
      isToday: i === 0,
    });
  }
  const maxSessions = Math.max(...weekly.map(d => d.sessions), 1);

  // ── Subject breakdown ──────────────────────────────────────────────────────
  const subjectScores = {};
  sessions.forEach(s => {
    if (s.subjectBreakdown) {
      Object.entries(s.subjectBreakdown).forEach(([subj, data]) => {
        if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
        subjectScores[subj].correct += data.correct;
        subjectScores[subj].total += data.total;
      });
    }
  });
  const subjects = [
    { name: "Physics", color: "#2563eb", icon: <Atom size={14} color="#2563eb" /> },
    { name: "Chemistry", color: "#10b981", icon: <FlaskConical size={14} color="#10b981" /> },
    { name: "Mathematics", color: "#f59e0b", icon: <Compass size={14} color="#f59e0b" /> },
  ];

  // ── Derived stats ──────────────────────────────────────────────────────────
  const totalPapers = sessions.length;
  const bestScore = totalPapers ? Math.max(...sessions.map(s => Math.round((s.correct / s.total) * 100))) : 0;
  const avgScore = totalPapers ? Math.round(sessions.reduce((a, s) => a + (s.correct / s.total), 0) / totalPapers * 100) : 0;
  const thisWeekCount = weekly.reduce((a, d) => a + d.sessions, 0);

  // ── Achievements ───────────────────────────────────────────────────────────
  const achievements = [
    { icon: <Zap size={20} />, label: "First Paper", desc: "Complete 1 paper", unlocked: totalPapers >= 1, color: "#f59e0b" },
    { icon: <Flame size={20} />, label: "3-Day Streak", desc: "3 days in a row", unlocked: streak >= 3, color: "#f97316" },
    { icon: <FileText size={20} />, label: "5 Papers", desc: "Solve 5 papers", unlocked: totalPapers >= 5, color: "#2563eb" },
    { icon: <Target size={20} />, label: "80% Accuracy", desc: "Reach 80% accuracy", unlocked: accuracy >= 80, color: "#10b981" },
    { icon: <Flame size={20} />, label: "7-Day Streak", desc: "7 days in a row", unlocked: streak >= 7, color: "#f97316" },
    { icon: <Trophy size={20} />, label: "Perfect Score", desc: "Score 100% on a paper", unlocked: sessions.some(s => s.correct === s.total), color: "#3b82f6" },
    { icon: <Award size={20} />, label: "30-Day Streak", desc: "30 days in a row", unlocked: streak >= 30, color: "#ec4899" },
    { icon: <Star size={20} />, label: "Top Scorer", desc: "Score 90%+ on a paper", unlocked: bestScore >= 90, color: "#f59e0b" },
  ];
  const unlockedCount = achievements.filter(a => a.unlocked).length;

  return (
    <div>
      <style>{`
        /* ── Progress Page ─────────────────────────────────────── */
        @keyframes pgFadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .pg-fade   { animation: pgFadeUp 0.38s ease both; }
        .pg-f1 { animation-delay:0.04s; } .pg-f2 { animation-delay:0.09s; }
        .pg-f3 { animation-delay:0.13s; } .pg-f4 { animation-delay:0.17s; }
        .pg-f5 { animation-delay:0.21s; } .pg-f6 { animation-delay:0.25s; }

        .pg-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:22px; }
        .pg-mid-grid   { display:grid; grid-template-columns:1.7fr 1fr;    gap:18px; margin-bottom:22px; }
        .pg-ach-grid   { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }

        .pg-card {
          border-radius:16px; padding:20px;
          background:#ffffff;
          border:1px solid #e2e8f0;
        }
        .pg-stat-card {
          border-radius:16px; padding:18px 16px;
          background:#ffffff;
          position:relative; overflow:hidden;
          transition:transform 0.2s, box-shadow 0.2s;
        }
        .pg-stat-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px #64748b; }

        .pg-bar-col {
          flex:1; display:flex; flex-direction:column; align-items:center;
          gap:0; cursor:default; position:relative;
        }
        .pg-bar-col:hover .pg-bar-inner { filter:brightness(1.2); }
        .pg-bar-col:hover .pg-bar-tooltip { opacity:1; transform:translateY(0); pointer-events:none; }

        .pg-bar-tooltip {
          position:absolute; bottom:calc(100% + 6px); left:50%; transform:translateX(-50%) translateY(4px);
          background:#1e2236; border:1px solid #f1f5f9; border-radius:8px;
          padding:5px 10px; font-size:11px; color:#0f172a; white-space:nowrap;
          opacity:0; transition:opacity 0.18s, transform 0.18s;
          pointer-events:none; z-index:10;
        }

        .pg-ach-card {
          border-radius:14px; padding:16px 14px; text-align:center;
          transition:transform 0.18s, box-shadow 0.18s;
          position:relative; overflow:hidden;
        }
        .pg-ach-card.unlocked:hover { transform:translateY(-3px); box-shadow:0 8px 24px #64748b; }

        @media (max-width:900px) {
          .pg-stats-grid { grid-template-columns:repeat(2,1fr); }
          .pg-mid-grid   { grid-template-columns:1fr; }
          .pg-ach-grid   { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:480px) {
          .pg-stats-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
          .pg-ach-grid   { grid-template-columns:repeat(2,1fr); gap:8px; }
        }
      `}</style>

      {/* ── Page Header ── */}
      <div className="pg-fade pg-f1" style={{ marginBottom: 26 }}>
        <h1 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>Your Progress</h1>
        <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>
          {totalPapers > 0
            ? `${totalPapers} paper${totalPapers !== 1 ? "s" : ""} solved · ${unlockedCount}/${achievements.length} achievements unlocked`
            : "Start solving papers to track your progress"}
        </p>
      </div>

      {/* ── Top Stat Cards ── */}
      <div className="pg-stats-grid pg-fade pg-f2">
        {[
          { icon: <Flame size={20} color="#f97316" />, value: streak, label: "Day Streak", sub: streak >= 3 ? "🔥 On fire!" : "Build it up", accent: "#f97316" },
          { icon: <CheckCircle size={20} color="#10b981" />, value: `${accuracy}%`, label: "Avg Accuracy", sub: accuracy >= 70 ? "Excellent" : accuracy >= 50 ? "Keep going" : "Needs work", accent: "#10b981" },
          { icon: <FileText size={20} color="#2563eb" />, value: totalPapers, label: "Papers Solved", sub: `${thisWeekCount} this week`, accent: "#2563eb" },
          { icon: <Star size={20} color="#f59e0b" />, value: `${bestScore}%`, label: "Best Score", sub: "All time high", accent: "#f59e0b" },
        ].map(({ icon, value, label, sub, accent }) => (
          <div key={label} className="pg-stat-card" style={{ border: `1px solid ${accent}20` }}>
            <div style={{ position: "absolute", top: -16, right: -16, width: 70, height: 70, borderRadius: "50%", background: `${accent}12`, pointerEvents: "none" }} />
            <div style={{ display: "inline-flex", padding: "7px", borderRadius: 10, background: `${accent}14`, border: `1px solid ${accent}26`, marginBottom: 13 }}>
              {icon}
            </div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 26, fontWeight: 700, color: accent, letterSpacing: -1, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 12, color: "#334155", marginTop: 4, fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: 10, color: `${accent}aa`, marginTop: 5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* ── Bar Chart + Subject Breakdown ── */}
      <div className="pg-mid-grid pg-fade pg-f3">

        {/* Weekly Bar Chart */}
        <div className="pg-card">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(16,185,129,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={16} color="#10b981" />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Weekly Activity</div>
                <div style={{ color: "#64748b", fontSize: 11 }}>Papers solved per day</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 18, fontWeight: 700, color: "#10b981" }}>{thisWeekCount}</div>
              <div style={{ fontSize: 10, color: "#64748b" }}>this week</div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 130, paddingBottom: 2 }}>
            {weekly.map((d, i) => {
              const heightPct = d.sessions > 0 ? Math.max(18, (d.sessions / maxSessions) * 100) : 0;
              return (
                <div key={i} className="pg-bar-col">
                  {/* Tooltip */}
                  <div className="pg-bar-tooltip" style={{ left: "50%", transform: "translateX(-50%) translateY(4px)" }}>
                    {d.sessions} paper{d.sessions !== 1 ? "s" : ""}{d.accuracy > 0 ? ` · ${d.accuracy}% acc` : ""}
                  </div>

                  {/* Value label */}
                  <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'Space Mono',monospace", minHeight: 16, display: "flex", alignItems: "center", marginBottom: 4 }}>
                    {d.sessions > 0 ? d.sessions : ""}
                  </div>

                  {/* Bar track */}
                  <div style={{ width: "100%", flex: 1, display: "flex", alignItems: "flex-end", position: "relative" }}>
                    <div style={{ width: "100%", height: "100%", background: "#ffffff", borderRadius: 6, position: "absolute", bottom: 0 }} />
                    <div
                      className="pg-bar-inner"
                      style={{
                        width: "100%",
                        height: d.sessions > 0 ? `${heightPct}%` : "4px",
                        background: d.isToday
                          ? "linear-gradient(180deg,#10b981,#059669)"
                          : d.sessions > 0
                            ? "linear-gradient(180deg,#818cf8,#2563eb)"
                            : "#e2e8f0",
                        borderRadius: "6px 6px 0 0",
                        transition: "height 0.6s cubic-bezier(0.4,0,0.2,1)",
                        position: "relative",
                        boxShadow: d.sessions > 0 ? (d.isToday ? "0 0 10px #64748b" : "0 0 10px #64748b") : "none",
                      }}
                    />
                  </div>

                  {/* Day label */}
                  <div style={{ fontSize: 11, color: d.isToday ? "#3b82f6" : "#64748b", marginTop: 8, fontWeight: d.isToday ? 700 : 400 }}>
                    {d.day}
                  </div>
                  {d.isToday && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2563eb", marginTop: 2 }} />}
                </div>
              );
            })}
          </div>

          {/* Accuracy sparkline hint */}
          {sessions.length > 0 && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #ffffff", display: "flex", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg,#818cf8,#2563eb)" }} />
                <span style={{ fontSize: 10, color: "#64748b" }}>Past days</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg,#10b981,#059669)" }} />
                <span style={{ fontSize: 10, color: "#64748b" }}>Today</span>
              </div>
            </div>
          )}
        </div>

        {/* Subject Breakdown */}
        <div className="pg-card" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart2 size={16} color="#818cf8" />
            </div>
            <div>
              <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Subject Mastery</div>
              <div style={{ color: "#64748b", fontSize: 11 }}>Cumulative accuracy</div>
            </div>
          </div>

          {!sessions.length ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "20px 0" }}>
              <BarChart2 size={28} color="#f1f5f9" />
              <p style={{ color: "#64748b", fontSize: 12, margin: 0, textAlign: "center" }}>Complete papers to see subject breakdown</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
              {subjects.map(({ name, color, icon }) => {
                const data = subjectScores[name];
                const pct = data ? Math.round((data.correct / data.total) * 100) : 0;
                const has = !!data;
                return (
                  <div key={name}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15 }}>{icon}</span>
                        <span style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>{name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {has && <span style={{ color: "#64748b", fontSize: 10 }}>{data.correct}/{data.total}</span>}
                        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, fontWeight: 700, color: has ? color : "rgba(37,99,235,0.15)", minWidth: 38, textAlign: "right" }}>
                          {has ? `${pct}%` : "—"}
                        </span>
                      </div>
                    </div>
                    <div style={{ height: 8, background: "#ffffff", borderRadius: 6, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${color}bb,${color})`, borderRadius: 6, boxShadow: `0 0 8px ${color}55`, transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Session History ── */}
      {sessions.length > 0 && (
        <div className="pg-card pg-fade pg-f4" style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileText size={16} color="#818cf8" />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Recent Sessions</div>
                <div style={{ color: "#64748b", fontSize: 11 }}>Last {Math.min(sessions.length, 6)} papers</div>
              </div>
            </div>
            <span style={{ color: "#64748b", fontSize: 11 }}>{totalPapers} total</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sessions.slice(-6).reverse().map((s, i) => {
              const pct = Math.round((s.correct / s.total) * 100);
              const good = pct >= 60;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 11, transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#ffffff"}
                  onMouseLeave={e => e.currentTarget.style.background = "#ffffff"}>
                  {/* Score badge */}
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: good ? "#f1f5f9" : "#f1f5f9", border: `1px solid ${good ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, fontWeight: 700, color: good ? "#10b981" : "#f87171" }}>{pct}%</span>
                  </div>
                  {/* Info */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#0f172a", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.paperLabel || "Practice Paper"}</div>
                    <div style={{ color: "#64748b", fontSize: 11, marginTop: 2 }}>{s.date}</div>
                  </div>
                  {/* Mini bar + score */}
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <div style={{ width: 56, height: 5, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: good ? "#10b981" : "#f87171", borderRadius: 3 }} />
                    </div>
                    <div style={{ textAlign: "right", minWidth: 36 }}>
                      <div style={{ color: good ? "#10b981" : "#f87171", fontSize: 13, fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{s.correct}/{s.total}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Achievements ── */}
      <div className="pg-card pg-fade pg-f5">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(245,158,11,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Award size={16} color="#f59e0b" />
            </div>
            <div>
              <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Achievements</div>
              <div style={{ color: "#64748b", fontSize: 11 }}>{unlockedCount} of {achievements.length} unlocked</div>
            </div>
          </div>
          {/* Progress bar */}
          <div style={{ width: 80, height: 5, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(unlockedCount / achievements.length) * 100}%`, background: "linear-gradient(90deg,#f59e0b,#f97316)", borderRadius: 3 }} />
          </div>
        </div>

        <div className="pg-ach-grid">
          {achievements.map(({ icon, label, desc, unlocked, color }) => (
            <div key={label} className={`pg-ach-card ${unlocked ? "unlocked" : ""}`}
              style={{
                background: unlocked ? `${color}10` : "#ffffff",
                border: `1px solid ${unlocked ? `${color}30` : "#e2e8f0"}`,
                opacity: unlocked ? 1 : 0.45,
              }}>
              {/* Glow */}
              {unlocked && <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", width: 50, height: 50, borderRadius: "50%", background: `${color}20`, pointerEvents: "none" }} />}
              {/* Icon */}
              <div style={{ width: 40, height: 40, borderRadius: 11, background: unlocked ? `${color}18` : "#ffffff", border: `1px solid ${unlocked ? `${color}30` : "#e2e8f0"}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", color: unlocked ? color : "#64748b" }}>
                {icon}
              </div>
              <div style={{ color: unlocked ? "#0f172a" : "#64748b", fontSize: 12, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{label}</div>
              <div style={{ color: "#64748b", fontSize: 10, lineHeight: 1.4 }}>{desc}</div>
              {unlocked && (
                <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 4, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 20, padding: "2px 8px" }}>
                  <CheckCircle size={9} color={color} />
                  <span style={{ fontSize: 9, color, fontWeight: 700 }}>Unlocked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Leaderboard (Real Firebase) ──────────────────────────────────────────────
function LeaderboardPage({ user, streak, accuracy, sessions }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [tab, setTab] = useState("streak");
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (!window._firebaseDb) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setFetchError(null);

    try {
      const q = collection(window._firebaseDb, "leaderboard");
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRows(data);
        setLoading(false);
      }, (error) => {
        console.error("Leaderboard real-time fetch failed:", error);
        setFetchError(error.message || "Failed to load rankings");
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (e) {
      console.error("Leaderboard setup failed:", e);
      setFetchError(e.message || "Failed to setup rankings");
      setLoading(false);
    }
  }, []);
  // Always show the current user even before Firestore syncs
  const totalPapers = sessions.length;
  const hasMyRow = rows.some(r => r.uid === user?.uid);
  const allRows = totalPapers > 0 && !hasMyRow
    ? [...rows, { uid: user?.uid, name: user?.name, streak, accuracy, papers: totalPapers, lastActive: getTodayStr() }]
    : rows;

  // Sort client-side to avoid needing a Firestore composite index
  const sorted = [...allRows].sort((a, b) =>
    tab === "streak"
      ? (b.streak || 0) - (a.streak || 0) || (b.accuracy || 0) - (a.accuracy || 0)
      : (b.accuracy || 0) - (a.accuracy || 0) || (b.streak || 0) - (a.streak || 0)
  );

  const isFirebaseConnected = typeof window !== "undefined" && !!window._firebaseDb;
  // No emojis for medals, use numbers or icons below rank rendering logic.

  return (
    <div>
      <style>{`
        @keyframes lbRowIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        .lb-row { animation: lbRowIn 0.25s ease both; transition: background 0.15s; }
        .lb-row:hover { background: #ffffff !important; }
      `}</style>

      {/* Header row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
        <div>
          <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Leaderboard</h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Live rankings from all students</p>
        </div>
        <button onClick={() => setRefreshKey(k => k + 1)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 20, border: "1px solid #f1f5f9", background: "transparent", color: "#64748b", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s" }}>
          ↻ Refresh
        </button>
      </div>

      {/* Status badge */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, marginBottom: 18,
        background: isFirebaseConnected ? "#e2e8f0" : "#e2e8f0",
        border: `1px solid ${isFirebaseConnected ? "rgba(16,185,129,0.28)" : "rgba(245,158,11,0.28)"}`
      }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: isFirebaseConnected ? "#10b981" : "#f59e0b" }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: isFirebaseConnected ? "#10b981" : "#f59e0b" }}>
          {isFirebaseConnected ? "Live · Firebase connected" : "Preview mode"}
        </span>
      </div>

      {/* Sort tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: "#ffffff", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {[{ id: "streak", label: "Streak", icon: <Flame size={13} /> }, { id: "accuracy", label: "Accuracy", icon: <Target size={13} /> }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{
              padding: "7px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s",
              background: tab === t.id ? "#2563eb" : "transparent", color: tab === t.id ? "#ffffff" : "#64748b"
            }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Error state */}
      {fetchError && !loading && (
        <div style={{ background: "#e2e8f0", border: "1px solid rgba(239,68,68,0.22)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, color: "#fca5a5", fontSize: 12 }}>
          ⚠️ {fetchError} — check your Firestore security rules allow reads on the <code>leaderboard</code> collection.
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <div style={{ width: 34, height: 34, border: "3px solid rgba(37,99,235,0.1)", borderTop: "3px solid #2563eb", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.8s linear infinite" }} />
          <p style={{ color: "#64748b", fontSize: 13 }}>Fetching live rankings…</p>
        </div>
      ) : sorted.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 20px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 16 }}>
          <Trophy size={34} color="rgba(37,99,235,0.15)" />
          <p style={{ color: "#64748b", fontSize: 14, margin: "12px 0 4px" }}>No rankings yet</p>
          <p style={{ color: "rgba(37,99,235,0.1)", fontSize: 12, margin: 0 }}>Complete a paper to appear here!</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sorted.map((student, i) => {
            const isYou = student.uid === user?.uid;
            return (
              <div key={student.id || student.uid || i} className="lb-row"
                style={{
                  display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, animationDelay: `${i * 0.035}s`,
                  background: isYou ? "rgba(99,102,241,0.09)" : "#ffffff",
                  border: `1px solid ${isYou ? "rgba(99,102,241,0.33)" : "#e2e8f0"}`
                }}>

                {/* Rank */}
                <div style={{
                  width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: i < 3 ? "#ffffff" : "#64748b", fontFamily: "'Space Mono',monospace",
                  background: i === 0 ? "linear-gradient(135deg,#f59e0b,#ef4444)" : i === 1 ? "linear-gradient(135deg,#94a3b8,#64748b)" : i === 2 ? "linear-gradient(135deg,#cd7c2f,#92400e)" : "#e2e8f0",
                  border: i < 3 ? "2px solid #ffffff" : "1px solid transparent",
                  boxShadow: i < 3 ? "0 4px 10px rgba(0,0,0,0.15)" : "none",
                }}>
                  {i + 1}
                </div>

                {/* Name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: isYou ? "#3b82f6" : "#0f172a", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    {student.name || "Anonymous"}
                    {isYou && <span style={{ fontSize: 9, color: "#2563eb", background: "#e2e8f0", border: "1px solid rgba(99,102,241,0.28)", padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>YOU</span>}
                  </div>
                  <div style={{ color: "#64748b", fontSize: 11, marginTop: 2 }}>
                    Last active: {student.lastActive || "—"}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: 18, flexShrink: 0 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#f97316", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 3 }}>
                      {student.streak ?? 0}<Flame size={12} color="#f97316" />
                    </div>
                    <div style={{ color: "#64748b", fontSize: 9 }}>STREAK</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#10b981", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.accuracy ?? 0}%</div>
                    <div style={{ color: "#64748b", fontSize: 9 }}>SCORE</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#2563eb", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.papers ?? 0}</div>
                    <div style={{ color: "#64748b", fontSize: 9 }}>PAPERS</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && sorted.length > 0 && (
        <p style={{ color: "rgba(37,99,235,0.15)", fontSize: 11, textAlign: "center", marginTop: 16 }}>
          {sorted.length} student{sorted.length !== 1 ? "s" : ""} ranked · press Refresh for latest data
        </p>
      )}
    </div>
  );
}



// ─── Syllabus Page ─────────────────────────────────────────────────────────────
function SyllabusPage() {
  const [active, setActive] = useState("Physics");

  const syllabus = {
    Physics: {
      color: "#2563eb",
      icon: <Atom size={20} color="#2563eb" />,
      units: [
        { name: "Physical World and Measurement", topics: ["Units and dimensions", "Dimensional analysis", "Significant figures"] },
        { name: "Kinematics", topics: ["Motion in straight line", "Projectile motion", "Circular motion", "Relative velocity"] },
        { name: "Laws of Motion", topics: ["Newton's laws", "Friction", "Circular dynamics", "Work–Energy theorem"] },
        { name: "Work, Energy and Power", topics: ["Work by constant/variable force", "Kinetic & potential energy", "Conservation of energy", "Collisions"] },
        { name: "Rotational Motion", topics: ["Torque & angular momentum", "Moment of inertia", "Rolling motion"] },
        { name: "Gravitation", topics: ["Kepler's laws", "Universal gravitation", "Escape velocity", "Satellites"] },
        { name: "Properties of Matter", topics: ["Elasticity", "Viscosity", "Surface tension", "Fluid statics & dynamics"] },
        { name: "Thermodynamics", topics: ["Laws of thermodynamics", "Carnot engine", "Heat transfer", "Specific heat"] },
        { name: "Waves & Oscillations", topics: ["SHM", "Wave motion", "Sound waves", "Doppler effect"] },
        { name: "Electrostatics", topics: ["Coulomb's law", "Electric field", "Potential", "Capacitors"] },
        { name: "Current Electricity", topics: ["Ohm's law", "Kirchhoff's laws", "Wheatstone bridge", "RC circuits"] },
        { name: "Magnetism", topics: ["Biot-Savart law", "Ampere's law", "Magnetic force", "EMF & induction"] },
        { name: "Optics", topics: ["Reflection", "Refraction", "Lenses", "Wave optics", "Diffraction"] },
        { name: "Modern Physics", topics: ["Photoelectric effect", "Bohr model", "Radioactivity", "Nuclear reactions"] },
        { name: "Semiconductors", topics: ["p-n junction", "Transistors", "Logic gates", "Communication systems"] },
      ],
    },
    Chemistry: {
      color: "#10b981",
      icon: <FlaskConical size={20} color="#10b981" />,
      units: [
        { name: "Basic Concepts", topics: ["Mole concept", "Atomic mass", "Stoichiometry", "Limiting reagent"] },
        { name: "Atomic Structure", topics: ["Quantum numbers", "Orbitals", "Electronic configuration", "Periodic trends"] },
        { name: "Chemical Bonding", topics: ["Ionic, covalent & metallic bonds", "VSEPR", "Hybridisation", "Molecular orbital theory"] },
        { name: "States of Matter", topics: ["Ideal gas law", "Real gases", "Liquids & solids", "Colligative properties"] },
        { name: "Thermochemistry", topics: ["Enthalpy", "Hess's law", "Bond energies", "Gibb's free energy"] },
        { name: "Equilibrium", topics: ["Law of mass action", "Kp & Kc", "Le-Chatelier's principle", "Ionic equilibrium"] },
        { name: "Redox & Electrochemistry", topics: ["Oxidation states", "Galvanic cells", "Nernst equation", "Electrolysis"] },
        { name: "Chemical Kinetics", topics: ["Rate laws", "Order of reaction", "Arrhenius equation", "Catalysis"] },
        { name: "Coordination Chemistry", topics: ["IUPAC nomenclature", "Isomerism", "Crystal field theory", "Stability constants"] },
        { name: "Organic: Basics", topics: ["IUPAC naming", "Isomerism", "Inductive & mesomeric effects", "Reaction intermediates"] },
        { name: "Organic: Reactions", topics: ["Halogenation", "Alcohols/Ethers", "Aldehydes/Ketones", "Carboxylic acids"] },
        { name: "Aromatic Chemistry", topics: ["Benzene structure", "EAS", "Phenols", "Diazonium salts"] },
        { name: "Biomolecules & Polymers", topics: ["Carbohydrates", "Proteins", "Nucleic acids", "Synthetic polymers"] },
        { name: "s & p-Block Elements", topics: ["Alkali metals", "Halogens", "Noble gases", "Oxoacids"] },
        { name: "d & f-Block, Metallurgy", topics: ["Transition metals", "Lanthanides", "Extraction of metals"] },
      ],
    },
    Mathematics: {
      color: "#f59e0b",
      icon: <Compass size={20} color="#f59e0b" />,
      units: [
        { name: "Sets, Relations & Functions", topics: ["Types of sets", "Functions & inverse", "Composition", "Real-valued functions"] },
        { name: "Algebra: Complex Numbers", topics: ["Argand plane", "Modulus & argument", "De Moivre's theorem"] },
        { name: "Algebra: Matrices", topics: ["Types of matrices", "Determinants", "Inverse", "Linear equations (Cramer)"] },
        { name: "Quadratic Equations", topics: ["Nature of roots", "Sum/product of roots", "Inequalities"] },
        { name: "Progressions & Series", topics: ["AP, GP, HP", "Sum of series", "Binomial theorem"] },
        { name: "Permutations & Combinations", topics: ["Fundamental principle", "nPr, nCr", "Circular arrangements"] },
        { name: "Probability", topics: ["Classical definition", "Conditional probability", "Bayes' theorem", "Distributions"] },
        { name: "Trigonometry", topics: ["Ratios & identities", "Multiple angles", "Inverse trig", "Heights & distances"] },
        { name: "Coordinate: Straight Lines", topics: ["Forms of lines", "Angle bisectors", "Distance formula"] },
        { name: "Coordinate: Circles, Conics", topics: ["Circle equation", "Tangents", "Parabola", "Ellipse", "Hyperbola"] },
        { name: "3D Geometry", topics: ["Direction cosines", "Line in 3D", "Plane equations", "Distance"] },
        { name: "Vectors", topics: ["Dot & cross product", "Scalar triple product", "Applications"] },
        { name: "Differential Calculus", topics: ["Limits & continuity", "Differentiation", "Rolle's & MVT", "Maxima/Minima"] },
        { name: "Integral Calculus", topics: ["Indefinite integrals", "Definite integrals", "Area under curves"] },
        { name: "Differential Equations", topics: ["Order & degree", "Variable separable", "Linear DE", "Exact DE"] },
      ],
    },
  };

  const subjects = Object.keys(syllabus);
  const { color, icon, units } = syllabus[active];

  return (
    <div>
      <style>{`
        @keyframes sylFadeUp { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
        .syl-fade { animation: sylFadeUp 0.32s ease both; }
        .syl-unit-card { background:#ffffff; border:1px solid #e2e8f0; border-radius:14px; padding:16px; transition:border-color 0.15s, background 0.15s; }
        .syl-unit-card:hover { background:#ffffff; }
        .syl-topic-pill { display:inline-block; background:#ffffff; border:1px solid #e2e8f0; border-radius:20px; padding:3px 10px; font-size:11px; color:#334155; margin:3px 3px 0 0; }
        @media(max-width:700px){ .syl-grid { grid-template-columns:1fr !important; } }
      `}</style>

      {/* Header */}
      <div className="syl-fade" style={{ marginBottom: 22 }}>
        <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Syllabus</h1>
        <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Complete TG EAPCET chapter-by-chapter breakdown</p>
      </div>

      {/* Subject Tabs */}
      <div className="syl-fade" style={{ display: "flex", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
        {subjects.map(s => {
          const isActive = s === active;
          const c = syllabus[s].color;
          return (
            <button key={s} onClick={() => setActive(s)} style={{
              padding: "8px 18px", borderRadius: 22, border: `1px solid ${isActive ? c + "55" : "#ffffff"}`,
              background: isActive ? `${c}18` : "transparent",
              color: isActive ? c : "#64748b",
              fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif",
              transition: "all 0.15s", display: "flex", alignItems: "center", gap: 6,
            }}>
              {syllabus[s].icon} {s}
            </button>
          );
        })}
      </div>

      {/* Stats bar */}
      <div className="syl-fade" style={{ display: "flex", gap: 10, marginBottom: 18, background: `${color}10`, border: `1px solid ${color}28`, borderRadius: 12, padding: "10px 16px", alignItems: "center" }}>
        <span style={{ color, fontSize: 20 }}>{icon}</span>
        <div>
          <span style={{ color: "#0f172a", fontSize: 13, fontWeight: 700 }}>{active}</span>
          <span style={{ color: "#64748b", fontSize: 12, marginLeft: 8 }}>{units.length} units  •  {units.reduce((a, u) => a + u.topics.length, 0)} topics</span>
        </div>
      </div>

      {/* Units Grid */}
      <div className="syl-grid syl-fade" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
        {units.map((unit, i) => (
          <div key={i} className="syl-unit-card" style={{ animationDelay: `${i * 0.03}s` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              <div style={{ width: 26, height: 26, borderRadius: 7, background: `${color}18`, border: `1px solid ${color}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 10, fontWeight: 700, color }}>{String(i + 1).padStart(2, "0")}</span>
              </div>
              <span style={{ color: "#0f172a", fontSize: 13, fontWeight: 600, lineHeight: 1.3 }}>{unit.name}</span>
            </div>
            <div>
              {unit.topics.map((t, j) => (
                <span key={j} className="syl-topic-pill">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 404 Page ──────────────────────────────────────────────────────────────────
function NotFound() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", background: "#f8faff", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 20 }}>
      <SEO title="404 Not Found" description="The page you are looking for does not exist." />
      <div style={{ fontSize: "clamp(80px, 15vw, 120px)", fontWeight: 900, color: "rgba(37,99,235,0.08)", lineHeight: 1, marginBottom: 20 }}>404</div>
      <h1 style={{ fontSize: 28, fontWeight: 800, color: "#1e293b", marginBottom: 12 }}>Page Not Found</h1>
      <p style={{ color: "#64748b", maxWidth: 400, marginBottom: 32, lineHeight: 1.6 }}>
        The link might be broken, or the page may have been moved. Let's get you back on track.
      </p>
      <button 
        onClick={() => navigate("/dashboard")}
        style={{ 
          padding: "12px 28px", 
          background: "#2563eb", 
          color: "#ffffff", 
          borderRadius: 12, 
          border: "none", 
          fontWeight: 700, 
          cursor: "pointer", 
          boxShadow: "0 10px 15px -3px rgba(37,99,235,0.25)",
          fontFamily: "'Sora', sans-serif",
          transition: "transform 0.1s"
        }}
        onMouseDown={e => e.currentTarget.style.transform = "scale(0.97)"}
        onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
      >
        Back to Dashboard
      </button>
    </div>
  );
}
