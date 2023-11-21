const { Pool } = require('pg');

// Create a new PostgreSQL pool with your database connection details
const pool = new Pool({
  user: 'farhun',
  host: 'localhost',
  database: 'mentorconnect',
  password: 'farhun04#',
  port: 5432, // PostgreSQL default port
});

module.exports = pool;