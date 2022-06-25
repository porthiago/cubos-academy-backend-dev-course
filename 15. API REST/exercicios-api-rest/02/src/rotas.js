const express = require('express');
const rotas = express();

const convidados = require('./controladores/convidados')

rotas.get('/convidados', convidados.listarConvidados);
rotas.post('/convidados', convidados.adicionarConvidado);
rotas.delete('/convidados/:nome', convidados.removerConvidado);

module.exports = rotas;