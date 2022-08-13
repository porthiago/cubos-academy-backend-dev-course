const express = require("express");
const categorias = require("../controllers/categorias");

const rotas = express.Router();

rotas.get("/", categorias.listarCategorias);

module.exports = rotas;
