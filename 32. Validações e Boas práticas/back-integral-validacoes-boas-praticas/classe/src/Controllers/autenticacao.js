const conexao = require('../Config/conexao');
const securePassword = require('secure-password');
const jwt = require('jsonwebtoken');
const schemaLogin = require('../Validations/schemaLogin');

const pwd = securePassword();

const login = async (req, res) => {
  const { email, senha } = req.body;

  try {

    await schemaLogin.validate(req.body);

    const query = `SELECT * FROM usuarios 
    WHERE email = $1`;

    let usuario = await conexao.query(query, [email]);

    if (usuario.rowCount === 0) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    usuario = usuario.rows[0];

    const resultadoValidacaoSenha = await pwd.verify(
      Buffer.from(senha),
      Buffer.from(usuario.senha, 'hex')
    );

    switch (resultadoValidacaoSenha) {
      case securePassword.INVALID_UNRECOGNIZED_HASH:
      case securePassword.INVALID:
        return res.status(404).json({ messagem: 'Email ou senha incorretos' });
      case securePassword.VALID:
        break;
      case securePassword.VALID_NEEDS_REHASH:
        try {
          const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
          const usuario = await conexao.query(
            'update usuarios set senha = $1 email id = $2',
            [hash, email]
          );
        } catch (erro) {}
        break;
    }

    const { senha: palavraPasse, ...usuarioSemSenha } = usuario;

    const token = jwt.sign(
      {
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );
    return res.status(200).json({ usuario: usuarioSemSenha, token });
  } catch (erro) {
    return res.status(400).json({ mensagem: erro.message });
  }
};

module.exports = {
  login
};
