const express = require("express");
const imagens = require("../controllers/imagens");
const { validacaoToken } = require("../middlewares/validateToken");

const rotas = express.Router();

rotas.use(validacaoToken);

rotas.post("/", imagens.upload);

module.exports = rotas;