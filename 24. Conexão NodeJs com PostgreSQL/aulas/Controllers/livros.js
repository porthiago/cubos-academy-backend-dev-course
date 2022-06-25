const conexao = require('../conexao')

const listarLivros = async (req, res) => {
  try {
    const query =
      'select l.id, a.nome as nome_autor, l.nome, l.genero, l.editora, l.data_publicacao from livros l left join autores a on l.autor_id = a.id'
    const livros = await conexao.query(query)

    res.status(200).json(livros.rows)
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const obterLivro = async (req, res) => {
  try {
    const { id } = req.params
    const livro = await conexao.query('select * from livros where id = $1', [
      id
    ])

    if (livro.rowCount === 0) {
      return res.status(404).json({ messagem: 'Livro Não Encontrado' })
    }

    res.status(200).json(livro.rows[0])
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const cadastrarLivro = async (req, res) => {
  const { autor_id, nome, editora, genero, data_publicacao } = req.body

  if (!autor_id || !nome || !genero) {
    return res.status(400).json({
      messagem: 'É necessário informar autor_id, nome e genero'
    })
  }

  try {
    const livro = await conexao.query(
      'insert into livros (autor_id, nome, editora, genero, data_publicacao) values ($1, $2, $3, $4, $5)',
      [autor_id, nome, editora, genero, data_publicacao]
    )

    if (livro.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível cadastrar o livro' })
    }

    res.status(201).json({ messagem: 'Livro cadastrado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const atualizarLivro = async (req, res) => {
  const { id } = req.params
  const { autor_id, nome, editora, genero, data_publicacao } = req.body

  if (!autor_id || !nome || !genero) {
    return res.status(400).json({
      messagem: 'É necessário informar autor_id, nome e genero'
    })
  }

  try {
    const livro = await conexao.query(
      'update livros set autor_id = $1, nome = $2, editora = $3, genero = $4, data_publicacao = $5 where id = $6',
      [autor_id, nome, editora, genero, data_publicacao, id]
    )

    if (livro.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível atualizar o livro' })
    }

    res.status(200).json({ messagem: 'Livro atualizado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const excluirLivro = async (req, res) => {
  const { id } = req.params

  try {
    const livro = await conexao.query('delete from livros where id = $1', [id])

    if (livro.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível excluir o livro' })
    }

    res.status(200).json({ messagem: 'Livro excluido com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = {
  listarLivros,
  obterLivro,
  cadastrarLivro,
  atualizarLivro,
  excluirLivro
}
