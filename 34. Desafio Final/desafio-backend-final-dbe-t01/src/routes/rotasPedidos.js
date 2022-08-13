const express = require("express");
const pedido = require("../controllers/pedido");
const { validacaoToken } = require("../middlewares/validateToken");

const rotas = express.Router();

rotas.use(validacaoToken);

rotas.post("/", pedido.cadastrarPedido);
rotas.get("/", pedido.consultarPedido);

module.exports = rotas;
