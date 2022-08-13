const knex = require('../conexaoKnex');
const bcrypt = require('bcrypt');
const nodemailer = require('../nodemailer')

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha, nome_loja } = req.body;

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório');
  }

  if (!email) {
    return res.status(404).json('O campo email é obrigatório');
  }

  if (!senha) {
    return res.status(404).json('O campo senha é obrigatório');
  }

  if (!nome_loja) {
    return res.status(404).json('O campo nome_loja é obrigatório');
  }

  try {
    const { count: quantidadeUsuarios } = await knex('usuarios')
      .where({ email })
      .count()
      .first()
      .debug();

    if (quantidadeUsuarios > 0) {
      return res.status(400).json('O email já existe');
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuario = await knex('usuarios')
      .insert({
        nome,
        email,
        senha: senhaCriptografada,
        nome_loja
      })
      .returning('*')
      .debug();

    if (!usuario) {
      return res.status(400).json('O usuário não foi cadastrado.');
    }

    //envio de email
    const dadosEnvio = {
      from: 'Thiago Porto <porthiago@gmail.com>',
      to: email,
      subject: 'Bem vindo ao Porthiago',
      template: 'cadastro',
      context: {
        nome,
        email
      }
      // text: `Olá ${nome}. Você foi cadastrado com sucesso no Porthiago.`

    }
    
    nodemailer.sendMail(dadosEnvio);

    const { senha: _, ...amostraDadosUsuario } = usuario[0];

    return res.status(200).json(amostraDadosUsuario);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterPerfil = async (req, res) => {
  return res.status(200).json(req.usuario);
};

const atualizarPerfil = async (req, res) => {
  const { nome, email, senha, nome_loja } = req.body;

  if (!nome && !email && !senha && !nome_loja) {
    return res
      .status(404)
      .json('É obrigatório informar ao menos um campo para atualização');
  }

  try {
    if (email !== req.usuario.email) {
      const { count: quantidadeUsuarios } = await knex('usuarios')
        .where({ email })
        .count()
        .first()
        .debug();

      if (quantidadeUsuarios > 0) {
        return res.status(400).json('O email já existe');
      }
    }

    const senhaCriptografada = await bcrypt.hash(senha, 10);

    const usuarioAtualizado = await knex('usuarios')
      .update({
        id: req.usuario.id,
        nome,
        email,
        senha: senhaCriptografada,
        nome_loja
      })
      .where({ id: req.usuario.id })
      .returning('*')
      .debug();

    if (!usuarioAtualizado) {
      return res.status(400).json('O usuário não foi atualizado.');
    }

    const { senha: _, ...amostraDadosUsuario } = usuarioAtualizado[0];

    return res.status(200).json({
      messagem: 'Usuario foi atualizado com sucesso.',
      usuario: amostraDadosUsuario
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  cadastrarUsuario,
  obterPerfil,
  atualizarPerfil
};
