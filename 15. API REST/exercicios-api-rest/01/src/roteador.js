const express = require('express');
const roteador = express()

const alunos = require('./controladores/alunos')

roteador.get('/alunos', alunos.listarAlunos);
roteador.post('/alunos', alunos.cadastrarAluno);
roteador.get('/alunos/:id', alunos.obterAluno);
roteador.delete('/alunos/:id', alunos.excluirAluno);
roteador.put('/alunos/:id', alunos.substituirAluno);
roteador.patch('/alunos/:id', alunos.alterarDadosAluno);


module.exports = roteador