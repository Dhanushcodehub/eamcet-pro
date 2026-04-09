import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";

// ── Lib ─────────────────────────────────────────────────────────────────────────
import { db } from "./lib/firebase.js";
import { getTodayStr, calcStreak, calcAccuracy, localSave, localLoad } from "./lib/utils.js";

// ── Components ───────────────────────────────────────────────────────────────────
import Shell from "./components/Shell.jsx";
import SEO from "./components/SEO.jsx";

// ── Pages ────────────────────────────────────────────────────────────────────────
import LandingPage from "./pages/LandingPage.jsx";
import AuthPopup from "./components/AuthPopup.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import PapersPage from "./pages/PapersPage.jsx";
import ExamPage from "./pages/ExamPage.jsx";
import AnalysisPage from "./pages/AnalysisPage.jsx";
import ProgressPage from "./pages/ProgressPage.jsx";
import LeaderboardPage from "./pages/LeaderboardPage.jsx";
import SyllabusPage from "./pages/SyllabusPage.jsx";
import FlashcardsPage from "./pages/FlashcardsPage.jsx";
import PredictorPage from "./pages/PredictorPage.jsx";
import VerifyPage from "./pages/VerifyPage.jsx";
import NotFound from "./pages/NotFound.jsx";

// ─── Root App ──────────────────────────────────────────────────────────────────
export default function App() {
  const navigate = useNavigate();
  const [user, setUser]               = useState(null);
  const [bootstrapping, setBootstrapping] = useState(true);
  const [activePaper, setActivePaper] = useState(null);
  const [analysisData, setAnalysisData] = useState(null);
  const [sessions, setSessions]       = useState([]);
  const [showAuthPopup, setShowAuthPopup] = useState(false);

  const handleRequireAuth = () => setShowAuthPopup(true);

  // ── Auth persistence listener ─────────────────────────────────────────────
  useEffect(() => {
    console.log("[App] onAuthStateChanged active. Path:", window.location.pathname);
    const unsubscribe = onAuthStateChanged(window._firebaseAuth, (firebaseUser) => {
      console.log("[App] onAuthStateChanged fired. User:", firebaseUser ? firebaseUser.email : "null");
      if (firebaseUser) {
        setUser({
          uid:   firebaseUser.uid,
          name:  firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "User",
          email: firebaseUser.email,
          emailVerified: firebaseUser.emailVerified,
        });

        const isPasswordProvider = firebaseUser.providerData?.some(p => p.providerId === 'password');
        const needsVerification = isPasswordProvider && !firebaseUser.emailVerified;

        if (window.location.pathname === "/" || window.location.pathname === "/login") {
          if (needsVerification) {
            console.log("[App] User needs verification. Staying on Auth/Login.");
            if (window.location.pathname !== "/login") navigate("/login");
          } else {
            console.log("[App] Logged in & verified, redirecting to /dashboard");
            navigate("/dashboard", { replace: true });
          }
        }
      } else {
        console.log("[App] No user found.");
        setUser(null);
        setSessions([]);
      }
      setBootstrapping(false);
    });
    return () => unsubscribe();
  }, [navigate]);

  // ── Load sessions (localStorage first, then Firestore) ───────────────────────
  useEffect(() => {
    if (!user) { setSessions([]); return; }

    const cached = localLoad(user.uid);
    if (cached.length > 0) setSessions(cached);

    db.get(`users/${user.uid}`)
      .then(d => {
        const remote = d?.sessions || [];
        if (remote.length > 0) {
          setSessions(prev => remote.length >= prev.length ? remote : prev);
          localSave(user.uid, remote.length >= cached.length ? remote : cached);
        }
      })
      .catch(() => {/* localStorage already displayed — nothing to do */});
  }, [user]);

  // ── Save session after exam ───────────────────────────────────────────────────
  const saveSession = async (rawSession) => {
    const session = JSON.parse(JSON.stringify(rawSession)); // strips undefined values
    let updated;
    setSessions(prev => { updated = [...prev, session]; return updated; });
    await Promise.resolve();
    localSave(user.uid, updated);

    try {
      await db.set(`users/${user.uid}`, { sessions: updated });
      await db.set(`leaderboard/${user.uid}`, {
        uid:        user.uid,
        name:       user.name,
        streak:     calcStreak(updated),
        accuracy:   calcAccuracy(updated),
        papers:     updated.length,
        lastActive: getTodayStr(),
        updatedAt:  Date.now(),
      });
    } catch (e) {
      console.error("Failed to save to Firestore:", e);
    }
  };

  const handleLogout = async () => {
    if (window._firebaseAuth) await signOut(window._firebaseAuth);
    setUser(null);
    navigate("/", { replace: true });
  };

  const streak     = calcStreak(sessions);
  const accuracy   = calcAccuracy(sessions);
  const totalPapers = sessions.length;

  // ── Bootstrapping spinner ─────────────────────────────────────────────────────
  if (bootstrapping) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8faff", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ width: 40, height: 40, border: "3px solid rgba(37,99,235,0.1)", borderTop: "3px solid #2563eb", borderRadius: "50%", animation: "spin 1s linear infinite" }} />
      </div>
    );
  }

  // ── Main App Render ─────────────────────────────────────────────────────────
  return (
    <>
      <AuthPopup 
        isOpen={showAuthPopup} 
        onClose={() => setShowAuthPopup(false)} 
        onLogin={() => {
          setShowAuthPopup(false);
          navigate("/login");
        }} 
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage user={user} onLogin={u => { setUser(u); navigate("/dashboard"); }} />} />
        <Route path="/verify" element={<VerifyPage onVerified={(u) => { setUser(u); navigate("/dashboard"); }} />} />
        
        {/* Shell-wrapped routes */}
        <Route path="/*" element={
          (user && !user.emailVerified) ? <Navigate to="/login" replace /> : (
            <Shell user={user} onLogout={handleLogout}>
            <Routes>
              <Route path="dashboard" element={<>
                <SEO title="Dashboard" description="Your EAMCET Pro dashboard. Track your streak, accuracy, and recent activity." path="/dashboard" />
                <Dashboard user={user} streak={streak} accuracy={accuracy} totalPapers={totalPapers} sessions={sessions} onStartPaper={p => { if(!user) { handleRequireAuth(); return; } setActivePaper(p); navigate("/exam"); }} onRequireAuth={handleRequireAuth} />
              </>} />

              <Route path="papers" element={<>
                <SEO title="Practice Papers" description="Access full-length EAMCET practice papers and mock tests." path="/papers" />
                <PapersPage sessions={sessions} onStart={p => { if(!user) { handleRequireAuth(); return; } setActivePaper(p); navigate("/exam"); }} />
              </>} />

              <Route path="progress" element={<>
                <SEO title="My Progress" description="Detailed analysis of your preparation progress and subject-wise accuracy." path="/progress" />
                <ProgressPage user={user} sessions={sessions} streak={streak} accuracy={accuracy} onRequireAuth={handleRequireAuth} />
              </>} />

              <Route path="flashcards" element={<>
                <SEO title="Flashcards" description="Study EAMCET concepts with smart flashcards for Physics, Chemistry, and Mathematics." path="/flashcards" />
                <FlashcardsPage />
              </>} />

              <Route path="leaderboard" element={<>
                <SEO title="Leaderboard" description="See where you stand among thousands of EAMCET aspirants." path="/leaderboard" />
                <LeaderboardPage user={user} streak={streak} accuracy={accuracy} sessions={sessions} />
              </>} />

              <Route path="syllabus" element={<>
                <SEO title="Syllabus" description="Complete EAMCET syllabus for Physics, Chemistry, Mathematics, and Biology." path="/syllabus" />
                <SyllabusPage />
              </>} />

              <Route path="predictor" element={<>
                <SEO title="College Predictor" description="EAMCET rank and college predictor tool based on normalized 2024 trends." path="/predictor" />
                <PredictorPage />
              </>} />

              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Shell>
          )
        } />

        {/* Full-screen exam route */}
        <Route path="/exam" element={
          activePaper && user ? (
            <ExamPage
              paper={activePaper}
              onSubmit={(result) => {
                saveSession({ ...result, date: getTodayStr(), paperId: activePaper.id, paperLabel: activePaper.label });
                setAnalysisData(result);
                navigate("/analysis");
              }}
              onExit={() => navigate("/dashboard")}
            />
          ) : <Navigate to="/dashboard" replace />
        } />

        {/* Full-screen analysis route */}
        <Route path="/analysis" element={
          analysisData && user ? (
            <AnalysisPage
              data={analysisData}
              onBack={() => { setActivePaper(null); setAnalysisData(null); navigate("/papers"); }}
            />
          ) : <Navigate to="/dashboard" replace />
        } />
      </Routes>
    </>
  );
}