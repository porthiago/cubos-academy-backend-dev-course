const express = require('express');
const app = express();
const {exibirJogador, removerJogador, adicionarJogador} = require('./controladores/playgame')

app.get('/', exibirJogador);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);

app.listen(8000);