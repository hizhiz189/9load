require('dotenv').config()
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// // A simple SELECT query
// const rs = connection.query(
//   'SELECT * FROM `sites` order by ID ASC LIMIT 1',
//   function (err, results, fields) {
//     console.log(results); // results contains rows returned by server
//     // console.log(fields); // fields contains extra meta data about results, if available
//   }
// );

module.exports = connection;