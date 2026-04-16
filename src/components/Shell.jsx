import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LayoutDashboard, FileText, TrendingUp, Trophy, BookOpen, Layers, Target, Menu, X, ChevronLeft, ChevronRight, LogOut, LogIn, Gift, CreditCard, Zap, Star, Crown } from "lucide-react";

function Shell({ user, plan = 'free', onLogout, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { id: "papers", label: "Papers", path: "/papers", icon: <FileText size={20} /> },
    { id: "flashcards", label: "Flashcards", path: "/flashcards", icon: <Layers size={20} /> },
    { id: "progress", label: "Progress", path: "/progress", icon: <TrendingUp size={20} /> },
    { id: "leaderboard", label: "Leaderboard", path: "/leaderboard", icon: <Trophy size={20} /> },
    { id: "predictor", label: "Predictor", path: "/predictor", icon: <Target size={20} /> },
    { id: "syllabus", label: "Syllabus", path: "/syllabus", icon: <BookOpen size={20} /> },
  ];

  const extraNavItems = [
    { id: "pricing", label: "Pricing", path: "/pricing", icon: <CreditCard size={20} />, color: "#2563eb" },
    { id: "refer", label: "Refer & Earn", path: "/refer", icon: <Gift size={20} />, color: "#f59e0b", badge: true },
  ];

  const currentId = location.pathname.split("/")[1] || "dashboard";

  return (
    <div className="app-layout">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        ::-webkit-scrollbar { width: 6px; height: 6px; } 
        ::-webkit-scrollbar-track { background: transparent; } 
        ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
        
        * { box-sizing: border-box; }
        
        /* Responsive Layouts */
        .app-layout { min-height: 100vh; background: #f8faff; font-family: 'Sora', sans-serif; display: flex; flex-direction: row; }
        
        /* Sidebar Styling (Industry Level) */
        .sidebar { 
          width: 260px; 
          background: #ffffff; 
          border-right: 1px solid #e2e8f0; 
          display: flex; 
          flex-direction: column; 
          padding: 24px 16px; 
          flex-shrink: 0; 
          position: sticky; 
          top: 0; 
          align-self: flex-start; 
          height: 100vh; 
          z-index: 100; 
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1), padding 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 4px 0 24px rgba(0,0,0,0.02);
        }
        
        .sidebar-header { 
          display: flex; 
          align-items: center; 
          justify-content: space-between;
          margin-bottom: 32px; 
          padding: 0 8px;
          height: 48px;
        }

        .brand-container {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .brand-logo {
          width: 36px; 
          height: 36px; 
          border-radius: 10px; 
          background: linear-gradient(135deg, #2563eb, #1d4ed8); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 16px; 
          font-weight: 700; 
          color: #ffffff; 
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .brand-text {
          font-size: 20px; 
          font-weight: 700; 
          color: #0f172a; 
          letter-spacing: -0.5px;
          transition: opacity 0.3s ease;
        }
        .brand-text span {
          color: #2563eb;
        }
        
        .desktop-toggle { 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          width: 32px;
          height: 32px;
          background: #f4f7fe; 
          border: 1px solid #e2e8f0; 
          border-radius: 8px; 
          color: #a3aed1; 
          cursor: pointer; 
          transition: all 0.2s ease; 
          flex-shrink: 0;
        }
        .desktop-toggle:hover { 
          background: #e2e8f0; 
          color: #2563eb; 
          border-color: #cbd5e1;
        }
        
        .mobile-toggle { 
          display: none; 
          background: transparent; 
          border: none; 
          padding: 4px; 
          color: #0f172a; 
          cursor: pointer; 
        }

        .sidebar-content { 
          display: flex; 
          flex-direction: column; 
          flex: 1; 
          overflow-y: auto;
          overflow-x: hidden;
        }
        
        .nav-list { 
          display: flex; 
          flex-direction: column; 
          gap: 6px; 
          flex: 1; 
          width: 100%; 
        }
        
        .nav-btn { 
          width: 100%; 
          display: flex; 
          align-items: center; 
          gap: 14px; 
          padding: 12px 14px; 
          border-radius: 12px; 
          border: none; 
          cursor: pointer; 
          font-family: 'Sora', sans-serif; 
          font-size: 14px; 
          font-weight: 600; 
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
          white-space: nowrap; 
          color: #a3aed1;
          background: transparent;
        }
        
        .nav-btn .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          color: inherit;
          flex-shrink: 0;
          transition: color 0.2s ease;
        }
        
        .nav-btn .nav-label {
          transition: opacity 0.3s ease, visibility 0.3s ease;
        }

        .nav-btn:hover { 
          background: #f4f7fe; 
          color: #2563eb;
        }
        
        .nav-btn.active {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.2);
        }
        
        /* Desktop Collapsed State */
        @media (min-width: 901px) {
          .sidebar.collapsed { 
            width: 88px; 
            padding: 24px 14px; 
          }
          .sidebar.collapsed .sidebar-header { 
            flex-direction: column; 
            gap: 20px; 
            height: auto;
            padding: 0;
            justify-content: flex-start;
          }
          .sidebar.collapsed .brand-text {
            opacity: 0;
            display: none;
          }
          .sidebar.collapsed .nav-label {
            opacity: 0;
            display: none;
          }
          .sidebar.collapsed .nav-btn {
            justify-content: center;
            padding: 12px;
          }
          .sidebar.collapsed .sidebar-profile-info {
            flex-direction: column;
            gap: 0;
          }
          .sidebar.collapsed .sidebar-profile-text,
          .sidebar.collapsed .logout-text {
            display: none;
          }
          .sidebar.collapsed .sidebar-logout {
            padding: 12px;
            justify-content: center;
          }
        }

        /* Profile Section */
        .sidebar-profile { 
          margin-top: 24px;
          border-top: 1px solid #f1f5f9; 
          padding-top: 24px; 
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .sidebar-profile-info { 
          display: flex; 
          align-items: center; 
          gap: 12px; 
          overflow: hidden;
          white-space: nowrap;
        }
        
        .profile-avatar {
          width: 40px; 
          height: 40px; 
          border-radius: 50%; 
          background: #f4f7fe; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 14px; 
          font-weight: 700; 
          color: #2563eb;
          flex-shrink: 0;
        }
        .profile-avatar.logged-in {
          background: linear-gradient(135deg, #2563eb, #1d4ed8); 
          color: #ffffff;
        }

        .sidebar-profile-text p {
          transition: opacity 0.3s ease;
        }
        
        .sidebar-logout { 
          width: 100%; 
          padding: 12px 16px; 
          border-radius: 12px; 
          font-size: 14px; 
          font-weight: 600; 
          cursor: pointer; 
          font-family: 'Sora', sans-serif;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }
        
        .sidebar-logout.logged-in {
          background: #fef2f2;
          color: #ef4444;
        }
        .sidebar-logout.logged-in:hover {
          background: #fee2e2;
        }
        
        .sidebar-logout.logged-out {
          background: #2563eb;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.2);
        }
        .sidebar-logout.logged-out:hover {
          background: #1d4ed8;
        }

        /* Upgrade to Pro Button */
        .upgrade-btn {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 20px 14px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-family: 'Sora', sans-serif;
          background: linear-gradient(135deg, #2563eb, #1d4ed8);
          color: #ffffff;
          font-weight: 600;
          transition: all 0.2s;
          margin: 12px 0;
          white-space: nowrap;
          overflow: hidden;
          box-shadow: 0 4px 14px rgba(37,99,235,0.25);
        }
        .upgrade-btn:hover {
          background: linear-gradient(135deg, #1d4ed8, #1e40af);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37,99,235,0.35);
        }
        @media (min-width: 901px) {
          .sidebar.collapsed .upgrade-btn { justify-content: center; }
        }


        /* Main Content Area */
        .main-content { 
          flex: 1; 
          min-width: 0; 
          overflow-y: auto; 
          padding: 32px; 
        }
        
        /* Grid and App Utilities */
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .question-text { color: #0f172a; font-size: 17px; line-height: 1.7; margin-bottom: 28px; font-weight: 500; }
        .option-btn { text-align: left; padding: 14px 18px; border-radius: 12px; font-size: 14px; cursor: pointer; font-family: 'Sora', sans-serif; transition: all 0.15s; display: flex; align-items: center; gap: 12px; }

        /* Mobile Viewport overriding collapsed logic natively */
        @media (max-width: 900px) {
          .app-layout { flex-direction: column; }
          .sidebar { 
            width: 100% !important; 
            height: auto; 
            padding: 16px 20px !important; 
            border-right: none; 
            border-bottom: 1px solid #e2e8f0; 
            position: relative;
            z-index: 100;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          }
          
          .sidebar-header { 
            margin-bottom: 0; 
            padding-left: 0; 
            height: auto;
          }
          .mobile-toggle { display: flex; align-items: center; justify-content: center; }
          .desktop-toggle { display: none !important; }
          
          .sidebar-content { 
            display: none; 
            position: absolute; 
            top: 100%; 
            left: 0; 
            right: 0; 
            background: #ffffff; 
            padding: 24px; 
            border-bottom: 1px solid #e2e8f0; 
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            max-height: calc(100vh - 80px); /* prevent overflowing of screen */
            overflow-y: auto;
          }
          .sidebar-content.open { display: flex; }

          @keyframes slideDown { 
            from { opacity: 0; transform: translateY(-10px); } 
            to { opacity: 1; transform: translateY(0); } 
          }

          .nav-btn { justify-content: flex-start !important; padding: 14px 16px !important; font-size: 15px; }
          
          .sidebar-profile { margin-top: 24px; }
          .sidebar-profile-info { justify-content: flex-start !important; }
          
          .main-content { padding: 24px 16px; }
          
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-2 { grid-template-columns: 1fr; }
        }
        
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
          .question-text { font-size: 15px; margin-bottom: 20px; }
          .option-btn { padding: 12px 14px; font-size: 13px; gap: 10px; }
        }
      `}</style>

      {/* Sidebar */}
      <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="brand-container">
            <div className="brand-logo">E</div>
            <span className="brand-text">EAMCET <span>Pro</span></span>
          </div>

          <button className="desktop-toggle" onClick={() => setIsCollapsed(!isCollapsed)} aria-label="Toggle menu" title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}>
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>

          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`sidebar-content ${mobileMenuOpen ? "open" : ""}`}>
          <nav className="nav-list">
            {navItems.map(item => {
              const isActive = currentId === item.id;
              return (
                <button key={item.id} className={`nav-btn ${isActive ? 'active' : ''}`} onClick={() => navigate(item.path)}
                  title={isCollapsed ? item.label : ""}
                >
                  <span className="icon-wrapper">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              );
            })}

            {/* Divider */}
            <div style={{ height: 1, background: '#f1f5f9', margin: '8px 4px' }} />

            {extraNavItems.map(item => {
              const isActive = currentId === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-btn ${isActive ? 'active' : ''}`}
                  onClick={() => navigate(item.path)}
                  title={isCollapsed ? item.label : ""}
                  style={isActive ? {} : { color: item.color }}
                >
                  <span className="icon-wrapper">{item.icon}</span>
                  <span className="nav-label" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {item.label}
                    {item.badge && !isCollapsed && (
                      <span style={{ background: '#fef3c7', color: '#92400e', fontSize: 10, fontWeight: 700, padding: '1px 7px', borderRadius: 99, border: '1px solid #fde68a' }}>
                        NEW
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Upgrade to Pro banner — only for free users */}
          {user && plan === 'free' && (
            <button
              className="upgrade-btn"
              onClick={() => navigate('/pricing')}
              title={isCollapsed ? 'Upgrade to Pro' : ''}
            >
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={18} />
              </span>
              <span className="nav-label" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span style={{ fontSize: 13, fontWeight: 700 }}>Upgrade to Pro</span>
                <span style={{ fontSize: 11, opacity: 0.85 }}>₹199/month</span>
              </span>
            </button>
          )}

          <div className="sidebar-profile">
            <div className="sidebar-profile-info">
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div className={`profile-avatar ${user ? 'logged-in' : ''}`}>
                  {user ? user.name?.[0]?.toUpperCase() : 'G'}
                </div>
                {(plan === 'pro' || plan === 'annual') && (
                  <div style={{ position: 'absolute', bottom: -4, right: -4, background: '#f59e0b', color: 'white', fontSize: 9, fontWeight: 800, padding: '1px 5px', borderRadius: 99, letterSpacing: '0.04em', whiteSpace: 'nowrap', boxShadow: '0 2px 6px rgba(245,158,11,0.4)' }}>
                    PRO
                  </div>
                )}
              </div>
              <div className="sidebar-profile-text">
                <p style={{ margin: 0, color: '#0f172a', fontSize: 14, fontWeight: 700 }}>{user ? user.name : 'Guest'}</p>
                <p style={{ margin: 0, color: '#a3aed1', fontSize: 12, fontWeight: 500, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                  {plan === 'pro' ? (<><Star size={11} color="#f59e0b" fill="#f59e0b" /> Pro Member</>) : plan === 'annual' ? (<><Crown size={11} color="#7c3aed" fill="#7c3aed" /> Annual Pro</>) : user ? 'Free Plan' : 'Not logged in'}
                </p>
              </div>
            </div>

            <button
              className={`sidebar-logout ${user ? 'logged-in' : 'logged-out'}`}
              onClick={user ? onLogout : () => navigate("/login")}
              title={user ? "Sign Out" : "Sign In / Sign Up"}
            >
              {user ? <LogOut size={18} /> : <LogIn size={18} />}
              <span className="logout-text">{user ? "Sign Out" : "Sign In / Sign Up"}</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="main-content" onClick={() => { if (mobileMenuOpen) setMobileMenuOpen(false) }}>
        {children}
      </div>
    </div>
  );
}

export default Shell;
