const express = require('express');
const app = express();

const {
    exibirTodosOsResultados, 
    filtrarResultados
} = require('./controladores/imoveis');

app.get('/imoveis', exibirTodosOsResultados);
app.get('/imoveis/:id', filtrarResultados );

app.listen(8000);