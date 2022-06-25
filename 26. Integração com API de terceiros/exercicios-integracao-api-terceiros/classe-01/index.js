const express = require('express');
const roteador = require('./Routes/rotas');

const app = express();
app.use(express.json());

app.use(roteador);

app.listen(8000, () => {
    console.log('Servidor rodando na porta 8000');
});