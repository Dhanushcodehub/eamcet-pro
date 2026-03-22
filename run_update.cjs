const fs = require('fs');
let code = fs.readFileSync('src/App.jsx', 'utf8');

// 1. ADD RESPONSIVE CSS IN SHELL
const cssBlock = `
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: transparent; } ::-webkit-scrollbar-thumb { background: rgba(99,102,241,0.3); border-radius: 2px; }
        * { box-sizing: border-box; }
        
        /* Responsive Layouts */
        .app-layout { min-height: 100vh; background: #0a0e1a; font-family: 'Sora', sans-serif; display: flex; flex-direction: row; }
        .sidebar { width: 220px; background: rgba(255,255,255,0.02); border-right: 1px solid rgba(255,255,255,0.06); display: flex; flex-direction: column; padding: 24px 16px; flex-shrink: 0; position: sticky; top: 0; height: 100vh; overflow-y: auto; z-index: 50; }
        .main-content { flex: 1; min-width: 0; overflow-y: auto; padding: 32px 36px; }
        .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .exam-layout { display: flex; flex: 1; overflow: hidden; flex-direction: row; }
        .exam-main { flex: 1; padding: 32px 36px; overflow-y: auto; }
        .exam-side { width: 260px; background: rgba(255,255,255,0.02); border-left: 1px solid rgba(255,255,255,0.06); padding: 20px; overflow-y: auto; flex-shrink: 0; }
        .nav-list { display: flex; flex-direction: column; flex: 1; }
        
        @media (max-width: 900px) {
          .app-layout { flex-direction: column; }
          .sidebar { width: 100%; height: auto; flex-direction: column; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); position: relative; padding: 16px; }
          .nav-list { flex-direction: row; flex-wrap: wrap; gap: 8px; margin-bottom: 0px; flex: unset; }
          .nav-list > button { width: auto !important; margin-bottom: 0 !important; }
          .main-content { padding: 20px 16px; }
          .grid-4 { grid-template-columns: repeat(2, 1fr); }
          .grid-2 { grid-template-columns: 1fr; }
          .exam-layout { flex-direction: column; overflow: visible; }
          .exam-main { padding: 20px 16px; overflow: visible; order: 2; height: 60vh; }
          .exam-side { width: 100%; border-left: none; border-bottom: 1px solid rgba(255,255,255,0.06); height: auto; max-height: 40vh; order: 1; }
          .analysis-top { flex-direction: column; align-items: center; text-align: center; }
        }
        @media (max-width: 600px) {
          .grid-4 { grid-template-columns: 1fr; }
          .grid-3 { grid-template-columns: 1fr; }
        }
`;
code = code.replace(/@import url\('[^]*?\* \{ box-sizing: border-box; \}/, cssBlock);

code = code.replace(/<div style=\{\{ minHeight: "100vh", background: "#0a0e1a", fontFamily: "'Sora', sans-serif", display: "flex" \}\}>/, '<div className="app-layout">');
code = code.replace(/<div style=\{\{ width: 220, background: "rgba\(255,255,255,0\.02\)", borderRight: "1px solid rgba\(255,255,255,0\.06\)", display: "flex", flexDirection: "column", padding: "24px 16px", flexShrink: 0 \}\}>/, '<div className="sidebar">');
code = code.replace(/<nav style=\{\{ flex: 1 \}\}>/, '<nav className="nav-list">');
code = code.replace(/<div style=\{\{ flex: 1, overflowY: "auto", padding: "32px 36px" \}\}>/, '<div className="main-content">');
code = code.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(4, 1fr\)", gap: 16, marginBottom: 28 \}\}>/, '<div className="grid-4" style={{ marginBottom: 28 }}>');
code = code.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 28 \}\}>/, '<div className="grid-2" style={{ marginBottom: 28 }}>');
code = code.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(3,1fr\)", gap: 12 \}\}>/, '<div className="grid-3">');
code = code.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(3,1fr\)", gap: 16, marginBottom: 28 \}\}>/, '<div className="grid-3" style={{ marginBottom: 28 }}>');
code = code.replace(/<div style=\{\{ display: "grid", gridTemplateColumns: "repeat\(4,1fr\)", gap: 14, marginBottom: 28 \}\}>/, '<div className="grid-4" style={{ marginBottom: 28 }}>');
code = code.replace(/<div style=\{\{ display: "flex", flex: 1, overflow: "hidden" \}\}>/, '<div className="exam-layout">');
code = code.replace(/<div style=\{\{ flex: 1, padding: "32px 36px", overflowY: "auto" \}\}>/, '<div className="exam-main">');
code = code.replace(/<div style=\{\{ width: 220, background: "rgba\(255,255,255,0\.02\)", borderLeft: "1px solid rgba\(255,255,255,0\.06\)", padding: 20, overflowY: "auto" \}\}>/, '<div className="exam-side">');
code = code.replace(/<div style=\{\{ display: "flex", alignItems: "flex-start", gap: 32, marginBottom: 32 \}\}>/, '<div className="analysis-top" style={{ display: "flex", gap: 32, marginBottom: 32 }}>');

