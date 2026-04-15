import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Flame, Trophy, Target, Lock, Zap, ArrowRight } from "lucide-react";
import { getTodayStr } from "../lib/utils.js";

function LeaderboardPage({ user, plan = 'free', streak, accuracy, sessions, onUpgrade }) {
  const isPro = plan === 'pro' || plan === 'annual';
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [tab, setTab] = useState("streak");
  const [refreshKey, setRefreshKey] = useState(0);

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

  const totalPapers = sessions.length;
  const hasMyRow = rows.some(r => r.uid === user?.uid);
  const allRows = totalPapers > 0 && !hasMyRow
    ? [...rows, { uid: user?.uid, name: user?.name, streak, accuracy, papers: totalPapers, lastActive: getTodayStr() }]
    : rows;

  const sorted = [...allRows].sort((a, b) =>
    tab === "streak"
      ? (b.streak || 0) - (a.streak || 0) || (b.accuracy || 0) - (a.accuracy || 0)
      : (b.accuracy || 0) - (a.accuracy || 0) || (b.streak || 0) - (a.streak || 0)
  );

  const isFirebaseConnected = typeof window !== "undefined" && !!window._firebaseDb;

  // Free users see top 3 rows, rest are locked
  const FREE_VISIBLE = 3;
  const visibleRows = isPro ? sorted : sorted.slice(0, FREE_VISIBLE);
  const lockedCount = isPro ? 0 : Math.max(0, sorted.length - FREE_VISIBLE);

  return (
    <div>
      <style>{`
        @keyframes lbRowIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        @keyframes lbPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .lb-row { animation: lbRowIn 0.25s ease both; transition: background 0.15s; }
        .lb-row:hover { background: #f8faff !important; }
        .lb-locked-row { position: relative; filter: blur(5px); pointer-events: none; user-select: none; }
        .lb-gate-wrap { position: relative; }
        .lb-gate-banner {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(248,250,255,0) 0%, rgba(248,250,255,0.9) 30%, rgba(248,250,255,1) 60%);
          display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
          padding-bottom: 32px; z-index: 10; border-radius: 16px;
        }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
        <div>
          <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Leaderboard</h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Live rankings from all students</p>
        </div>
        <button
          onClick={() => setRefreshKey(k => k + 1)}
          style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 20, border: "1px solid #e2e8f0", background: "#ffffff", color: "#64748b", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s" }}
        >
          <ArrowRight size={13} style={{ transform: 'rotate(-45deg)' }} /> Refresh
        </button>
      </div>

      {/* Status Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, marginBottom: 18, background: "#f8faff", border: `1px solid ${isFirebaseConnected ? "rgba(16,185,129,0.28)" : "rgba(245,158,11,0.28)"}` }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: isFirebaseConnected ? "#10b981" : "#f59e0b", animation: 'lbPulse 2s ease infinite' }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: isFirebaseConnected ? "#10b981" : "#f59e0b" }}>
          {isFirebaseConnected ? "Live · Firebase connected" : "Preview mode"}
        </span>
      </div>

      {/* Pro badge for pro users */}
      {isPro && (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'linear-gradient(90deg,#eff6ff,#dbeafe)', border: '1px solid #bfdbfe', borderRadius: 20, padding: '4px 14px', marginBottom: 18, marginLeft: 10, fontSize: 11, fontWeight: 700, color: '#1d4ed8' }}>
          <Zap size={11} fill="#2563eb" color="#2563eb" /> Full leaderboard unlocked
        </div>
      )}

      {/* Sort Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: "#ffffff", border: '1px solid #e2e8f0', borderRadius: 12, padding: 4, width: "fit-content" }}>
        {[{ id: "streak", label: "Streak", icon: <Flame size={13} /> }, { id: "accuracy", label: "Accuracy", icon: <Target size={13} /> }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{ padding: "7px 18px", borderRadius: 9, border: "none", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s", background: tab === t.id ? "#2563eb" : "transparent", color: tab === t.id ? "#ffffff" : "#64748b" }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Error */}
      {fetchError && !loading && (
        <div style={{ background: "#fff1f2", border: "1px solid rgba(239,68,68,0.22)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, color: "#ef4444", fontSize: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <Lock size={14} /> {fetchError} — check your Firestore security rules.
        </div>
      )}

      {/* Rows */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <div style={{ width: 34, height: 34, border: "3px solid rgba(37,99,235,0.1)", borderTop: "3px solid #2563eb", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.8s linear infinite" }} />
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
          <p style={{ color: "#64748b", fontSize: 13 }}>Fetching live rankings…</p>
        </div>
      ) : sorted.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 20px", background: "#ffffff", border: "1px solid #e2e8f0", borderRadius: 16 }}>
          <Trophy size={34} color="rgba(37,99,235,0.15)" />
          <p style={{ color: "#64748b", fontSize: 14, margin: "12px 0 4px" }}>No rankings yet</p>
          <p style={{ color: "#94a3b8", fontSize: 12, margin: 0 }}>Complete a paper to appear here!</p>
        </div>
      ) : (
        <div className="lb-gate-wrap">
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {/* Visible rows */}
            {visibleRows.map((student, i) => {
              const isYou = student.uid === user?.uid;
              return (
                <div key={student.id || student.uid || i} className="lb-row"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, animationDelay: `${i * 0.035}s`, background: isYou ? "rgba(99,102,241,0.06)" : "#ffffff", border: `1px solid ${isYou ? "rgba(99,102,241,0.3)" : "#e2e8f0"}` }}>

                  {/* Rank */}
                  <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: i < 3 ? "#ffffff" : "#64748b", fontFamily: "'Space Mono',monospace", background: i === 0 ? "linear-gradient(135deg,#f59e0b,#ef4444)" : i === 1 ? "linear-gradient(135deg,#94a3b8,#64748b)" : i === 2 ? "linear-gradient(135deg,#cd7c2f,#92400e)" : "#e2e8f0", border: i < 3 ? "2px solid #ffffff" : "1px solid transparent", boxShadow: i < 3 ? "0 4px 10px rgba(0,0,0,0.15)" : "none" }}>
                    {i + 1}
                  </div>

                  {/* Name */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ color: isYou ? "#3b82f6" : "#0f172a", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                      {student.name || "Anonymous"}
                      {isYou && <span style={{ fontSize: 9, color: "#2563eb", background: "#eff6ff", border: "1px solid rgba(99,102,241,0.28)", padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>YOU</span>}
                    </div>
                    <div style={{ color: "#64748b", fontSize: 11, marginTop: 2 }}>Last active: {student.lastActive || "—"}</div>
                  </div>

                  {/* Stats */}
                  <div style={{ display: "flex", gap: 18, flexShrink: 0 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#f97316", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15, display: "flex", alignItems: "center", gap: 3 }}>{student.streak ?? 0}<Flame size={12} color="#f97316" /></div>
                      <div style={{ color: "#64748b", fontSize: 9 }}>STREAK</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#10b981", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.accuracy ?? 0}%</div>
                      <div style={{ color: "#64748b", fontSize: 9 }}>SCORE</div>
                    </div>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ color: "#2563eb", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.papers ?? 0}</div>
                      <div style={{ color: "#64748b", fontSize: 9 }}>PAPERS</div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Locked rows (blurred) for free users */}
            {!isPro && lockedCount > 0 && sorted.slice(FREE_VISIBLE).map((student, i) => (
              <div key={`locked-${i}`} className="lb-row lb-locked-row"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, background: "#ffffff", border: "1px solid #e2e8f0" }}>
                <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: "#64748b", fontFamily: "'Space Mono',monospace", background: "#e2e8f0" }}>
                  {FREE_VISIBLE + i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>Student {FREE_VISIBLE + i + 1}</div>
                  <div style={{ fontSize: 11, color: "#64748b" }}>Last active: Today</div>
                </div>
                <div style={{ display: "flex", gap: 18 }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#f97316", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.streak ?? 0}</div>
                    <div style={{ fontSize: 9, color: "#64748b" }}>STREAK</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#10b981", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.accuracy ?? 0}%</div>
                    <div style={{ fontSize: 9, color: "#64748b" }}>SCORE</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ color: "#2563eb", fontFamily: "'Space Mono',monospace", fontWeight: 700, fontSize: 15 }}>{student.papers ?? 0}</div>
                    <div style={{ fontSize: 9, color: "#64748b" }}>PAPERS</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gate banner for free users */}
          {!isPro && lockedCount > 0 && (
            <div className="lb-gate-banner">
              <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: 20, padding: '24px 32px', maxWidth: 380, width: '100%', textAlign: 'center', boxShadow: '0 20px 50px rgba(0,0,0,0.1)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 14, background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px', boxShadow: '0 6px 18px rgba(37,99,235,0.3)' }}>
                  <Lock size={20} color="white" />
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, color: '#0f172a', marginBottom: 6 }}>
                  {lockedCount} more students hidden
                </div>
                <div style={{ fontSize: 13, color: '#64748b', marginBottom: 18, lineHeight: 1.5 }}>
                  Upgrade to Pro to see the full leaderboard and track your rank among all students.
                </div>
                <button
                  onClick={onUpgrade}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%', padding: '12px 20px', background: 'linear-gradient(135deg,#2563eb,#1d4ed8)', color: 'white', border: 'none', borderRadius: 12, fontFamily: 'Sora,sans-serif', fontSize: 14, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 14px rgba(37,99,235,0.3)', transition: 'all 0.2s' }}
                >
                  <Zap size={16} /> Unlock Full Leaderboard
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {!loading && sorted.length > 0 && (
        <p style={{ color: "#94a3b8", fontSize: 11, textAlign: "center", marginTop: isPro ? 16 : lockedCount > 0 ? 280 : 16 }}>
          {sorted.length} student{sorted.length !== 1 ? "s" : ""} ranked · press Refresh for latest data
        </p>
      )}
    </div>
  );
}

export default LeaderboardPage;
