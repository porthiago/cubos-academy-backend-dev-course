const express = require("express");
const clientes = require("../controllers/clientes");
const { validacaoToken } = require("../middlewares/validateToken");

const rotas = express.Router();

rotas.use(validacaoToken);

rotas.post("/", clientes.cadastrarCliente);
rotas.get("/", clientes.listarClientes);
rotas.put("/:id", clientes.editarCliente);
rotas.get("/:id", clientes.detalharCliente);

module.exports = rotas;
