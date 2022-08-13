const express = require('express');
const autenticacao = require('../Controllers/autenticacao');

const rotas = express();

//login
rotas.post('/', autenticacao.login);

module.exports = rotas;
