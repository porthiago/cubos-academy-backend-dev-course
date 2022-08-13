const knex = require('../conexaoKnex');
const nodemailer = require('../nodemailer');

const cadastrarDestinatario = async (req, res) => {
  const { nome, email } = req.body;

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório');
  }

  if (!email) {
    return res.status(404).json('O campo email é obrigatório');
  }

  try {
    const { count: quantidadedestinatarios } = await knex('destinatarios')
      .where({ email })
      .count()
      .first()
      .debug();

    if (quantidadedestinatarios > 0) {
      return res.status(400).json('O email já existe');
    }

    const destinatario = await knex('destinatarios')
      .insert({
        nome,
        email
      })
      .returning('*')
      .debug();

    if (!destinatario) {
      return res.status(400).json('Erro ao cadastrar destinatário');
    }

    const dadosEnvio = {
      from: 'Porto Newsletter <portonewsletter@gmail.com>',
      to: email,
      subject: 'Bem vindo a Porto NewsLetter',
      template: 'cadastro',
      context: {
        nome,
        email
      }
    };

    nodemailer.sendMail(dadosEnvio);

    return res.status(200).json(destinatario[0]);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const enviarNewsletter = async (req, res) => {
  try {
    const destinatarios = await knex('destinatarios');

    const { texto } = req.body;

    destinatarios.forEach(destinatario => {
      const nome = destinatario.nome;
      const email = destinatario.email;

      const dadosEnvio = {
        from: 'Porto Newsletter <portonewsletter@porto.com>',
        to: email,
        subject: 'Porto NewsLetter',
        template: 'texto',
        context: {
          nome,
          email,
          texto
        }
      };

      nodemailer.sendMail(dadosEnvio);
    });

    return res.status(204).json();
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  cadastrarDestinatario,
  enviarNewsletter
};
