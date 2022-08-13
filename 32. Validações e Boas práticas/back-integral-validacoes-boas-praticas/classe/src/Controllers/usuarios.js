const conexao = require('../Config/conexao');
const { verificarExistenciaEmail } = require('../Utils/utils');
const schemaUsuario = require('../Validations/schemaUsuario');
const securePassword = require('secure-password');

const pwd = securePassword();

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  const emailJaCadastrado = await verificarExistenciaEmail(email);

  if (emailJaCadastrado) {
    return res.status(400).json(emailJaCadastrado);
  }

  try {
    await schemaUsuario.validate(req.body);

    const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
    const query = `INSERT INTO usuarios 
      (nome, email, senha) 
      VALUES ($1, $2, $3)
      RETURNING *`;

    const usuario = await conexao.query(query, [nome, email, hash]);

    if (usuario.rowCount === 0) {
      return res.status(400).json({
        mensagem: 'Não foi possível cadastrar o usuário'
      });
    }

    let { senha: palavraPasse, ...usuarioSemSenha } = usuario.rows[0];

    return res.status(200).json({
      mensagem: 'Usuário cadastrado com sucesso!',
      usuário: usuarioSemSenha
    });
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível cadastrar o usuário',
      detalhes: erro.message
    });
  }
};

const detalharUsuario = async (req, res) => {
  try {
    return res.status(200).json(req.usuarioLogado);
  } catch (erro) {
    return res.status(400).json({
      mensagem: 'Não foi possível exibir os dados do usuários',
      detalhes: erro.message
    });
  }
};

const atualizarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  const emailJaCadastrado = await verificarExistenciaEmail(
    email,
    req.usuarioLogado.id
  );

  if (emailJaCadastrado) {
    return res.status(400).json(emailJaCadastrado);
  }

  try {
    await schemaUsuario.validate(req.body);

    const hash = (await pwd.hash(Buffer.from(senha))).toString('hex');
    const query = `UPDATE usuarios 
    SET nome = $1, email = $2, senha = $3 WHERE id = $4
    RETURNING *`;

    const usuarioAtualizado = await conexao.query(query, [
      nome,
      email,
      hash,
      req.usuarioLogado.id
    ]);

    return res.status(200).json({
      messagem: 'O usuário foi atualizado com sucesso',
      usuario: {
        nome: usuarioAtualizado.rows[0].nome,
        email: usuarioAtualizado.rows[0].email
      }
    });
  } catch (erro) {
    return res.status(400).json({
      mensagem: 'Não foi possível atualizar o usuário',
      detalhes: erro.message
    });
  }
};

module.exports = {
  cadastrarUsuario,
  detalharUsuario,
  atualizarUsuario
};
