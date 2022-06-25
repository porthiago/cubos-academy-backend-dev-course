const express = require('express');
const rotas = express ();
const instrutores = require('./controladores/instrutores');
const aulas = require('./controladores/aulas');

rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id',instrutores.obterInstrutor);
rotas.post('/instrutores', instrutores.cadastrarInstrutor);
rotas.put('/instrutores/:id', instrutores.atualizarInstrutor);
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusInstrutor);

rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadatrarAula);
rotas.get('/aulas', aulas.exibirAulas);
rotas.get('/aulas/:id', aulas.obterAula)
rotas.get('/instrutores/:idInstrutor/aulas', aulas.exibirAulasDeUmInstrutor)


module.exports = rotas;