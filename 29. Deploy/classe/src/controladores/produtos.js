const knex = require('../conexaoKnex');

const listarProdutos = async (req, res) => {
  const { usuario } = req;
  const { categoria } = req.query;

  try {
    let produtos;

    if (categoria) {
      produtos = await knex('produtos')
        .where({ usuario_id: usuario.id })
        .andWhereILike('categoria', categoria);
    } else {
      produtos = await knex('produtos').where({ usuario_id: usuario.id });
    }

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const [produto] = await knex('produtos')
      .where('id', id)
      .andWhere({ usuario_id: usuario.id })
      .debug();

    if (!produto) {
      return res.status(404).json('Produto não encontrado');
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarProduto = async (req, res) => {
  const { usuario } = req;
  const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório');
  }

  if (!estoque) {
    return res.status(404).json('O campo estoque é obrigatório');
  }

  if (!preco) {
    return res.status(404).json('O campo preco é obrigatório');
  }

  if (!descricao) {
    return res.status(404).json('O campo descricao é obrigatório');
  }

  try {
    const [produto] = await knex('produtos')
      .insert({
        usuario_id: usuario.id,
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem
      })
      .returning('*');

    return res
      .status(200)
      .json({ messagem: 'O produto foi cadastrado com sucesso.', produto });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

  if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
    return res
      .status(404)
      .json('Informe ao menos um campo para atualizaçao do produto');
  }

  try {
    const [produto] = await knex('produtos')
      .where('id', id)
      .andWhere({ usuario_id: usuario.id })
      .debug();

    if (!produto) {
      return res.status(404).json('Produto não encontrado');
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }

  try {
    const [produtoAtualizado] = await knex('produtos')
      .where('id', id)
      .update({
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem
      })
      .returning('*');

    return res.status(200).json({
      messagem: 'O produto foi atualizado com sucesso.',
      produto: produtoAtualizado
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const [produto] = await knex('produtos')
      .where('id', id)
      .andWhere({ usuario_id: usuario.id })
      .debug();

    if (!produto) {
      return res.status(404).json('Produto não encontrado');
    }
  } catch (error) {
    return res.status(400).json(error.message);
  }

  try {

    const [produtoExcluido] = await knex('produtos')
      .del()
      .where('id', id)
      .andWhere({ usuario_id: usuario.id })
      .returning('*');

    return res.status(200).json({
      messagem: 'Produto excluido com sucesso',
      produto: produtoExcluido
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarProdutos,
  obterProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto
};
