import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DATABASE_URL?.split('@')[1]?.split(':')[0] || 'localhost',
  user: process.env.DATABASE_URL?.split('//')[1]?.split(':')[0] || 'root',
  password: process.env.DATABASE_URL?.split(':')[2]?.split('@')[0] || 'password',
  database: process.env.DATABASE_URL?.split('/')[3] || 'spacex_ipo',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
