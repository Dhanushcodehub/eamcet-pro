import {
  getDoc,
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  limit,
  where
} from "firebase/firestore";

// ─── Mock Store (used when Firebase is not connected) ──────────────────────────
export const MOCK_STORE = {};

// ─── Firebase Firestore Helpers ────────────────────────────────────────────────
export const db = {
  /** Get a single document by path (e.g. "users/uid123") */
  async get(path) {
    if (window._firebaseDb) {
      const snap = await getDoc(doc(window._firebaseDb, ...path.split("/")));
      return snap.exists() ? snap.data() : null;
    }
    return MOCK_STORE[path] || null;
  },

  /** Overwrite a document */
  async set(path, data) {
    if (window._firebaseDb) {
      await setDoc(doc(window._firebaseDb, ...path.split("/")), data);
      return true;
    }
    MOCK_STORE[path] = data;
    return true;
  },

  /** Merge-update a document */
  async update(path, data) {
    if (window._firebaseDb) {
      await setDoc(doc(window._firebaseDb, ...path.split("/")), data, {
        merge: true,
      });
      return true;
    }
    MOCK_STORE[path] = { ...(MOCK_STORE[path] || {}), ...data };
    return true;
  },

  /** Fetch all documents in a collection (max 50) */
  async getCollection(collectionPath) {
    if (window._firebaseDb) {
      const q = query(
        collection(window._firebaseDb, collectionPath),
        limit(50)
      );
      const snap = await getDocs(q);
      return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
    }
    // Mock fallback
    return Object.entries(MOCK_STORE)
      .filter(([k]) => k.startsWith("leaderboard/"))
      .map(([k, v]) => ({ id: k.split("/")[1], ...v }))
      .sort((a, b) => (b.streak || 0) - (a.streak || 0));
  },

  /** Fetch users referred by a specific code */
  async getReferrals(referralCode) {
    if (window._firebaseDb) {
      const q = query(
        collection(window._firebaseDb, "leaderboard"),
        where("referredBy", "==", referralCode)
      );
      const snap = await getDocs(q);
      return snap.docs.map(d => ({id: d.id, ...d.data()}));
    }
    // Mock fallback
    return Object.entries(MOCK_STORE)
      .filter(([k, v]) => k.startsWith("leaderboard/") && v?.referredBy === referralCode)
      .map(([k, v]) => ({ id: k.split("/")[1], ...v }));
  }
};
