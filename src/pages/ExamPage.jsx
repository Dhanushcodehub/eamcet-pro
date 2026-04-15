import { useState, useEffect, useRef } from "react";
import { PenTool, Timer, Flag, Check, X, SkipForward, Zap, FileText } from "lucide-react";
import { QUESTION_BANK } from "../data/index.js";

function ExamPage({ paper, onSubmit, onExit }) {
  const allQs = paper.subjects.flatMap(subj =>
    (QUESTION_BANK[paper.id]?.[subj] || []).map(q => ({ ...q, subject: subj }))
  );

  // Guard: no questions yet
  if (allQs.length === 0) {
    return (
      <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, padding: 32, textAlign: "center" }}>
        <div style={{ width:64, height:64, borderRadius:18, background:'linear-gradient(135deg,#eff6ff,#dbeafe)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:8 }}>
          <FileText size={32} color="#2563eb" />
        </div>
        <h2 style={{ margin: 0, color: "#0f172a", fontSize: 22, fontWeight: 700 }}>Questions Coming Soon</h2>
        <p style={{ margin: 0, color: "#64748b", fontSize: 14, maxWidth: 380, lineHeight: 1.6 }}>
          The question set for <strong>{paper.label}</strong> hasn't been added yet. Check back later!
        </p>
        <button onClick={onExit} style={{ marginTop: 8, padding: "10px 28px", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", borderRadius: 10, color: "#ffffff", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif" }}>
          ← Back to Papers
        </button>
      </div>
    );
  }

  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState(paper.duration * 60);
  const [showConfirm, setShowConfirm] = useState(false);
  const [flagged, setFlagged] = useState(new Set());
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timerRef.current); handleSubmit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  const handleSubmit = () => {
    clearInterval(timerRef.current);
    let correct = 0;
    const subjectBreakdown = {};
    const questionResults = allQs.map(q => {
      const subj = q.subject;
      if (!subjectBreakdown[subj]) subjectBreakdown[subj] = { correct: 0, total: 0, wrong: 0, skipped: 0 };
      subjectBreakdown[subj].total++;
      const userAns = answers[q.id];
      const isCorrect = userAns === q.ans;
      if (userAns === undefined) subjectBreakdown[subj].skipped++;
      else if (isCorrect) { correct++; subjectBreakdown[subj].correct++; }
      else subjectBreakdown[subj].wrong++;
      return { ...q, userAnswer: userAns, isCorrect, subject: subj };
    });
    onSubmit({
      correct, total: allQs.length, subjectBreakdown, questionResults,
      timeTaken: paper.duration * 60 - timeLeft, paperLabel: paper.label,
    });
  };

  const q = allQs[current];
  const mins = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;
  const answered = Object.keys(answers).length;
  const isLow = timeLeft < 600;
  const progress = Math.round((answered / allQs.length) * 100);

  const subjectColors = { Physics: "#2563eb", Chemistry: "#10b981", Mathematics: "#f59e0b", Biology: "#ec4899" };
  const diffColors = { Easy: { bg: "#f1f5f9", color: "#10b981" }, Medium: { bg: "#f1f5f9", color: "#f59e0b" }, Hard: { bg: "#f1f5f9", color: "#f87171" } };

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff", fontFamily: "'Sora',sans-serif", display: "flex", flexDirection: "column" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');
        * { box-sizing: border-box; }

        .exam-layout { display: flex; flex: 1; overflow: hidden; }
        .exam-main   { flex: 1; padding: 36px 44px; overflow-y: auto; }
        .exam-side   { width: 272px; background: #ffffff; border-left: 1px solid #e2e8f0; padding: 24px 18px; overflow-y: auto; flex-shrink: 0; }

        .opt-btn { display: flex; align-items: flex-start; gap: 14px; width: 100%; text-align: left; padding: 16px 20px; border-radius: 14px; font-size: 14px; line-height: 1.55; cursor: pointer; font-family: 'Sora', sans-serif; transition: all 0.18s ease; border: 1.5px solid #e2e8f0; background: #ffffff; color: #334155; }
        .opt-btn:hover { border-color: rgba(99,102,241,0.45); background: #e2e8f0; color: #0f172a; transform: translateX(3px); }
        .opt-btn.selected { border-color: #2563eb; background: rgba(99,102,241,0.18); color: #0f172a; }

        .q-nav-btn { aspect-ratio: 1; border-radius: 8px; font-size: 11px; font-weight: 700; cursor: pointer; font-family: 'Space Mono', monospace; border: 1.5px solid transparent; transition: all 0.15s; }
        .q-nav-btn:hover { transform: scale(1.08); }

        .exam-progress-bar { height: 3px; background: #e2e8f0; }
        .exam-progress-fill { height: 100%; background: linear-gradient(90deg, #2563eb, #1d4ed8); border-radius: 99px; transition: width 0.4s ease; }

        @media (max-width: 900px) {
          .exam-layout { flex-direction: column; overflow-y: auto; overflow-x: hidden; }
          .exam-main   { padding: 20px 16px; overflow: visible; flex: none; }
          .exam-side   { width: 100%; border-left: none; border-top: 1px solid #e2e8f0; order: 2; flex: none; height: auto; }
        }
        @media (max-width: 600px) {
          .exam-main { padding: 16px 12px; }
          .opt-btn { font-size: 13px; padding: 13px 15px; gap: 10px; }
        }
      `}</style>

      {/* Top Header */}
      <div style={{ background: "#ffffff", borderBottom: "1px solid #e2e8f0", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 62, flexShrink: 0 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2563eb,#1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <PenTool size={16} color="#ffffff" />
          </div>
          <div>
            <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700, letterSpacing: -0.2 }}>{paper.label}</div>
            <div style={{ color: "#64748b", fontSize: 11, marginTop: 1 }}>
              {answered} of {allQs.length} answered
              {flagged.size > 0 && <span style={{ marginLeft: 8, color: "#f59e0b" }}>• {flagged.size} flagged</span>}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 18px", borderRadius: 12, border: `1.5px solid ${isLow ? "#64748b" : "#64748b"}`, background: isLow ? "#e2e8f0" : "#e2e8f0" }}>
            <Timer size={15} color={isLow ? "#f87171" : "#3b82f6"} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 19, fontWeight: 700, color: isLow ? "#f87171" : "#3b82f6", letterSpacing: 1 }}>
              {String(mins).padStart(2, "0")}:{String(secs).padStart(2, "0")}
            </span>
          </div>
          <button onClick={() => setShowConfirm(true)} style={{ padding: "9px 20px", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", borderRadius: 10, color: "#ffffff", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", letterSpacing: 0.2, boxShadow: "0 4px 12px rgba(37,99,235,0.2)" }}>Submit Paper</button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="exam-progress-bar">
        <div className="exam-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="exam-layout">
        {/* Question Panel */}
        <div className="exam-main">
          {/* Breadcrumb badges */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22, flexWrap: "wrap" }}>
            <span style={{ background: `${subjectColors[q?.subject] || "#2563eb"}18`, color: subjectColors[q?.subject] || "#3b82f6", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${subjectColors[q?.subject] || "#2563eb"}33`, letterSpacing: 0.3 }}>{q?.subject}</span>
            {q?.topic && <span style={{ background: "#ffffff", color: "#334155", fontSize: 11, padding: "4px 12px", borderRadius: 20, border: "1px solid #e2e8f0" }}>{q.topic}</span>}
            {q?.difficulty && <span style={{ background: diffColors[q.difficulty]?.bg, color: diffColors[q.difficulty]?.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 20, border: `1px solid ${diffColors[q.difficulty]?.color}33` }}>{q.difficulty}</span>}
            <button onClick={() => setFlagged(f => { const n = new Set(f); n.has(q.id) ? n.delete(q.id) : n.add(q.id); return n; })}
              style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, background: flagged.has(q?.id) ? "#f1f5f9" : "transparent", border: `1.5px solid ${flagged.has(q?.id) ? "rgba(245,158,11,0.5)" : "#f1f5f9"}`, borderRadius: 8, color: flagged.has(q?.id) ? "#f59e0b" : "#64748b", fontSize: 12, fontWeight: 600, padding: "5px 13px", cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s" }}>
              <Flag size={13} /> {flagged.has(q?.id) ? "Flagged" : "Flag"}
            </button>
          </div>

          <div style={{ marginBottom: 6, color: "#64748b", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.8 }}>
            Question {current + 1} / {allQs.length}
          </div>
          <p style={{ color: "#0f172a", fontSize: 17, lineHeight: 1.75, fontWeight: 500, marginBottom: 30, marginTop: 0 }}>{q?.q}</p>

          {/* Options */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11, marginBottom: 36 }}>
            {q?.options.map((opt, i) => {
              const selected = answers[q.id] === i;
              return (
                <button key={i} className={`opt-btn${selected ? " selected" : ""}`} onClick={() => setAnswers(a => ({ ...a, [q.id]: i }))}>
                  <span style={{ minWidth: 28, height: 28, borderRadius: "50%", flexShrink: 0, marginTop: 1, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, background: selected ? "#2563eb" : "#e2e8f0", border: selected ? "none" : "1.5px solid #f1f5f9", color: selected ? "#ffffff" : "#64748b", transition: "all 0.18s" }}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span style={{ flex: 1 }}>{opt}</span>
                  {selected && <Check size={16} color="#818cf8" style={{ flexShrink: 0, marginTop: 3 }} />}
                </button>
              );
            })}
          </div>

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
              style={{ padding: "10px 22px", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "transparent", color: current === 0 ? "#cbd5e1" : "#0f172a", cursor: current === 0 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.15s" }}>
              ← Prev
            </button>

            {answers[q?.id] !== undefined && (
              <button onClick={() => setAnswers(a => { const n = { ...a }; delete n[q.id]; return n; })}
                style={{ padding: "10px 18px", border: "1.5px solid rgba(239,68,68,0.25)", borderRadius: 10, background: "#e2e8f0", color: "#f87171", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, fontWeight: 500, display: "flex", alignItems: "center", gap: 6 }}>
                <X size={13} /> Clear
              </button>
            )}

            <div style={{ flex: 1 }} />

            <button onClick={() => setCurrent(c => Math.min(allQs.length - 1, c + 1))} disabled={current === allQs.length - 1}
              style={{ padding: "10px 18px", border: "1.5px solid #e2e8f0", borderRadius: 10, background: "transparent", color: "#64748b", cursor: current === allQs.length - 1 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, display: "flex", alignItems: "center", gap: 6 }}>
              Skip <SkipForward size={13} />
            </button>

            <button onClick={() => setCurrent(c => Math.min(allQs.length - 1, c + 1))} disabled={current === allQs.length - 1}
              style={{ padding: "10px 26px", border: "none", borderRadius: 10, background: current === allQs.length - 1 ? "#64748b" : "linear-gradient(135deg,#2563eb,#1d4ed8)", color: "#ffffff", cursor: current === allQs.length - 1 ? "not-allowed" : "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, transition: "all 0.15s", boxShadow: current === allQs.length - 1 ? "none" : "0 4px 12px rgba(37,99,235,0.2)" }}>
              Next →
            </button>
          </div>
        </div>

        {/* Right Sidebar: Question Map */}
        <div className="exam-side">
          {/* Mini stats */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
            {[
              { label: "Done", value: answered, color: "#818cf8" },
              { label: "Left", value: allQs.length - answered, color: "#64748b" },
              { label: "Flagged", value: flagged.size, color: "#f59e0b" },
            ].map(({ label, value, color }) => (
              <div key={label} style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "10px 8px", textAlign: "center" }}>
                <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 18, fontWeight: 700, color }}>{value}</div>
                <div style={{ fontSize: 10, color: "#64748b", marginTop: 2 }}>{label}</div>
              </div>
            ))}
          </div>

          <p style={{ color: "#64748b", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14 }}>Question Map</p>

          {["Physics", "Chemistry", "Mathematics", "Biology"].map(subj => {
            const subjQs = allQs.map((q2, i) => ({ ...q2, globalIndex: i })).filter(q2 => q2.subject === subj);
            if (subjQs.length === 0) return null;
            const subjColor = subjectColors[subj] || "#2563eb";
            return (
              <div key={subj} style={{ marginBottom: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: subjColor, flexShrink: 0 }} />
                  <span style={{ color: subjColor, fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{subj}</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(32px, 1fr))", gap: 6 }}>
                  {subjQs.map((q2) => {
                    const i = q2.globalIndex;
                    const done = answers[q2.id] !== undefined;
                    const isCur = i === current;
                    const isFlag = flagged.has(q2.id);
                    return (
                      <button key={i} onClick={() => setCurrent(i)} className="q-nav-btn"
                        style={{ background: isCur ? subjColor : isFlag ? "rgba(245,158,11,0.25)" : done ? `${subjColor}28` : "#ffffff", border: isCur ? `2px solid ${subjColor}` : isFlag ? "1.5px solid #64748b" : done ? `1.5px solid ${subjColor}44` : "1.5px solid #e2e8f0", color: isCur ? "#ffffff" : isFlag ? "#f59e0b" : done ? subjColor : "#64748b", padding: "7px 0" }}>
                        {i + 1}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div style={{ marginTop: 20, padding: "14px 12px", background: "#ffffff", borderRadius: 10, border: "1px solid #ffffff" }}>
            {[
              { bg: "#2563eb", label: "Current" },
              { bg: "rgba(99,102,241,0.28)", label: "Answered" },
              { bg: "rgba(245,158,11,0.25)", label: "Flagged" },
              { bg: "#ffffff", label: "Unattempted" },
            ].map(({ bg, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 7 }}>
                <div style={{ width: 12, height: 12, borderRadius: 4, background: bg, flexShrink: 0 }} />
                <span style={{ color: "#64748b", fontSize: 10 }}>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Submit Confirm Modal */}
      {showConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(15,23,42,0.4)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100 }}>
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 20, padding: "36px 32px", width: 400, textAlign: "center", boxShadow: "0 40px 80px rgba(0,0,0,0.15)" }}>
            <div style={{ width: 56, height: 56, borderRadius: 16, background: "#f8faff", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Zap size={24} color="#3b82f6" />
            </div>
            <h3 style={{ color: "#0f172a", margin: "0 0 8px", fontSize: 20, fontWeight: 700 }}>Submit Paper?</h3>
            <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
              You've answered <span style={{ color: "#3b82f6", fontWeight: 700 }}>{answered}</span> of <span style={{ color: "#0f172a", fontWeight: 700 }}>{allQs.length}</span> questions.
              {allQs.length - answered > 0 && <> <span style={{ color: "#f87171", fontWeight: 700 }}>{allQs.length - answered}</span> left unattempted.</>}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button onClick={() => setShowConfirm(false)}
                style={{ flex: 1, padding: "12px 0", border: "1.5px solid #e2e8f0", borderRadius: 12, background: "#ffffff", color: "#475569", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 14, fontWeight: 600, transition: "background 0.15s" }}
                onMouseEnter={(e) => e.currentTarget.style.background = "#f8faff"}
                onMouseLeave={(e) => e.currentTarget.style.background = "#ffffff"}>
                Keep Going
              </button>
              <button onClick={handleSubmit}
                style={{ flex: 1, padding: "12px 0", background: "linear-gradient(135deg,#2563eb,#1d4ed8)", border: "none", borderRadius: 12, color: "#ffffff", fontWeight: 700, cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 14, boxShadow: "0 8px 16px rgba(37,99,235,0.3)" }}>
                Submit Now →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExamPage;
