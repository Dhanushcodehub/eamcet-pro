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
import PricingPage from "./pages/PricingPage.jsx";
import ReferPage from "./pages/ReferPage.jsx";
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
  const [plan, setPlan]               = useState('free'); // 'free' | 'pro' | 'annual'

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
        });

        if (window.location.pathname === "/" || window.location.pathname === "/login") {
          console.log("[App] Logged in, redirecting to /dashboard");
          navigate("/dashboard", { replace: true });
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

  // ── Load sessions + plan (localStorage first, then Firestore) ───────────────
  useEffect(() => {
    if (!user) { setSessions([]); setPlan('free'); return; }

    const cached = localLoad(user.uid);
    if (cached.length > 0) setSessions(cached);

    db.get(`users/${user.uid}`)
      .then(d => {
        const remote = d?.sessions || [];
        if (remote.length > 0) {
          setSessions(prev => remote.length >= prev.length ? remote : prev);
          localSave(user.uid, remote.length >= cached.length ? remote : cached);
        }
        // Load saved subscription plan and check expiration
        if (d?.plan && d.plan !== 'free') {
          const now = Date.now();
          const pUpdate = d.planUpdatedAt || now;
          // Calculate a fallback expiration if missing: 30 days for pro, 365 for annual
          let pExpires = d.planExpiresAt;
          if (!pExpires) {
            pExpires = pUpdate + (d.plan === 'annual' ? 365 : 30) * 86400000;
          }

          if (now > pExpires) {
            console.log(`[Subscription] Plan ${d.plan} expired. Reverting to free.`);
            db.update(`users/${user.uid}`, { plan: 'free' });
            setPlan('free');
          } else {
            setPlan(d.plan);
          }
        }
        
        // Track unique referral if they just signed up using a URL
        if (!d?.referredBy) {
          const refCode = sessionStorage.getItem('eamcet_referral_code');
          const myCode = `EAMCET-${user.uid.slice(0, 8).toUpperCase()}`;
          console.log(`[Referral Process] URL Code: ${refCode} | My Code: ${myCode}`);
          
          if (refCode) {
            if (refCode === myCode) {
              console.log("[Referral Process] Blocked self-referral.");
            } else {
              Promise.all([
                db.update(`users/${user.uid}`, { 
                  referredBy: refCode, 
                  referralCredited: false,
                  joinedAt: Date.now()
                }),
                db.update(`leaderboard/${user.uid}`, {
                  referredBy: refCode
                })
              ]).then(() => console.log(`[Referral Process] Successfully linked referrer: ${refCode}`));
            }
            sessionStorage.removeItem('eamcet_referral_code');
          }
        } else {
          console.log(`[Referral Process] Already referred by: ${d.referredBy}`);
        }
      })
      .catch(() => {/* localStorage already displayed */});
  }, [user]);

  // ── Save plan to Firestore after successful payment ──────────────────────
  const updatePlan = async (newPlan) => {
    let expiresAt = null;
    const now = Date.now();
    if (newPlan === 'pro') {
      expiresAt = now + 30 * 24 * 60 * 60 * 1000; // 30 days
    } else if (newPlan === 'annual') {
      expiresAt = now + 365 * 24 * 60 * 60 * 1000; // 365 days
    }
    
    setPlan(newPlan);
    if (user) {
      try {
        await db.update(`users/${user.uid}`, { 
          plan: newPlan, 
          planUpdatedAt: now,
          ...(expiresAt && { planExpiresAt: expiresAt })
        });
      } catch (e) {
        console.error('Failed to save plan:', e);
      }
    }
  };

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
        <Route path="/login" element={<>
          <SEO title="Sign In" description="Securely log in to your EAMCET Pro account to access mock tests and analytics." path="/login" />
          <AuthPage user={user} onLogin={u => { setUser(u); navigate("/dashboard"); }} />
        </>} />
        <Route path="/verify" element={<>
          <SEO title="Verify Email" description="Confirm your email address to activate your EAMCET Pro account." path="/verify" />
          <VerifyPage onVerified={(u) => { setUser(u); navigate("/dashboard"); }} />
        </>} />
        <Route path="/pricing" element={<PricingPage user={user} plan={plan} onUpgrade={updatePlan} />} />
        <Route path="/refer" element={<ReferPage user={user} plan={plan} />} />
        
        {/* Shell-wrapped routes */}
        <Route path="/*" element={
          <Shell user={user} plan={plan} onLogout={handleLogout}>
            <Routes>
              <Route path="dashboard" element={<>
                <SEO title="Dashboard" description="Your EAMCET Pro dashboard." path="/dashboard" />
                <Dashboard user={user} plan={plan} streak={streak} accuracy={accuracy} totalPapers={totalPapers} sessions={sessions} onStartPaper={p => { if(!user) { handleRequireAuth(); return; } setActivePaper(p); navigate("/exam"); }} onRequireAuth={handleRequireAuth} />
              </>} />

              <Route path="papers" element={<>
                <SEO title="Practice Papers" description="Access full-length EAMCET practice papers and mock tests." path="/papers" />
                <PapersPage plan={plan} sessions={sessions} onStart={p => { if(!user) { handleRequireAuth(); return; } setActivePaper(p); navigate("/exam"); }} onUpgrade={() => navigate('/pricing')} />
              </>} />

              <Route path="progress" element={<>
                <SEO title="My Progress" description="Detailed analysis of your preparation progress." path="/progress" />
                <ProgressPage user={user} plan={plan} sessions={sessions} streak={streak} accuracy={accuracy} onRequireAuth={handleRequireAuth} onUpgrade={() => navigate('/pricing')} />
              </>} />

              <Route path="flashcards" element={<>
                <SEO title="Flashcards" description="Study EAMCET concepts with smart flashcards." path="/flashcards" />
                <FlashcardsPage plan={plan} onUpgrade={() => navigate('/pricing')} />
              </>} />

              <Route path="leaderboard" element={<>
                <SEO title="Leaderboard" description="See where you stand among thousands of EAMCET aspirants." path="/leaderboard" />
                <LeaderboardPage user={user} plan={plan} streak={streak} accuracy={accuracy} sessions={sessions} onUpgrade={() => navigate('/pricing')} />
              </>} />

              <Route path="syllabus" element={<>
                <SEO title="Syllabus" description="Complete EAMCET syllabus for Physics, Chemistry, Mathematics, and Biology." path="/syllabus" />
                <SyllabusPage />
              </>} />

              <Route path="predictor" element={<>
                <SEO title="College Predictor" description="EAMCET rank and college predictor tool based on 2024 data." path="/predictor" />
                <PredictorPage plan={plan} onUpgrade={() => navigate('/pricing')} />
              </>} />

              <Route path="pricing" element={<>
                <SEO title="Pricing" description="EAMCET Pro plans — Free, Pro at ₹199/month, and Annual." path="/pricing" />
                <PricingPage user={user} plan={plan} onUpgrade={updatePlan} />
              </>} />

              <Route path="refer" element={<>
                <SEO title="Refer & Earn" description="Refer friends to EAMCET Pro and earn free Pro access." path="/refer" />
                <ReferPage user={user} plan={plan} />
              </>} />

              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Shell>
        } />

        {/* Full-screen exam route */}
        <Route path="/exam" element={
          activePaper && user ? (<>
            <SEO title={`Exam: ${activePaper.label}`} description={`Attempt the ${activePaper.label} mock test on EAMCET Pro.`} path="/exam" />
            <ExamPage
              paper={activePaper}
              onSubmit={(result) => {
                saveSession({ ...result, date: getTodayStr(), paperId: activePaper.id, paperLabel: activePaper.label });
                setAnalysisData(result);
                navigate("/analysis");
              }}
              onExit={() => navigate("/dashboard")}
            />
          </>) : <Navigate to="/dashboard" replace />
        } />

        {/* Full-screen analysis route */}
        <Route path="/analysis" element={
          analysisData && user ? (<>
            <SEO title="Performance Analysis" description="Detailed breakdown of your recent EAMCET mock test performance." path="/analysis" />
            <AnalysisPage
              data={analysisData}
              plan={plan}
              onUpgrade={() => navigate('/pricing')}
              onBack={() => { setActivePaper(null); setAnalysisData(null); navigate("/papers"); }}
            />
          </>) : <Navigate to="/dashboard" replace />
        } />
      </Routes>
    </>
  );
}