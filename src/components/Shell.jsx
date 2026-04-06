import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, TrendingUp, Trophy, BookOpen, Layers, Target } from "lucide-react";

function Shell({ user, onLogout, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const navItems = [
    { id: "dashboard",    label: "Dashboard",    path: "/dashboard",    icon: <LayoutDashboard size={18} /> },
    { id: "papers",       label: "Papers",       path: "/papers",       icon: <FileText size={18} /> },
    { id: "flashcards",   label: "Flashcards",   path: "/flashcards",   icon: <Layers size={18} /> },
    { id: "progress",     label: "Progress",     path: "/progress",     icon: <TrendingUp size={18} /> },
    { id: "leaderboard",  label: "Leaderboard",  path: "/leaderboard",  icon: <Trophy size={18} /> },
    { id: "predictor",    label: "Predictor",    path: "/predictor",    icon: <Target size={18} /> },
    { id: "syllabus",     label: "Syllabus",     path: "/syllabus",     icon: <BookOpen size={18} /> },
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

      {/* Main Content */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}

export default Shell;
