const express = require('express');
const usuario = require('../Controllers/usuarios');
const { validarToken } = require('../Middlewares/validacaoToken');

const rotas = express();

//cadastro de usuários
rotas.post('/', usuario.cadastrarUsuario);

//intermediário
rotas.use(validarToken);

//usuario
rotas.get('/', usuario.detalharUsuario);
rotas.put('/', usuario.atualizarUsuario);

module.exports = rotas;
