const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// The swallowed portion from step 304:
const missingContent = `      <style>{\`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');\`}</style>
      {/* Decorative circles */}
      <div style={{ position: "fixed", top: "-100px", right: "-100px", width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(99,102,241,0.15)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "-150px", left: "-100px", width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(99,102,241,0.08)", pointerEvents: "none" }} />

      <div style={{ width: 420, padding: "48px 40px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 24, backdropFilter: "blur(20px)", boxShadow: "0 32px 80px rgba(0,0,0,0.4)" }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "#fff" }}>E</div>
            <span style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: -0.5 }}>EMCET<span style={{ color: "#6366f1" }}>Pro</span></span>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, margin: 0 }}>TG EMCET Practice Platform</p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 4, marginBottom: 28 }}>
          {["login", "signup"].map(m => (
            <button key={m} onClick={() => { setMode(m); setErr(""); }}
              style={{ flex: 1, padding: "10px 0", border: "none", borderRadius: 8, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.2s",
                background: mode === m ? "#6366f1" : "transparent", color: mode === m ? "#fff" : "rgba(255,255,255,0.5)" }}>
              {m === "login" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Fields */}
        {mode === "signup" && (
          <Field label="Full Name" value={name} onChange={setName} placeholder="Ravi Kumar" />
        )}
        <Field label="Email Address" value={email} onChange={setEmail} placeholder="student@example.com" type="email" />
        <Field label="Password" value={pwd} onChange={setPwd} placeholder="••••••••" type="password" />

        {err && <p style={{ color: "#f87171", fontSize: 12, marginBottom: 12 }}>{err}</p>}

        <button onClick={handle} disabled={loading}
          style={{ width: "100%", padding: "14px", background: loading ? "rgba(99,102,241,0.5)" : "linear-gradient(135deg, #6366f1, #8b5cf6)", border: "none", borderRadius: 12, color: "#fff", fontSize: 15, fontWeight: 600, cursor: loading ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.2s", marginBottom: 16 }}>
          {loading ? "Please wait..." : mode === "login" ? "Sign In →" : "Create Account →"}
        </button>

        <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 12, textAlign: "center", margin: 0 }}>
          Firebase Authentication • Your data is secure
        </p>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = "text" }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", color: "rgba(255,255,255,0.6)", fontSize: 12, fontWeight: 600, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: "100%", padding: "12px 14px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, color: "#fff", fontSize: 14, fontFamily: "'Sora',sans-serif", boxSizing: "border-box", outline: "none" }} />
    </div>
  );
}

// ─── Shell (Navigation) ────────────────────────────────────────────────────────
function Shell({ user, page, setPage, onLogout, children }) {
  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> },
    { id: "papers", label: "Papers", icon: <FileText size={18} /> },
    { id: "progress", label: "Progress", icon: <TrendingUp size={18} /> },
    { id: "leaderboard", label: "Leaderboard", icon: <Trophy size={18} /> },
    { id: "syllabus", label: "Syllabus", icon: <BookOpen size={18} /> },
  ];

  return (
    <div className="app-layout">`;

const currentBrokenCSSBlockRegex = /<style>\{\`\n        @import url\('https:\/\/fonts.googleapis.com\/css2\?family=Sora:wght@300;400;500;600;700&family=Space\+Mono:wght@400;700&display=swap'\);[^]*?\}\n\n      \`\}<\/style>/;

const cssBlockMatch = code.match(currentBrokenCSSBlockRegex);

if (cssBlockMatch) {
  const cssBlock = cssBlockMatch[0];
  code = code.replace(currentBrokenCSSBlockRegex, missingContent + "\n      " + cssBlock);
  fs.writeFileSync('src/App.jsx', code);
  console.log("Fix applied!");
} else {
  console.log("Could not find the broken CSS block!");
}
