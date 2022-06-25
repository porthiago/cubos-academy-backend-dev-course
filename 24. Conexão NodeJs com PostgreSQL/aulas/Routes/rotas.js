const express = require('express')
const autores = require('../Controllers/autores')
const livros = require('../Controllers/livros')
const usuarios = require('../Controllers/usuarios')

const rotas = express()

//autores

rotas.get('/autores', autores.listarAutores)
rotas.get('/autores/:id', autores.obterAutor)
rotas.post('/autores', autores.cadastrarAutor)
rotas.put('/autores/:id', autores.atualizarAutor)
rotas.delete('/autores/:id', autores.deletarAutor)

//livros

rotas.get('/livros', livros.listarLivros)
rotas.get('/livros/:id', livros.obterLivro)
rotas.post('/livros', livros.cadastrarLivro)
rotas.put('/livros/:id', livros.atualizarLivro)
rotas.delete('/livros/:id', livros.excluirLivro)

//usuarios

rotas.post('/cadastrar', usuarios.cadastrarUsuario)
rotas.post('/login', usuarios.login)

module.exports = rotas
