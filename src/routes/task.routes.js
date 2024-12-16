import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAlltasks,
  getTaks,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getAlltasks);
router.get("/tasks/:id", getTaks);
router.post("/tasks", createTask);
router.delete("/tasks/:id", deleteTask);
router.put("/tasks/:id", updateTask);

export default router;
