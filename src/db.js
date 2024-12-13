const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Sopa2018.",
  port: 5432,
  database: "tasksdb",
});

module.exports = pool;
