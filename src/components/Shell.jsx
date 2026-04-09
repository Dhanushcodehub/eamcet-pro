import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, TrendingUp, Trophy, BookOpen, Layers, Target, Menu, X } from "lucide-react";

function Shell({ user, onLogout, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

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
        
        .sidebar { width: 220px; background: #ffffff; border-right: 1px solid #e2e8f0; display: flex; flex-direction: column; padding: 24px 16px; flex-shrink: 0; position: sticky; top: 0; align-self: flex-start; height: 100vh; overflow-y: auto; z-index: 100; }
        
        .sidebar-header { display: flex; alignItems: center; margin-bottom: 36px; padding-left: 8px; width: 100%; justify-content: space-between; }
        .mobile-toggle { display: none; background: transparent; border: none; padding: 4px; color: #0f172a; cursor: pointer; }

        .sidebar-content { display: flex; flex-direction: column; flex: 1; }
        
        .nav-list { display: flex; flex-direction: column; gap: 4px; flex: 1; width: 100%; }
        .nav-btn { width: 100%; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 10px; border: none; cursor: pointer; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 500; transition: all 0.15s; }
        .nav-btn:hover { background: #f1f5f9; }

        .main-content { flex: 1; min-width: 0; overflow-y: auto; padding: 32px 20px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }

        @media (max-width: 900px) {
          .app-layout { flex-direction: column; }
          .sidebar { width: 100%; height: auto; padding: 12px 20px; border-right: none; border-bottom: 1px solid #e2e8f0; overflow: visible; }
          
          .sidebar-header { margin-bottom: 0; padding-left: 0; }
          .mobile-toggle { display: flex; align-items: center; justify-content: center; }
          
          .sidebar-content { 
            display: none; 
            position: absolute; top: 100%; left: 0; right: 0; 
            background: #ffffff; padding: 20px; 
            border-bottom: 1px solid #e2e8f0; 
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.2s ease forwards;
          }
          .sidebar-content.open { display: flex; }

          @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }

          .nav-btn { padding: 12px 16px; font-size: 15px; }
          .sidebar-profile { margin-top: 24px; }
          
          .main-content { padding: 20px 12px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-2 { grid-template-columns: 1fr; }
        }
        
        .question-text { color: #0f172a; font-size: 17px; line-height: 1.7; margin-bottom: 28px; font-weight: 500; }
        .option-btn { text-align: left; padding: 14px 18px; border-radius: 12px; font-size: 14px; cursor: pointer; font-family: 'Sora', sans-serif; transition: all 0.15s; display: flex; align-items: center; gap: 12px; }
        
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
          .question-text { font-size: 15px; margin-bottom: 20px; }
          .option-btn { padding: 12px 14px; font-size: 13px; gap: 10px; }
        }
      `}</style>

      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700, color: "#ffffff" }}>E</div>
            <span style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", letterSpacing: -0.5 }}>EAMCET <span style={{ color: "#2563eb" }}>Pro</span></span>
          </div>
          
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        <div className={`sidebar-content ${mobileMenuOpen ? "open" : ""}`}>
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
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: user ? "linear-gradient(135deg, #2563eb, #1d4ed8)" : "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: user ? "#ffffff" : "#64748b" }}>
                {user ? user.name?.[0]?.toUpperCase() : "G"}
              </div>
              <div>
                <p style={{ margin: 0, color: "#0f172a", fontSize: 12, fontWeight: 600 }}>{user ? user.name : "Guest"}</p>
                <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Student</p>
              </div>
            </div>
            <button className="sidebar-logout" onClick={user ? onLogout : () => navigate("/login")} style={{ width: "100%", padding: "10px 12px", border: user ? "1px solid #e2e8f0" : "none", borderRadius: 8, background: user ? "transparent" : "#2563eb", color: user ? "#64748b" : "#ffffff", fontSize: 13, fontWeight: user ? 500 : 600, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
              {user ? "Sign Out" : "Sign In / Sign Up"}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" onClick={() => { if(mobileMenuOpen) setMobileMenuOpen(false) }}>
        {children}
      </div>
    </div>
  );
}

export default Shell;
