// ─── Constants ─────────────────────────────────────────────────────────────────
export const SUBJECTS = ["Physics", "Chemistry", "Mathematics", "Biology"];

// ─── Session Local-Cache Helpers ───────────────────────────────────────────────
export function localSave(uid, sessions) {
  try {
    localStorage.setItem(`eamcet_sessions_${uid}`, JSON.stringify(sessions));
  } catch (_) {}
}

export function localLoad(uid) {
  try {
    return JSON.parse(localStorage.getItem(`eamcet_sessions_${uid}`)) || [];
  } catch (_) {
    return [];
  }
}

// ─── Date / Streak Utilities ───────────────────────────────────────────────────
export function getTodayStr() {
  return new Date().toISOString().split("T")[0];
}

export function calcStreak(sessions) {
  if (!sessions || sessions.length === 0) return 0;
  const dates = [...new Set(sessions.map((s) => s.date))].sort().reverse();
  let streak = 0;
  let curr = new Date();
  curr.setHours(0, 0, 0, 0);
  for (const d of dates) {
    const dDate = new Date(d);
    const diff = Math.round((curr - dDate) / 86400000);
    if (diff <= 1) {
      streak++;
      curr = dDate;
    } else break;
  }
  return streak;
}

export function calcAccuracy(sessions) {
  if (!sessions?.length) return 0;
  const total = sessions.reduce((a, s) => a + (s.total || 0), 0);
  const correct = sessions.reduce((a, s) => a + (s.correct || 0), 0);
  return total ? Math.round((correct / total) * 100) : 0;
}
