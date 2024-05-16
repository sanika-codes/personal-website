// db.js

const mysql = require('mysql2');

// Create a MySQL database connection pool
const pool = mysql.createPool({
  host: '159.65.157.217',
  user: 'prjecmvqsn',
  password: 'gWJ2qz8efr',
  database: 'prjecmvqsn',
  connectionLimit: 10, // Adjust the connection pool size as needed
});

module.exports = pool.promise(); // Export the promise-based pool