import mariadb from 'mariadb';

const pool = mariadb.createPool({
  host: 'localhost',
  port: 3308,
  user: 'MariaDB',
  password: '7948512630',
  database: 'tcc',
  connectionLimit: 5
});

export default pool;
