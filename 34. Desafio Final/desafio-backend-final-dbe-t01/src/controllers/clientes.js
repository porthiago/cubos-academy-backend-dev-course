const knex = require('../config/conexao');
const clienteSchema = require('../validations/clienteSchema');

let cadastrarCliente = async (req, res) => {
  const { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } =
    req.body;

  try {
    await clienteSchema.validate(req.body);
    const busca = await knex('clientes').where({ email }).orWhere({ cpf });
    if (busca.length !== 0)
      return res.status(400).json({
        mensagem: 'O cliente já está cadastrado na base de dados'
      });
    const cadastro = await knex('clientes').insert({
      nome,
      email,
      cpf,
      cep,
      rua,
      numero,
      bairro,
      cidade,
      estado
    });

    return res.status(201).json({ mensagem: 'Cliente cadastrado com sucesso' });
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};
const listarClientes = async (req, res) => {
  try {
    const lista = await knex('clientes');

    return res.status(200).json(lista);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

const editarCliente = async (req, res) => {
  let { nome, email, cpf, cep, rua, numero, bairro, cidade, estado } = req.body;
  let { id } = req.params;

  try {
    await clienteSchema.validate(req.body);

    const clienteExistente = await knex('clientes').where({ id }).first();

    if (!clienteExistente) {
      return res
        .status(404)
        .json({ messagem: 'O cliente não foi encontrado!' });
    }

    if (email !== clienteExistente.email) {
      const emailCliente = await knex('clientes').where({ email }).first();
      if (emailCliente) {
        return res
          .status(400)
          .json({ messagem: 'O email informado já está cadastrado para outro cliente.' });
      }
    }

    if (cpf !== clienteExistente.cpf) {
      const cpfCliente = await knex('clientes').where({ cpf }).first();
      if (cpfCliente) {
        return res
          .status(400)
          .json({ messagem: 'O cpf informado já está cadastrado para outro cliente.' });
      }
    }

    const atualizarCliente = await knex('clientes')
      .where({ id })
      .update({ nome, email, cpf, cep, rua, numero, bairro, cidade, estado });

    if (!atualizarCliente) {
      return res
        .status(400)
        .json({ messagem: 'O cliente não pode ser atualizado.' });
    }

    return res
      .status(200)
      .json({ messagem: 'O cliente foi atualizado com sucesso!' });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const detalharCliente = async (req, res) => {
  const { id } = req.params;
  try {
    const buscarCliente = await knex('clientes').where('id', id).first();

    if (!buscarCliente) {
      return res.status(404).json({ messagem: 'Cliente não encontrado!' });
    }
    return res.status(200).json(buscarCliente);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  cadastrarCliente,
  listarClientes,
  editarCliente,
  detalharCliente
};
