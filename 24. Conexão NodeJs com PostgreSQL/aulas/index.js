const express = require('express')
const rotas = require('./Routes/rotas')

const app = express()

app.use(express.json())

app.use(rotas)

app.listen(3000, () => {
  console.log('server running on port 3000!')
})
