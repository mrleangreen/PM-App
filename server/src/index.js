import taskRoutes from "./routes/tasks.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use("/tasks", taskRoutes);app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (req, res) => res.json({ ok: true, message: "API running" }));

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    if (!process.env.MONGO_URI) throw new Error("Missing MONGO_URI in server/.env");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`API listening on ${PORT}`));
  } catch (e) {
    console.error("Startup error:", e.message);
    process.exit(1);
  }
}

start();
