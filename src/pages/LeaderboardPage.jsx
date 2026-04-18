import { useState, useMemo, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Flame, Trophy, Target, Zap, ArrowRight, User, TrendingUp, Medal, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { getTodayStr } from "../lib/utils.js";

import { FAKE_STUDENTS } from "../data/mockLeaderboard.js";

function LeaderboardPage({ user, streak, accuracy, sessions }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [tab, setTab] = useState("accuracy");
  const [refreshKey, setRefreshKey] = useState(0);
  const [page, setPage] = useState(1);
  const rowsPerPage = 20;

  // Reset page when refresh happens or tab changes
  useEffect(() => {
    setPage(1);
  }, [refreshKey, tab]);

  // Real-time Firestore listener
  useState(() => {
    if (!window._firebaseDb) { setLoading(false); return; }
    setLoading(true);
    setFetchError(null);
    try {
      const q = collection(window._firebaseDb, "leaderboard");
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setRows(data);
        setLoading(false);
      }, (error) => {
        console.error("Leaderboard real-time fetch failed:", error);
        setFetchError(error.message || "Failed to load rankings");
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (e) {
      console.error("Leaderboard setup failed:", e);
      setFetchError(e.message || "Failed to setup rankings");
      setLoading(false);
    }
  }, [refreshKey]);

  const totalPapers = sessions ? sessions.length : 0;
  
  const sorted = useMemo(() => {
    const allRows = [...rows, ...FAKE_STUDENTS];
    // Filter out duplicates if a user somehow has a duplicate uid
    const uniqueRows = Array.from(new Map(allRows.map(r => [r.uid, r])).values());
    
    const hasMyRow = uniqueRows.some(r => r.uid === user?.uid);
    if (totalPapers > 0 && !hasMyRow && user?.uid) {
      uniqueRows.push({ uid: user.uid, name: user.name || "You", streak, accuracy, papers: totalPapers, lastActive: getTodayStr() });
    }

    return uniqueRows.sort((a, b) =>
      tab === "streak"
        ? (b.streak || 0) - (a.streak || 0) || (b.accuracy || 0) - (a.accuracy || 0)
        : (b.accuracy || 0) - (a.accuracy || 0) || (b.streak || 0) - (a.streak || 0)
    );
  }, [rows, user, tab, totalPapers, streak, accuracy]);

  const isFirebaseConnected = typeof window !== "undefined" && !!window._firebaseDb;

  const myIndex = sorted.findIndex(r => r.uid === user?.uid);
  const myRank = myIndex !== -1 ? myIndex + 1 : '—';
  const myData = myIndex !== -1 ? sorted[myIndex] : null;

  const totalPages = Math.ceil(sorted.length / rowsPerPage);
  const paginatedRows = sorted.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", paddingBottom: 40 }}>
      {/* Dynamic styles */}
      <style>{`
        @keyframes slideInUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes lbRowIn { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes lbPulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
        
        .lb-row { animation: lbRowIn 0.3s ease both; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
        .lb-row:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(148, 163, 184, 0.15); border-color: #cbd5e1 !important; z-index: 10; position: relative; }
        .tab-btn { transition: all 0.2s; position: relative; overflow: hidden; }
        .tab-btn:active { transform: scale(0.96); }
        .rank-badge-1 { background: linear-gradient(135deg, #f59e0b, #ef4444); border: 2px solid white; box-shadow: 0 4px 10px rgba(245, 158, 11, 0.3); }
        .rank-badge-2 { background: linear-gradient(135deg, #94a3b8, #64748b); border: 2px solid white; box-shadow: 0 4px 10px rgba(148, 163, 184, 0.3); }
        .rank-badge-3 { background: linear-gradient(135deg, #d97706, #92400e); border: 2px solid white; box-shadow: 0 4px 10px rgba(217, 119, 6, 0.3); }
        .rank-badge-default { background: #f1f5f9; color: #64748b; font-weight: 700; border: 1px solid #e2e8f0; }
        
        .stats-col { text-align: center; min-width: 60px; }
        .stats-val { font-family: 'Space Mono', monospace; font-weight: 800; font-size: 16px; display: flex; align-items: center; justify-content: center; gap: 4px; }
        .stats-lbl { font-size: 10px; font-weight: 600; color: #64748b; letter-spacing: 0.5px; margin-top: 2px; }
        
        .page-btn { padding: 8px 16px; border-radius: 20px; border: 1px solid #e2e8f0; background: #ffffff; color: #0f172a; font-family: 'Sora', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
        .page-btn:hover:not(:disabled) { background: #f8fafc; border-color: #cbd5e1; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
        .page-btn:active:not(:disabled) { transform: scale(0.96); }
        .page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        
        @media (max-width: 500px) {
          .hide-on-mobile { display: none !important; }
        }
      `}</style>

      {/* Header section */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
        <div>
          <h1 style={{ margin: "0 0 6px", color: "#0f172a", fontSize: 28, fontWeight: 800, letterSpacing: -0.5, display: "flex", alignItems: "center", gap: 10 }}>
            <Trophy color="#f59e0b" size={28} /> Leaderboard
          </h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: 14 }}>Live performance rankings across the state.</p>
        </div>
        <button
          onClick={() => setRefreshKey(k => k + 1)}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 16px", borderRadius: 24, border: "1px solid #e2e8f0", background: "#ffffff", color: "#475569", fontSize: 13, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.2s", boxShadow: "0 2px 4px rgba(0,0,0,0.02)" }}
          onMouseOver={e => { e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.borderColor = "#cbd5e1"; }}
          onMouseOut={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "#e2e8f0"; }}
        >
          <ArrowRight size={14} style={{ transform: 'rotate(-45deg)', transition: 'transform 0.3s' }} className="refresh-icon" /> Refresh
        </button>
      </div>

      {/* Status Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, marginBottom: 24, background: "#f8faff", border: `1px solid ${isFirebaseConnected ? "rgba(16,185,129,0.28)" : "rgba(245,158,11,0.28)"}` }}>
        <div style={{ width: 8, height: 8, borderRadius: "50%", background: isFirebaseConnected ? "#10b981" : "#f59e0b", animation: 'lbPulse 2s ease infinite' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: isFirebaseConnected ? "#10b981" : "#f59e0b" }}>
          {isFirebaseConnected ? "Live Network Active" : "Local Preview Mode"}
        </span>
      </div>

      {/* Current User Overview Box */}
      {totalPapers > 0 || myIndex !== -1 ? (
        <div style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)", borderRadius: 24, padding: 24, marginBottom: 32, color: "white", boxShadow: "0 12px 32px rgba(37,99,235,0.25)", position: "relative", overflow: "hidden", animation: "slideInUp 0.4s ease out" }}>
          <div style={{ position: "absolute", top: -20, right: -20, opacity: 0.1, transform: "rotate(15deg)" }}>
            <Crown size={120} />
          </div>
          
          <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 48, height: 48, borderRadius: 16, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)" }}>
                <User size={24} color="white" />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, letterSpacing: -0.3 }}>Your Performance</h2>
                <div style={{ fontSize: 13, opacity: 0.8, marginTop: 2 }}>Keep solving papers to improve your rank!</div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, background: "rgba(0,0,0,0.15)", borderRadius: 16, padding: 16, backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ flex: "1 1 auto", minWidth: 100 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, opacity: 0.8, fontWeight: 600, marginBottom: 4 }}>State Rank</div>
                <div style={{ fontSize: 32, fontWeight: 800, fontFamily: "'Space Mono', monospace", display: "flex", alignItems: "baseline", gap: 4 }}>
                  #{myRank} <span style={{ fontSize: 14, fontWeight: 600, opacity: 0.8 }}>/ {sorted.length}</span>
                </div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.2)", margin: "0 8px" }} className="hide-on-mobile"></div>
              <div style={{ flex: "1 1 auto", minWidth: 80 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, opacity: 0.8, fontWeight: 600, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}><Target size={12}/> Accuracy</div>
                <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Space Mono', monospace", color: "#6ee7b7" }}>{totalPapers > 0 ? accuracy : (myData?.accuracy ?? 0)}%</div>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.2)", margin: "0 8px" }} className="hide-on-mobile"></div>
              <div style={{ flex: "1 1 auto", minWidth: 80 }}>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 1, opacity: 0.8, fontWeight: 600, marginBottom: 4, display: "flex", alignItems: "center", gap: 4 }}><Flame size={12}/> Streak</div>
                <div style={{ fontSize: 24, fontWeight: 800, fontFamily: "'Space Mono', monospace", color: "#fcd34d" }}>{totalPapers > 0 ? streak : (myData?.streak ?? 0)}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", borderRadius: 24, padding: 24, marginBottom: 32, border: "1px dashed #cbd5e1", textAlign: "center" }}>
          <div style={{ display: "inline-flex", padding: 12, borderRadius: "50%", background: "white", boxShadow: "0 4px 12px rgba(0,0,0,0.05)", marginBottom: 12 }}>
            <TrendingUp size={24} color="#64748b" />
          </div>
          <h3 style={{ margin: "0 0 8px", color: "#0f172a", fontSize: 16 }}>Start Your Journey</h3>
          <p style={{ margin: 0, color: "#64748b", fontSize: 14 }}>Complete your first paper to get ranked on the state leaderboard!</p>
        </div>
      )}

      {/* Controls & Tabs */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
        <h3 style={{ margin: 0, fontSize: 18, color: "#0f172a", fontWeight: 700 }}>Top Performers</h3>
        
        <div style={{ display: "flex", gap: 4, background: "#f8fafc", border: '1px solid #e2e8f0', borderRadius: 12, padding: 4 }}>
          {[{ id: "accuracy", label: "By Accuracy", icon: <Target size={14} /> }, { id: "streak", label: "By Streak", icon: <Flame size={14} /> }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} className="tab-btn"
              style={{ padding: "8px 16px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 13, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, background: tab === t.id ? "#ffffff" : "transparent", color: tab === t.id ? "#2563eb" : "#64748b", boxShadow: tab === t.id ? "0 2px 8px rgba(0,0,0,0.05)" : "none" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {fetchError && !loading && (
        <div style={{ background: "#fff1f2", border: "1px solid rgba(239,68,68,0.22)", borderRadius: 12, padding: "14px 20px", marginBottom: 24, color: "#ef4444", fontSize: 13, display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 }}>
          <Zap size={16} /> {fetchError} — unable to load live rankings. Showing mock data.
        </div>
      )}

      {/* Rows */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 80, background: "#ffffff", borderRadius: 24, border: "1px solid #e2e8f0" }}>
          <div style={{ width: 40, height: 40, border: "4px solid rgba(37,99,235,0.1)", borderTop: "4px solid #2563eb", borderRadius: "50%", margin: "0 auto 16px", animation: "spin 0.8s linear infinite" }} />
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
          <p style={{ color: "#64748b", fontSize: 15, fontWeight: 500 }}>Syncing live leaderboard…</p>
        </div>
      ) : sorted.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "#ffffff", border: "1px dashed #cbd5e1", borderRadius: 24 }}>
          <Trophy size={48} color="rgba(37,99,235,0.1)" />
          <p style={{ color: "#64748b", fontSize: 16, fontWeight: 600, margin: "16px 0 6px" }}>No rankings yet</p>
          <p style={{ color: "#94a3b8", fontSize: 14, margin: 0 }}>Be the first to claim the top spot!</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {paginatedRows.map((student, mapIndex) => {
            const i = (page - 1) * rowsPerPage + mapIndex;
            const isYou = user?.uid && student.uid === user?.uid;
            
            // Badge logic
            let badgeClass = "rank-badge-default";
            let badgeContent = i + 1;
            if (i === 0) { badgeClass = "rank-badge-1"; badgeContent = <Medal size={16} color="white" />; }
            else if (i === 1) { badgeClass = "rank-badge-2"; badgeContent = <Medal size={16} color="white" />; }
            else if (i === 2) { badgeClass = "rank-badge-3"; badgeContent = <Medal size={16} color="white" />; }

            return (
              <div key={student.id || student.uid || i} className="lb-row"
                style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", borderRadius: 16, animationDelay: `${mapIndex * 0.02}s`, background: isYou ? "rgba(59,130,246,0.05)" : "#ffffff", border: `1px solid ${isYou ? "rgba(59,130,246,0.4)" : "#e2e8f0"}`, outline: isYou ? "2px solid rgba(59,130,246,0.1)" : "none" }}>

                {/* Rank */}
                <div className={badgeClass} style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontFamily: "'Space Mono',monospace", transition: "all 0.2s" }}>
                  {badgeContent}
                </div>

                {/* Name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: isYou ? "#2563eb" : "#0f172a", fontSize: 15, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", letterSpacing: -0.2 }}>
                    {student.name || "Anonymous Student"}
                    {isYou && <span style={{ fontSize: 10, color: "#2563eb", background: "#dbeafe", border: "1px solid rgba(99,102,241,0.2)", padding: "2px 8px", borderRadius: 20, fontWeight: 800, letterSpacing: 0.5 }}>YOU</span>}
                  </div>
                  <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4, fontWeight: 500, display: "flex", alignItems: "center", gap: 4 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: isYou || student.lastActive === "Today" ? "#10b981" : "#cbd5e1" }} />
                    Active {student.lastActive || "—"}
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: 24, flexShrink: 0, alignItems: "center" }}>
                  <div className="stats-col">
                    <div className="stats-val" style={{ color: "#f97316" }}>{student.streak ?? 0} <Flame size={12} strokeWidth={3} /></div>
                    <div className="stats-lbl">STREAK</div>
                  </div>
                  <div style={{ width: 1, height: 24, background: "#e2e8f0" }}></div>
                  <div className="stats-col">
                    <div className="stats-val" style={{ color: "#10b981" }}>{student.accuracy ?? 0}%</div>
                    <div className="stats-lbl">ACCURACY</div>
                  </div>
                  <div style={{ width: 1, height: 24, background: "#e2e8f0" }} className="hide-on-mobile"></div>
                  <div className="stats-col hide-on-mobile">
                    <div className="stats-val" style={{ color: "#3b82f6" }}>{student.papers ?? 0}</div>
                    <div className="stats-lbl">PAPERS</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Controls */}
      {!loading && sorted.length > rowsPerPage && (
        <div style={{ marginTop: 24, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13, fontWeight: 500 }}>
            Showing <b>{(page - 1) * rowsPerPage + 1}</b> to <b>{Math.min(page * rowsPerPage, sorted.length)}</b> of <b>{sorted.length}</b> students
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button className="page-btn" disabled={page === 1} onClick={() => setPage(p => p - 1)}>
              <ChevronLeft size={16} /> Previous
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: 10, background: "#f8fafc", border: "1px solid #e2e8f0", fontSize: 13, fontWeight: 700, color: "#0f172a", fontFamily: "'Space Mono', monospace" }}>
              {page}
            </div>
            <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(p => p + 1)}>
              Next <ChevronRight size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LeaderboardPage;
