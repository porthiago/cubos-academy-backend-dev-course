const express = require('express');
const app = express();

const {listarCarros,encontrarCarro} = require('./controladores/carros');

const middleware = (req, res, next) => {
    console.log(req.query.senha)
    const senha = req.query.senha;

    if (senha === 'carros123') {
        next();
    } else {
        res.send('Acesso Não Autorizado');
    }
}

app.use(middleware);

app.get('/carros', listarCarros); //query marca e cor
app.get('/carros/:id', encontrarCarro) // objeto completo

app.listen(8000);