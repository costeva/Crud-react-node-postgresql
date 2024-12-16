import pool from "../db.js";

export const getAlltasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM tasks");
    res.json(allTasks.rows);
  } catch (error) {
    next(error);
  }
};

export const getTaks = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

/* export const createTask = async (req, res) => {
  const { title, description } = req.body;

  const result = await pool.query(
    "INSERT INTO tasks (title, description) VALUES ($1, $2)",
    [title, description]
  );
  console.log(result);
} */ export const deleteTask = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  const { id } = req.params;

  const { title, description } = req.body;
  try {
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};
