import { useState } from "react";
import { Check, X, BarChart2, Target, Atom, FlaskConical, Compass, TrendingUp, CheckCircle2, Trophy } from "lucide-react";

const subjectColors = {
  Physics:     "#2563eb",
  Chemistry:   "#10b981",
  Mathematics: "#f59e0b",
  Biology:     "#ec4899",
};

function AnalysisPage({ data, onBack }) {
  const {
    correct, total, subjectBreakdown = {}, questionResults = [],
    timeTaken = 0, paperLabel = "Paper"
  } = data;

  const [tab, setTab] = useState("overview");
  const [qFilter, setQFilter] = useState("all");
  const [expandedQ, setExpandedQ] = useState(null);

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

  // Score ring
  const R = 54, C = 2 * Math.PI * R;
  const filled = C * (accuracy / 100);
  const scoreColor = accuracy >= 70 ? "#10b981" : accuracy >= 50 ? "#f59e0b" : "#f87171";
  const scoreGrad  = accuracy >= 70 ? ["#10b981","#059669"] : accuracy >= 50 ? ["#f59e0b","#d97706"] : ["#f87171","#ef4444"];

  // Filtered questions
  const filteredQs = (qFilter === "all" ? questionResults
    : qFilter === "correct"  ? questionResults.filter(q => q.isCorrect)
    : qFilter === "wrong"    ? questionResults.filter(q => !q.isCorrect && q.userAnswer !== undefined)
    : questionResults.filter(q => q.userAnswer === undefined));

  const subjects = [
    { name: "Physics",     icon: <Atom size={14} color={subjectColors.Physics} />,     color: subjectColors.Physics },
    { name: "Chemistry",   icon: <FlaskConical size={14} color={subjectColors.Chemistry} />, color: subjectColors.Chemistry },
    { name: "Mathematics", icon: <Compass size={14} color={subjectColors.Mathematics} />,    color: subjectColors.Mathematics },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <style>{`
        @keyframes anFadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .an-fade  { animation: anFadeUp 0.36s ease both; }
        .an-f1{animation-delay:0.04s} .an-f2{animation-delay:0.09s} .an-f3{animation-delay:0.13s}
        .an-f4{animation-delay:0.17s} .an-f5{animation-delay:0.21s} .an-f6{animation-delay:0.25s}

        .an-tab-btn { padding:9px 18px; borderRadius:10px; border:none; cursor:pointer; font-family:'Sora',sans-serif; font-size:13px; font-weight:600; transition:all 0.15s; }
        .an-tab-btn.active  { background:#2563eb; color:#fff; }
        .an-tab-btn:not(.active) { background:transparent; color:#64748b; }
        .an-tab-btn:not(.active):hover { background:#f1f5f9; }

        .an-topic-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:12px; }
        @media(max-width:600px){ .an-topic-grid { grid-template-columns:1fr; } }
      `}</style>

      {/* Header */}
      <div className="an-fade an-f1" style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:24, flexWrap:"wrap", gap:12 }}>
        <div>
          <h1 style={{ margin:"0 0 4px", color:"#0f172a", fontSize:22, fontWeight:700, letterSpacing:-0.4 }}>Analysis</h1>
          <p style={{ margin:0, color:"#64748b", fontSize:13 }}>{paperLabel}</p>
        </div>
        <button onClick={onBack} style={{ padding:"8px 20px", border:"1.5px solid #e2e8f0", borderRadius:10, background:"transparent", color:"#475569", fontSize:13, fontWeight:600, cursor:"pointer", fontFamily:"'Sora',sans-serif", transition:"all 0.15s" }}>
          ← Back to Papers
        </button>
      </div>

      {/* Score Overview */}
      <div className="an-fade an-f2" style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:20, padding:"24px 24px", marginBottom:20 }}>
        <div className="analysis-top" style={{ display:"flex", alignItems:"center", gap:32, flexWrap:"wrap" }}>

          {/* Score Ring */}
          <div style={{ position:"relative", flexShrink:0 }}>
            <svg width={132} height={132} style={{ transform:"rotate(-90deg)" }}>
              <defs>
                <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={scoreGrad[0]} />
                  <stop offset="100%" stopColor={scoreGrad[1]} />
                </linearGradient>
              </defs>
              <circle cx={66} cy={66} r={R} fill="none" stroke="#ffffff" strokeWidth={11} />
              <circle cx={66} cy={66} r={R} fill="none" stroke="url(#scoreGrad)" strokeWidth={11}
                strokeLinecap="round" strokeDasharray={`${C}`}
                strokeDashoffset={C - filled} style={{ transition:"stroke-dashoffset 1.2s cubic-bezier(0.4,0,0.2,1)" }}
              />
            </svg>
            <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
              <span style={{ fontFamily:"'Space Mono',monospace", fontSize:28, fontWeight:700, color:scoreColor, lineHeight:1 }}>{accuracy}%</span>
              <span style={{ fontSize:9, color:"#94a3b8", marginTop:3, fontWeight:700, textTransform:"uppercase", letterSpacing:1 }}>score</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{ flex:1, minWidth:220 }}>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:12, marginBottom:16 }}>
              {[
                { label:"Correct",  value:correct,  color:"#10b981", bg:"#ecfdf5" },
                { label:"Wrong",    value:wrong,    color:"#f87171", bg:"#fef2f2" },
                { label:"Skipped",  value:skipped,  color:"#f59e0b", bg:"#fffbeb" },
                { label:"Time",     value:`${mins}:${String(secs).padStart(2,"0")}`, color:"#818cf8", bg:"#f0f4ff" },
              ].map(({ label, value, color, bg }) => (
                <div key={label} style={{ background:bg, borderRadius:12, padding:"12px 14px" }}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:22, fontWeight:700, color, lineHeight:1 }}>{value}</div>
                  <div style={{ fontSize:10, color:"#64748b", marginTop:4, fontWeight:600, textTransform:"uppercase", letterSpacing:0.7 }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Subject bars */}
            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {subjects.map(({ name, icon, color }) => {
                const d = subjectBreakdown[name];
                const pct = d ? Math.round((d.correct / d.total) * 100) : 0;
                return (
                  <div key={name}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:5 }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                        {icon}
                        <span style={{ color:"#334155", fontSize:12, fontWeight:600 }}>{name}</span>
                      </div>
                      <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                        {d && <span style={{ color:"#64748b", fontSize:10 }}>{d.correct}/{d.total}</span>}
                        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:12, fontWeight:700, color: d ? color : "rgba(37,99,235,0.15)", minWidth:34, textAlign:"right" }}>{d ? `${pct}%` : "—"}</span>
                      </div>
                    </div>
                    <div style={{ height:6, background:"#f1f5f9", borderRadius:4, overflow:"hidden" }}>
                      <div style={{ height:"100%", width:`${pct}%`, background:`linear-gradient(90deg,${color}bb,${color})`, borderRadius:4, boxShadow:`0 0 7px ${color}55`, transition:"width 1s cubic-bezier(0.4,0,0.2,1)" }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="an-fade an-f3" style={{ display:"flex", gap:4, background:"#ffffff", borderRadius:14, padding:4, marginBottom:20, width:"fit-content" }}>
        {[
          { id:"overview",  label:"Overview"  },
          { id:"questions", label:"Questions" },
          { id:"topics",    label:"Topics"    },
        ].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)} className={`an-tab-btn ${tab === t.id ? "active" : ""}`}>{t.label}</button>
        ))}
      </div>

      {/* ── Overview Tab ── */}
      {tab === "overview" && (
        <div className="an-fade">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
            {subjects.map(({ name, icon, color }) => {
              const d = subjectBreakdown[name];
              if (!d) return null;
              const pct = Math.round((d.correct / d.total) * 100);
              const scoreColor = pct >= 70 ? "#10b981" : pct >= 50 ? "#f59e0b" : "#f87171";
              return (
                <div key={name} style={{ background:"#ffffff", border:"1px solid #e2e8f0", borderRadius:16, padding:"18px 16px", textAlign:"center" }}>
                  <div style={{ display:"inline-flex", padding:8, background:`${color}14`, border:`1px solid ${color}26`, borderRadius:12, marginBottom:12 }}>{icon}</div>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:26, fontWeight:700, color:scoreColor, lineHeight:1 }}>{pct}%</div>
                  <div style={{ fontSize:11, color:"#334155", marginTop:5, fontWeight:600 }}>{name}</div>
                  <div style={{ fontSize:10, color:"#64748b", marginTop:3 }}>{d.correct}/{d.total} correct</div>
                  <div style={{ display:"flex", gap:5, justifyContent:"center", marginTop:10, flexWrap:"wrap" }}>
                    <span style={{ background:"#ecfdf5", color:"#10b981", fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>{d.correct}✓</span>
                    <span style={{ background:"#fef2f2", color:"#f87171", fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>{d.wrong||0}✗</span>
                    <span style={{ background:"#fffbeb", color:"#f59e0b", fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20 }}>{d.skipped||0}–</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Performance note */}
          <div style={{ marginTop:16, padding:"14px 18px", background: accuracy >= 70 ? "#ecfdf5" : accuracy >= 50 ? "#fffbeb" : "#fef2f2", border:`1px solid ${accuracy>=70?"rgba(16,185,129,0.25)":accuracy>=50?"rgba(245,158,11,0.22)":"rgba(239,68,68,0.22)"}`, borderRadius:12, display:'flex', alignItems:'center', gap:10 }}>
            <span style={{ flexShrink:0, color: accuracy>=70?"#10b981":accuracy>=50?"#f59e0b":"#f87171" }}>
              {accuracy >= 70 ? <Trophy size={16} /> : accuracy >= 50 ? <TrendingUp size={16} /> : <Target size={16} />}
            </span>
            <span style={{ color: accuracy>=70?"#10b981":accuracy>=50?"#f59e0b":"#f87171", fontSize:13, fontWeight:600 }}>
              {accuracy >= 70 ? "Great performance! Keep solving papers to maintain your edge." : accuracy >= 50 ? "Decent score. Focus on weak topics to push above 70%." : "Keep practicing! Review your wrong answers and focus on fundamentals."}
            </span>
          </div>
        </div>
      )}

      {/* ── Questions Tab ── */}
      {tab === "questions" && (
        <div className="an-fade">
          {/* Filter pills */}
          <div style={{ display:"flex", gap:6, marginBottom:16, flexWrap:"wrap" }}>
            {[
              { id:"all",     label:`All (${questionResults.length})` },
              { id:"correct", label:`Correct (${correct})`,  color:"#10b981" },
              { id:"wrong",   label:`Wrong (${wrong})`,      color:"#f87171" },
              { id:"skipped", label:`Skipped (${skipped})`,  color:"#f59e0b" },
            ].map(f => (
              <button key={f.id} onClick={() => setQFilter(f.id)}
                style={{ padding:"6px 14px", borderRadius:20, border:`1px solid ${qFilter===f.id ? (f.color||"#3b82f6")+"55" : "#f1f5f9"}`, background: qFilter===f.id ? (f.color||"#3b82f6")+"14" : "transparent", color: qFilter===f.id ? (f.color||"#3b82f6") : "#64748b", fontSize:12, fontWeight:600, cursor:"pointer", fontFamily:"'Sora',sans-serif", transition:"all 0.15s" }}>
                {f.label}
              </button>
            ))}
          </div>

          <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
            {filteredQs.length === 0 && (
              <div style={{ textAlign:"center", padding:"48px 20px", color:"#94a3b8" }}>
                <div style={{ width:48, height:48, borderRadius:14, background:'#f0fdf4', display:'flex', alignItems:'center', justifyContent:'center', margin:'0 auto 12px' }}>
                  <CheckCircle2 size={24} color="#10b981" />
                </div>
                <div style={{ fontSize:15, fontWeight:600 }}>No questions in this category</div>
              </div>
            )}
            {filteredQs.map((q, ii) => {
              const origIdx = (questionResults || []).indexOf(q);
              const isOpen = expandedQ === origIdx;
              const statusColor = q.isCorrect ? "#10b981" : q.userAnswer === undefined ? "#f59e0b" : "#f87171";
              const statusLabel = q.isCorrect ? "Correct" : q.userAnswer === undefined ? "Skipped" : "Wrong";
              const statusBg    = q.isCorrect ? "#ecfdf5" : q.userAnswer === undefined ? "#fffbeb" : "#fef2f2";
              const sc = subjectColors[q.subject] || "#2563eb";
              return (
                <div key={origIdx}
                  style={{ borderRadius:16, padding:"16px 18px", marginBottom:0, cursor:"pointer", transition:"all 0.2s", border:`1.5px solid ${isOpen ? statusColor+"55" : "#f1f5f9"}`, background: isOpen ? statusColor+"06" : "#ffffff", boxShadow: isOpen ? `0 4px 20px ${statusColor}18` : "0 1px 8px rgba(37,99,235,0.04)" }}
                  onClick={() => setExpandedQ(isOpen ? null : origIdx)}>

                  <div style={{ display:"flex", alignItems:"flex-start", gap:12 }}>
                    <div style={{ width:32, height:32, borderRadius:10, background:statusColor+"18", border:`1.5px solid ${statusColor}44`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1 }}>
                      <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, fontWeight:700, color:statusColor }}>{origIdx+1}</span>
                    </div>
                    <div style={{ flex:1, minWidth:0 }}>
                      <div style={{ display:"flex", gap:6, marginBottom:5, flexWrap:"wrap" }}>
                        <span style={{ background:sc+"18", color:sc, fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20, border:`1px solid ${sc}33` }}>{q.subject}</span>
                        {q.topic && <span style={{ background:"#f1f5f9", color:"#64748b", fontSize:9, padding:"2px 8px", borderRadius:20 }}>{q.topic}</span>}
                      </div>
                      <p style={{ margin:0, color:"#334155", fontSize:13.5, fontWeight:500, lineHeight:1.5, overflow:"hidden", display:"-webkit-box", WebkitLineClamp:isOpen?"unset":2, WebkitBoxOrient:"vertical" }}>{q.q}</p>
                    </div>
                    <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
                      <span style={{ background:statusBg, border:`1.5px solid ${statusColor}44`, color:statusColor, fontSize:11, fontWeight:700, padding:"4px 11px", borderRadius:20 }}>{statusLabel}</span>
                      <svg width="14" height="14" fill="none" stroke="#94a3b8" strokeWidth="2.5" viewBox="0 0 24 24"
                        style={{ transition:"transform 0.2s", transform:isOpen?"rotate(180deg)":"rotate(0deg)", flexShrink:0 }}>
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    </div>
                  </div>

                  {isOpen && (
                    <div style={{ marginTop:16, paddingTop:16, borderTop:`1px solid ${statusColor}22` }}>
                      <div style={{ fontSize:11, fontWeight:700, color:"#94a3b8", textTransform:"uppercase", letterSpacing:1, marginBottom:10 }}>Answer Choices</div>
                      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                        {q.options.map((opt, oi) => {
                          const isCorrectOpt = oi === q.ans;
                          const isUserOpt    = oi === q.userAnswer;
                          let bg="#fafafa", border="#e2e8f0", textColor="#475569", labelBg="#e2e8f0", labelColor="#64748b";
                          if (isCorrectOpt)                   { bg="#ecfdf5"; border="#10b981"; textColor="#065f46"; labelBg="#10b981"; labelColor="#fff"; }
                          else if (isUserOpt && !isCorrectOpt){ bg="#fef2f2"; border="#f87171"; textColor="#7f1d1d"; labelBg="#f87171"; labelColor="#fff"; }
                          return (
                            <div key={oi} style={{ display:"flex", alignItems:"center", gap:12, padding:"11px 14px", borderRadius:12, background:bg, border:`1.5px solid ${border}` }}>
                              <span style={{ width:26, height:26, borderRadius:"50%", background:labelBg, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, color:labelColor, flexShrink:0 }}>
                                {String.fromCharCode(65+oi)}
                              </span>
                              <span style={{ fontSize:13.5, color:textColor, flex:1, lineHeight:1.4 }}>{opt}</span>
                              {isCorrectOpt && <Check size={15} color="#10b981" style={{ flexShrink:0 }} />}
                              {isUserOpt && !isCorrectOpt && <X size={15} color="#f87171" style={{ flexShrink:0 }} />}
                            </div>
                          );
                        })}
                      </div>
                      {!q.isCorrect && q.userAnswer !== undefined && (
                        <div style={{ marginTop:12, padding:"10px 14px", borderRadius:10, background:"#eff6ff", border:"1px solid rgba(37,99,235,0.2)" }}>
                          <span style={{ fontSize:12, color:"#1e40af", fontWeight:600 }}>
                            ✓ Correct answer: <strong>{q.options[q.ans]}</strong>
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Topics Tab ── */}
      {tab === "topics" && (
        <div className="an-fade">
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:16, flexWrap:"wrap", gap:8 }}>
            <div style={{ color:"#94a3b8", fontSize:11, fontWeight:700, textTransform:"uppercase", letterSpacing:1.2 }}>
              Performance by Topic — {topicEntries.length} topics
            </div>
            <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
              {[["#10b981","≥60% Strong"],["#f59e0b","40–59% OK"],["#f87171","<40% Weak"]].map(([c,l]) => (
                <span key={l} style={{ display:"flex", alignItems:"center", gap:4, fontSize:10, color:"#94a3b8", fontWeight:600 }}>
                  <span style={{ width:8, height:8, borderRadius:2, background:c, display:"inline-block" }} />{l}
                </span>
              ))}
            </div>
          </div>

          <div className="an-topic-grid">
            {topicEntries.map(([topic, d], ti) => {
              const p   = Math.round((d.correct / d.total) * 100);
              const tc  = p >= 60 ? "#10b981" : p >= 40 ? "#f59e0b" : "#f87171";
              const tbg = p >= 60 ? "#ecfdf5" : p >= 40 ? "#fffbeb" : "#fef2f2";
              const sc  = subjectColors[d.subject] || "#2563eb";
              return (
                <div key={topic}
                  style={{ background:"#ffffff", border:"1px solid rgba(99,102,241,0.08)", borderRadius:16, padding:"16px 18px", boxShadow:"0 2px 12px rgba(37,99,235,0.05)", transition:"transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 8px 24px rgba(37,99,235,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)";    e.currentTarget.style.boxShadow="0 2px 12px rgba(37,99,235,0.05)"; }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                    <div style={{ flex:1, minWidth:0, paddingRight:10 }}>
                      <div style={{ color:"#0f172a", fontSize:13, fontWeight:700, lineHeight:1.3, marginBottom:5 }}>{topic || "General"}</div>
                      <span style={{ background:sc+"18", color:sc, fontSize:9, fontWeight:700, padding:"2px 8px", borderRadius:20, border:`1px solid ${sc}33` }}>{d.subject}</span>
                    </div>
                    <div style={{ background:tbg, border:`1px solid ${tc}33`, borderRadius:12, padding:"5px 12px", textAlign:"center", flexShrink:0 }}>
                      <div style={{ fontFamily:"'Space Mono',monospace", fontSize:18, fontWeight:700, color:tc, lineHeight:1 }}>{p}%</div>
                      <div style={{ fontSize:9, color:"#94a3b8", marginTop:2 }}>{d.correct}/{d.total}</div>
                    </div>
                  </div>
                  <div style={{ height:6, background:"#f1f5f9", borderRadius:99, overflow:"hidden" }}>
                    <div style={{ height:"100%", width:`${p}%`, borderRadius:99, transition:"width 0.8s cubic-bezier(0.4,0,0.2,1)", boxShadow:`0 0 8px ${tc}66`, background: p>=60?"linear-gradient(90deg,#10b981,#059669)":p>=40?"linear-gradient(90deg,#f59e0b,#d97706)":"linear-gradient(90deg,#f87171,#ef4444)" }} />
                  </div>
                </div>
              );
            })}
            {topicEntries.length === 0 && (
              <div style={{ gridColumn:"1/-1", textAlign:"center", padding:"48px 20px", color:"#94a3b8" }}>
                No topic data available for this paper.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default AnalysisPage;
