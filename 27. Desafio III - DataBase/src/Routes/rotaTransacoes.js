const express = require('express');
const transacoes = require('../Controllers/transacoes');
const { validarToken } = require('../Middlewares/validacaoToken');

const rotas = express();

//intermediário
rotas.use(validarToken);

//transacoes
rotas.get('/', transacoes.listarTransacoes);
rotas.get('/extrato', transacoes.obterExtrato);
rotas.get('/:id', transacoes.detalharTransacao);
rotas.post('/', transacoes.cadastrarTransacao);
rotas.put('/:id', transacoes.atualizarTransacao);
rotas.delete('/:id', transacoes.excluirTransacao);


module.exports = rotas;
