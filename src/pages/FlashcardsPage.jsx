import { useState, useEffect } from "react";
import { FLASHCARDS } from "../data/flashcards.js";
import {
  Atom, FlaskConical, Compass, ChevronLeft, ChevronRight,
  RotateCcw, Check, BookOpen, Brain, Trophy, Layers, Play
} from "lucide-react";

const SUBJECT_META = {
  Physics:     { color: "#2563eb", icon: <Atom size={16} />,         bg: "#eff6ff" },
  Chemistry:   { color: "#10b981", icon: <FlaskConical size={16} />, bg: "#f0fdf4" },
  Mathematics: { color: "#f59e0b", icon: <Compass size={16} />,      bg: "#fffbeb" },
};

function FlashcardsPage() {
  const [view, setView]               = useState("selection"); // "selection" | "cards"
  const [subject, setSubject]         = useState("Physics");
  const [chapterIdx, setChapterIdx]   = useState(0);
  const [cardIdx, setCardIdx]         = useState(0);
  const [flipped, setFlipped]         = useState(false);
  const [known, setKnown]             = useState({});   // key: "subject-chap-card" → true/false

  const chapters = FLASHCARDS[subject];
  const chapter  = chapters[chapterIdx];
  const cards    = chapter?.cards || [];
  const card     = cards[cardIdx];
  const meta     = SUBJECT_META[subject];

  // Reset card position when subject changes
  useEffect(() => { setCardIdx(0); setFlipped(false); }, [subject, chapterIdx]);
  useEffect(() => { setFlipped(false); }, [cardIdx]);

  const key          = (s, ci, ki) => `${s}-${ci}-${ki}`;
  
  // Stats helpers
  const getKnownCount = (s, ci, cList) => cList.filter((_, i) => known[key(s, ci, i)] === true).length;
  
  const knownCount   = view === "cards" ? getKnownCount(subject, chapterIdx, cards) : 0;
  const progress     = cards.length ? Math.round((knownCount / cards.length) * 100) : 0;

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
    <div style={{ fontFamily: "'Sora', sans-serif", display: "flex", flexDirection: "column", height: "100%" }}>
      <style>{`
        @keyframes fcFadeUp { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
        @keyframes flipIn  { from{opacity:0;transform:rotateY(-90deg) scale(0.95)} to{opacity:1;transform:rotateY(0deg) scale(1)} }

        .fc-fade  { animation: fcFadeUp 0.32s ease both; }
        .fc-flip  { animation: flipIn 0.28s ease both; }

        .subject-tab { padding:10px 20px; border-radius:30px; border:1.5px solid transparent; cursor:pointer; font-family:'Sora',sans-serif; font-size:14px; font-weight:700; transition:all 0.18s; display:flex; align-items:center; gap:8px; flex-shrink: 0; }
        
        .chapter-card { padding: 20px; background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 16px; cursor: pointer; transition: all 0.25s; display: flex; flex-direction: column; }
        .chapter-card:hover { border-color: var(--subj-color); box-shadow: 0 12px 24px rgba(0,0,0,0.06); transform: translateY(-4px); }

        .fc-scroll-hide::-webkit-scrollbar { display: none; }
        .fc-scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }

        .fc-card-wrap { perspective: 1200px; width: 100%; max-width: 480px; margin: 0 auto; }
        .fc-card { 
          height: 65vh; min-height: 420px; max-height: 650px; 
          border-radius: 28px; padding: 40px 32px; 
          display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; 
          cursor:pointer; transition: box-shadow 0.25s, transform 0.25s; user-select:none; 
          position:relative; overflow:hidden; 
        }
        .fc-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px rgba(0,0,0,0.12); }

        .nav-arrow { width: 44px; height: 44px; border-radius: 50%; border: none; background: #f1f5f9; display:flex; align-items:center; justify-content:center; cursor:pointer; transition:all 0.15s; color: #475569; }
        .nav-arrow:hover:not(:disabled) { background:#e2e8f0; transform: scale(1.05); }
        .nav-arrow:disabled { opacity:0.35; cursor:not-allowed; }

        .action-btn { flex:1; padding:14px 0; border-radius:16px; border:none; font-weight:700; font-family:'Sora',sans-serif; font-size:14px; cursor:pointer; transition:all 0.18s; display:flex; align-items:center; justify-content:center; gap:8px; }
        .action-btn:hover { transform:translateY(-2px); box-shadow: 0 8px 16px rgba(0,0,0,0.06); }
        .action-btn:active { transform:translateY(0); }

        .pip { width:8px; height:8px; border-radius:50%; transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1); flex-shrink:0; cursor:pointer; }
        .pip:hover { transform: scale(1.5); }

        @media(max-width:860px) {
          .fc-card { height: 60vh; min-height: 380px; padding: 28px 24px; border-radius: 20px; }
          .fc-card-question { font-size:18px !important; }
        }
        @media(max-width:480px){
          .fc-card { height: 70vh; min-height: 360px; padding: 24px 16px; }
          .fc-card-question { font-size:16px !important; }
          .fc-card-answer { font-size:14px !important; }
        }
      `}</style>
      
      {view === "selection" ? (
        <div className="fc-fade" style={{ width: "100%", maxWidth: 1000, margin: "0 auto", paddingBottom: 40 }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: "linear-gradient(135deg, #2563eb, #1d4ed8)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", boxShadow: "0 8px 16px rgba(37, 99, 235, 0.2)" }}>
              <Brain size={24} />
            </div>
            <div>
              <h1 style={{ margin: 0, color: "#0f172a", fontSize: 26, fontWeight: 700, letterSpacing: -0.5 }}>Flashcards</h1>
              <p style={{ margin: "4px 0 0", color: "#64748b", fontSize: 14 }}>
                Select a subject and chapter to begin your study session.
              </p>
            </div>
          </div>

          {/* Subject Navigation */}
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 16, marginBottom: 24 }} className="fc-scroll-hide">
            {Object.keys(FLASHCARDS).map(s => {
              const m = SUBJECT_META[s];
              const isActive = s === subject;
              return (
                <button key={s} onClick={() => setSubject(s)}
                  className="subject-tab"
                  style={{ 
                    background: isActive ? m.bg : "#ffffff", 
                    borderColor: isActive ? m.color + "55" : "#e2e8f0", 
                    color: isActive ? m.color : "#475569",
                    boxShadow: isActive ? `0 4px 12px ${m.color}22` : "none"
                  }}>
                  <span style={{ color: isActive ? m.color : "#94a3b8" }}>{m.icon}</span> {s}
                </button>
              );
            })}
          </div>

          {/* Chapters Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {chapters.map((ch, i) => {
              const chKnown = getKnownCount(subject, i, ch.cards);
              const chTotal = ch.cards.length;
              const chProg = chTotal > 0 ? Math.round((chKnown / chTotal) * 100) : 0;
              const isDone = chProg === 100 && chTotal > 0;

              return (
                <div key={i} className="chapter-card" onClick={() => { setChapterIdx(i); setView("cards"); }}
                  style={{ "--subj-color": meta.color }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                    <h3 style={{ margin: 0, fontSize: 16, color: "#0f172a", fontWeight: 700, lineHeight: 1.4, flex: 1, paddingRight: 12 }}>
                      {ch.chapter}
                    </h3>
                    {isDone ? (
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: meta.bg, display: "flex", alignItems: "center", justifyContent: "center", color: meta.color, flexShrink: 0 }}>
                        <Trophy size={14} />
                      </div>
                    ) : (
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#f8fafc", border: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#64748b", flexShrink: 0 }}>
                        <Layers size={14} />
                      </div>
                    )}
                  </div>
                  
                  <div style={{ flex: 1 }} />

                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 600, color: "#64748b", marginBottom: 8 }}>
                      <span>{chKnown} of {chTotal} mastered</span>
                      <span style={{ color: chProg > 0 ? meta.color : "#94a3b8" }}>{chProg}%</span>
                    </div>
                    <div style={{ width: "100%", height: 6, background: "#f1f5f9", borderRadius: 3, overflow: "hidden", marginBottom: 16 }}>
                      <div style={{ width: `${chProg}%`, height: "100%", background: meta.color, borderRadius: 3 }} />
                    </div>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 12, color: "#94a3b8", fontWeight: 500 }}>{chTotal} Cards</span>
                      <div style={{ display: "flex", alignItems: "center", gap: 4, color: meta.color, fontSize: 13, fontWeight: 700 }}>
                        {chProg === 0 ? "Start" : chProg === 100 ? "Review" : "Continue"} <Play size={12} fill="currentColor" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Cards View */
        <div className="fc-fade" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", width: "100%", animationDelay: "0.1s" }}>
          
          {/* Card Header & Progress */}
          <div style={{ width: "100%", maxWidth: 480, display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <button onClick={() => setView("selection")} title="Back to Chapters"
              style={{ padding: 0, width: 40, height: 40, borderRadius: 12, border: "1.5px solid #e2e8f0", background: "#ffffff", color: "#64748b", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.15s", flexShrink: 0 }}>
              <ChevronLeft size={20} />
            </button>
            
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ color: "#0f172a", fontSize: 15, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{chapter.chapter}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <div style={{ flex: 1, height: 4, background: "#e2e8f0", borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: "100%", width: `${progress}%`, background: meta.color, borderRadius: 2, transition: "width 0.4s ease" }} />
                </div>
              </div>
            </div>

            <button onClick={resetChapter} title="Reset chapter"
              style={{ padding: "0 10px", height: 40, borderRadius: 12, border: "1.5px solid #e2e8f0", background: "#ffffff", color: "#64748b", cursor: "pointer", fontSize: 12, display: "flex", alignItems: "center", gap: 6, fontWeight: 600, transition: "all 0.15s", flexShrink: 0 }}>
              <RotateCcw size={14} /> <span className="hide-mobile" style={{ display: "inline-block" }}>Reset</span>
            </button>
            <style>{`@media(max-width: 480px) { .hide-mobile { display: none !important; } }`}</style>
          </div>

          {/* The Card */}
          <div className="fc-card-wrap" style={{ marginBottom: 24 }}>
            <div className={`fc-card fc-flip`} key={`${subject}-${chapterIdx}-${cardIdx}-${flipped}`}
              onClick={() => setFlipped(f => !f)}
              style={{
                background: flipped
                  ? `linear-gradient(145deg, ${meta.color}, ${meta.color}dd)`
                  : "#ffffff",
                border: flipped ? "1.5px solid transparent" : "1.5px solid #e2e8f0",
                boxShadow: flipped
                  ? `0 24px 48px ${meta.color}44`
                  : "0 12px 32px rgba(15, 23, 42, 0.06)",
              }}>

              {/* Decorative shapes */}
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: flipped ? "rgba(255,255,255,0.08)" : `${meta.color}05`, pointerEvents: "none" }} />
              <div style={{ position: "absolute", bottom: -20, left: -20, width: 100, height: 100, borderRadius: "50%", background: flipped ? "rgba(255,255,255,0.04)" : `${meta.color}03`, pointerEvents: "none" }} />

              {/* Card Index Label */}
              <div style={{ position: "absolute", top: 20, left: 24, fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: 1.5, color: flipped ? "rgba(255,255,255,0.7)" : "#94a3b8", display: "flex", alignItems: "center", gap: 6 }}>
                {flipped ? <Check size={12} /> : <BookOpen size={12} />}
                {flipped ? "Answer" : "Question"} · {cardIdx + 1}/{cards.length}
              </div>

              {/* Content */}
              {!flipped ? (
                <p className="fc-card-question" style={{ margin: 0, color: "#0f172a", fontSize: 20, fontWeight: 600, lineHeight: 1.6, zIndex: 1 }}>
                  {card.front}
                </p>
              ) : (
                <div style={{ width: "100%", zIndex: 1 }}>
                  <p className="fc-card-answer" style={{ margin: 0, color: "#ffffff", fontSize: 17, fontWeight: 500, lineHeight: 1.7, fontFamily: "'Sora', sans-serif" }}>
                    {card.back}
                  </p>
                </div>
              )}

              {/* Tap hint */}
              {!flipped && (
                <div style={{ position: "absolute", bottom: 20, fontSize: 11, color: "#94a3b8", display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                  <span style={{ display: "inline-block", animation: "bounce 2s infinite" }}>👆</span> Tap to flip
                </div>
              )}
            </div>
          </div>

          {/* Action Controls */}
          <div style={{ width: "100%", maxWidth: 480 }}>
            
            {/* Pips */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20, justifyContent: "center", flexWrap: "wrap", padding: "0 20px", maxHeight: 40, overflow: "hidden" }}>
              {cards.map((_, i) => {
                const k = known[key(subject, chapterIdx, i)];
                return (
                  <div key={i} className="pip"
                    onClick={() => { setCardIdx(i); setFlipped(false); }}
                    style={{ 
                      width: i === cardIdx ? 28 : 8, 
                      borderRadius: i === cardIdx ? 4 : "50%", 
                      background: k === true ? meta.color : k === false ? "#f87171" : i === cardIdx ? "#334155" : "#e2e8f0" 
                    }} />
                );
              })}
            </div>

            {/* Navigation & Actions */}
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <button className="nav-arrow" disabled={cardIdx === 0}
                onClick={() => setCardIdx(c => c - 1)}>
                <ChevronLeft size={24} />
              </button>

              <div style={{ flex: 1, display: "flex", gap: 12 }}>
                {flipped ? (
                  <>
                    <button className="action-btn" onClick={() => markKnown(false)}
                      style={{ background: "#fff1f2", color: "#e11d48", border: "1.5px solid #ffe4e6" }}>
                      <RotateCcw size={16} /> Review
                    </button>
                    <button className="action-btn" onClick={() => markKnown(true)}
                      style={{ background: "#f0fdf4", color: "#16a34a", border: "1.5px solid #dcfce7" }}>
                      <Check size={18} /> Got It
                    </button>
                  </>
                ) : (
                  <button className="action-btn" onClick={() => setFlipped(true)}
                    style={{ background: "#f8fafc", color: "#334155", border: "1.5px solid #e2e8f0" }}>
                    Show Answer
                  </button>
                )}
              </div>

              <button className="nav-arrow" disabled={cardIdx === cards.length - 1}
                onClick={() => setCardIdx(c => c + 1)}>
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Chapter complete banner */}
          {progress === 100 && (
            <div className="fc-fade" style={{ width: "100%", maxWidth: 480, marginTop: 24, padding: "18px 24px", background: "linear-gradient(135deg, #f0fdf4, #dcfce7)", border: "1.5px solid #86efac", borderRadius: 16, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 12px rgba(22,163,74,0.15)" }}>
                <Trophy size={20} color="#16a34a" />
              </div>
              <div>
                <div style={{ color: "#15803d", fontSize: 15, fontWeight: 700 }}>Chapter Mastered! 🎉</div>
                <div style={{ color: "#166534", fontSize: 12, marginTop: 3 }}>
                  You've learned all {cards.length} cards. 
                  <span style={{ cursor: "pointer", textDecoration: "underline", marginLeft: 6, fontWeight: 700 }}
                    onClick={() => { setView("selection"); }}>
                    Back to Chapters →
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      
      <style>{`
        @keyframes bounce { 
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-4px); }
          60% { transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
}

export default FlashcardsPage;

