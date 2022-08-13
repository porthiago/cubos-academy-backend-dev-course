const produtoSchema = require('../validations/produtoSchema');
const knex = require('../config/conexao');
const supabase = require('../services/supabase');
const { validarImagem, excluirImagem } = require('../utils/utilsImagem');

const cadastrarProduto = async (req, res) => {
  const { descricao, quantidade_estoque, categoria_id, valor, produto_imagem } =
    req.body;

  try {
    await produtoSchema.validate(req.body);

    const buscarCategoria = await knex('categorias')
      .where('id', categoria_id)
      .first();

    if (!buscarCategoria) {
      return res.status(400).json({ messagem: 'Categoria Inválida' });
    }

    const produto = await knex('produtos')
      .whereILike('descricao', descricao)
      .first();

    if (produto) {
      return res
        .status(400)
        .json({ messagem: `Produto já cadastrado para o id ${produto.id}` });
    }

    if (produto_imagem) {
      const urlImagemInvalida = await validarImagem(produto_imagem);

      if (urlImagemInvalida) {
        return res.status(400).json(urlImagemInvalida);
      }
    }

    const cadastrarProduto = await knex('produtos')
      .insert({
        descricao,
        quantidade_estoque,
        categoria_id,
        valor,
        produto_imagem
      })
      .returning('*');

    if (cadastrarProduto.length === 0) {
      return res
        .status(400)
        .json({ messagem: 'Ocorreu um problema no cadastro do produto' });
    }

    return res.status(201).json(cadastrarProduto[0]);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const listarProdutos = async (req, res) => {
  const { categoria_id } = req.query;

  try {
    if (!categoria_id) {
      const buscarProdutos = await knex('produtos').orderBy('id');

      return res.status(200).json(buscarProdutos);
    }

    const buscarCategoria = await knex('categorias')
      .where('id', categoria_id)
      .first();

    if (!buscarCategoria) {
      return res.status(400).json({ messagem: 'Categoria Inválida' });
    }

    const buscarProdutos = await knex('produtos').where(
      'categoria_id',
      categoria_id
    );

    return res.status(200).json(buscarProdutos);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const detalharProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const buscarProduto = await knex('produtos').where('id', id).first();

    if (!buscarProduto) {
      return res.status(404).json({ messagem: 'Produto não encontrado!' });
    }

    return res.status(200).json(buscarProduto);
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const excluirProduto = async (req, res) => {
  const { id } = req.params;

  try {
    const buscarProduto = await knex('produtos').where('id', id).first();

    if (!buscarProduto) {
      return res.status(404).json({ messagem: 'Produto não encontrado!' });
    }

    const produtoComPedidos = await knex('pedido_produtos').where(
      'produto_id',
      id
    );

    if (produtoComPedidos.length > 0) {
      return res.status(403).json({
        messagem:
          'Não é possível excluir um produto que tenha pedidos cadastrados'
      });
    }

    if (buscarProduto.produto_imagem) {
      await excluirImagem(buscarProduto.produto_imagem);
    }

    const deletarProduto = await knex('produtos')
      .where('id', id)
      .delete()
      .returning('*');

    if (!deletarProduto) {
      return res
        .status(400)
        .json({ messagem: 'Não foi possível excluir o produto' });
    }

    return res.status(200).json({ messagem: 'Produto excluído com sucesso.' });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const editarProduto = async (req, res) => {
  const { id } = req.params;
  const { descricao, quantidade_estoque, categoria_id, valor, produto_imagem } =
    req.body;

  try {
    await produtoSchema.validate(req.body);

    const buscarProduto = await knex('produtos').where('id', id).first();

    if (!buscarProduto) {
      return res.status(404).json({ messagem: 'Produto não encontrado!' });
    }

    const buscarCategoria = await knex('categorias')
      .where('id', categoria_id)
      .first();

    if (!buscarCategoria) {
      return res.status(400).json({ messagem: 'Categoria Inválida' });
    }

    const produtoJaCadastrado = await knex('produtos')
      .whereILike('descricao', descricao)
      .first();

    if (produtoJaCadastrado && produtoJaCadastrado.id != id) {
      return res.status(400).json({
        messagem: `Um produto com a mesma descrição já está registrado para o id ${produtoJaCadastrado.id}. `
      });
    }

    if (produto_imagem) {
      const urlImagemInvalida = await validarImagem(produto_imagem);

      if (urlImagemInvalida) {
        return res.status(400).json(urlImagemInvalida);
      }
    }

    if (
      (buscarProduto.produto_imagem &&
        produto_imagem &&
        buscarProduto.produto_imagem !== produto_imagem) ||
      (buscarProduto.produto_imagem && !produto_imagem)
    ) {
      await excluirImagem(buscarProduto.produto_imagem);
    }

    const editarProduto = await knex('produtos')
      .where('id', id)
      .update({
        descricao,
        quantidade_estoque,
        categoria_id,
        valor,
        produto_imagem
      })
      .returning('*');

    if (!editarProduto) {
      return res
        .status(400)
        .json({ messagem: 'Não foi possível atualizar o produto' });
    }

    return res.status(200).json({
      messagem: 'Produto atualizado com sucesso.',
      produto: editarProduto[0]
    });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  cadastrarProduto,
  listarProdutos,
  detalharProduto,
  excluirProduto,
  editarProduto
};
