require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');

const app = express();

app.use(express.json({ limit: '10mb' }));
app.use(rotas)

app.listen(3000, ()=>{
  console.log('Servidor rodando na porta 3000')
})