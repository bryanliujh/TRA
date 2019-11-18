const mysql = require("promise-mysql");

const { NODE_ENV, PRODUCTION_DB, DEVELOPMENT_DB } = process.env;
const db = NODE_ENV === "production" ? PRODUCTION_DB : DEVELOPMENT_DB;


//Creation of db connection pool with connection information
const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: "ilovepassword",
  database: db,
  connectionLimit: 10
});


//function to get connection, it will throw the necessary errors when error occured.
pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }
  if (connection) connection.release();
  return;
});

module.exports = pool;
