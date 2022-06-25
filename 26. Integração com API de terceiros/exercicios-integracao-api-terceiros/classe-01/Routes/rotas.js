const express = require('express')
const { consultarDadosEmpresa } = require('../Controllers/empresas')

const rotas = express()

rotas.get('/empresas/:dominioEmpresa', consultarDadosEmpresa)

module.exports = rotas
