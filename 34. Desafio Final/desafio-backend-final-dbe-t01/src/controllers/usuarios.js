const knex = require('../config/conexao');
const usuarioSchema = require('../validations/usuarioSchema');
const redefinirSenhaSchema = require('../validations/redefinirSenhaSchema');
const bcrypt = require('bcrypt');
const nodemailer = require('../services/nodemailer');
const { alteracaoDeSenhaEmail } = require('../utils/emails');

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    await usuarioSchema.validate(req.body);
    const pesquisarEmailUsuario = await knex('usuarios').where('email', email);

    if (pesquisarEmailUsuario.length > 0) {
      return res
        .status(400)
        .json({ messagem: 'O email está cadastrado para outro usuario' });
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioParaCadastrar = {
      nome,
      email,
      senha: senhaCriptografada
    };

    const cadastrarUsuario = await knex('usuarios')
      .insert(usuarioParaCadastrar)
      .returning('*');

    if (cadastrarUsuario.length === 0) {
      return res
        .status(400)
        .json({ messagem: 'Ocorreu um problema no cadastro do usuario' });
    }
    const { senha: senha1, ...usuarioCadastrado } = cadastrarUsuario[0];

    return res.status(201).json({
      messagem: 'Usuário cadastrado com sucesso.',
      usuario: usuarioCadastrado
    });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const detalharUsuario = async (req, res) => {
  let { usuario } = req;

  try {
    return res.status(200).json(usuario);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const editarUsuario = async (req, res) => {
  let { nome, email, senha } = req.body;
  let { id } = req.usuario;

  try {
    await usuarioSchema.validate(req.body);

    const usuarioExistente = await knex('usuarios').where({ id }).first();

    if (!usuarioExistente) {
      return res
        .status(404)
        .json({ messagem: 'O usuário não foi encontrado!' });
    }

    if (senha) {
      senha = await bcrypt.hash(senha, 10);
    }

    if (email !== req.usuario.email) {
      const emailUsuario = await knex('usuarios').where({ email }).first();
      if (emailUsuario) {
        return res.status(400).json({ messagem: 'O email já existe.' });
      }
    }

    const atualizarUsuario = await knex('usuarios')
      .where({ id })
      .update({ nome, email, senha });

    if (!atualizarUsuario) {
      return res
        .status(400)
        .json({ messagem: 'O usuário não pode ser atualizado.' });
    }

    return res
      .status(200)
      .json({ messagem: 'O usuário foi atualizado com sucesso!' });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const redefinirSenha = async (req, res) => {
  const { email, senha_antiga, senha_nova } = req.body;

  try {
    await redefinirSenhaSchema.validate(req.body);

    const buscarUsuario = await knex('usuarios').where('email', email).first();

    if (!buscarUsuario) {
      return res.status(401).json({ messagem: 'Email ou senha incorretos.' });
    }

    const validarSenha = await bcrypt.compare(
      senha_antiga,
      buscarUsuario.senha
    );

    if (!validarSenha) {
      return res.status(401).json({ messagem: 'Email ou senha incorretos.' });
    }

    if (senha_antiga === senha_nova) {
      return res
        .status(400)
        .json({ messagem: 'A nova senha não pode ser igual a antiga.' });
    }

    const novaSenha = await bcrypt.hash(senha_nova, 10);

    const alterarSenha = await knex('usuarios')
      .update('senha', novaSenha)
      .where('email', email);

    if (alterarSenha == 0) {
      return res
        .status(400)
        .json({ messagem: 'Ocorreu um erro ao atualizar a sua senha.' });
    }

    const usuarioNome = buscarUsuario.nome;

    await nodemailer.sendMail(alteracaoDeSenhaEmail(email, usuarioNome));

    return res.status(200).json({ messagem: 'Senha atualizada com sucesso.' });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  cadastrarUsuario,
  detalharUsuario,
  editarUsuario,
  redefinirSenha
};
