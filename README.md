PM App (React + Node/Express + MongoDB)
Goal

A web-based project management app MVP focused on:

Task creation and editing

Task status tracking (To Do / In Progress / Done)

Project dashboard view

Comments on tasks

Tech Stack

Frontend: React + TypeScript (Vite)
Backend: Node.js + Express
Database: MongoDB Atlas
Future: JWT authentication (planned)

Setup (first time)

Install Node.js (LTS) and Git

Clone the repo

Create server/.env by copying server/.env.example

Add Your MongoDB Atlas connection string.  example:  mongodb+srv://greyprovidince_db_user:wJP1hE7ZVwHToP9F@pmappcluster.rugvemc.mongodb.net/?appName=PMappCluster
Set JWT_SECRET

Run:

npm run install:all
npm run dev
URLs

Client: http://localhost:5173

API Health: http://localhost:5000/health

Tasks API: http://localhost:5000/tasks

Current Features

Express API connected to MongoDB

Task CRUD endpoints

Comment system on tasks

React frontend ready for dashboard UI

Team Workflow

Create a branch per feature

example: feature/task-crud

example: feature/comments-ui

Open Pull Requests into main

Track work on GitHub Project board
