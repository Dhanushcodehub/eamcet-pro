import { useState } from "react";
import {
  Flame, CheckCircle, FileText, Star, BarChart2,
  Target, Atom, FlaskConical, Compass, Timer, Check, Zap, Lock
} from "lucide-react";
import { PAPER_SETS } from "../data/index.js";
import { getTodayStr } from "../lib/utils.js";

// ─── Stat Card ──────────────────────────────────────────────────────────────────
function StatCard({ icon, value, label, accent, sublabel }) {
  return (
    <div className="stat-card-new" style={{ background: "#ffffff", border: `1px solid ${accent}1e` }}>
      <div style={{ position: "absolute", top: -12, right: -12, width: 60, height: 60, borderRadius: "50%", background: `${accent}12`, pointerEvents: "none" }} />
      <div style={{ display: "inline-flex", padding: "7px", borderRadius: 10, background: `${accent}14`, border: `1px solid ${accent}26`, marginBottom: 12 }}>
        {icon}
      </div>
      <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 24, fontWeight: 700, color: accent, letterSpacing: -1, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 4, fontWeight: 500 }}>{label}</div>
      {sublabel && (
        <div style={{ fontSize: 9, color: `${accent}aa`, marginTop: 4, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{sublabel}</div>
      )}
    </div>
  );
}

// ─── Streak Calendar ────────────────────────────────────────────────────────────
function StreakCalendar({ sessions, streak }) {
  const dates = new Set(sessions.map(s => s.date));
  const DAYS = 35;
  const cells = [];
  for (let i = DAYS - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const str = d.toISOString().split("T")[0];
    cells.push({
      str,
      active: dates.has(str),
      isToday: i === 0,
      label: d.toLocaleDateString("en", { weekday: "short", month: "short", day: "numeric" }),
    });
  }

  const activeDays = cells.filter(c => c.active).length;
  const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "16px 16px 14px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f1f5f9", border: "1px solid rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Flame size={14} color="#3b82f6" />
          </div>
          <div>
            <h4 style={{ margin: 0, color: "#0f172a", fontSize: 13, fontWeight: 700 }}>Streak Calendar</h4>
            <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Last 5 weeks</p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 5, background: "#f1f5f9", border: "1px solid rgba(249,115,22,0.25)", borderRadius: 20, padding: "4px 10px" }}>
          <Flame size={11} color="#f97316" />
          <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, color: "#f97316" }}>{streak}</span>
          <span style={{ fontSize: 9, color: "#64748b", fontWeight: 600 }}>day</span>
        </div>
      </div>

      {/* Day labels */}
      <div className="sc-grid" style={{ marginBottom: 3 }}>
        {DAY_LABELS.map((d, i) => (
          <div key={i} style={{ textAlign: "center", fontSize: 8, fontWeight: 700, color: "rgba(37,99,235,0.1)", letterSpacing: 0.2, paddingBottom: 3 }}>{d}</div>
        ))}
      </div>

      {/* Cells */}
      <div className="sc-grid">
        {cells.map((cell, idx) => {
          let bg = "#ffffff", border = "1px solid #e2e8f0", shadow = "none", outline = "none";
          if (cell.active) { bg = "linear-gradient(135deg, #f97316, #ea580c)"; border = "1px solid transparent"; shadow = "0 1px 3px rgba(0,0,0,0.05)"; }
          if (cell.isToday && !cell.active) { bg = "#e2e8f0"; border = "1px solid rgba(249,115,22,0.42)"; outline = "2px solid rgba(249,115,22,0.18)"; }
          if (cell.isToday && cell.active) { shadow = "0 0 8px #f97316"; outline = "2px solid #fb923c"; }
          return (
            <div key={idx} className="sc-cell" title={`${cell.label}${cell.active ? " 🔥 Streak" : ""}`}
              style={{ background: bg, border, boxShadow: shadow, outline, outlineOffset: "2px" }}>
              {cell.active && <div style={{ color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center" }}><Flame size={12} strokeWidth={2.5} fill="currentColor" /></div>}
              {cell.isToday && !cell.active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#f97316" }} />}
            </div>
          );
        })}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: "linear-gradient(135deg,#f97316,#ea580c)" }} />
            <span style={{ color: "#64748b", fontSize: 9 }}>Streak</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <div style={{ width: 8, height: 8, borderRadius: 2, background: "#ffffff", border: "1px solid #64748b" }} />
            <span style={{ color: "#64748b", fontSize: 9 }}>Today</span>
          </div>
        </div>
        <span style={{ color: "#64748b", fontSize: 9 }}>
          <span style={{ color: "#f97316", fontWeight: 700 }}>{activeDays}</span> active
        </span>
      </div>
    </div>
  );
}