// EMOJI REPLACEMENTS
code = code.replace(/{ id: "dashboard", label: "Dashboard", icon: "⊞" }/, `{ id: "dashboard", label: "Dashboard", icon: <LayoutDashboard size={18} /> }`);
code = code.replace(/{ id: "papers", label: "Papers", icon: "📄" }/, `{ id: "papers", label: "Papers", icon: <FileText size={18} /> }`);
code = code.replace(/{ id: "progress", label: "Progress", icon: "📈" }/, `{ id: "progress", label: "Progress", icon: <TrendingUp size={18} /> }`);
code = code.replace(/{ id: "leaderboard", label: "Leaderboard", icon: "🏆" }/, `{ id: "leaderboard", label: "Leaderboard", icon: <Trophy size={18} /> }`);
code = code.replace(/{ id: "syllabus", label: "Syllabus", icon: "📚" }/, `{ id: "syllabus", label: "Syllabus", icon: <BookOpen size={18} /> }`);

code = code.replace(/Welcome back! 👋/g, 'Welcome back! <span style={{display:"inline-block",verticalAlign:"middle"}}><Flame color="#f97316" size={26} /></span>');
code = code.replace(/icon="🔥"/g, 'icon={<Flame size={28} color="#f97316" />}');
code = code.replace(/icon="✅"/g, 'icon={<CheckCircle size={28} color="#10b981" />}');
code = code.replace(/icon="📄"/g, 'icon={<FileText size={28} color="#6366f1" />}');
code = code.replace(/icon="⭐"/g, 'icon={<Star size={28} color="#f59e0b" />}');

