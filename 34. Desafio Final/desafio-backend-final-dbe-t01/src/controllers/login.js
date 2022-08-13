require('dotenv').config();
const knex = require('../config/conexao');
const loginSchema = require('../validations/loginSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginDoUsuario = async (req, res) => {
  const { email, senha } = req.body;

  try {
    await loginSchema.validate(req.body);

    const usuario = await knex('usuarios').where({ email }).first();

    if (!usuario) {
      return res
        .status(404)
        .json({ messagem: 'O usuário não foi encontrado!' });
    }

    const validarSenha = await bcrypt.compare(senha, usuario.senha);

    if (!validarSenha) {
      return res.status(401).json({ messagem: 'Email ou senha incorretos!' });
    }

    const token = jwt.sign(
      { id: usuario.id, nome: usuario.nome, email: usuario.email },
      process.env.SENHA_JWT,
      {
        expiresIn: '2h'
      }
    );

    const { senha: _, ...dados } = usuario;

    return res.status(200).json({
      usuario: dados,
      token
    });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  loginDoUsuario
};
