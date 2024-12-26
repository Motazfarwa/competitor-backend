const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',  // Matches the user in docker-compose
  host: 'localhost',  // 'db' is the service name in Docker Compose, not 'localhost'
  database: 'postgres',  // The database name as per docker-compose
  password: 'postgres',  // Password as per docker-compose
  port: 5432,  // Default PostgreSQL port
  ssl: { rejectUnauthorized: false },  // Enable SSL if you're connecting to Azure
});

module.exports = pool;
