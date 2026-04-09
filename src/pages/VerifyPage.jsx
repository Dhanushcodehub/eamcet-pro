import { useEffect, useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { applyActionCode } from "firebase/auth";
import { CheckCircle2, XCircle, Loader2, ArrowRight } from "lucide-react";
import GlobalStyles from "../components/GlobalStyles";

export default function VerifyPage({ onVerified }) {
  const [params] = useSearchParams();
  const oobCode = params.get("oobCode");
  const mode = params.get("mode");
  const navigate = useNavigate();

  const [status, setStatus] = useState("verifying"); // verifying, success, error
  const [errMsg, setErrMsg] = useState("");
  const [countdown, setCountdown] = useState(5);
  const attemptRef = useRef(false);

  useEffect(() => {
    if (attemptRef.current) return;
    attemptRef.current = true;
    if (mode !== "verifyEmail" || !oobCode) {
      setStatus("error");
      setErrMsg("Invalid verification link. Please check your email and try again.");
      return;
    }

    if (!window._firebaseAuth) {
        setTimeout(() => setStatus("error"), 1000);
        return;
    }

    applyActionCode(window._firebaseAuth, oobCode)
      .then(async () => {
        const currentUser = window._firebaseAuth.currentUser;
        if (currentUser) {
          await currentUser.reload();
          if (onVerified) {
            onVerified({
              uid: currentUser.uid,
              name: currentUser.displayName || currentUser.email?.split("@")[0] || "User",
              email: currentUser.email,
              emailVerified: true
            });
          }
        }
        setStatus("success");
      })
      .catch((err) => {
        setStatus("error");
        if (err.code === "auth/invalid-action-code") {
          setErrMsg("This verification link has expired or has already been used.");
        } else {
          setErrMsg("An error occurred during verification. Try signing in again.");
        }
      });
  }, [oobCode, mode, onVerified]);

  useEffect(() => {
    if (status === "success" && countdown > 0) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (status === "success" && countdown === 0) {
      navigate("/dashboard");
    }
  }, [status, countdown, navigate]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8faff", padding: 20, fontFamily: "'Sora', sans-serif" }}>
      <GlobalStyles />
      <div style={{ background: "#ffffff", padding: "40px 30px", borderRadius: 24, boxShadow: "0 12px 32px rgba(15, 23, 42, 0.04)", border: "1.5px solid #e2e8f0", width: "100%", maxWidth: 440, textAlign: "center" }}>
        
        {status === "verifying" && (
          <div style={{ animation: "fcFadeUp 0.4s ease" }}>
            <Loader2 size={48} color="#2563eb" style={{ animation: "spin 1s linear infinite", margin: "0 auto 24px" }} />
            <h2 style={{ fontSize: 24, margin: "0 0 12px", color: "#0f172a", fontWeight: 800 }}>Verifying your email...</h2>
            <p style={{ color: "#64748b", margin: 0 }}>Please wait a moment while we confirm your secure link.</p>
          </div>
        )}

        {status === "success" && (
          <div style={{ animation: "fcFadeUp 0.4s ease" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#f0fdf4", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#10b981" }}>
              <CheckCircle2 size={32} />
            </div>
            <h2 style={{ fontSize: 24, margin: "0 0 12px", color: "#0f172a", fontWeight: 800 }}>Email Verified!</h2>
            <p style={{ color: "#475569", margin: "0 0 24px", lineHeight: 1.6 }}>Your email has been successfully verified. Your account is now fully active.</p>
            
            <div style={{ padding: "12px 16px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0", marginBottom: 32, fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
              Redirecting to dashboard in <strong style={{ color: "#2563eb" }}>{countdown}s</strong>...
            </div>

            <button onClick={() => navigate("/dashboard")} style={{ width: "100%", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#2563eb", color: "#fff", borderRadius: 12, border: "none", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "#1d4ed8"} onMouseOut={(e) => e.currentTarget.style.background = "#2563eb"}>
              Go to Dashboard <ArrowRight size={18} />
            </button>
          </div>
        )}

        {status === "error" && (
          <div style={{ animation: "fcFadeUp 0.4s ease" }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "#fff1f2", margin: "0 auto 24px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ef4444" }}>
              <XCircle size={32} />
            </div>
            <h2 style={{ fontSize: 24, margin: "0 0 12px", color: "#0f172a", fontWeight: 800 }}>Verification Failed</h2>
            <p style={{ color: "#475569", margin: "0 0 32px", lineHeight: 1.6 }}>{errMsg}</p>
            <button onClick={() => navigate("/login")} style={{ width: "100%", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "#f1f5f9", color: "#334155", borderRadius: 12, border: "none", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }} onMouseOver={(e) => e.currentTarget.style.background = "#e2e8f0"} onMouseOut={(e) => e.currentTarget.style.background = "#f1f5f9"}>
              Return to Login
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
