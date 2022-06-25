const express = require('express');
const app = express();
const roteador = require('../src/roteador');
const validarSenha = require('../src/intermediarios');

app.use(express.json());

app.use(validarSenha);
app.use(roteador);

app.listen(3000);