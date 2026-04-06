import { useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { Flame, Trophy, Target } from "lucide-react";
import { getTodayStr } from "../lib/utils.js";

function LeaderboardPage({ user, streak, accuracy, sessions }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [tab, setTab] = useState("streak");
  const [refreshKey, setRefreshKey] = useState(0);

  // Real-time Firestore listener
  useState(() => {
    if (!window._firebaseDb) {
      setLoading(false);
      return;
    }
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

  return (
    <div>
      <style>{`
        @keyframes lbRowIn { from{opacity:0;transform:translateX(-8px)} to{opacity:1;transform:translateX(0)} }
        .lb-row { animation: lbRowIn 0.25s ease both; transition: background 0.15s; }
        .lb-row:hover { background: #ffffff !important; }
      `}</style>

      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
        <div>
          <h1 style={{ margin: "0 0 4px", color: "#0f172a", fontSize: 22, fontWeight: 700, letterSpacing: -0.4 }}>Leaderboard</h1>
          <p style={{ margin: 0, color: "#64748b", fontSize: 13 }}>Live rankings from all students</p>
        </div>
        <button onClick={() => setRefreshKey(k => k + 1)} style={{ display: "flex", alignItems: "center", gap: 5, padding: "7px 14px", borderRadius: 20, border: "1px solid #f1f5f9", background: "transparent", color: "#64748b", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Sora',sans-serif", transition: "all 0.15s" }}>
          ↻ Refresh
        </button>
      </div>

      {/* Status Badge */}
      <div style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 12px", borderRadius: 20, marginBottom: 18, background: isFirebaseConnected ? "#e2e8f0" : "#e2e8f0", border: `1px solid ${isFirebaseConnected ? "rgba(16,185,129,0.28)" : "rgba(245,158,11,0.28)"}` }}>
        <div style={{ width: 7, height: 7, borderRadius: "50%", background: isFirebaseConnected ? "#10b981" : "#f59e0b" }} />
        <span style={{ fontSize: 11, fontWeight: 600, color: isFirebaseConnected ? "#10b981" : "#f59e0b" }}>
          {isFirebaseConnected ? "Live · Firebase connected" : "Preview mode"}
        </span>
      </div>

      {/* Sort Tabs */}
      <div style={{ display: "flex", gap: 4, marginBottom: 20, background: "#ffffff", borderRadius: 10, padding: 4, width: "fit-content" }}>
        {[{ id: "streak", label: "Streak", icon: <Flame size={13} /> }, { id: "accuracy", label: "Accuracy", icon: <Target size={13} /> }].map(t => (
          <button key={t.id} onClick={() => setTab(t.id)}
            style={{ padding: "7px 18px", borderRadius: 8, border: "none", cursor: "pointer", fontFamily: "'Sora',sans-serif", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 5, transition: "all 0.15s", background: tab === t.id ? "#2563eb" : "transparent", color: tab === t.id ? "#ffffff" : "#64748b" }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Error */}
      {fetchError && !loading && (
        <div style={{ background: "#e2e8f0", border: "1px solid rgba(239,68,68,0.22)", borderRadius: 12, padding: "12px 16px", marginBottom: 16, color: "#fca5a5", fontSize: 12 }}>
          ⚠️ {fetchError} — check your Firestore security rules allow reads on the <code>leaderboard</code> collection.
        </div>
      )}

      {/* Rows */}
      {loading ? (
        <div style={{ textAlign: "center", padding: 60 }}>
          <div style={{ width: 34, height: 34, border: "3px solid rgba(37,99,235,0.1)", borderTop: "3px solid #2563eb", borderRadius: "50%", margin: "0 auto 12px", animation: "spin 0.8s linear infinite" }} />
          <p style={{ color: "#64748b", fontSize: 13 }}>Fetching live rankings…</p>
        </div>
      ) : sorted.length === 0 ? (
        <div style={{ textAlign: "center", padding: "50px 20px", background: "#ffffff", border: "1px solid #ffffff", borderRadius: 16 }}>
          <Trophy size={34} color="rgba(37,99,235,0.15)" />
          <p style={{ color: "#64748b", fontSize: 14, margin: "12px 0 4px" }}>No rankings yet</p>
          <p style={{ color: "rgba(37,99,235,0.1)", fontSize: 12, margin: 0 }}>Complete a paper to appear here!</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {sorted.map((student, i) => {
            const isYou = student.uid === user?.uid;
            return (
              <div key={student.id || student.uid || i} className="lb-row"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", borderRadius: 12, animationDelay: `${i * 0.035}s`, background: isYou ? "rgba(99,102,241,0.09)" : "#ffffff", border: `1px solid ${isYou ? "rgba(99,102,241,0.33)" : "#e2e8f0"}` }}>

                {/* Rank */}
                <div style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: i < 3 ? "#ffffff" : "#64748b", fontFamily: "'Space Mono',monospace", background: i === 0 ? "linear-gradient(135deg,#f59e0b,#ef4444)" : i === 1 ? "linear-gradient(135deg,#94a3b8,#64748b)" : i === 2 ? "linear-gradient(135deg,#cd7c2f,#92400e)" : "#e2e8f0", border: i < 3 ? "2px solid #ffffff" : "1px solid transparent", boxShadow: i < 3 ? "0 4px 10px rgba(0,0,0,0.15)" : "none" }}>
                  {i + 1}
                </div>

                {/* Name */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ color: isYou ? "#3b82f6" : "#0f172a", fontSize: 14, fontWeight: 600, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    {student.name || "Anonymous"}
                    {isYou && <span style={{ fontSize: 9, color: "#2563eb", background: "#e2e8f0", border: "1px solid rgba(99,102,241,0.28)", padding: "2px 7px", borderRadius: 20, fontWeight: 700 }}>YOU</span>}
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
        </div>
      )}

      {!loading && sorted.length > 0 && (
        <p style={{ color: "rgba(37,99,235,0.15)", fontSize: 11, textAlign: "center", marginTop: 16 }}>
          {sorted.length} student{sorted.length !== 1 ? "s" : ""} ranked · press Refresh for latest data
        </p>
      )}
    </div>
  );
}

export default LeaderboardPage;
