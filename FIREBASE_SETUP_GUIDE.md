# 🚀 Beginner's Guide: Connecting Firebase to EMCET Pro

Don't worry! This takes about 5 minutes. Follow these exact steps and you'll have a live leaderboard in no time.

---

### Step 1: Create the Project
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add Project**.
3. Name it `emcet-live`.
4. Click **Continue** -> **Continue** -> **Create Project**.
5. Once it's ready, click **Continue** to enter your dashboard.

---

### Step 2: Turn on "Authentication" (Crucial! 🔑)
*Without this, nobody can log in.*
1. In the left sidebar, click **Build** -> **Authentication**.
2. Click the big **Get Started** button.
3. Under **Sign-in method**, click **Email/Password**.
4. Turn on the first switch (**Email/Password**) and click **Save**.
5. Click **Add new provider** -> Click **Google** -> Turn it **On** -> Select your email under "Support email" -> Click **Save**.

---

### Step 3: Create the Database (Firestore 📊)
*This stores all the scores/leaderboard.*
1. In the left sidebar, click **Build** -> **Firestore Database**.
2. Click **Create database**.
3. Choose **Start in test mode** (this is easiest for beginners as it's open for 30 days).
4. Click **Next** -> **Enable**.

---

### Step 4: Add your App and Get the Code 🛠️
1. Go back to your **Project Overview** (click the home icon in the top left).
2. Click the **Web icon** ( looks like `</>` ).
3. Register your app as `emcet-web`.
4. **Copy the code block** that looks like this:
   ```js
   const firebaseConfig = {
     apiKey: "...",
     authDomain: "...",
     projectId: "...",
     // ... and so on
   };
   ```
5. **Paste that code block here in our chat!**

---

### Step 5: I'll Handle the Rest!
Once you paste that code, I will:
- Update your app to use your new project.
- Remove all dummy/mock data.
- Make the leaderboard go live!

> [!TIP]
> If you see an error like "configuration-not-found", it usually means you missed the **"Get Started"** button in Step 2. Just go back and make sure it's clicked!
