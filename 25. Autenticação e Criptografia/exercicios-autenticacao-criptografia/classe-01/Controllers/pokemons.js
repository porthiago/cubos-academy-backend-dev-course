const conexao = require('../Services/conexao')
const jwt = require('jsonwebtoken')

const cadastrarPokemon = async (req, res) => {
  const { nome, habilidades, imagem, apelido, token } = req.body
  if (!nome || !habilidades || !token) {
    return res.status(400).json({
      messagem: 'É necessário informar nome, habilidades e token'
    })
  }

  try {
    const usuario = jwt.verify(token, 'secret')
    const query =
      'insert into pokemons (usuario_id, nome, habilidades, imagem, apelido) values ($1, $2, $3, $4, $5)'
    const pokemon = await conexao.query(query, [
      usuario.id,
      nome,
      habilidades,
      imagem,
      apelido
    ])

    if (pokemon.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível cadastrar o pokemon' })
    }

    res.status(201).json({ messagem: 'Pokemon cadastrado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const atualizarApelidoPokemon = async (req, res) => {
  const { apelido, token } = req.body
  const { id } = req.params

  if (!apelido || !token) {
    return res.status(400).json({
      messagem: 'É necessário informar apelido e token'
    })
  }

  try {
    const usuario = jwt.verify(token, 'secret')
    console.log(
      `usuario: ${usuario.nome} está tentando atualizar o pokemon ${id}`
    )
    const query = 'update pokemons set apelido = $1 where id = $2'
    const pokemon = await conexao.query(query, [apelido, id])

    if (pokemon.rowCount === 0) {
      return res
        .status(404)
        .json({
          messagem:
            'Não foi possível atualizar: Pokemon inválido ou inexistente'
        })
    }

    res
      .status(200)
      .json({ messagem: 'Apelido do pokemon atualizado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  cadastrarPokemon,
  atualizarApelidoPokemon
}
