
# 💬 Simple Chat App (React + Node + WebSocket)

A lightweight real-time chat application built with **React** on the frontend and **Express + WebSocket** on the backend.  
Supports live messaging, join/leave notifications, and displays online users dynamically.

---

## 🚀 Features

- 🧑‍🤝‍🧑 Real-time communication with WebSockets  
- 🔔 Join/leave notifications for all users  
- 🧠 Automatic username handling via local storage  
- 👀 Online users list updates live  
- 💬 Message timestamps and clean UI using Material UI  
- ⚡ Organized, modular code structure (client + server split)

---

## 🗂️ Project Structure

```
chat-app/
├── server/
│   ├── index.js
│   ├── wsHandlers/
│   │   ├── connectionHandler.js
│   │   ├── broadcast.js
│   │   └── clients.js
│   └── utils/
│       └── formatMessage.js
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── index.js
│   └── package.json
├── package.json
└── README.md
```

---

## 🛠️ Setup & Installation

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/chat-app.git
cd chat-app
```

### 2. Install dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

---

## 🏃 Running the App

### Option 1: Run server and client separately

In one terminal (server):

```bash
cd server
node index.js
```

In another terminal (client):

```bash
cd client
npm start
```

- Frontend: [http://localhost:3000](http://localhost:3000)  
- Backend: [http://localhost:4000](http://localhost:4000)  

### Option 2: Run both with one command (optional)

If you use `concurrently` in a root `package.json`:

```bash
npm run dev
```

---

## 🧩 Tech Stack

**Frontend:** React, Material UI, WebSocket  
**Backend:** Node.js, Express, ws (WebSocket server)

---

## 📸 Preview

```text
UserA joined the chat
UserB joined the chat
[UserA]: Hello everyone!
[UserB]: Hey there 👋
```

---

## 🧠 Next Steps

- Persist messages in a database (MongoDB / SQLite)  
- Add avatars for users  
- Implement private chat rooms or channels  
- Deploy on Render / Vercel

---

## 🧑‍💻 Author

**Sotiris** — Jr. Full-Stack Developer  
💼 [GitHub Profile](https://github.com/<your-username>)
