import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import GlobalStyles from "../components/GlobalStyles";
import NotificationBar from "../components/NotificationBar";
import Field from "../components/Field";

function AuthPage({ user, onLogin }) {
  const [mode, setMode] = useState("login"); // "login" | "signup"
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Referral tracking
  useEffect(() => {
    // Track referral codes
    const urlParams = new URLSearchParams(window.location.search);
    const refCode = urlParams.get('ref');
    if (refCode) {
      sessionStorage.setItem('eamcet_referral_code', refCode);
      setReferralCode(refCode);
    } else {
      const stored = sessionStorage.getItem('eamcet_referral_code');
      if (stored) setReferralCode(stored);
    }
  }, []);

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
          onLogin({
            uid: cred.user.uid,
            name: cred.user.displayName || email.split("@")[0],
            email: cred.user.email,
          });
        } else {
          // Signup Flow
          if (referralCode.trim()) {
            sessionStorage.setItem('eamcet_referral_code', referralCode.trim());
          }
          cred = await createUserWithEmailAndPassword(window._firebaseAuth, email, pwd);
          await updateProfile(cred.user, { displayName: name });
          
          onLogin({
            uid: cred.user.uid,
            name: name || email.split("@")[0],
            email: cred.user.email,
          });
          setPwd("");
          setLoading(false);
          return;
        }
      } else {
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
          const cred = await signInWithPopup(window._firebaseAuth, provider);
          onLogin({
            uid: cred.user.uid,
            name: cred.user.displayName || cred.user.email?.split("@")[0] || "User",
            email: cred.user.email,
          });
        } catch (popupErr) {
          if (popupErr.code === "auth/popup-blocked" || popupErr.code === "auth/popup-closed-by-user") {
            setErr("Google pop-up was blocked or closed. Please allow pop-ups for this site or try again.");
          } else {
            throw popupErr;
          }
        }
      } else {
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
      setErr(errorMessages[e.code] || `Error [${e.code || 'unknown'}]: ${e.message || 'Google Sign-In failed. Please try again.'}`);
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <GlobalStyles />
      {/* Decorative circles */}
      <div className="auth-decorative" style={{ position: "absolute", top: "-100px", right: "-100px", width: 400, height: 400, borderRadius: "50%", border: "1.5px solid rgba(0, 21, 42, 0.05)", pointerEvents: "none" }} />
      <div className="auth-decorative" style={{ position: "absolute", bottom: "-150px", left: "-100px", width: 500, height: 500, borderRadius: "50%", border: "1.5px solid rgba(0, 21, 42, 0.05)", pointerEvents: "none" }} />

      <div className="auth-card" style={{ position: "relative", overflow: "hidden" }}>
        <>
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
                {mode === "signup" && (
                  <Field label="Referral Code (Optional)" value={referralCode} onChange={setReferralCode} placeholder="EAMCET-XXXXXX" />
                )}
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
          </>
      </div>
    </div>
  );
}

export default AuthPage;
