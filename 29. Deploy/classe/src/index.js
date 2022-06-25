require('dotenv').config();
const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor rodando na porta 3000');
});
