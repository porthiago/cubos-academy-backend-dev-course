const express = require('express')
const app = express();
const rotas = require('./rotas');

app.use(express.json());

app.use(rotas);

app.listen(8000);