const conexao = require('../Config/conexao');
const jwt = require('jsonwebtoken');
const jwtSecret = require('../segredo');

const validarToken = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      mensagem:
        'Acesso negado: O usuário precisa estar devidamente logado e com uma chave token válida para acessar esse recurso.'
    });
  }

  try {
    const token = authorization.replace('Bearer ', '').trim();
    const usuarioVerificado = jwt.verify(token, jwtSecret);

    const query = `SELECT * FROM usuarios WHERE id = $1`;

    const usuario = await conexao.query(query, [usuarioVerificado.id]);
   
    if (usuario.rowCount === 0) {
      return res.status(404).json({ mensagem: 'Usuario não encontrado' });
    }

    const { senha: palavraPasse, ...usuarioSemSenha } = usuario.rows[0];
    req.usuarioLogado = usuarioSemSenha;

    next();
  } catch (error) {
    return res.status(401).json({
      mensagem:
        'Para acessar este recurso um token de autenticação válido deve ser enviado.'
    });
  }
};

module.exports = {
  validarToken
};
