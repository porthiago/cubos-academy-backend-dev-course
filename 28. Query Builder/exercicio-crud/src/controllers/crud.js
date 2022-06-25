const knex = require('../conexao');

module.exports = {
  async createUser(req, res) {
    try {
      const { nome, email, senha } = req.body;

      if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
      }

      const user = await knex('usuarios2')
        .insert({ nome, email, senha })
        .returning('*');
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async getUsers(req, res) {
    try {
      const users = await knex('usuarios2');
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async getUserById(req, res) {
    try {
      const { id } = req.params;
      const user = await knex('usuarios2').where({ id }).first();
      if (!user) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async updateUser(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;

      const user = await knex('usuarios2')
        .where('id', id)
        .update({ nome, email, senha })
        .returning('*');
      if (user.length === 0) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },
  async deleteUser(req, res) {
    try {
      const { id } = req.params;

      const user = await knex('usuarios2')
        .where('id', id)
        .del()
        .returning('*')
        .debug();
      if (user.length === 0) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
};
