const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];

const express = require('express');

const app = express();

app.get('/usuarios', (requisicao, resposta) => {
    resposta.send(usuarios)
});


app.listen(3000, () => {
    console.log('Servidor Inicializado Na Porta 3000')
});

