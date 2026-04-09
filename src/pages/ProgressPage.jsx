import {
  Flame, CheckCircle, FileText, Star, TrendingUp, BarChart2,
  Target, Award, Trophy, Zap, Atom, FlaskConical, Compass,
} from "lucide-react";

function ProgressPage({ user, sessions, streak, accuracy, onRequireAuth }) {
  // ── Weekly data (last 7 days) ───────────────────────────────────────────────
  const weekly = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const str = d.toISOString().split("T")[0];
    const daySessions = sessions.filter(s => s.date === str);
    const dayAcc = daySessions.length
      ? Math.round(daySessions.reduce((a, s) => a + (s.correct / s.total), 0) / daySessions.length * 100)
      : 0;
    weekly.push({ day: d.toLocaleDateString("en", { weekday: "short" }), date: str, sessions: daySessions.length, accuracy: dayAcc, isToday: i === 0 });
  }
  const maxSessions = Math.max(...weekly.map(d => d.sessions), 1);

  // ── Subject breakdown ───────────────────────────────────────────────────────
  const subjectScores = {};
  sessions.forEach(s => {
    if (s.subjectBreakdown) {
      Object.entries(s.subjectBreakdown).forEach(([subj, data]) => {
        if (!subjectScores[subj]) subjectScores[subj] = { correct: 0, total: 0 };
        subjectScores[subj].correct += data.correct;
        subjectScores[subj].total  += data.total;
      });
    }
  });
  const subjects = [
    { name: "Physics",     color: "#2563eb", icon: <Atom size={14} color="#2563eb" /> },
    { name: "Chemistry",   color: "#10b981", icon: <FlaskConical size={14} color="#10b981" /> },
    { name: "Mathematics", color: "#f59e0b", icon: <Compass size={14} color="#f59e0b" /> },
  ];

  // ── Derived stats ───────────────────────────────────────────────────────────
  const totalPapers  = sessions.length;
  const bestScore    = totalPapers ? Math.max(...sessions.map(s => Math.round((s.correct / s.total) * 100))) : 0;
  const avgScore     = totalPapers ? Math.round(sessions.reduce((a, s) => a + (s.correct / s.total), 0) / totalPapers * 100) : 0;
  const thisWeekCount = weekly.reduce((a, d) => a + d.sessions, 0);

  // ── Achievements ────────────────────────────────────────────────────────────
  const achievements = [
    { icon: <Zap size={20} />,         label: "First Paper",    desc: "Complete 1 paper",          unlocked: totalPapers >= 1,                                       color: "#f59e0b" },
    { icon: <Flame size={20} />,       label: "3-Day Streak",   desc: "3 days in a row",            unlocked: streak >= 3,                                            color: "#f97316" },
    { icon: <FileText size={20} />,    label: "5 Papers",       desc: "Solve 5 papers",             unlocked: totalPapers >= 5,                                       color: "#2563eb" },
    { icon: <Target size={20} />,      label: "80% Accuracy",   desc: "Reach 80% accuracy",         unlocked: accuracy >= 80,                                         color: "#10b981" },
    { icon: <Flame size={20} />,       label: "7-Day Streak",   desc: "7 days in a row",            unlocked: streak >= 7,                                            color: "#f97316" },
    { icon: <Trophy size={20} />,      label: "Perfect Score",  desc: "Score 100% on a paper",      unlocked: sessions.some(s => s.correct === s.total),              color: "#3b82f6" },
    { icon: <Award size={20} />,       label: "30-Day Streak",  desc: "30 days in a row",           unlocked: streak >= 30,                                           color: "#ec4899" },
    { icon: <Star size={20} />,        label: "Top Scorer",     desc: "Score 90%+ on a paper",      unlocked: bestScore >= 90,                                        color: "#f59e0b" },
  ];
  const unlockedCount = achievements.filter(a => a.unlocked).length;

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
            animation: "pgFadeUp 0.4s ease forwards"
          }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, #10b981, #059669)", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <TrendingUp size={28} />
            </div>
            <h2 style={{ fontSize: "22px", fontWeight: "700", color: "#0f172a", marginBottom: "12px", fontFamily: "'Sora', sans-serif" }}>
              Unlock Your Insights
            </h2>
            <p style={{ color: "#64748b", fontSize: "14px", lineHeight: "1.6", marginBottom: "32px", fontFamily: "'Sora', sans-serif" }}>
              Sign in to see your personalized weekly activity, subject accuracy charts, and track your achievements.
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
              Sign In to View Progress
            </button>
          </div>
        </div>
      )}

      <div style={{ filter: !user ? "blur(3px)" : "none", pointerEvents: !user ? "none" : "auto", userSelect: !user ? "none" : "auto", opacity: !user ? 0.7 : 1, transition: "filter 0.3s, opacity 0.3s" }}>
      <style>{`
        @keyframes pgFadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .pg-fade   { animation: pgFadeUp 0.38s ease both; }
        .pg-f1 { animation-delay:0.04s; } .pg-f2 { animation-delay:0.09s; }
        .pg-f3 { animation-delay:0.13s; } .pg-f4 { animation-delay:0.17s; }
        .pg-f5 { animation-delay:0.21s; }

        .pg-stats-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; margin-bottom:22px; }
        .pg-mid-grid   { display:grid; grid-template-columns:1.7fr 1fr;    gap:18px; margin-bottom:22px; }
        .pg-ach-grid   { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }

        .pg-card { border-radius:16px; padding:20px; background:#ffffff; border:1px solid #e2e8f0; }
        .pg-stat-card { border-radius:16px; padding:18px 16px; background:#ffffff; position:relative; overflow:hidden; transition:transform 0.2s, box-shadow 0.2s; }
        .pg-stat-card:hover { transform:translateY(-3px); box-shadow:0 12px 28px #64748b; }

        .pg-bar-col { flex:1; display:flex; flex-direction:column; align-items:center; gap:0; cursor:default; position:relative; }
        .pg-bar-col:hover .pg-bar-inner { filter:brightness(1.2); }
        .pg-bar-col:hover .pg-bar-tooltip { opacity:1; transform:translateX(-50%) translateY(0); }

        .pg-bar-tooltip { position:absolute; bottom:calc(100% + 6px); left:50%; transform:translateX(-50%) translateY(4px); background:#1e2236; border:1px solid #f1f5f9; border-radius:8px; padding:5px 10px; font-size:11px; color:#0f172a; white-space:nowrap; opacity:0; transition:opacity 0.18s, transform 0.18s; pointer-events:none; z-index:10; }

        .pg-ach-card { border-radius:14px; padding:16px 14px; text-align:center; transition:transform 0.18s, box-shadow 0.18s; position:relative; overflow:hidden; }
        .pg-ach-card.unlocked:hover { transform:translateY(-3px); box-shadow:0 8px 24px #64748b; }

        @media (max-width:900px) {
          .pg-stats-grid { grid-template-columns:repeat(2,1fr); }
          .pg-mid-grid   { grid-template-columns:1fr; }
          .pg-ach-grid   { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:480px) {
          .pg-stats-grid { grid-template-columns:repeat(2,1fr); gap:10px; }
          .pg-ach-grid   { grid-template-columns:repeat(2,1fr); gap:8px; }
        }
      `}</style>

      {/* Header */}
      <div className="pg-fade pg-f1" style={{ marginBottom: 26 }}>
        <h1 style={{ margin: "0 0 5px", color: "#0f172a", fontSize: 24, fontWeight: 700, letterSpacing: -0.4 }}>Your Progress</h1>
        <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>
          {totalPapers > 0
            ? `${totalPapers} paper${totalPapers !== 1 ? "s" : ""} solved · ${unlockedCount}/${achievements.length} achievements unlocked`
            : "Start solving papers to track your progress"}
        </p>
      </div>

      {/* Stats */}
      <div className="pg-stats-grid pg-fade pg-f2">
        {[
          { icon: <Flame size={20} color="#f97316" />,       value: streak,          label: "Day Streak",    sub: streak >= 3 ? "🔥 On fire!" : "Build it up",                             accent: "#f97316" },
          { icon: <CheckCircle size={20} color="#10b981" />, value: `${accuracy}%`,  label: "Avg Accuracy",  sub: accuracy >= 70 ? "Excellent" : accuracy >= 50 ? "Keep going" : "Needs work", accent: "#10b981" },
          { icon: <FileText size={20} color="#2563eb" />,    value: totalPapers,     label: "Papers Solved", sub: `${thisWeekCount} this week`,                                              accent: "#2563eb" },
          { icon: <Star size={20} color="#f59e0b" />,        value: `${bestScore}%`, label: "Best Score",    sub: "All time high",                                                           accent: "#f59e0b" },
        ].map(({ icon, value, label, sub, accent }) => (
          <div key={label} className="pg-stat-card" style={{ border: `1px solid ${accent}20` }}>
            <div style={{ position: "absolute", top: -16, right: -16, width: 70, height: 70, borderRadius: "50%", background: `${accent}12`, pointerEvents: "none" }} />
            <div style={{ display: "inline-flex", padding: "7px", borderRadius: 10, background: `${accent}14`, border: `1px solid ${accent}26`, marginBottom: 13 }}>{icon}</div>
            <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 26, fontWeight: 700, color: accent, letterSpacing: -1, lineHeight: 1 }}>{value}</div>
            <div style={{ fontSize: 12, color: "#334155", marginTop: 4, fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: 10, color: `${accent}aa`, marginTop: 5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>{sub}</div>
          </div>
        ))}
      </div>

      {/* Bar Chart + Subject */}
      <div className="pg-mid-grid pg-fade pg-f3">
        {/* Weekly Bar Chart */}
        <div className="pg-card">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(16,185,129,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <TrendingUp size={16} color="#10b981" />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Weekly Activity</div>
                <div style={{ color: "#64748b", fontSize: 11 }}>Papers solved per day</div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Space Mono',monospace", fontSize: 18, fontWeight: 700, color: "#10b981" }}>{thisWeekCount}</div>
              <div style={{ fontSize: 10, color: "#64748b" }}>this week</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 130, paddingBottom: 2 }}>
            {weekly.map((d, i) => {
              const heightPct = d.sessions > 0 ? Math.max(18, (d.sessions / maxSessions) * 100) : 0;
              return (
                <div key={i} className="pg-bar-col">
                  <div className="pg-bar-tooltip" style={{ left: "50%", transform: "translateX(-50%) translateY(4px)" }}>
                    {d.sessions} paper{d.sessions !== 1 ? "s" : ""}{d.accuracy > 0 ? ` · ${d.accuracy}% acc` : ""}
                  </div>
                  <div style={{ fontSize: 10, color: "#64748b", fontFamily: "'Space Mono',monospace", minHeight: 16, display: "flex", alignItems: "center", marginBottom: 4 }}>
                    {d.sessions > 0 ? d.sessions : ""}
                  </div>
                  <div style={{ width: "100%", flex: 1, display: "flex", alignItems: "flex-end", position: "relative" }}>
                    <div style={{ width: "100%", height: "100%", background: "#ffffff", borderRadius: 6, position: "absolute", bottom: 0 }} />
                    <div className="pg-bar-inner"
                      style={{ width: "100%", height: d.sessions > 0 ? `${heightPct}%` : "4px", background: d.isToday ? "linear-gradient(180deg,#10b981,#059669)" : d.sessions > 0 ? "linear-gradient(180deg,#818cf8,#2563eb)" : "#e2e8f0", borderRadius: "6px 6px 0 0", transition: "height 0.6s cubic-bezier(0.4,0,0.2,1)", position: "relative", boxShadow: d.sessions > 0 ? "0 0 10px #64748b" : "none" }}
                    />
                  </div>
                  <div style={{ fontSize: 11, color: d.isToday ? "#3b82f6" : "#64748b", marginTop: 8, fontWeight: d.isToday ? 700 : 400 }}>{d.day}</div>
                  {d.isToday && <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#2563eb", marginTop: 2 }} />}
                </div>
              );
            })}
          </div>

          {sessions.length > 0 && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: "1px solid #ffffff", display: "flex", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg,#818cf8,#2563eb)" }} />
                <span style={{ fontSize: 10, color: "#64748b" }}>Past days</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div style={{ width: 10, height: 10, borderRadius: 3, background: "linear-gradient(135deg,#10b981,#059669)" }} />
                <span style={{ fontSize: 10, color: "#64748b" }}>Today</span>
              </div>
            </div>
          )}
        </div>

        {/* Subject Mastery */}
        <div className="pg-card" style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <BarChart2 size={16} color="#818cf8" />
            </div>
            <div>
              <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Subject Mastery</div>
              <div style={{ color: "#64748b", fontSize: 11 }}>Cumulative accuracy</div>
            </div>
          </div>

          {!sessions.length ? (
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "20px 0" }}>
              <BarChart2 size={28} color="#f1f5f9" />
              <p style={{ color: "#64748b", fontSize: 12, margin: 0, textAlign: "center" }}>Complete papers to see subject breakdown</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 18, flex: 1 }}>
              {subjects.map(({ name, color, icon }) => {
                const data = subjectScores[name];
                const pct = data ? Math.round((data.correct / data.total) * 100) : 0;
                const has = !!data;
                return (
                  <div key={name}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                        <span style={{ fontSize: 15 }}>{icon}</span>
                        <span style={{ color: "#334155", fontSize: 13, fontWeight: 600 }}>{name}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        {has && <span style={{ color: "#64748b", fontSize: 10 }}>{data.correct}/{data.total}</span>}
                        <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 14, fontWeight: 700, color: has ? color : "rgba(37,99,235,0.15)", minWidth: 38, textAlign: "right" }}>
                          {has ? `${pct}%` : "—"}
                        </span>
                      </div>
                    </div>
                    <div style={{ height: 8, background: "#ffffff", borderRadius: 6, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${color}bb,${color})`, borderRadius: 6, boxShadow: `0 0 8px ${color}55`, transition: "width 1.1s cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Session History */}
      {sessions.length > 0 && (
        <div className="pg-card pg-fade pg-f4" style={{ marginBottom: 22 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(99,102,241,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileText size={16} color="#818cf8" />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Recent Sessions</div>
                <div style={{ color: "#64748b", fontSize: 11 }}>Last {Math.min(sessions.length, 6)} papers</div>
              </div>
            </div>
            <span style={{ color: "#64748b", fontSize: 11 }}>{sessions.length} total</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {sessions.slice(-6).reverse().map((s, i) => {
              const pct = Math.round((s.correct / s.total) * 100);
              const good = pct >= 60;
              return (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 14px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 11 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "#f1f5f9", border: `1px solid ${good ? "rgba(16,185,129,0.25)" : "rgba(239,68,68,0.25)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Space Mono',monospace", fontSize: 11, fontWeight: 700, color: good ? "#10b981" : "#f87171" }}>{pct}%</span>
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: "#0f172a", fontSize: 13, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{s.paperLabel || "Practice Paper"}</div>
                    <div style={{ color: "#64748b", fontSize: 11, marginTop: 2 }}>{s.date}</div>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                    <div style={{ width: 56, height: 5, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${pct}%`, background: good ? "#10b981" : "#f87171", borderRadius: 3 }} />
                    </div>
                    <div style={{ textAlign: "right", minWidth: 36 }}>
                      <div style={{ color: good ? "#10b981" : "#f87171", fontSize: 13, fontWeight: 700, fontFamily: "'Space Mono',monospace" }}>{s.correct}/{s.total}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Achievements */}
      <div className="pg-card pg-fade pg-f5">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: "#f1f5f9", border: "1px solid rgba(245,158,11,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Award size={16} color="#f59e0b" />
            </div>
            <div>
              <div style={{ color: "#0f172a", fontSize: 14, fontWeight: 700 }}>Achievements</div>
              <div style={{ color: "#64748b", fontSize: 11 }}>{unlockedCount} of {achievements.length} unlocked</div>
            </div>
          </div>
          <div style={{ width: 80, height: 5, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(unlockedCount / achievements.length) * 100}%`, background: "linear-gradient(90deg,#f59e0b,#f97316)", borderRadius: 3 }} />
          </div>
        </div>

        <div className="pg-ach-grid">
          {achievements.map(({ icon, label, desc, unlocked, color }) => (
            <div key={label} className={`pg-ach-card ${unlocked ? "unlocked" : ""}`}
              style={{ background: unlocked ? `${color}10` : "#ffffff", border: `1px solid ${unlocked ? `${color}30` : "#e2e8f0"}`, opacity: unlocked ? 1 : 0.45 }}>
              {unlocked && <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", width: 50, height: 50, borderRadius: "50%", background: `${color}20`, pointerEvents: "none" }} />}
              <div style={{ width: 40, height: 40, borderRadius: 11, background: unlocked ? `${color}18` : "#ffffff", border: `1px solid ${unlocked ? `${color}30` : "#e2e8f0"}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px", color: unlocked ? color : "#64748b" }}>
                {icon}
              </div>
              <div style={{ color: unlocked ? "#0f172a" : "#64748b", fontSize: 12, fontWeight: 700, marginBottom: 4, lineHeight: 1.3 }}>{label}</div>
              <div style={{ color: "#64748b", fontSize: 10, lineHeight: 1.4 }}>{desc}</div>
              {unlocked && (
                <div style={{ marginTop: 8, display: "inline-flex", alignItems: "center", gap: 4, background: `${color}15`, border: `1px solid ${color}30`, borderRadius: 20, padding: "2px 8px" }}>
                  <CheckCircle size={9} color={color} />
                  <span style={{ fontSize: 9, color, fontWeight: 700 }}>Unlocked</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProgressPage;
