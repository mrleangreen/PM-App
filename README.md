PM App (React + Node/Express + MongoDB)

Goal
A web-based project management app (MVP): login, task CRUD, assign tasks, and status tracking (To Do / In Progress / Done).

Tech
Frontend: React + TypeScript (Vite)
Backend: Node.js + Express
Database: MongoDB (Atlas recommended)
Auth: JWT

Setup (first time)
1) Install Node.js (LTS) and Git
2) Clone the repo
3) Create server/.env by copying server/.env.example
4) Fill in MONGO_URI and JWT_SECRET

Run
npm install
npm run install:all
npm run dev

URLs
Client: http://localhost:5173
API: http://localhost:5000/health

Team workflow
- Create a branch per feature: feature/task-crud, feature/auth, etc.
- Open PRs into main
- Keep tickets on the GitHub Project board
