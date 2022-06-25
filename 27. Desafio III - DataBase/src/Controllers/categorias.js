const conexao = require('../Config/conexao');

const listarCategorias = async (req, res) => {
  try {
    const query = 'SELECT * FROM categorias';

    const categorias = await conexao.query(query);

    return res.status(200).json(categorias.rows);
  } catch (erro) {
    return res
      .status(400)
      .json({
        messagem: 'Erro: Não foi possível listar as categorias',
        detalhes: erro.message
      });
  }
};

module.exports = {
  listarCategorias
};
