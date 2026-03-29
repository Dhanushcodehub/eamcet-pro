import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, getRedirectResult } from "firebase/auth";

// Firebase Project config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
window._firebaseDb = getFirestore(app);
window._firebaseAuth = getAuth(app);

// ⚡ Start processing the Google redirect result IMMEDIATELY (before React mounts).
// This races ahead of onAuthStateChanged so auth state is ready when App renders.
window._redirectResultPromise = getRedirectResult(window._firebaseAuth)
  .then(result => {
    console.log("[Auth] getRedirectResult →", result?.user?.email ?? "no pending redirect");
    return result;
  })
  .catch(err => {
    console.error("[Auth] getRedirectResult error:", err.code, err.message);
    return null;
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
