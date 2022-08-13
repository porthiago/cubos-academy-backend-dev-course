const express = require("express");
const { validacaoToken } = require("../middlewares/validateToken");
const produtos = require("../controllers/produtos");

const rotas = express.Router();

rotas.use(validacaoToken);

rotas.post("/", produtos.cadastrarProduto);
rotas.get("/", produtos.listarProdutos);
rotas.get("/:id", produtos.detalharProduto);
rotas.delete("/:id", produtos.excluirProduto);
rotas.put("/:id", produtos.editarProduto);

module.exports = rotas;
