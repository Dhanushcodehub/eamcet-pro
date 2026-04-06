import { useState } from "react";
import { FileText, Timer, BookOpen } from "lucide-react";
import { PAPER_SETS } from "../data/index.js";

function PapersPage({ sessions, onStart }) {
  const [filter, setFilter] = useState("All");
  const years = ["All", "2025", "2024", "2023", "2022", "2021", "2020"];
  const solved = new Set(sessions.map(s => s.paperId));
  const filtered = filter === "All" ? PAPER_SETS : PAPER_SETS.filter(p => p.year === filter);

  return (
    <div>
      <h1 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Previous Year Papers</h1>
      <p style={{ margin: "0 0 20px", color: "#64748b", fontSize: 13 }}>Practice official TG EAMCET papers from past years</p>

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
        {filtered.map(paper => {
          const done = solved.has(paper.id);
          const paperSessions = sessions.filter(s => s.paperId === paper.id);
          const best = paperSessions.length ? Math.max(...paperSessions.map(s => Math.round((s.correct / s.total) * 100))) : null;

          return (
            <div key={paper.id} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 20, transition: "all 0.2s" }}>
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

              <button onClick={() => onStart(paper)}
                style={{ width: "100%", padding: "10px", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", border: "none", borderRadius: 10, color: "#ffffff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s", boxShadow: "0 4px 12px rgba(37,99,235,0.2)" }}>
                {done ? "Retake Paper →" : "Start Paper →"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PapersPage;
