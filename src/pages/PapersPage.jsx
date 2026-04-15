import { useState } from "react";
import { FileText, Timer, BookOpen, Lock, Zap } from "lucide-react";
import { PAPER_SETS } from "../data/index.js";

const FREE_PAPER_LIMIT = 3;

function PapersPage({ sessions, onStart, plan = 'free', onUpgrade }) {
  const [filter, setFilter] = useState("All");
  const isPro = plan === 'pro' || plan === 'annual';
  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020"];
  const solved = new Set(sessions.map(s => s.paperId));
  const filtered = filter === "All" ? PAPER_SETS : PAPER_SETS.filter(p => p.year === filter);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div>
          <h1 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Previous Year Papers</h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Practice official TG EAMCET papers from past years</p>
        </div>
        {!isPro && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: '#fef3c7', border: '1px solid #fde68a', borderRadius: 12, padding: '10px 16px' }}>
            <Lock size={14} color="#d97706" />
            <span style={{ fontSize: 12, color: '#92400e', fontWeight: 600 }}>
              Free plan: {FREE_PAPER_LIMIT} papers/month
            </span>
            <button onClick={onUpgrade} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: 8, padding: '5px 12px', fontSize: 11, fontWeight: 700, cursor: 'pointer', fontFamily: 'Sora,sans-serif', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Zap size={11} /> Unlock All
            </button>
          </div>
        )}
      </div>

      {/* Filter Pills */}
      <div style={{ display: "flex", gap: 7, marginBottom: 20, flexWrap: "wrap" }}>
        {years.map(y => (
          <button key={y} onClick={() => setFilter(y)}
            style={{ padding: "6px 14px", borderRadius: 20, border: "1px solid #f1f5f9", background: filter === y ? "#2563eb" : "transparent", color: filter === y ? "#ffffff" : "#64748b", fontSize: 12, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontWeight: 600, transition: "all 0.15s" }}>
            {y}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
        {filtered.map((paper, idx) => {
          const done = solved.has(paper.id);
          const paperSessions = sessions.filter(s => s.paperId === paper.id);
          const best = paperSessions.length ? Math.max(...paperSessions.map(s => Math.round((s.correct / s.total) * 100))) : null;
          // Gate after FREE_PAPER_LIMIT for free plan users
          const isLocked = !isPro && idx >= FREE_PAPER_LIMIT;

          return (
            <div key={paper.id} style={{ background: "#ffffff", border: `1px solid ${isLocked ? '#e2e8f0' : '#e2e8f0'}`, borderRadius: 16, padding: 20, transition: "all 0.2s", opacity: isLocked ? 0.75 : 1, position: 'relative', overflow: 'hidden' }}>
              {isLocked && (
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(248,250,252,0.85)', backdropFilter: 'blur(2px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 2, gap: 10, borderRadius: 16 }}>
                  <Lock size={24} color="#94a3b8" />
                  <p style={{ margin: 0, fontSize: 13, color: '#475569', fontWeight: 600, textAlign: 'center' }}>Pro Only</p>
                  <button onClick={onUpgrade} style={{ background: '#2563eb', color: 'white', border: 'none', borderRadius: 10, padding: '8px 16px', fontSize: 12, fontWeight: 700, cursor: 'pointer', fontFamily: 'Sora,sans-serif', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Zap size={13} /> Upgrade to Pro
                  </button>
                </div>
              )}

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 7, flexWrap: "wrap" }}>
                    <span style={{ background: "rgba(99,102,241,0.18)", color: "#3b82f6", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>{paper.year}</span>
                    <span style={{ background: "#e2e8f0", color: "#64748b", fontSize: 9, padding: "2px 8px", borderRadius: 20 }}>{paper.shift}</span>
                    {done && <span style={{ background: "#e2e8f0", color: "#10b981", fontSize: 9, fontWeight: 700, padding: "2px 8px", borderRadius: 20 }}>Done</span>}
                  </div>
                  <h3 style={{ margin: 0, color: "#0f172a", fontSize: 14, fontWeight: 600, lineHeight: 1.4 }}>{paper.label}</h3>
                </div>
                {best !== null && (
                  <div style={{ textAlign: "right", flexShrink: 0, marginLeft: 12 }}>
                    <div style={{ fontSize: 18, fontWeight: 700, color: best >= 60 ? "#10b981" : "#f87171", fontFamily: "'Space Mono',monospace" }}>{best}%</div>
                    <div style={{ fontSize: 9, color: "#64748b" }}>Best Score</div>
                  </div>
                )}
              </div>

              <div style={{ display: "flex", gap: 12, marginBottom: 14, flexWrap: "wrap" }}>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <FileText size={11} /> {paper.questions} Qs
                </span>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <Timer size={11} /> {paper.duration} min
                </span>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                  <BookOpen size={11} /> {paper.subjects.length} subjects
                </span>
              </div>

              <button onClick={() => !isLocked && onStart(paper)}
                style={{ width: "100%", padding: "10px", background: isLocked ? "#e2e8f0" : "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", borderRadius: 10, color: isLocked ? "#94a3b8" : "#ffffff", fontSize: 13, fontWeight: 600, cursor: isLocked ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s", boxShadow: isLocked ? "none" : "0 4px 12px rgba(37,99,235,0.2)", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {isLocked ? <><Lock size={13} /> Pro Only</> : done ? 'Retake Paper →' : 'Start Paper →'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PapersPage;
