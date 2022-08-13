const knex = require('../config/conexao');

const listarCategorias = async (req, res) => {
  try {
    const categorias = await knex('categorias').select('*');

    return res.status(200).json(categorias);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  listarCategorias
};