// ─── Subject Progress ───────────────────────────────────────────────────────────
function SubjectProgress({ sessions }) {
  const subjectScores = {};
  sessions.forEach(s => {
    if (s.subjectBreakdown) {
      Object.entries(s.subjectBreakdown).forEach(([subj, data]) => {
        if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
        subjectScores[subj].correct += data.correct;
        subjectScores[subj].total += data.total;
      });
    }
  });

  const subjects = [
    { name: "Physics", color: "#2563eb", icon: <Atom size={14} color="#2563eb" /> },
    { name: "Chemistry", color: "#10b981", icon: <FlaskConical size={14} color="#10b981" /> },
    { name: "Mathematics", color: "#f59e0b", icon: <Compass size={14} color="#f59e0b" /> },
  ];

  return (
    <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "16px 16px", display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f1f5f9", border: "1px solid rgba(37,99,235,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <BarChart2 size={14} color="#818cf8" />
        </div>
        <div>
          <h4 style={{ margin: 0, color: "#0f172a", fontSize: 13, fontWeight: 700 }}>Subject Mastery</h4>
          <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>Performance per subject</p>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        {subjects.map(({ name, color, icon }) => {
          const data = subjectScores[name];
          const pct = data ? Math.round((data.correct / data.total) * 100) : 0;
          const hasData = !!data;
          return (
            <div key={name}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13 }}>{icon}</span>
                  <span style={{ color: "#334155", fontSize: 12, fontWeight: 600 }}>{name}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  {hasData && <span style={{ color: "#64748b", fontSize: 9 }}>{data.correct}/{data.total}</span>}
                  <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 12, fontWeight: 700, color: hasData ? color : "rgba(37,99,235,0.15)", minWidth: 34, textAlign: "right" }}>
                    {hasData ? `${pct}%` : "—"}
                  </span>
                </div>
              </div>
              <div style={{ height: 6, background: "#ffffff", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg, ${color}bb, ${color})`, borderRadius: 4, boxShadow: hasData ? `0 0 7px ${color}55` : "none", transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)" }} />
              </div>
            </div>
          );
        })}
      </div>

      {!sessions.length && (
        <p style={{ color: "#64748b", fontSize: 11, margin: "10px 0 0", textAlign: "center" }}>
          Complete papers to see subject breakdown
        </p>
      )}
    </div>
  );
}

// ─── Dashboard ──────────────────────────────────────────────────────────────
function Dashboard({ user, plan = 'free', streak, accuracy, totalPapers, sessions, onStartPaper, onRequireAuth }) {
  const today = getTodayStr();
  const solvedToday = sessions.filter(s => s.date === today).length;
  const todayPaper = PAPER_SETS[Math.floor(new Date().getDate() % PAPER_SETS.length)];
  const bestScore = sessions.length
    ? Math.max(...sessions.map(s => Math.round((s.correct / s.total) * 100)))
    : 0;

  return (
    <div style={{ position: "relative", ...(user ? { minHeight: "80vh" } : { height: "calc(100vh - 100px)", overflow: "hidden" }) }}>
      {!user && (
        <div style={{
          position: "absolute", inset: -16, zIndex: 10,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          backgroundColor: "rgba(248, 250, 255, 0.5)",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          borderRadius: 24,
        }}>
          <div style={{
            background: "#ffffff", padding: "36px", borderRadius: "24px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.08)", textAlign: "center", maxWidth: "400px",
            border: "1px solid rgba(37,99,235,0.1)",
            animation: "dashFadeUp 0.4s ease forwards"
          }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #2563eb, #1d4ed8)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <BarChart2 size={28} />
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "12px", fontFamily: "'Sora', sans-serif" }}>
              Your Data Awaits
            </h2>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "32px", fontFamily: "'Sora', sans-serif" }}>
              Sign in to track your overall EAMCET progress, deeply analyze subject mastery, and predict your exam readiness.
            </p>
            <button 
              onClick={onRequireAuth}
              style={{
                width: "100%", padding: "14px", borderRadius: "12px", border: "none",
                background: "#2563eb", color: "#ffffff", fontSize: "15px", fontWeight: "600",
                fontFamily: "'Sora', sans-serif", cursor: "pointer", transition: "background 0.2s"
              }}
              onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'}
              onMouseOut={e => e.currentTarget.style.background = '#2563eb'}
            >
              Sign In to View Dashboard
            </button>
          </div>
        </div>
      )}

      <div style={{ filter: !user ? "blur(3px)" : "none", pointerEvents: !user ? "none" : "auto", userSelect: !user ? "none" : "auto", opacity: !user ? 0.7 : 1, transition: "filter 0.3s, opacity 0.3s" }}>
        <style>{`
          .dash-grid-mid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
          @media (max-width: 860px) { .dash-grid-mid { grid-template-columns: 1fr; } }

          @keyframes dashFadeUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
          .dash-fade { animation: dashFadeUp 0.36s ease both; }
          .dash-f1 { animation-delay: 0.03s; } .dash-f2 { animation-delay: 0.08s; }
          .dash-f3 { animation-delay: 0.12s; } .dash-f4 { animation-delay: 0.16s; }
          .dash-f5 { animation-delay: 0.20s; } .dash-f6 { animation-delay: 0.24s; }

          .stat-card-new { border-radius: 16px; padding: 18px 16px; position: relative; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; }
          .stat-card-new:hover { transform: translateY(-3px); box-shadow: 0 10px 28px #64748b; }

          .activity-row { display: flex; align-items: center; justify-content: space-between; padding: 11px 14px; border-radius: 11px; margin-bottom: 7px; border: 1px solid #ffffff; background: #ffffff; transition: background 0.15s, border-color 0.15s; }
          .activity-row:hover { background: #ffffff; border-color: #ffffff; }

          .today-card-btn { padding: 10px 20px; background: linear-gradient(135deg, #2563eb, #1d4ed8); border: none; border-radius: 10px; color: #ffffff; box-shadow: 0 4px 12px rgba(37,99,235,0.25); font-size: 13px; font-weight: 700; cursor: pointer; font-family: 'Sora', sans-serif; white-space: nowrap; transition: opacity 0.15s, transform 0.15s, box-shadow 0.15s; flex-shrink: 0; }
          .today-card-btn:hover { opacity: 0.9; transform: translateY(-2px); box-shadow: 0 6px 16px rgba(37,99,235,0.4); }

          .sc-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
          .sc-cell { aspect-ratio: 1; border-radius: 4px; position: relative; cursor: default; transition: transform 0.15s, filter 0.15s; display: flex; align-items: center; justify-content: center; }
          .sc-cell:hover { transform: scale(1.3); z-index: 3; filter: brightness(1.15); }
          .sc-cell svg { pointer-events: none; }
        `}</style>

        {/* Header */}
        <div className="dash-fade dash-f1" style={{ marginBottom: 18 }}>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#0f172a", letterSpacing: -0.4, display: "flex", alignItems: "center", gap: 10 }}>
            Welcome back!
            <span style={{ display: "inline-flex", padding: "3px 10px", background: "#f1f5f9", border: "1px solid rgba(249,115,22,0.28)", borderRadius: 20, alignItems: "center", gap: 5 }}>
              <Flame size={13} color="#f97316" />
              <span style={{ fontSize: 12, fontWeight: 700, color: "#f97316", fontFamily: "'Space Mono',monospace" }}>{streak}</span>
            </span>
          </h1>
          <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: 12 }}>
            {solvedToday > 0
              ? `Great! You've solved ${solvedToday} paper${solvedToday > 1 ? "s" : ""} today. Keep it up!`
              : "Keep your streak alive — solve today's paper"}
          </p>
        </div>

        {/* Free plan upgrade banner */}
        {user && plan === 'free' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'linear-gradient(90deg,#eff6ff,#f0f9ff)', border: '1px solid #bfdbfe', borderRadius: 14, padding: '14px 18px', marginBottom: 18, flexWrap: 'wrap' }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Zap size={18} color='white' />
            </div>
            <div style={{ flex: 1, minWidth: 180 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#0f172a' }}>You're on the Free Plan</div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>Unlock full mock tests, deep analytics, rank predictor & more</div>
            </div>
            <a href='/pricing' style={{ background: '#2563eb', color: 'white', borderRadius: 10, padding: '9px 18px', fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'Sora,sans-serif', whiteSpace: 'nowrap', flexShrink: 0 }}>Upgrade → ₹199/mo</a>
          </div>
        )}

        {/* Stat Cards */}
        <div className="grid-4 dash-fade dash-f2" style={{ marginBottom: 18 }}>
          <StatCard icon={<Flame size={20} color="#f97316" />} value={streak} label="Day Streak" accent="#f97316" sublabel={streak >= 3 ? "On fire!" : "Build it up"} />
          <StatCard icon={<CheckCircle size={20} color="#10b981" />} value={`${accuracy}%`} label="Accuracy" accent="#10b981" sublabel={accuracy >= 70 ? "Excellent" : accuracy >= 50 ? "Good" : "Needs work"} />
          <StatCard icon={<FileText size={20} color="#2563eb" />} value={totalPapers} label="Papers Done" accent="#2563eb" sublabel={`${solvedToday} today`} />
          <StatCard icon={<Star size={20} color="#f59e0b" />} value={`${bestScore}%`} label="Best Score" accent="#f59e0b" sublabel="All time high" />
        </div>

        {/* Today's Challenge */}
        <div className="dash-fade dash-f3" style={{ position: "relative", overflow: "hidden", background: "linear-gradient(135deg, rgba(99,102,241,0.13) 0%, #e2e8f0 100%)", border: "1px solid rgba(99,102,241,0.26)", borderRadius: 16, padding: "18px 20px", marginBottom: 18 }}>
          <div style={{ position: "absolute", top: -28, right: -28, width: 110, height: 110, borderRadius: "50%", background: "rgba(99,102,241,0.09)", pointerEvents: "none" }} />
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 14, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7, flexWrap: "wrap" }}>
                <span style={{ background: "#f97316", color: "#ffffff", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: 0.7, textTransform: "uppercase" }}>Today's Challenge</span>
                {solvedToday > 0 && (
                  <span style={{ background: "rgba(16,185,129,0.14)", border: "1px solid #64748b", color: "#10b981", fontSize: 9, fontWeight: 800, padding: "2px 8px", borderRadius: 20, letterSpacing: 0.7, textTransform: "uppercase" }}>✓ Completed</span>
                )}
              </div>
              <h3 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 15, fontWeight: 700, letterSpacing: -0.2 }}>{todayPaper.label}</h3>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 3 }}><FileText size={11} /> {todayPaper.questions} Questions</span>
                <span style={{ color: "#64748b", fontSize: 11, display: "flex", alignItems: "center", gap: 3 }}><Timer size={11} /> {todayPaper.duration} mins</span>
                <span style={{ color: "#64748b", fontSize: 11 }}>{todayPaper.subjects.join(" · ")}</span>
              </div>
            </div>
            <button className="today-card-btn" onClick={() => onStartPaper(todayPaper)}>
              {solvedToday > 0 ? "Retake →" : "Start Now →"}
            </button>
          </div>
        </div>

        {/* Streak Calendar + Subject Mastery */}
        <div className="dash-grid-mid dash-fade dash-f4" style={{ marginBottom: 18 }}>
          <StreakCalendar sessions={sessions} streak={streak} />
          <SubjectProgress sessions={sessions} />
        </div>

        {/* Recent Activity */}
        <div className="dash-fade dash-f5" style={{ paddingBottom: "32px"}}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <h3 style={{ margin: 0, color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Recent Activity</h3>
            {sessions.length > 0 && (
              <span style={{ color: "#64748b", fontSize: 11 }}>{sessions.length} session{sessions.length !== 1 ? "s" : ""} total</span>
            )}
          </div>

          {sessions.length === 0 ? (
            <div style={{ textAlign: "center", padding: "28px 16px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 13 }}>
              <div style={{ width: 40, height: 40, borderRadius: 11, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.18)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" }}>
                <FileText size={18} color="#2563eb" />
              </div>
              <p style={{ color: "#64748b", fontSize: 12, margin: "0 0 3px" }}>No sessions yet</p>
              <p style={{ color: "rgba(37,99,235,0.1)", fontSize: 11, margin: 0 }}>Start your first paper to see activity here</p>
            </div>
          ) : (
            sessions.slice(-5).reverse().map((s, i) => {
              const pct = Math.round((s.correct / s.total) * 100);
              const good = pct >= 60;
              return (
                <div key={i} className="activity-row">
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: good ? "#f1f5f9" : "#f1f5f9", border: `1px solid ${good ? "rgba(16,185,129,0.22)" : "rgba(239,68,68,0.22)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      {good ? <CheckCircle size={14} color="#10b981" /> : <Target size={14} color="#f87171" />}
                    </div>
                    <div>
                      <p style={{ margin: 0, color: "#0f172a", fontSize: 12, fontWeight: 600 }}>{s.paperLabel || "Practice Paper"}</p>
                      <p style={{ margin: "2px 0 0", color: "#64748b", fontSize: 10 }}>{s.date}</p>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <div style={{ width: 52, height: 4, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: good ? "#10b981" : "#f87171", borderRadius: 3 }} />
                    </div>
                    <div style={{ textAlign: "right", minWidth: 44 }}>
                      <p style={{ margin: 0, color: good ? "#10b981" : "#f87171", fontSize: 13, fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{s.correct}/{s.total}</p>
                      <p style={{ margin: 0, color: "#64748b", fontSize: 10 }}>{pct}%</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
