const { Router } = require("express");
const {
  getAlltasks,
  getTaks,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

const router = Router();

router.get("/task", getAlltasks);
router.get("/task/:id", getTaks);
router.post("/task", createTask);
router.delete("/task", deleteTask);
router.put("/task", updateTask);

module.exports = router;
