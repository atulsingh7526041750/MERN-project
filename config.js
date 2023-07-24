// db.js

const mysql = require('mysql2');

// Create the connection pool
const pool = mysql.createPool({
  host: 'localhost',       // Change this to your MySQL host
  port: 3306,  
  user: 'root',   // Change this to your MySQL username
  password: 'root', // Change this to your MySQL password
  database: 'users', // Change this to your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to MySQL database.');
  connection.release();
});

module.exports = pool;
