const express = require('express');

const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

app.get('/', (req, res)=> {
    res.send(jogadores[i]);
    i++
    
    if (i === jogadores.length) {
        i = 0;
    }
    
});

app.listen(3000);