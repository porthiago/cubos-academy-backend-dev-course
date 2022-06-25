const express = require("express");
const { encontrarEnderecos } = require("./controladores/endereco");

const rotas = express();

rotas.get("/enderecos/:cep", encontrarEnderecos);

module.exports = rotas;