code = code.replace(/\["📝", \`\$\{paper.questions\} Qs\`\]/g, '[<FileText size={14} />, `${paper.questions} Qs`]');
code = code.replace(/\["⏱", \`\$\{paper.duration\} min\`\]/g, '[<Timer size={14} />, `${paper.duration} min`]');
code = code.replace(/\["📚", paper.subjects.length \+ " subjects"\]/g, '[<BookOpen size={14} />, paper.subjects.length + " subjects"]');

code = code.replace(/🚩/g, '<Flag size={14} />');
code = code.replace(/✅/g, '<Check size={14} />');
code = code.replace(/❌/g, '<X size={14} />');
code = code.replace(/⏭/g, '<SkipForward size={14} />');

code = code.replace(/icon: "🔥"/g, 'icon: <Flame size={24} />');
code = code.replace(/icon: "📄"/g, 'icon: <FileText size={24} />');
code = code.replace(/icon: "🎯"/g, 'icon: <Target size={24} />');
code = code.replace(/icon: "⚡"/g, 'icon: <Zap size={24} />');
code = code.replace(/icon: "🏆"/g, 'icon: <Trophy size={24} />');
code = code.replace(/icon: "💯"/g, 'icon: <Award size={24} />');

code = code.replace(/<h4 style=\{\{ color: "#fff", margin: "0 0 16px", fontSize: 15 \}\}>🏅 Achievements<\/h4>/g, '<h4 style={{ color: "#fff", margin: "0 0 16px", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><Award size={18} color="#f59e0b" /> Achievements</h4>');
code = code.replace(/<h4 style=\{\{ margin: "0 0 16px", color: "#fff", fontSize: 14, fontWeight: 600 \}\}>📊 Subject Mastery<\/h4>/g, '<h4 style={{ margin: "0 0 16px", color: "#fff", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}><BarChart2 size={18} color="#6366f1" /> Subject Mastery</h4>');
code = code.replace(/<h4 style=\{\{ color: "#fff", margin: "0 0 20px", fontSize: 15 \}\}>📅 This Week's Activity<\/h4>/g, `<h4 style={{ color: "#fff", margin: "0 0 20px", fontSize: 15, display: "flex", alignItems: "center", gap: 8 }}><TrendingUp size={18} color="#10b981" /> This Week's Activity</h4>`);

// Leaderboard emojis
code = code.replace(/🔥 Streak/g, '<span style={{display:"flex",alignItems:"center",gap:6}}><Flame size={14} /> Streak</span>');
code = code.replace(/🎯 Accuracy/g, '<span style={{display:"flex",alignItems:"center",gap:6}}><Target size={14} /> Accuracy</span>');
code = code.replace(/<p style=\{\{ fontSize:32, marginBottom:8 \}\}>🏆<\/p>/g, '<div style={{ display:"inline-block", marginBottom:8 }}><Trophy size={32} color="rgba(255,255,255,0.4)" /></div>');
code = code.replace(/const medals = \["🥇","🥈","🥉"\];/g, 'const medals = [<Medal key={1} size={20} color="#fff" />, <Medal key={2} size={20} color="#fff" />, <Medal key={3} size={20} color="#fff" />];');
code = code.replace(/streak \?\? 0\}🔥<\/div>/g, 'streak ?? 0} <Flame size={16} color="#f97316" style={{verticalAlign:"text-bottom"}} /></div>');

const oldMap = `          <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 4 }}>
            {allQs.map((q2, i) => {
              const done = answers[q2.id] !== undefined;
              const isCur = i === current;
              const isFlag = flagged.has(q2.id);
              return (
                <button key={i} onClick={() => setCurrent(i)}
                  style={{ padding: "6px 0", borderRadius: 6, border: isCur ? "2px solid #6366f1" : "1px solid transparent", background: isFlag ? "rgba(245,158,11,0.3)" : done ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)", color: isCur ? "#a5b4fc" : done ? "#c4b5fd" : "rgba(255,255,255,0.4)", fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',monospace", fontWeight: 700 }}>
                  {i + 1}
                </button>
              );
            })}
          </div>`;

const newMap = `          {['Physics', 'Chemistry', 'Mathematics'].map(subj => {
            const subjQs = allQs.map((q, i) => ({ ...q, globalIndex: i })).filter(q => q.topic === subj);
            if (subjQs.length === 0) return null;
            return (
              <div key={subj} style={{ marginBottom: 16 }}>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", marginBottom: 8, letterSpacing: 0.5 }}>{subj}</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 4 }}>
                  {subjQs.map((q2) => {
                    const i = q2.globalIndex;
                    const done = answers[q2.id] !== undefined;
                    const isCur = i === current;
                    const isFlag = flagged.has(q2.id);
                    return (
                      <button key={i} onClick={() => setCurrent(i)}
                        style={{ padding: "6px 0", borderRadius: 6, border: isCur ? "2px solid #6366f1" : "1px solid transparent", background: isFlag ? "rgba(245,158,11,0.3)" : done ? "rgba(99,102,241,0.3)" : "rgba(255,255,255,0.06)", color: isCur ? "#a5b4fc" : done ? "#c4b5fd" : "rgba(255,255,255,0.4)", fontSize: 11, cursor: "pointer", fontFamily: "'Space Mono',monospace", fontWeight: 700, transition: "all 0.15s" }}>
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}`;

code = code.replace(oldMap, newMap);

fs.writeFileSync('src/App.jsx', code);
console.log("Success");
