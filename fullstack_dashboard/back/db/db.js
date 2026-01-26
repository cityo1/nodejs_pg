// postgreSQL 정보: 
const { Pool } = require('pg');
require('dotenv').config();


// 연결 풀 생성 (대량의 쿼리 처리 시 효율적)
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = { pool };