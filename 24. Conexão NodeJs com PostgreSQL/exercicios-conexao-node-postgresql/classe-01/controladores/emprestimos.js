const conexao = require('../conexao')

const listarEmprestimos = async (req, res) => {
  try {
    const { rows: emprestimos } = await conexao.query(
      `
    select emprestimos.id, usuarios.nome as usuario, 
    usuarios.telefone, usuarios.email, livros.nome as livro, emprestimos.status 
    from emprestimos 
    left join usuarios on emprestimos.usuario_id = usuarios.id 
    left join livros on emprestimos.livro_id = livros.id`
    )

    return res.status(200).json(emprestimos)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const obterEmprestimo = async (req, res) => {
  const { id } = req.params
  try {
    const emprestimo = await conexao.query(
      `
      select emprestimos.id, usuarios.nome as usuario, 
      usuarios.telefone, usuarios.email, livros.nome as livro, emprestimos.status 
      from emprestimos
      left join usuarios on emprestimos.usuario_id = usuarios.id 
      left join livros on emprestimos.livro_id = livros.id 
      where emprestimos.id = $1`,
      [id]
    )
    if (emprestimo.rowCount === 0) {
      return res.status(404).json('Emprestimo não encontrado')
    }
    return res.status(200).json(emprestimo.rows[0])
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const cadastrarEmprestimo = async (req, res) => {
  const { livro_id, usuario_id, status } = req.body
  try {
    if (status) {
      const emprestimo = await conexao.query(
        'insert into emprestimos (livro_id, usuario_id, status) values ($1, $2, $3)',
        [livro_id, usuario_id, status]
      )
    } else {
      const emprestimo = await conexao.query(
        'insert into emprestimos (livro_id, usuario_id) values ($1, $2)',
        [livro_id, usuario_id]
      )
    }
    return res
      .status(200)
      .json({ messagem: 'Emprestimo cadastrado com sucesso.' })
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const atualizarEmprestimo = async (req, res) => {
  const { id } = req.params
  const { status } = req.body
  try {
    const emprestimo = await conexao.query(
      'select * from emprestimos where id = $1',
      [id]
    )
    if (emprestimo.rowCount === 0) {
      return res.status(404).json('Emprestimo não encontrado')
    }
    const query = 'update emprestimos set status = $1 where id = $2'
    const emprestimoAtualizado = await conexao.query(query, [status, id])
    return res.status(200).json({
      messagem: 'Emprestimo atualizado com sucesso.'
    })
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const excluirEmprestimo = async (req, res) => {
  const { id } = req.params
  try {
    const emprestimo = await conexao.query(
      'select * from emprestimos where id = $1',
      [id]
    )
    if (emprestimo.rowCount === 0) {
      return res.status(404).json('Emprestimo não encontrado')
    }
    const query = 'delete from emprestimos where id = $1'
    const emprestimoExcluido = await conexao.query(query, [id])
    return res.status(200).json({
      messagem: 'Emprestimo excluido com sucesso.'
    })
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listarEmprestimos,
  obterEmprestimo,
  cadastrarEmprestimo,
  atualizarEmprestimo,
  excluirEmprestimo
}
