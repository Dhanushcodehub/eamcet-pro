import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, CheckCircle2, BarChart3, Target, 
  BookOpen, Trophy, Zap, BrainCircuit, 
  LayoutDashboard, Layers, Star, Menu, X, Rocket, GraduationCap, Shield
} from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // --- Styles ---
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;600;700&family=Space+Mono:wght@400;700&display=swap');
    
    .landing-page {
      font-family: 'Inter', sans-serif;
      color: #0f172a;
      background: #ffffff;
      overflow-x: hidden;
    }
    
    h1, h2, h3, h4, .sora-font { font-family: 'Sora', sans-serif; }
    .mono-font { font-family: 'Space Mono', monospace; }

    /* Navbar */
    .navbar {
      position: fixed; top: 0; left: 0; right: 0;
      padding: 16px 24px; z-index: 100;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.8);
      padding: 12px 24px;
    }
    .nav-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; }
    .nav-links { display: flex; gap: 32px; align-items: center; }
    .nav-link { color: #64748b; font-weight: 500; font-size: 15px; text-decoration: none; transition: color 0.2s; cursor: pointer; }
    .nav-link:hover { color: #0f172a; }
    
    .btn { display: inline-flex; align-items: center; justify-content: center; gap: 8px; border-radius: 13px; font-weight: 600; transition: all 0.2s; cursor: pointer; border: none; }
    .btn-primary { background: #2563eb; color: white; padding: 12px 24px; font-size: 15px; box-shadow: 0 4px 14px 0 rgba(37,99,235,0.39); }
    .btn-primary:hover { background: #1d4ed8; transform: translateY(-1px); box-shadow: 0 6px 20px rgba(37,99,235,0.23); }
    .btn-outline { background: transparent; color: #0f172a; border: 1px solid #e2e8f0; padding: 12px 24px; font-size: 15px; }
    .btn-outline:hover { border-color: #cbd5e1; background: #f8fafc; }
    .btn-glass { background: rgba(255,255,255,0.9); color: #0f172a; padding: 10px 20px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
    .btn-glass:hover { background: white; transform: translateY(-1px); }

    /* Hero Section */
    .hero { min-height: 100vh; display: flex; flex-direction: column; justify-content: center; position: relative; padding: 120px 24px 60px; overflow: hidden; }
    .hero-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-color: #f8fafc; background-image: linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px); background-size: 32px 32px; z-index: -1; }
    .hero-glow { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(255,255,255,0) 70%); top: -100px; right: -100px; border-radius: 50%; filter: blur(40px); z-index: -1; }
    
    .hero-layout { max-width: 1400px; margin: 0 auto; display: flex; align-items: center; justify-content: space-between; gap: 60px; width: 100%; position: relative; z-index: 10; }
    .hero-content { flex: 1; min-width: 45%; max-width: 580px; text-align: left; position: relative; }
    .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(37,99,235,0.1); color: #2563eb; font-weight: 600; font-size: 14px; padding: 6px 16px; border-radius: 99px; margin-bottom: 24px; border: 1px solid rgba(37,99,235,0.2); }
    .hero h1 { font-size: clamp(40px, 4.5vw, 72px); letter-spacing: -0.03em; line-height: 1.1; margin-bottom: 24px; color: #0f172a; }
    .hero h1 span { background: linear-gradient(135deg, #2563eb, #1e40af); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
    .hero p { font-size: clamp(16px, 1.5vw, 20px); color: #475569; line-height: 1.6; margin-bottom: 40px; margin-inline: 0; }
    .hero-buttons { display: flex; gap: 16px; flex-wrap: wrap; justify-content: flex-start; }
    
    .stats-row { display: flex; justify-content: flex-start; gap: 40px; margin-top: 48px; }
    .stat-item { text-align: left; display: flex; align-items: center; gap: 12px; }
    .stat-val { font-size: 24px; font-weight: 700; color: #0f172a; font-family: 'Sora', sans-serif; letter-spacing: -0.02em; }
    .stat-label { font-size: 13px; color: #64748b; font-weight: 500; }

    /* Dashboard Mockup */
    .mockup-container { flex: 1.4; width: 100%; min-width: 50%; perspective: 1000px; display: flex; justify-content: flex-end; }
    .mockup-window { background: #ffffff; border-radius: 20px; box-shadow: 0 25px 50px -12px rgba(37,99,235,0.25); border: 1px solid rgba(226,232,240,0.8); overflow: hidden; position: relative; width: 100%; max-width: 800px; margin: 0 auto; }
    .mockup-header { height: 40px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; display: flex; align-items: center; padding: 0 16px; gap: 6px; }
    .mockup-dot { width: 10px; height: 10px; border-radius: 50%; }
    
    /* Sections Overview */
    .section { padding: 100px 24px; position: relative; }
    .section-bg-gray { background: #f8fafc; }
    section h2 { font-size: clamp(32px, 4vw, 48px); letter-spacing: -0.02em; color: #0f172a; margin-bottom: 16px; text-align: center; }
    section .subtitle { text-align: center; color: #64748b; font-size: 18px; max-width: 600px; margin: 0 auto 64px; line-height: 1.6; }

    /* Features Grid */
    .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; max-width: 1200px; margin: 0 auto; }
    .feature-card { background: white; border: 1px solid #e2e8f0; border-radius: 20px; padding: 32px; transition: all 0.3s; position: relative; overflow: hidden; }
    .feature-card:hover { border-color: #2563eb; transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(37,99,235,0.1); }
    .feature-icon-wrapper { width: 56px; height: 56px; border-radius: 16px; background: #f0f7ff; display: flex; align-items: center; justify-content: center; color: #2563eb; margin-bottom: 24px; }
    .feature-card h3 { font-size: 20px; margin-bottom: 12px; color: #0f172a; }
    .feature-card p { color: #64748b; line-height: 1.6; font-size: 15px; }

    /* How It Works List */
    .steps-container { max-width: 800px; margin: 0 auto; }
    .step-item { display: flex; gap: 24px; margin-bottom: 40px; position: relative; }
    .step-item:last-child { margin-bottom: 0; }
    .step-number { width: 48px; height: 48px; border-radius: 50%; background: #2563eb; color: white; display: flex; align-items: center; justify-content: center; font-size: 20px; font-weight: 700; flex-shrink: 0; z-index: 2; box-shadow: 0 4px 12px rgba(37,99,235,0.3); font-family: 'Sora', sans-serif;}
    .step-line { position: absolute; left: 24px; top: 48px; bottom: -40px; width: 2px; background: #e2e8f0; z-index: 1; }
    .step-item:last-child .step-line { display: none; }
    .step-content { padding-top: 10px; }
    .step-content h3 { font-size: 22px; margin-bottom: 8px; }
    .step-content p { color: #64748b; line-height: 1.6; font-size: 16px; }

    /* Advantage Table */
    .advantage-table-wrapper { width: 100%; overflow-x: auto; padding-bottom: 24px; -webkit-overflow-scrolling: touch; }
    .advantage-table { min-width: 650px; max-width: 1000px; margin: 0 auto; background: white; border-radius: 20px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.03); }
    .adv-row { display: grid; grid-template-columns: 1.5fr 1fr 1fr; border-bottom: 1px solid #e2e8f0; }
    .adv-row.header { background: #f8fafc; font-weight: 600; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; }
    .adv-cell { padding: 24px; display: flex; align-items: center; font-size: 16px; }
    .adv-cell.feature-name { color: #0f172a; font-weight: 500; }
    .adv-cell.eamcet-pro { background: rgba(37,99,235,0.03); color: #0f172a; font-weight: 600; justify-content: center; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0; }
    .adv-cell.others { color: #64748b; justify-content: center; }
    
    /* Call to action */
    .cta-section { padding: 120px 24px; background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%); color: white; text-align: center; position: relative; overflow: hidden; }
    .cta-content { position: relative; z-index: 10; max-width: 600px; margin: 0 auto; }
    .cta-section h2 { color: white; margin-bottom: 24px; }
    .cta-section p { color: rgba(255,255,255,0.8); font-size: 20px; margin-bottom: 40px; }
    
    /* Footer */
    .footer { background: #0f172a; color: #94a3b8; padding: 60px 24px 24px; }
    .footer-content { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 40px; margin-bottom: 40px; }
    .footer-brand h3 { color: white; margin-bottom: 16px; display:flex; align-items:center; gap:8px;}
    .footer-brand p { max-width: 300px; line-height: 1.6; }
    .footer-links { display: flex; gap: 64px; }
    .link-group h4 { color: white; margin-bottom: 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; }
    .link-group ul { list-style: none; padding: 0; margin: 0; }
    .link-group li { margin-bottom: 12px; }
    .link-group a { color: #94a3b8; text-decoration: none; transition: color 0.2s; }
    .link-group a:hover { color: white; }
    .footer-bottom { border-top: 1px solid #1e293b; padding-top: 24px; display: flex; justify-content: space-between; max-width: 1200px; margin: 0 auto; font-size: 14px; }

    @media (max-width: 1024px) {
      .hero-layout { flex-direction: column; text-align: center; justify-content: center; padding-top: 40px; }
      .hero-content { text-align: center; max-width: 800px; }
      .hero p { margin-inline: auto; text-align: center; }
      .hero-buttons { justify-content: center; }
      .stats-row { justify-content: center; }
      .mockup-container { width: 100%; max-width: 800px; margin-top: 40px; justify-content: center; margin-inline: auto; }
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .mobile-menu-btn { display: block; }
      .stats-row { flex-direction: column; gap: 24px; align-items: center; }
      section h2 { font-size: 28px; }
      
      .mockup-sidebar { display: none !important; }
      .mockup-content { padding: 20px !important; }
      .mockup-stats-row { flex-direction: column !important; }
      
      .footer-links { flex-direction: column; gap: 32px; }
      .footer-bottom { flex-direction: column; align-items: center; gap: 16px; }
    }
    @media (min-width: 769px) {
      .mobile-menu-btn { display: none; }
    }
  `;

  return (
    <div className="landing-page">
      <Helmet>
        <title>EAMCET Pro | Smart Preparation Platform</title>
        <meta name="description" content="Practice PYQs, take mock tests, analyze performance, and predict your rank for TS EAMCET exams. The ultimate personalized study companion." />
        <meta name="keywords" content="EAMCET preparation platform, EAMCET mock test online, EAMCET rank predictor, TS EAMCET" />
      </Helmet>
      <style dangerouslySetInnerHTML={{ __html: styles }} />

      {/* --- Navbar --- */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => window.scrollTo(0, 0)}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg, #2563eb, #1e40af)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold', fontSize: 18 }}>E</div>
            <span className="sora-font" style={{ fontSize: 20, fontWeight: 700, color: '#0f172a', letterSpacing: '-0.03em' }}>
              EAMCET<span style={{ color: '#2563eb' }}>Pro</span>
            </span>
          </div>

          <div className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#how-it-works" className="nav-link">How it Works</a>
            <a href="#predictor" className="nav-link">Rank Predictor</a>
            <Link to="/login" className="btn btn-outline" style={{ marginLeft: 16, padding: '8px 20px', textDecoration: 'none', display: 'inline-block' }}>Sign In</Link>
            <Link to="/login" className="btn btn-primary" style={{ padding: '8px 20px', textDecoration: 'none', display: 'inline-block' }}>Get Started</Link>
          </div>

          <button className="mobile-menu-btn" style={{ background: 'none', border: 'none', color: '#0f172a', cursor: 'pointer' }} onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.95 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(255,255,255,0.98)', zIndex: 200, display: 'flex', flexDirection: 'column', padding: 24 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 60 }}>
              <span className="sora-font" style={{ fontSize: 24, fontWeight: 700 }}>EAMCET<span style={{ color: '#2563eb' }}>Pro</span></span>
              <button onClick={() => setMobileMenuOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={32}/></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, fontSize: 24, fontWeight: 600 }}>
              <a href="#features" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none' }}>Features</a>
              <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none' }}>How it Works</a>
              <a href="#predictor" onClick={() => setMobileMenuOpen(false)} style={{ color: '#0f172a', textDecoration: 'none' }}>Rank Predictor</a>
            </div>
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <Link to="/login" className="btn btn-outline" style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
              <Link to="/login" className="btn btn-primary" style={{ width: '100%', textDecoration: 'none', textAlign: 'center' }} onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- Hero Section --- */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-glow" />
        
        <div className="hero-layout">
          <motion.div 
            className="hero-content"
            initial="hidden" animate="visible" variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="hero-badge">
              <Star size={16} fill="#2563eb" /> New: 2024 Exam Data Integrated
            </motion.div>
            <motion.h1 variants={fadeInUp}>
              Crack EAMCET with <br/><span>Smart Preparation 🚀</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Practice PYQs, take real-time mock tests, analyze performance, and predict your rank & college — all in one modern platform.
            </motion.p>
            <motion.div variants={fadeInUp} className="hero-buttons">
              <Link to="/login" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: 16, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Start Free Mock Test <ArrowRight size={18} />
              </Link>
              <a href="#features" style={{ textDecoration: 'none' }}>
                <button className="btn btn-outline" style={{ padding: '16px 32px', fontSize: 16 }}>
                  Explore Features
                </button>
              </a>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="stats-row">
              <div className="stat-item">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}><GraduationCap size={24}/></div>
                <div>
                  <div className="stat-val">10,000+</div>
                  <div className="stat-label">Students Active</div>
                </div>
              </div>
              <div className="stat-item">
                <div style={{ width: 48, height: 48, borderRadius: 12, background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}><CheckCircle2 size={24}/></div>
                <div>
                  <div className="stat-val">1M+</div>
                  <div className="stat-label">Questions Practiced</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Dashboard Mockup */}
          <motion.div 
            className="mockup-container"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
          >
            <div className="mockup-window">
              <div className="mockup-header">
                <div className="mockup-dot" style={{ background: '#ef4444' }} />
                <div className="mockup-dot" style={{ background: '#f59e0b' }} />
                <div className="mockup-dot" style={{ background: '#10b981' }} />
                <div style={{ margin: '0 auto', fontSize: 12, color: '#64748b', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Shield size={12} /> app.eamcetpro.com
                </div>
              </div>
              <div className="mockup-inner" style={{ display: 'flex', background: '#f8faff', height: '100%' }}>
                {/* Fake Sidebar */}
                <div className="mockup-sidebar" style={{ width: 200, borderRight: '1px solid #e2e8f0', padding: 24, background: 'white', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: '#2563eb' }} />
                    <div style={{ height: 18, width: 90, background: '#0f172a', borderRadius: 4 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px', background: '#e0e7ff', borderRadius: 8 }}>
                    <LayoutDashboard size={16} color="#2563eb" />
                    <div style={{ height: 12, width: 80, background: '#2563eb', borderRadius: 4 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px' }}>
                    <Target size={16} color="#64748b" />
                    <div style={{ height: 12, width: 70, background: '#e2e8f0', borderRadius: 4 }} />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 12px' }}>
                    <BookOpen size={16} color="#64748b" />
                    <div style={{ height: 12, width: 90, background: '#e2e8f0', borderRadius: 4 }} />
                  </div>
                </div>
                {/* Fake Content */}
                <div className="mockup-content" style={{ flex: 1, padding: 32 }}>
                  <div style={{ marginBottom: 24 }}>
                    <div style={{ fontSize: 24, fontWeight: 700, color: '#0f172a', marginBottom: 8 }}>Welcome back, Student! 👋</div>
                    <div style={{ fontSize: 14, color: '#64748b' }}>Your target is JNTUH - CSE. You're on track!</div>
                  </div>
                  <div className="mockup-stats-row" style={{ display: 'flex', gap: 20, marginBottom: 30 }}>
                    <div style={{ flex: 1, background: 'white', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>Mock Tests</div>
                        <div style={{ width: 32, height: 32, background: '#f0f7ff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <BookOpen size={16} color="#2563eb" />
                        </div>
                      </div>
                      <div style={{ fontSize: 28, fontWeight: 700, color: '#0f172a' }}>12</div>
                    </div>
                    <div style={{ flex: 1, background: 'white', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                        <div style={{ fontSize: 13, color: '#64748b', fontWeight: 600 }}>Avg. Accuracy</div>
                        <div style={{ width: 32, height: 32, background: '#ecfdf5', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Target size={16} color="#10b981" />
                        </div>
                      </div>
                      <div style={{ fontSize: 28, fontWeight: 700, color: '#0f172a' }}>84%</div>
                    </div>
                  </div>
                  <div style={{ width: '100%', background: 'white', border: '1px solid #e2e8f0', borderRadius: 16, padding: 20, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#0f172a', marginBottom: 20 }}>Recent Performance</div>
                    {/* Fake Chart */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', height: 120, gap: 12 }}>
                      {[40, 70, 45, 90, 60, 100, 80].map((h, i) => (
                        <div key={i} style={{ flex: 1, height: `${h}%`, background: h === 100 ? '#2563eb' : (h > 60 ? '#60a5fa' : '#bfdbfe'), borderRadius: '6px 6px 0 0' }} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '40%', background: 'linear-gradient(to top, rgba(255,255,255,1), rgba(255,255,255,0))', pointerEvents: 'none' }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Core Features --- */}
      <section id="features" className="section section-bg-gray">
        <h2>Unfair Advantage for Your Prep</h2>
        <p className="subtitle">Everything you need to master the TS EAMCET syllabus, packed into a blazing-fast dashboard.</p>
        
        <div className="features-grid">
          {[
            { icon: <BookOpen />, title: "Real PYQ Practice", desc: "Access official previous year question papers mapped to exact exam formats." },
            { icon: <Target />, title: "Full Mock Tests", desc: "Simulate the real EAMCET 160-question 3-hour experience flawlessly." },
            { icon: <Layers />, title: "Smart Flashcards", desc: "Memorize formulas and key concepts quickly before the exam day." },
            { icon: <BarChart3 />, title: "Deep Analytics", desc: "In-depth insights into your accuracy, time-spent, and topic weaknesses." },
            { icon: <Rocket />, title: "Rank Predictor", desc: "Proprietary algorithm based on official 2024 allotment data." },
            { icon: <Trophy />, title: "Global Leaderboard", desc: "Compete with thousands of aspirants and maintain your daily study streak." },
          ].map((feat, idx) => (
            <motion.div 
              key={idx} 
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="feature-icon-wrapper">{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- How It Works --- */}
      <section id="how-it-works" className="section">
        <h2>Four Steps to Success</h2>
        <p className="subtitle">A proven methodology to boost your rank from zero to top tier.</p>
        
        <div className="steps-container">
          {[
            { title: "Sign Up & Set Target", desc: "Create your free account and set your target college and branch." },
            { title: "Take Diagnostics / PYQs", desc: "Attempt short subject-wise mock tests or solve last year's shifts." },
            { title: "Analyze Weaknesses", desc: "Our engine highlights exact topics where you lose marks or spend too much time." },
            { title: "Predict & Improve", desc: "Use the Rank Predictor to see where you stand, study weak areas, and repeat." },
          ].map((step, idx) => (
            <motion.div 
              className="step-item" key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="step-number">{idx + 1}</div>
              <div className="step-line" />
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Analytics UI Showcase (Parallaxish) --- */}
      <section className="section section-bg-gray" style={{ overflow: 'hidden' }}>
        <div className="nav-container">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 60, alignItems: 'center' }}>
            <motion.div 
              initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ flex: '1 1 400px' }}
            >
              <div style={{ display: 'inline-flex', padding: '6px 12px', background: '#fef3c7', color: '#d97706', borderRadius: 8, fontWeight: 600, fontSize: 13, marginBottom: 20 }}>
                #1 Feature
              </div>
              <h2 style={{ textAlign: 'left', marginBottom: 24, fontSize: 'clamp(32px, 4vw, 42px)' }}>Don't just test.<br/>Analyze deep.</h2>
              <p style={{ color: '#64748b', fontSize: 18, lineHeight: 1.6, marginBottom: 32 }}>
                Traditional tests just give you a score. EAMCET Pro breaks down your performance by subject, tracks your speed, and maps out your exact accuracy over time. Stop studying blind.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {['Topic-wise Accuracy Breakdown', 'Time-per-question metrics', 'Historical trend comparison'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontWeight: 500, color: '#0f172a' }}>
                    <CheckCircle2 color="#2563eb" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div 
              style={{ flex: '1 1 500px', position: 'relative' }}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            >
              <div style={{ background: 'white', borderRadius: 24, padding: 32, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, alignItems: 'center' }}>
                  <div style={{ fontSize: 18, fontWeight: 600 }}>Performance</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: '#2563eb' }}>86% <span style={{fontSize: 14, color: '#10b981', fontWeight: 500}}>+2.4%</span></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', height: 200, gap: 12 }}>
                  {[30, 45, 40, 60, 55, 75, 70, 86].map((st, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${st}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      style={{ flex: 1, background: i === 7 ? '#2563eb' : '#e0e7ff', borderRadius: '6px 6px 0 0' }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Floating element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{ position: 'absolute', bottom: -20, left: -20, background: 'white', padding: '16px 24px', borderRadius: 16, boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: 16 }}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#fef2f2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444' }}>
                  <Zap size={20} />
                </div>
                <div>
                  <div style={{ fontSize: 12, color: '#64748b', fontWeight: 500 }}>Weakest Area</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#0f172a' }}>Calculus</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- Competitive Advantage --- */}
      <section className="section">
        <h2>Why EAMCET Pro?</h2>
        <p className="subtitle">See how we stack up against traditional study methods.</p>
        
        <div className="advantage-table-wrapper">
          <div className="advantage-table">
            <div className="adv-row header">
            <div className="adv-cell feature-name">Features</div>
            <div className="adv-cell eamcet-pro">EAMCET Pro</div>
            <div className="adv-cell others">Books & Coaching</div>
          </div>
          {[
            { title: "Mock Test Environment", pro: true, others: false },
            { title: "Real-time Accuracy Tracking", pro: true, others: false },
            { title: "College & Rank Prediction", pro: true, others: false },
            { title: "Official PYQ Repository", pro: true, others: true },
            { title: "Detailed Analytics", pro: true, others: false },
          ].map((row, i) => (
            <div className="adv-row" key={i}>
              <div className="adv-cell feature-name">{row.title}</div>
              <div className="adv-cell eamcet-pro">
                {row.pro ? <CheckCircle2 color="#2563eb" /> : <X color="#94a3b8" />}
              </div>
              <div className="adv-cell others">
                {row.others ? <CheckCircle2 color="#10b981" /> : <X color="#ef4444" />}
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}>Ready to crack EAMCET?</h2>
          <p>Join over 10,000+ students predicting their success and mastering the exam.</p>
          <Link to="/login" className="btn" style={{ background: 'white', color: '#2563eb', padding: '16px 36px', fontSize: 18, textDecoration: 'none', display: 'inline-block' }}>
            Start Free Practice
          </Link>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="sora-font"><div style={{ width: 24, height: 24, borderRadius: 6, background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>E</div> EAMCET Pro</h3>
            <p>The ultimate preparation companion for Telangana State Engineering, Agriculture & Medical Common Entrance Test.</p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#predictor">College Predictor</a></li>
                <li><a href="#">Pricing</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Syllabus</a></li>
                <li><a href="#">Previous Papers</a></li>
                <li><a href="#">Blog/Tips</a></li>
              </ul>
            </div>
            <div className="link-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div>&copy; {new Date().getFullYear()} EAMCET Pro. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 16 }}>
            <span>Follow us on</span>
            <a href="#" style={{ color: 'white' }}>X (Twitter)</a>
            <a href="#" style={{ color: 'white' }}>Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
