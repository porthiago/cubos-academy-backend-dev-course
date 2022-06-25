const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'biblioteca',
  password: 'postgres',
  port: 5432
})

const query = (text, params) => pool.query(text, params)

module.exports = {
  query
}
