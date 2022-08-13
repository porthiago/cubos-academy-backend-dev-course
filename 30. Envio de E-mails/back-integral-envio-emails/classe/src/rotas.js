const express = require('express');
const newsletter = require('./controladores/newsletter');

const rotas = express();

rotas.post('/destinatarios', newsletter.cadastrarDestinatario);
rotas.post('/newsletter', newsletter.enviarNewsletter);

module.exports = rotas;
