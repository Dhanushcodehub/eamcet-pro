import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, X, BarChart2, Target, Atom, FlaskConical, Compass, TrendingUp, 
  CheckCircle2, Trophy, Zap, Lock, MapPin, Building2, Crown, Sparkles, 
  ArrowLeft, ChevronRight, Layout, Info
} from "lucide-react";
import { predictRank, CATEGORIES, CATEGORY_MULTIPLIERS, COLLEGES, CATEGORY_TO_KEY } from "../data/predictorData.js";

const subjectColors = {
  Physics:     "#2563eb",
  Chemistry:   "#10b981",
  Mathematics: "#f59e0b",
  Biology:     "#ec4899",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function AnalysisPage({ data, plan = 'free', onUpgrade, onBack }) {
  const {
    correct, total, subjectBreakdown = {}, questionResults = [],
    timeTaken = 0, paperLabel = "Paper"
  } = data;

  const [tab, setTab] = useState("overview");
  const [qFilter, setQFilter] = useState("all");
  const [expandedQ, setExpandedQ] = useState(null);
  const [predCategory, setPredCategory] = useState("OC");

  const isPro = plan === 'pro' || plan === 'annual';

  const wrong   = questionResults.filter(q => !q.isCorrect && q.userAnswer !== undefined).length;
  const skipped = questionResults.filter(q => q.userAnswer === undefined).length;
  const accuracy = total ? Math.round((correct / total) * 100) : 0;
  const mins = Math.floor(timeTaken / 60);
  const secs = timeTaken % 60;

  // Topic aggregation
  const topicMap = {};
  questionResults.forEach(q => {
    if (!q.topic) return;
    const key = q.topic;
    if (!topicMap[key]) topicMap[key] = { correct: 0, total: 0, subject: q.subject };
    topicMap[key].total++;
    if (q.isCorrect) topicMap[key].correct++;
  });
  const topicEntries = Object.entries(topicMap).sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total));

  // Score ring variables
  const R = 54, C = 2 * Math.PI * R;
  const filled = C * (accuracy / 100);
  const scoreColor = accuracy >= 70 ? "#10b981" : accuracy >= 50 ? "#f59e0b" : "#f87171";
  
  const filteredQs = (qFilter === "all" ? questionResults
    : qFilter === "correct"  ? questionResults.filter(q => q.isCorrect)
    : qFilter === "wrong"    ? questionResults.filter(q => !q.isCorrect && q.userAnswer !== undefined)
    : questionResults.filter(q => q.userAnswer === undefined));

  const subjects = [
    { name: "Physics",     icon: <Atom size={16} />, color: subjectColors.Physics },
    { name: "Chemistry",   icon: <FlaskConical size={16} />, color: subjectColors.Chemistry },
    { name: "Mathematics", icon: <Compass size={16} />, color: subjectColors.Mathematics },
  ];

  return (
    <div className="an-container" style={{ maxWidth: 940, margin: "0 auto", padding: "0 10px 40px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Space+Mono:wght@700&display=swap');
        
        .an-container * { font-family: 'Sora', sans-serif; }
        .mono { font-family: 'Space Mono', monospace !important; }
        
        .premium-card { background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 24px; box-shadow: 0 8px 32px rgba(31, 38, 135, 0.05); }
        .stat-card { transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
        .stat-card:hover { transform: translateY(-4px); }
        .segmented-control { position: relative; display: flex; background: #f1f5f9; padding: 4px; border-radius: 16px; width: fit-content; max-width: 100%; overflow-x: auto; scrollbar-width: none; }
        .segmented-control::-webkit-scrollbar { display: none; }
        .segment-btn { position: relative; z-index: 1; padding: 10px 22px; border: none; background: transparent; cursor: pointer; font-family: 'Sora', sans-serif; font-size: 13.5px; font-weight: 700; color: #64748b; transition: color 0.2s; white-space: nowrap; }
        .segment-btn.active { color: #0f172a; }
        .topic-progress-bg { height: 8px; background: #f1f5f9; border-radius: 10px; overflow: hidden; position: relative; }
        .topic-progress-fill { height: 100%; border-radius: 10px; }

        @media (max-width: 640px) {
          .an-container { padding: 0 16px 40px !important; }
          .premium-card { padding: 20px !important; border-radius: 20px; }
          .score-header { flex-direction: column; align-items: flex-start !important; gap: 16px; }
          .score-overview-flex { flex-direction: column; align-items: center !important; text-align: center; gap: 24px !important; }
          .stat-grid { width: 100%; gap: 10px !important; }
          .stat-card { padding: 12px 14px !important; }
          .segment-btn { padding: 8px 10px; font-size: 11px; width: 100%; text-align: center; }
          .segmented-control { width: 100% !important; display: grid !important; grid-template-columns: repeat(2, 1fr); gap: 4px; background: #f1f5f9; padding: 4px; height: auto; }
          .segment-btn.active { color: #0f172a; }
          h1 { font-size: 22px !important; }
          .college-card { flex-direction: column !important; align-items: flex-start !important; padding: 16px !important; }
          .college-rank { text-align: left !important; border-top: 1px solid #f1f5f9; padding-top: 12px; width: 100%; }
        }
      `}</style>

      {/* Header */}
      <motion.div initial="hidden" animate="visible" variants={itemVariants} className="score-header"
        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, marginTop: 10 }}>
        <div>
          <h1 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 28, fontWeight: 800, letterSpacing: -0.8, display:"flex", alignItems:"center", gap:12 }}>
            Performance <span style={{ color: "#2563eb" }}>Analysis</span>
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#64748b", fontSize: 13.5, fontWeight: 600 }}>
            <Layout size={14} /> {paperLabel}
          </div>
        </div>
        <button onClick={onBack} 
          style={{ padding: "10px 20px", border: "1.5px solid #e2e8f0", borderRadius: 14, background: "#fff", color: "#475569", fontSize: 13.5, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", display: "flex", alignItems: "center", gap: 8, transition: "all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.transform = "translateX(-2px)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "#e2e8f0"; e.currentTarget.style.transform = "translateX(0)"; }}>
          <ArrowLeft size={16} /> Back to Papers
        </button>
      </motion.div>

      {/* Score Overview */}
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="premium-card" 
        style={{ padding: "32px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
        
        <div style={{ position: "absolute", top: -50, right: -50, width: 200, height: 200, background: "rgba(37,99,235,0.03)", borderRadius: "50%", filter: "blur(40px)" }} />
        
        <div className="score-overview-flex" style={{ display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>
          {/* Enhanced Score Ring */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ position:"absolute", inset:0, background: `radial-gradient(circle, ${scoreColor}22 0%, transparent 70%)`, filter: "blur(15px)", borderRadius: "50%" }} />
            <svg width={140} height={140} style={{ transform: "rotate(-90deg)", position: "relative" }}>
              <circle cx={70} cy={70} r={R} fill="none" stroke="#f1f5f9" strokeWidth={12} />
              <motion.circle cx={70} cy={70} r={R} fill="none" stroke={scoreColor} strokeWidth={12}
                strokeLinecap="round" strokeDasharray={`${C}`}
                initial={{ strokeDashoffset: C }}
                animate={{ strokeDashoffset: C - filled }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
            </svg>
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <span className="mono" style={{ fontSize: 32, fontWeight: 700, color: scoreColor, lineHeight: 1 }}>{accuracy}%</span>
              <span style={{ fontSize: 10, color: "#94a3b8", marginTop: 4, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5 }}>Accuracy</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ flex: 1, minWidth: 260, width: "100%" }}>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 24 }}>
              {[
                { label: "Correct", value: correct, color: "#10b981", bg: "#f0fdf4", icon: <CheckCircle2 size={14} /> },
                { label: "Wrong", value: wrong, color: "#f87171", bg: "#fef2f2", icon: <X size={14} /> },
                { label: "Skipped", value: skipped, color: "#f59e0b", bg: "#fffbeb", icon: <Info size={14} /> },
                { label: "Time", value: `${mins}m ${secs}s`, color: "#6366f1", bg: "#f5f3ff", icon: <BarChart2 size={14} /> },
              ].map(({ label, value, color, bg, icon }) => (
                <motion.div key={label} variants={itemVariants} className="stat-card"
                  style={{ background: bg, borderRadius: 16, padding: "14px 18px", border: "1px solid rgba(0,0,0,0.02)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
                    <span style={{ color }}>{icon}</span>
                    <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.8 }}>{label}</span>
                  </div>
                  <div className="mono" style={{ fontSize: 24, fontWeight: 700, color, lineHeight: 1 }}>{value}</div>
                </motion.div>
              ))}
            </div>

            {/* Subject Bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {subjects.map(({ name, icon, color }) => {
                const d = subjectBreakdown[name];
                const pct = d ? Math.round((d.correct / d.total) * 100) : 0;
                return (
                  <div key={name}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <div style={{ color, opacity: 0.8 }}>{icon}</div>
                        <span style={{ color: "#1e293b", fontSize: 12.5, fontWeight: 700 }}>{name}</span>
                      </div>
                      <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: d ? color : "#cbd5e1" }}>
                        {d ? `${pct}%` : "—"}
                      </span>
                    </div>
                    <div className="topic-progress-bg">
                      <motion.div className="topic-progress-fill" style={{ background: color }}
                        initial={{ width: 0 }} animate={{ width: `${pct}%` }} transition={{ duration: 1, delay: 0.5 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div style={{ marginBottom: 24 }}>
        <div className="segmented-control">
          {[
            { id: "overview", label: "Overview" },
            { id: "questions", label: "Solutions" },
            { id: "topics", label: "Weak Spots" },
            { id: "prediction", label: "Rank Prediction" },
          ].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className={`segment-btn ${tab === t.id ? "active" : ""}`}>
              {tab === t.id && (
                <motion.div layoutId="activeTab" 
                  style={{ position: "absolute", inset: 0, background: "#fff", borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.08)", zIndex: -1 }} 
                />
              )}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {t.id === "prediction" && (isPro ? <Sparkles size={14} color="#f59e0b" /> : <Lock size={12} color="#94a3b8" />)}
                {t.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* ── Overview Tab ── */}
        {tab === "overview" && (
          <motion.div key="overview" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
              {subjects.map(({ name, icon, color }) => {
                const d = subjectBreakdown[name];
                if (!d) return null;
                const pct = Math.round((d.correct / d.total) * 100);
                const statusColor = pct >= 70 ? "#10b981" : pct >= 50 ? "#f59e0b" : "#f87171";
                return (
                  <div key={name} className="premium-card" style={{ padding: "24px", position: "relative" }}>
                    <div style={{ position: "absolute", top: 12, right: 12 }}>
                      <div style={{ background: `${color}10`, padding: 8, borderRadius: 12, color }}>{icon}</div>
                    </div>
                    <div style={{ fontSize: 12, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>{name}</div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span className="mono" style={{ fontSize: 32, fontWeight: 700, color: statusColor }}>{pct}%</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#475569", marginTop: 4, fontWeight: 600 }}>{d.correct} / {d.total} Correct</div>
                    
                    <div style={{ display: "flex", gap: 6, marginTop: 16 }}>
                      <div style={{ flex: 1, height: 4, background: "#f1f5f9", borderRadius: 10, overflow: "hidden" }}>
                        <div style={{ height: "100%", width: `${pct}%`, background: statusColor }} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              style={{ marginTop: 20, padding: "16px 20px", background: accuracy >= 70 ? "#f0fdf4" : accuracy >= 50 ? "#fffbeb" : "#fef2f2", border: `1px solid ${accuracy >= 70 ? "#bbf7d0" : accuracy >= 50 ? "#fde68a" : "#fecaca"}`, borderRadius: 16, display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ background: "#fff", width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
                {accuracy >= 70 ? <Trophy size={18} color="#10b981" /> : accuracy >= 50 ? <TrendingUp size={18} color="#f59e0b" /> : <Target size={18} color="#f87171" />}
              </div>
              <p style={{ margin: 0, fontSize: 13.5, color: accuracy >= 70 ? "#15803d" : accuracy >= 50 ? "#b45309" : "#b91c1c", fontWeight: 700, lineHeight: 1.4 }}>
                {accuracy >= 70 ? "Legendary performance! You're clearly above the competition." : accuracy >= 50 ? "Solid effort. Sharp targeting on missed topics will skyrocket your rank." : "The base is set. Now focus on precision and review every missed question."}
              </p>
            </motion.div>
          </motion.div>
        )}

        {/* ── Questions Tab ── */}
        {tab === "questions" && (
          <motion.div key="questions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Filters */}
            <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
              {[
                { id: "all", label: "All Questions", icon: <Layout size={14} /> },
                { id: "correct", label: "Correct", icon: <CheckCircle2 size={14} />, color: "#10b981" },
                { id: "wrong", label: "Mistakes", icon: <X size={14} />, color: "#f87171" },
                { id: "skipped", label: "Skipped", icon: <Info size={14} />, color: "#f59e0b" },
              ].map(f => (
                <button key={f.id} onClick={() => setQFilter(f.id)}
                  style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 12, border: "1.5px solid", borderColor: qFilter === f.id ? (f.color || "#2563eb") : "#e2e8f0", background: qFilter === f.id ? `${(f.color || "#2563eb")}10` : "#fff", color: qFilter === f.id ? (f.color || "#2563eb") : "#64748b", fontSize: 12, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}>
                  {f.icon} {f.label}
                </button>
              ))}
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {filteredQs.map((q, ii) => {
                const origIdx = questionResults.indexOf(q);
                const isOpen = expandedQ === origIdx;
                const statusColor = q.isCorrect ? "#10b981" : q.userAnswer === undefined ? "#f59e0b" : "#f87171";
                return (
                  <motion.div layout key={origIdx} className="premium-card" 
                    style={{ padding: "18px 24px", cursor: "pointer", border: isOpen ? `1.5px solid ${statusColor}44` : "1px solid rgba(0,0,0,0.04)" }}
                    onClick={() => setExpandedQ(isOpen ? null : origIdx)}>
                    
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: `${statusColor}10`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="mono" style={{ fontSize: 13, fontWeight: 700, color: statusColor }}>{origIdx + 1}</span>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                          <span style={{ fontSize: 10, fontWeight: 800, color: subjectColors[q.subject], textTransform: "uppercase" }}>{q.subject}</span>
                          <span style={{ fontSize: 10, color: "#94a3b8" }}>•</span>
                          <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 700 }}>{q.topic}</span>
                        </div>
                        <p style={{ margin: 0, fontSize: 14, fontWeight: 600, color: "#334155", lineHeight: 1.5 }}>{q.q}</p>
                      </div>
                      <ChevronRight size={18} color="#cbd5e1" style={{ transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", transition: "transform 0.2s" }} />
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: "hidden" }}>
                          <div style={{ marginTop: 20, paddingTop: 20, borderTop: "1.5px solid #f1f5f9" }}>
                            <div style={{ display: "grid", gap: 10 }}>
                              {q.options.map((opt, oi) => {
                                const isCorrect = oi === q.ans;
                                const isUser = oi === q.userAnswer;
                                let borderColor = "#f1f5f9", bg = "#fff", labelColor = "#94a3b8";
                                if (isCorrect) { borderColor = "#10b981"; bg = "#f0fdf4"; labelColor = "#10b981"; }
                                if (isUser && !isCorrect) { borderColor = "#f87171"; bg = "#fef2f2"; labelColor = "#f87171"; }
                                
                                return (
                                  <div key={oi} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", borderRadius: 14, border: "2px solid", borderColor, background: bg }}>
                                    <div style={{ width: 24, height: 24, borderRadius: "50%", background: "#fff", border: "1.5px solid", borderColor: labelColor, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800, color: labelColor }}>
                                      {String.fromCharCode(65+oi)}
                                    </div>
                                    <span style={{ fontSize: 13.5, fontWeight: (isCorrect || isUser) ? 700 : 600, color: (isCorrect || isUser) ? "#0f172a" : "#475569" }}>{opt}</span>
                                    {isCorrect && <Check size={16} color="#10b981" style={{ marginLeft: "auto" }} />}
                                    {isUser && !isCorrect && <X size={16} color="#f87171" style={{ marginLeft: "auto" }} />}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── Topics Tab ── */}
        {tab === "topics" && (
          <motion.div key="topics" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 14 }}>
              {topicEntries.map(([topic, d]) => {
                const p = Math.round((d.correct / d.total) * 100);
                const color = p >= 60 ? "#10b981" : p >= 40 ? "#f59e0b" : "#f87171";
                const bg = p >= 60 ? "#f0fdf4" : p >= 40 ? "#fffbeb" : "#fef2f2";
                return (
                  <div key={topic} className="premium-card" style={{ padding: "20px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, fontWeight: 800, color: subjectColors[d.subject], textTransform: "uppercase", marginBottom: 4 }}>{d.subject}</div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: "#1e293b", lineHeight: 1.3 }}>{topic}</div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                      <div className="mono" style={{ fontSize: 22, fontWeight: 700, color }}>{p}%</div>
                        <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700 }}>{d.correct}/{d.total} Correct</div>
                      </div>
                    </div>
                    <div style={{ height: 8, background: "#f1f5f9", borderRadius: 10, overflow: "hidden" }}>
                      <motion.div initial={{ width: 0 }} animate={{ width: `${p}%` }} style={{ height: "100%", background: color, borderRadius: 10 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* ── Prediction Tab ── */}
        {tab === "prediction" && (
          <motion.div key="prediction" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}>
            {!isPro ? (
              <div className="premium-card" style={{ padding: "60px 40px", textAlign: "center", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ position: "absolute", top: -80, left: -80, width: 250, height: 250, background: "rgba(37,99,235,0.06)", borderRadius: "50%", filter: "blur(50px)" }} />
                <div style={{ position: "absolute", bottom: -80, right: -80, width: 250, height: 250, background: "rgba(163,58,253,0.06)", borderRadius: "50%", filter: "blur(50px)" }} />
                
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ width: 80, height: 80, borderRadius: 24, background: "linear-gradient(135deg, #f59e0b, #fbbf24)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 24, boxShadow: "0 10px 25px rgba(245,158,11,0.3)" }}>
                  <Crown size={40} color="#fff" />
                </motion.div>
                
                <h2 style={{ margin: "0 0 16px", color: "#0f172a", fontSize: 26, fontWeight: 800, letterSpacing: -0.8 }}>Unlock Pro Rankings</h2>
                <p style={{ margin: "0 0 32px", color: "#64748b", fontSize: 15, maxWidth: 460, lineHeight: 1.7, fontWeight: 500 }}>
                   Get an accurate 2025 rank estimation and discover specific college branches you qualify for based on your performance in this paper.
                </p>
                
                <div style={{ display: "flex", gap: 16, marginBottom: 40, flexWrap: "wrap", justifyContent: "center" }}>
                  {[
                    { icon: <Target size={18} />, label: "Rank AI" },
                    { icon: <Building2 size={18} />, label: "College Matcher" },
                    { icon: <Sparkles size={18} />, label: "Category Edge" }
                  ].map(feat => (
                    <div key={feat.label} style={{ background: "#fff", padding: "12px 20px", borderRadius: 16, border: "1.5px solid #f1f5f9", display: "flex", alignItems: "center", gap: 10, fontSize: 13, fontWeight: 700, color: "#1e293b", boxShadow: "0 4px 12px rgba(0,0,0,0.03)" }}>
                      <span style={{ color: "#2563eb" }}>{feat.icon}</span> {feat.label}
                    </div>
                  ))}
                </div>

                <button onClick={onUpgrade} 
                  style={{ padding: "16px 40px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", borderRadius: 18, color: "#fff", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "'Sora',sans-serif", display: "flex", alignItems: "center", gap: 10, boxShadow: "0 12px 30px rgba(37,99,235,0.3)", transition: "all 0.3s" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "scale(1.02) translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "scale(1) translateY(0)"}>
                  <Zap size={18} fill="#fff" /> Upgrade to Pro Excellence
                </button>
              </div>
            ) : (
              <PredictionComponent score={correct} category={predCategory} onCategoryChange={setPredCategory} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function PredictionComponent({ score, category, onCategoryChange }) {
  const s = Math.min(160, Math.max(0, score));
  const generalRank = predictRank(s);
  const mult = CATEGORY_MULTIPLIERS[category] || 1;
  const catRank = Math.round(generalRank / mult);
  const catKey = CATEGORY_TO_KEY[category] || "OC";
  
  const results = COLLEGES
    .filter(c => c.branches["CSE"])
    .map(c => {
      const closing = c.branches["CSE"][catKey] ?? c.branches["CSE"]["OC"] ?? null;
      if (!closing) return null;
      const ratio = catRank / closing;
      let chance;
      if (ratio <= 0.6) chance = "Safe";
      else if (ratio <= 0.85) chance = "Good";
      else if (ratio <= 1.0) chance = "Moderate";
      else chance = null;
      return { ...c, closing, chance, ratio };
    })
    .filter(c => c && c.chance)
    .sort((a,b) => a.ratio - b.ratio)
    .slice(0, 10);

  return (
    <div style={{ display: "grid", gap: 24 }}>
      <div className="premium-card" style={{ padding: "32px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32, flexWrap: "wrap", gap: 20 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 50, height: 50, borderRadius: 16, background: "linear-gradient(135deg, #f59e0b, #d97706)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(245,158,11,0.2)" }}>
              <Sparkles size={24} color="#fff" />
            </div>
            <div>
              <h3 style={{ margin: "0 0 4px", fontSize: 20, color: "#0f172a", fontWeight: 800 }}>Outcome Simulator</h3>
              <div style={{ fontSize: 13, color: "#64748b", fontWeight: 600 }}>Score Profile: {score} Units</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 13, color: "#64748b", fontWeight: 700 }}>Category:</span>
            <select value={category} onChange={e => onCategoryChange(e.target.value)} 
              style={{ padding: "10px 18px", borderRadius: 14, border: "1.5px solid #e2e8f0", background: "#f8faff", color: "#0f172a", fontSize: 14, fontWeight: 700, fontFamily: "'Sora',sans-serif", cursor: "pointer", outline: "none" }}>
              {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
          {[
            { label: "General Rank", val: generalRank, color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe" },
            { label: `${category} Rank`, val: catRank, color: "#9333ea", bg: "#f5f3ff", border: "#e9d5ff" },
          ].map(stat => (
            <div key={stat.label} style={{ background: stat.bg, padding: "24px", borderRadius: 20, border: `1px solid ${stat.border}` }}>
              <div style={{ fontSize: 11, color: stat.color, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, marginBottom: 8 }}>{stat.label}</div>
              <div className="mono" style={{ fontSize: 32, fontWeight: 700, color: stat.color }}>{stat.val.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="premium-card" style={{ padding: "32px" }}>
        <h3 style={{ margin: "0 0 24px", fontSize: 18, color: "#0f172a", fontWeight: 800, display: "flex", alignItems: "center", gap: 10 }}>
          <Building2 size={20} color="#2563eb" /> Best Fit Colleges (CSE)
        </h3>
        <div style={{ display: "grid", gap: 12 }}>
          {results.length > 0 ? results.map(col => (
            <div key={col.name} className="college-card" style={{ display: "flex", alignItems: "center", gap: 16, padding: "18px", background: "#fff", border: "1.5px solid #f1f5f9", borderRadius: 18, transition: "all 0.2s" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#f8fafc", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Building2 size={20} color="#64748b" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", gap: 6, marginBottom: 4 }}>
                  <span style={{ fontSize: 9.5, fontWeight: 800, background: col.chance === "Safe" ? "#f0fdf4" : col.chance === "Good" ? "#eff6ff" : "#fffbeb", color: col.chance === "Safe" ? "#16a34a" : col.chance === "Good" ? "#2563eb" : "#d97706", padding: "3px 10px", borderRadius: 20, border: "1px solid currentColor" }}>{col.chance}</span>
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#1e293b", marginBottom: 2 }}>{col.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 600 }}>{col.place}</div>
              </div>
              <div className="college-rank" style={{ textAlign: "right" }}>
                <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 800, textTransform: "uppercase", marginBottom: 2 }}>Closing Rank</div>
                <div className="mono" style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{col.closing.toLocaleString()}</div>
              </div>
            </div>
          )) : (
            <div style={{ textAlign: "center", padding: "40px", color: "#64748b", fontSize: 14, fontWeight: 600 }}>
              No immediate CSE matches. High competition area detected.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AnalysisPage;
