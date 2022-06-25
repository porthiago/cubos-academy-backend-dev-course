const express = require('express');
const rotas = express();

const pokemon = require('./controladores/pokemon');

rotas.get('/pokemon', pokemon.pokedex);
rotas.get('/pokemon/:idOuNome', pokemon.aWildPokemonAppeared)

module.exports = rotas;