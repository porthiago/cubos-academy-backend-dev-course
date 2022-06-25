const conexao = require('../conexao')
const jwt = require('jsonwebtoken')

const listarAutores = async (req, res) => {
  try {
    const { rows: autores } = await conexao.query('select * from autores')

    res.status(200).json(autores)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const obterAutor = async (req, res) => {
  try {
    const { id } = req.params
    const autor = await conexao.query('select * from autores where id = $1', [
      id
    ])

    if (autor.rowCount === 0) {
      return res.status(404).json({ messagem: 'Autor Não Encontrado' })
    }

    res.status(200).json(autor.rows[0])
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const cadastrarAutor = async (req, res) => {
  const { nome, idade, token } = req.body

  if (!nome) {
    return res.status(400).json({ messagem: 'O campo nome é obrigatório' })
  }

  if (!token) {
    return res.status(400).json({ messagem: 'O campo token é obrigatório' })
  }

    try {
     const usuarioDB =  jwt.verify(token, 'secret')
     console.log(`o usuario ${usuarioDB.nome} está cadastrando um autor`)
    } catch (error) {
      return res.status(400).json({messagem: 'o token é inválido'})
    }

  try {
    const autor = await conexao.query(
      'insert into autores (nome, idade) values ($1, $2)',
      [nome, idade]
    )

    if (autor.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível cadastrar o autor' })
    }

    res.status(201).json({ messagem: 'Autor cadastrado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const atualizarAutor = async (req, res) => {
  const { id } = req.params
  const { nome, idade } = req.body

  if (!nome) {
    return res.status(400).json({ messagem: 'O campo nome é obrigatório' })
  }

  try {
    const autor = await conexao.query(
      'update autores set nome = $1, idade = $2 where id = $3',
      [nome, idade, id]
    )

    if (autor.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível atualizar o autor' })
    }

    res.status(200).json({ messagem: 'Autor atualizado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const deletarAutor = async (req, res) => {
  const { id } = req.params
  try {
    const autorDeletar = await conexao.query(
      'delete from autores where id = $1',
      [id]
    )

    if (autorDeletar.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível excluir o autor' })
    }

    res.status(200).json({ messagem: 'Autor excluído com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  listarAutores,
  obterAutor,
  cadastrarAutor,
  atualizarAutor,
  deletarAutor
}
