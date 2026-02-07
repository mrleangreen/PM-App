import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
});

router.post("/", async (req, res) => {
  const { title, description, status } = req.body;
  const task = await Task.create({ title, description, status });
  res.json(task);
});

router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

router.post("/:id/comments", async (req, res) => {
  const { text } = req.body;
  const task = await Task.findById(req.params.id);
  task.comments.push({ text });
  await task.save();
  res.json(task);
});

export default router;
