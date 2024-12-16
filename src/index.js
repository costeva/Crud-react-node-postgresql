import express from "express";
import morgan from "morgan";
/* import { port } from "./config.js"; */
import taskRoutes from "./routes/task.routes.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use(taskRoutes);
app.use((err, req, res, next) => {
  return res.json({ message: err.message });
});

app.listen(4000);
console.log(`Server on port 4000`);
