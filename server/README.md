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

chat-app/
├── server/
│ ├── index.js
│ ├── wsHandlers/
│ │ ├── connectionHandler.js
│ │ ├── broadcast.js
│ │ └── clients.js
│ └── utils/
│ └── formatMessage.js
├── client/
│ ├── src/
│ │ ├── App.jsx
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── utils/
│ │ └── index.js
│ └── package.json
├── package.json
└── README.md

## 🛠️ Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/chat-app.git
cd chat-app

2. Install dependencies
Server

cd server
npm install

Client
cd ../client
npm install


🏃 Running the App
Option 1: Run each part manually
# Server
cd server
node index.js

# Client
cd client
npm start

Frontend runs on http://localhost:3000

Server runs on http://localhost:4000
