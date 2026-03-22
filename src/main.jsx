import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase Project config
const firebaseConfig = {
  apiKey: "AIzaSyClgvskceBwQhZEU1X7E2ZmVs_z3AIv_XE",
  authDomain: "eamcet-pro.firebaseapp.com",
  projectId: "eamcet-pro",
  storageBucket: "eamcet-pro.firebasestorage.app",
  messagingSenderId: "846356712669",
  appId: "1:846356712669:web:55a7f762a05978e9d05f34",
  measurementId: "G-C6LFX14TXN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
window._firebaseDb = getFirestore(app);
window._firebaseAuth = getAuth(app);

// Firebase services globally accessible via window._firebaseDb and window._firebaseAuth

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
