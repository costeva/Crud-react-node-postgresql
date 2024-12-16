import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "postgres", // Usuario
  host: "localhost",
  password: "Sopa2018.", // Contraseña
  port: 5432, // Puerto
  database: "tasksdb", // Base de datos
});

export default pool;
