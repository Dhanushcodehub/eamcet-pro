# 🎓 EAMCET Pro

> A modern, full-featured exam preparation platform for EAMCET (Engineering, Agriculture and Medical Common Entrance Test) aspirants — built with React, Vite, and Firebase.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-eamcetpro.tech-blue?style=for-the-badge)](https://eamcetpro.tech)
[![React](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.12-FFCA28?style=for-the-badge&logo=firebase)](https://firebase.google.com/)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

---

## 📖 About

**EAMCET Pro** is a web application designed to help students prepare for the EAMCET entrance exam. It provides practice quizzes, a real-time leaderboard powered by Firebase, and user authentication — all wrapped in a clean, responsive UI.

---

## ✨ Features

- 🔐 **User Authentication** — Email/Password and Google Sign-In via Firebase Auth
- 📊 **Live Leaderboard** — Real-time scores stored and retrieved from Firestore
- 📝 **Practice Questions** — Subject-wise MCQ practice (Physics, Chemistry, Mathematics/Biology)
- 📱 **Responsive Design** — Works seamlessly on desktop and mobile
- ⚡ **Fast & Modern** — Built with Vite for lightning-fast development and builds

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | Frontend UI framework |
| Vite 5 | Build tool & dev server |
| Firebase Auth | User authentication |
| Firestore | Real-time database (leaderboard & scores) |
| Lucide React | Icon library |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Firebase](https://firebase.google.com/) project (see [Firebase Setup](#-firebase-setup))

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Dhanushcodehub/eamcet-pro.git
   cd eamcet-pro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure Firebase**

   Create a `.env` file in the root directory and add your Firebase config:

   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔥 Firebase Setup

If you're setting up Firebase for the first time, refer to the detailed [FIREBASE\_SETUP\_GUIDE.md](./FIREBASE_SETUP_GUIDE.md) included in this repo.

**Quick summary:**

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Enable **Authentication** → turn on **Email/Password** and **Google** sign-in providers.
3. Create a **Firestore Database** (start in test mode for development).
4. Register a Web App and copy the `firebaseConfig` object into your `.env` file.

---

## 📁 Project Structure

```
eamcet-pro/
├── src/                    # Application source code
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components
│   └── ...
├── public/                 # Static assets
├── index.html              # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
├── FIREBASE_SETUP_GUIDE.md # Firebase setup walkthrough
└── .gitignore
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the app for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint for code quality checks |

---

## 🌐 Deployment

The official version of **EAMCET Pro** is hosted at [eamcetpro.tech](https://eamcetpro.tech).

To deploy your own instance:

1. Push your code to GitHub.
2. Import the repository into your preferred hosting provider (e.g., Vercel, Netlify).
3. Add your Firebase environment variables under **Project Settings → Environment Variables**.
4. Deploy!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is open source. Feel free to use and modify it.

---

## 👨‍💻 Author

**Dhanush** — [@Dhanushcodehub](https://github.com/Dhanushcodehub)

---

> ⭐ If you found this project helpful, consider giving it a star on GitHub!
