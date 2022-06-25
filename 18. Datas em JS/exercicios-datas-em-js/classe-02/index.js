const fs = require('fs')

const readJson = fs.readFileSync('./dados.json')

const dados = JSON.parse(readJson)

const dadosOrdenadosPorDataDeRegistro = dados.sort((a, b) => {
  return new Date(a.registered) - new Date(b.registered)
})

console.log(dadosOrdenadosPorDataDeRegistro)
