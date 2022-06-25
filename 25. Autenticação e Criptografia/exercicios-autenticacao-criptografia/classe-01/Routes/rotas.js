const express = require('express')
const usuarios = require('../Controllers/usuarios')
const pokemons = require('../Controllers/pokemons')

const rotas = express.Router()

//usuarios
rotas.post('/usuarios', usuarios.cadastrarUsuario)
rotas.post('/usuarios/login', usuarios.login)

//pokemon
rotas.post('/pokemons', pokemons.cadastrarPokemon)
rotas.put('/pokemons/:id', pokemons.atualizarApelidoPokemon)

module.exports = rotas
