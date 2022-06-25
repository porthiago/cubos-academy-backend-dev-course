const express = require('express');
const rotas = express ();
const instrutores = require('./controladores/instrutores');

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id',instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor);

module.exports = rotas;