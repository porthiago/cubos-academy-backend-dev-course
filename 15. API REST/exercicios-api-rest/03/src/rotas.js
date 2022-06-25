const express = require('express');
const rotas = express();

const biblioteca = require ('./controladores/biblioteca');

rotas.get('/livros', biblioteca.listarLivros);
rotas.get('/livros/:id', biblioteca.obterLivro);
rotas.post('/livros', biblioteca.adicionarLivro);
rotas.put('/livros/:id', biblioteca.substituirLivro);
rotas.patch('/livros/:id', biblioteca.alterarLivro);
rotas.delete('/livros/:id', biblioteca.excluirLivro);

module.exports = rotas;