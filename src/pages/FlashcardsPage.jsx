import { useState, useEffect } from "react";
import { FLASHCARDS } from "../data/flashcards.js";
import {
  Atom, FlaskConical, Compass, ChevronLeft, ChevronRight,
  RotateCcw, Check, BookOpen, Brain, Trophy, Layers,
} from "lucide-react";

const SUBJECT_META = {
  Physics:     { color: "#2563eb", icon: <Atom size={16} />,         bg: "#eff6ff" },
  Chemistry:   { color: "#10b981", icon: <FlaskConical size={16} />, bg: "#f0fdf4" },
  Mathematics: { color: "#f59e0b", icon: <Compass size={16} />,      bg: "#fffbeb" },
};

function FlashcardsPage() {
  const [subject, setSubject]         = useState("Physics");
  const [chapterIdx, setChapterIdx]   = useState(0);
  const [cardIdx, setCardIdx]         = useState(0);
  const [flipped, setFlipped]         = useState(false);
  const [known, setKnown]             = useState({});   // key: "subject-chap-card" → true/false
  const [mode, setMode]               = useState("browse"); // browse | quiz

  const chapters = FLASHCARDS[subject];
  const chapter  = chapters[chapterIdx];
  const cards    = chapter.cards;
  const card     = cards[cardIdx];
  const meta     = SUBJECT_META[subject];

  // Reset card position when chapter or subject changes
  useEffect(() => { setCardIdx(0); setFlipped(false); }, [subject, chapterIdx]);
  useEffect(() => { setFlipped(false); }, [cardIdx]);

  const key          = (s, ci, ki) => `${s}-${ci}-${ki}`;
  const isKnown      = known[key(subject, chapterIdx, cardIdx)] === true;
  const isReview     = known[key(subject, chapterIdx, cardIdx)] === false;
  const knownCount   = cards.filter((_, i) => known[key(subject, chapterIdx, i)] === true).length;
  const progress     = Math.round((knownCount / cards.length) * 100);

  // Total known across all cards in subject
  const subjectKnown = chapters.flatMap((ch, ci) =>
    ch.cards.filter((_, ki) => known[key(subject, ci, ki)] === true)
  ).length;
  const subjectTotal = chapters.reduce((a, c) => a + c.cards.length, 0);

  const markKnown = (val) => {
    setKnown(prev => ({ ...prev, [key(subject, chapterIdx, cardIdx)]: val }));
    // Auto-advance
    if (cardIdx < cards.length - 1) { setTimeout(() => setCardIdx(c => c + 1), 300); }
  };

  const resetChapter = () => {
    const newKnown = { ...known };
    cards.forEach((_, i) => delete newKnown[key(subject, chapterIdx, i)]);
    setKnown(newKnown);
    setCardIdx(0);
    setFlipped(false);
  };

  return (
    <div style={{ fontFamily: "'Sora', sans-serif" }}>
      <style>{`
        @keyframes fcFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flipIn  { from{opacity:0;transform:rotateY(-90deg) scale(0.95)} to{opacity:1;transform:rotateY(0deg) scale(1)} }

        .fc-fade  { animation: fcFadeUp 0.32s ease both; }
        .fc-flip  { animation: flipIn 0.28s ease both; }

        .subject-tab { padding:8px 18px; border-radius:22px; border:1.5px solid transparent; cursor:pointer; font-family:'Sora',sans-serif; font-size:13px; font-weight:700; transition:all 0.18s; display:flex; align-items:center; gap:7px; }

        .chapter-item { padding:10px 14px; border-radius:10px; cursor:pointer; transition:all 0.15s; border:1.5px solid transparent; display:flex; align-items:center; justify-content:space-between; }
        .chapter-item:hover { background:#f8faff; }
        .chapter-item.active { background: var(--subj-bg); border-color: var(--subj-color); }

        .fc-card-wrap { perspective: 1000px; }
        .fc-card { min-height: 240px; border-radius: 20px; padding: 40px 36px; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; cursor:pointer; transition: box-shadow 0.2s, transform 0.2s; user-select:none; position:relative; overflow:hidden; }
        .fc-card:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }

        .nav-arrow { width: 42px; height: 42px; border-radius: 12px; border: 1.5px solid #e2e8f0; background: #ffffff; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.15s; }
        .nav-arrow:hover:not(:disabled) { background:#f1f5f9; border-color:#cbd5e1; }
        .nav-arrow:disabled { opacity:0.35; cursor:not-allowed; }

        .action-btn { flex:1; padding:11px 0; border-radius:12px; border:none; font-weight:700; font-family:'Sora',sans-serif; font-size:13px; cursor:pointer; transition:all 0.15s; display:flex; align-items:center; justify-content:center; gap:7px; }
        .action-btn:hover { transform:translateY(-2px); }

        .pip { width:8px; height:8px; border-radius:50%; transition:all 0.18s; flex-shrink:0; }

        @media(max-width:860px) {
          .fc-layout { flex-direction:column !important; }
          .fc-sidebar { width:100% !important; max-height:220px; overflow-y:auto !important; border-right:none !important; border-bottom:1px solid #e2e8f0 !important; padding:12px !important; }
          .chapter-list { flex-direction:row !important; flex-wrap:wrap !important; gap:6px !important; }
          .chapter-item { flex:1 1 auto !important; min-width:120px; padding:7px 10px !important; font-size:11px !important; }
          .fc-card { min-height:200px; padding:28px 20px; }
        }
        @media(max-width:480px){
          .fc-card { min-height:170px; padding:24px 16px; }
          .fc-card-question { font-size:15px !important; }
          .fc-card-answer { font-size:14px !important; }
        }
      `}</style>

      {/* Header */}
      <div className="fc-fade" style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: meta.bg, border: `1.5px solid ${meta.color}33`, display: "flex", alignItems: "center", justifyContent: "center", color: meta.color }}>
            <Brain size={18} />
          </div>
          <div>
            <h1 style={{ margin: 0, color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Flashcards</h1>
            <p style={{ margin: 0, color: "#64748b", fontSize: 12 }}>
              {subjectKnown}/{subjectTotal} mastered in {subject}
            </p>
          </div>
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="fc-fade" style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap" }}>
        {Object.keys(FLASHCARDS).map(s => {
          const m = SUBJECT_META[s];
          const isActive = s === subject;
          return (
            <button key={s} onClick={() => { setSubject(s); setChapterIdx(0); }}
              className="subject-tab"
              style={{ background: isActive ? m.bg : "transparent", borderColor: isActive ? m.color + "55" : "#e2e8f0", color: isActive ? m.color : "#64748b" }}>
              <span style={{ color: m.color }}>{m.icon}</span> {s}
            </button>
          );
        })}
      </div>

      {/* Main Layout */}
      <div className="fc-layout" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>

        {/* Sidebar: Chapter List */}
        <div className="fc-sidebar" style={{ width: 230, flexShrink: 0, background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 12, height: "fit-content", position: "sticky", top: 20 }}>
          <p style={{ margin: "0 0 10px 4px", fontSize: 10, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 1 }}>
            Chapters ({chapters.length})
          </p>
          <div className="chapter-list" style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {chapters.map((ch, i) => {
              const chKnown = ch.cards.filter((_, ki) => known[key(subject, i, ki)] === true).length;
              const chDone  = chKnown === ch.cards.length && ch.cards.length > 0;
              const isActive = i === chapterIdx;
              return (
                <div key={i} className={`chapter-item${isActive ? " active" : ""}`}
                  onClick={() => setChapterIdx(i)}
                  style={{ "--subj-color": meta.color, "--subj-bg": meta.bg }}>
                  <span style={{ fontSize: 12, fontWeight: isActive ? 700 : 500, color: isActive ? meta.color : "#334155", flex: 1, minWidth: 0 }}>
                    {ch.chapter}
                  </span>
                  {chDone
                    ? <Trophy size={11} color={meta.color} style={{ flexShrink: 0 }} />
                    : chKnown > 0
                    ? <span style={{ fontSize: 9, color: meta.color, fontWeight: 700, flexShrink: 0 }}>{chKnown}/{ch.cards.length}</span>
                    : null
                  }
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Panel */}
        <div style={{ flex: 1, minWidth: 0 }}>

          {/* Chapter Header */}
          <div style={{ background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16, padding: "14px 18px", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 9, background: meta.bg, border: `1px solid ${meta.color}33`, display: "flex", alignItems: "center", justifyContent: "center", color: meta.color, flexShrink: 0 }}>
                <Layers size={14} />
              </div>
              <div>
                <div style={{ color: "#0f172a", fontSize: 13, fontWeight: 700 }}>{chapter.chapter}</div>
                <div style={{ color: "#64748b", fontSize: 10 }}>{knownCount} of {cards.length} mastered</div>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              {/* Progress bar */}
              <div style={{ width: 80, height: 5, background: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg,${meta.color}bb,${meta.color})`, borderRadius: 3, transition: "width 0.5s ease" }} />
              </div>
              <span style={{ fontSize: 10, color: meta.color, fontWeight: 700, minWidth: 28 }}>{progress}%</span>
              <button onClick={resetChapter} title="Reset chapter"
                style={{ padding: "5px 11px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "transparent", color: "#64748b", cursor: "pointer", fontSize: 11, display: "flex", alignItems: "center", gap: 4 }}>
                <RotateCcw size={11} /> Reset
              </button>
            </div>
          </div>

          {/* Dot navigation */}
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 14, justifyContent: "center", flexWrap: "wrap" }}>
            {cards.map((_, i) => {
              const k = known[key(subject, chapterIdx, i)];
              return (
                <div key={i} className="pip"
                  onClick={() => { setCardIdx(i); setFlipped(false); }}
                  style={{ cursor: "pointer", width: i === cardIdx ? 20 : 8, borderRadius: i === cardIdx ? 4 : "50%", height: 8, background: k === true ? meta.color : k === false ? "#f87171" : i === cardIdx ? "#334155" : "#e2e8f0" }} />
              );
            })}
          </div>

          {/* Flashcard */}
          <div className="fc-card-wrap" style={{ marginBottom: 16 }}>
            <div className={`fc-card fc-flip`} key={`${subject}-${chapterIdx}-${cardIdx}-${flipped}`}
              onClick={() => setFlipped(f => !f)}
              style={{
                background: flipped
                  ? `linear-gradient(135deg, ${meta.color}dd, ${meta.color})`
                  : "#ffffff",
                border: flipped ? "none" : "1.5px solid #e2e8f0",
                boxShadow: flipped
                  ? `0 16px 40px ${meta.color}33`
                  : "0 4px 20px rgba(0,0,0,0.06)",
              }}>

              {/* Decorative circle */}
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: flipped ? "rgba(255,255,255,0.1)" : `${meta.color}08`, pointerEvents: "none" }} />

              {/* Label */}
              <div style={{ position: "absolute", top: 14, left: 18, fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2, color: flipped ? "rgba(255,255,255,0.65)" : "#94a3b8" }}>
                {flipped ? "Answer" : "Question"} · {cardIdx + 1}/{cards.length}
              </div>

              {/* Content */}
              {!flipped ? (
                <p className="fc-card-question" style={{ margin: 0, color: "#0f172a", fontSize: 17, fontWeight: 600, lineHeight: 1.65, maxWidth: 500 }}>
                  {card.front}
                </p>
              ) : (
                <div style={{ maxWidth: 520 }}>
                  <p className="fc-card-answer" style={{ margin: 0, color: "#ffffff", fontSize: 15, fontWeight: 500, lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
                    {card.back}
                  </p>
                </div>
              )}

              {/* Tap hint */}
              {!flipped && (
                <div style={{ position: "absolute", bottom: 14, fontSize: 10, color: "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>
                  🔄 Tap to reveal answer
                </div>
              )}
            </div>
          </div>

          {/* Know it / Review buttons (show after flip) */}
          {flipped && (
            <div className="fc-fade" style={{ display: "flex", gap: 10, marginBottom: 14 }}>
              <button className="action-btn" onClick={() => markKnown(false)}
                style={{ background: "#fef2f2", color: "#f87171", border: "1.5px solid #fecaca" }}>
                🔁 Review Again
              </button>
              <button className="action-btn" onClick={() => markKnown(true)}
                style={{ background: "#f0fdf4", color: "#10b981", border: "1.5px solid #bbf7d0" }}>
                <Check size={15} /> Got It!
              </button>
            </div>
          )}

          {/* Navigation */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <button className="nav-arrow" disabled={cardIdx === 0}
              onClick={() => setCardIdx(c => c - 1)}>
              <ChevronLeft size={18} color={cardIdx === 0 ? "#cbd5e1" : "#475569"} />
            </button>

            {/* Summary chips */}
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", background: "#f0fdf4", borderRadius: 20, border: "1px solid #bbf7d0" }}>
                <Check size={11} color="#10b981" />
                <span style={{ fontSize: 11, color: "#10b981", fontWeight: 700 }}>{knownCount}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", background: "#fef2f2", borderRadius: 20, border: "1px solid #fecaca" }}>
                <RotateCcw size={11} color="#f87171" />
                <span style={{ fontSize: 11, color: "#f87171", fontWeight: 700 }}>
                  {cards.filter((_, i) => known[key(subject, chapterIdx, i)] === false).length}
                </span>
              </div>
            </div>

            <button className="nav-arrow" disabled={cardIdx === cards.length - 1}
              onClick={() => setCardIdx(c => c + 1)}>
              <ChevronRight size={18} color={cardIdx === cards.length - 1 ? "#cbd5e1" : "#475569"} />
            </button>
          </div>

          {/* Chapter complete banner */}
          {progress === 100 && (
            <div className="fc-fade" style={{ marginTop: 16, padding: "16px 20px", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1.5px solid #86efac", borderRadius: 14, display: "flex", alignItems: "center", gap: 12 }}>
              <Trophy size={22} color="#10b981" />
              <div>
                <div style={{ color: "#15803d", fontSize: 13, fontWeight: 700 }}>Chapter Complete! 🎉</div>
                <div style={{ color: "#166534", fontSize: 11, marginTop: 2 }}>
                  You've mastered all {cards.length} cards in this chapter.
                  {chapterIdx < chapters.length - 1 && (
                    <span style={{ cursor: "pointer", textDecoration: "underline", marginLeft: 6 }}
                      onClick={() => setChapterIdx(c => c + 1)}>
                      Next chapter →
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FlashcardsPage;
