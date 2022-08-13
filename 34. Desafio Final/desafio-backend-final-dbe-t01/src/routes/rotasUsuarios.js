const express = require("express");
const usuarios = require("../controllers/usuarios");
const { validacaoToken } = require("../middlewares/validateToken");

const rotas = express.Router();

rotas.post("/", usuarios.cadastrarUsuario);
rotas.patch("/redefinir", usuarios.redefinirSenha);

rotas.use(validacaoToken);

rotas.get("/", usuarios.detalharUsuario);
rotas.put("/", usuarios.editarUsuario);

module.exports = rotas;
