const express = require("express");
const login = require("../controllers/login");

const rotas = express.Router();

rotas.post("/", login.loginDoUsuario);

module.exports = rotas;
