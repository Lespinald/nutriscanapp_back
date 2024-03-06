const { Pool } = require('pg');

const pool = new Pool({
  user: 'nutriscan_db_user',
  host: 'dpg-cnjrlgocmk4c739ik8v0-a',
  database: 'nutriscan_db',
  password: 'D85SsQNsI74qwGGrKNsk70UVstWa5c6I',
  port: 5432,
  ssl: true
});


module.exports = pool;