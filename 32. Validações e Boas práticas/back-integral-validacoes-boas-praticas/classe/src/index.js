require('dotenv').config();

const express = require('express');
const rotaUsuarios = require('./Routes/rotaUsuarios');
const rotaAutenticacao = require('./Routes/rotaAutenticacao');
const rotaCategorias = require('./Routes/rotaCategorias');
const rotaTransacoes = require('./Routes/rotaTransacoes');

const app = express();

app.use(express.json());

app.use('/usuario', rotaUsuarios);
app.use('/login', rotaAutenticacao);
app.use('/categoria', rotaCategorias);
app.use('/transacao', rotaTransacoes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
