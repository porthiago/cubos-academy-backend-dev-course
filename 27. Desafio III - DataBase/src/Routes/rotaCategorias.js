const express = require('express');
const categorias = require('../Controllers/categorias');
const { validarToken } = require('../Middlewares/validacaoToken');

const rotas = express();

//intermediário
rotas.use(validarToken);

//categorias
rotas.get('/', categorias.listarCategorias);

module.exports = rotas;
