const express = require('express');

const app = express();
// instância do objeto express (?)

app.get('/home', (requisicao, resposta) => {
    resposta.send('Olá... Esse é o meu primeiro servidor com o express')
});

app.get('/', (requisicao, resposta) => {
    resposta.send('Essa é a minha rota principal')
});

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5];
    resposta.send(array)
});



app.listen(3000);