const conexao = require('../conexao')

const listarUsuarios = async (req, res) => {
  try {
    const { rows: usuarios } = await conexao.query('select * from usuarios')

    for (const usuario of usuarios) {
      const { rows: emprestimos } = await conexao.query(
        'select * from emprestimos where usuario_id = $1',
        [usuario.id]
      )
      usuario.emprestimos = emprestimos
    }

    return res.status(200).json(usuarios)
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const obterUsuario = async (req, res) => {
  const { id } = req.params
  try {
    const usuario = await conexao.query(
      'select * from usuarios where id = $1',
      [id]
    )
    if (usuario.rowCount === 0) {
      return res.status(404).json('Usuário não encontrado')
    }

    const { rows: emprestimos } = await conexao.query(
      'select * from emprestimos where usuario_id = $1',
      [id]
    )

    usuario.rows[0].emprestimos = emprestimos

    return res.status(200).json(usuario.rows[0])
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

cadastrarUsuario = async (req, res) => {
  const { nome, idade, email, telefone, cpf } = req.body
  try {
    const query =
      'insert into usuarios (nome, idade, email, telefone, cpf) values ($1, $2, $3, $4, $5)'
    const usuario = await conexao.query(query, [
      nome,
      idade,
      email,
      telefone,
      cpf
    ])
    if (usuario.rowCount === 0) {
      return res.status(400).json('Não foi possivel cadastrar o usuário')
    }
    return res.status(200).json('Usuário cadastrado com sucesso.')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

atualizarUsuario = async (req, res) => {
  const { id } = req.params
  const { nome, idade, email, telefone, cpf } = req.body
  try {
    const query =
      'update usuarios set nome = $1, idade = $2, email = $3, telefone = $4, cpf = $5 where id = $6'
    const usuario = await conexao.query(query, [
      nome,
      idade,
      email,
      telefone,
      cpf,
      id
    ])
    if (usuario.rowCount === 0) {
      return res
        .status(400)
        .json(
          'Não foi possivel atualizar o usuário: Usuario não encontrado ou inexistente'
        )
    }
    return res.status(200).json('Usuário atualizado com sucesso.')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

const excluirUsuario = async (req, res) => {
  const { id } = req.params
  try {
    const usuarioEncontrado = await conexao.query(
      'select * from usuarios where id = $1',
      [id]
    )

    if (usuarioEncontrado.rowCount === 0) {
      return res.status(404).json('Usuário não encontrado')
    }

    const emprestimos = await conexao.query(
      'select * from emprestimos where usuario_id = $1',
      [id]
    )

    if (emprestimos.rowCount > 0) {
      return res
        .status(400)
        .json('Não foi possivel excluir o usuário: Usuário possui emprestimos')
    }

    const query = 'delete from usuarios where id = $1'
    const usuarioExcluir = await conexao.query(query, [id])

    return res.status(200).json('Usuário excluido com sucesso.')
  } catch (error) {
    return res.status(400).json(error.message)
  }
}

module.exports = {
  listarUsuarios,
  obterUsuario,
  cadastrarUsuario,
  atualizarUsuario,
  excluirUsuario
}
