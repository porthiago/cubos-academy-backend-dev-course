const conexao = require('../Services/conexao')
const securePassword = require('secure-password')
const jwt = require('jsonwebtoken')

const pwd = securePassword()

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body
  if (!nome || !email || !senha) {
    return res.status(400).json({
      messagem: 'É necessário informar nome, email e senha'
    })
  }

  try {
    const query = 'select * from usuarios where email = $1'
    const usuario = await conexao.query(query, [email])

    if (usuario.rowCount > 0) {
      return res.status(400).json({ messagem: 'Email já cadastrado' })
    }
  } catch {
    return res.status(500).json(error.message)
  }

  try {
    const hash = (await pwd.hash(Buffer.from(senha))).toString('hex')
    const usuario = await conexao.query(
      'insert into usuarios (nome, email, senha) values ($1, $2, $3)',
      [nome, email, hash]
    )

    if (usuario.rowCount === 0) {
      return res
        .status(404)
        .json({ messagem: 'Não foi possível cadastrar o usuário' })
    }

    res.status(201).json({ messagem: 'Usuário cadastrado com sucesso' })
  } catch (error) {
    res.status(500).json(error.message)
  }
}

const login = async (req, res) => {
  const { email, senha } = req.body
  if (!email || !senha) {
    return res.status(400).json({
      messagem: 'É necessário informar email e senha'
    })
  }

  try {
    const query = 'select * from usuarios where email = $1'
    const usuarioValidado = await conexao.query(query, [email])

    if (usuarioValidado.rowCount === 0) {
      return res.status(404).json({ messagem: 'Email ou senha incorretos' })
    }

    const usuario = usuarioValidado.rows[0]

    const result = await pwd.verify(
      Buffer.from(senha),
      Buffer.from(usuario.senha, 'hex')
    )

    switch (result) {
      case securePassword.INVALID_UNRECOGNIZED_HASH:
      case securePassword.INVALID:
        return res.status(404).json({ messagem: 'Email ou senha incorretos' })
      case securePassword.VALID:
        break
      case securePassword.VALID_NEEDS_REHASH:
        try {
          const hash = (await pwd.hash(Buffer.from(senha))).toString('hex')
          const usuario = await conexao.query(
            'update usuarios set senha = $1 email id = $2',
            [hash, email]
          )
          // Save improvedHash somewhere
        } catch (error) {}
        break
    }

   const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      'secret',
      { expiresIn: '1h' }
    )
    return res.status(200).json({ token })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  cadastrarUsuario,
  login
}
