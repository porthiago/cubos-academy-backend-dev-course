const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'catalogo_pokemons',
  password: 'postgres',
  port: 5432
})

const query = (text, params) => pool.query(text, params)

module.exports = {
  query
}
