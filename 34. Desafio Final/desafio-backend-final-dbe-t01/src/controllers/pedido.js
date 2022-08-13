const knex = require('../config/conexao');
const {
  cadastrarPedidoSchema,
  objPedido_ProdutoSchema
} = require('../validations/cadastrarPedidoSchema');

const cadastrarPedido = async (req, res) => {
  const { cliente_id, observacao, pedido_produtos } = req.body;
  try {
    await cadastrarPedidoSchema.validate(req.body);

    await objPedido_ProdutoSchema.validate(pedido_produtos[0]);

    const buscarCliente = await knex('clientes')
      .where('id', cliente_id)
      .first();
    if (!buscarCliente) {
      return res.status(404).json({ Mensagem: 'Cliente não encontrado' });
    }
    let valorTotal = 0;
    for (const pedidos of pedido_produtos) {
      const buscarProduto = await knex('produtos')
        .where('id', pedidos.produto_id)
        .first();
      if (!buscarProduto) {
        return res
          .status(404)
          .json({ Mensagem: `Produto ${pedidos.produto_id} não encontrado` });
      }

      if (buscarProduto.quantidade_estoque - pedidos.quantidade_produto < 0) {
        return res.status(400).json({
          Mensagem: `Não há estoque suficiente para a quantidade solicitada do produto ${buscarProduto.descricao}-ID ${pedidos.produto_id}. Quantidade em estoque: ${buscarProduto.quantidade_estoque} unidades. Quantidade solicitada: ${pedidos.quantidade_produto} unidades.`
        });
      }
      valorTotal += buscarProduto.valor * pedidos.quantidade_produto;
    }

    const objPedido = {
      cliente_id,
      observacao,
      valor_total: valorTotal
    };
    const cadastrarNaTabelaPedido = await knex('pedidos')
      .insert(objPedido)
      .returning('*');

    for (const pedidos of pedido_produtos) {
      const buscarProduto = await knex('produtos')
        .where('id', pedidos.produto_id)
        .first();
      const objPedidos = {
        pedido_id: cadastrarNaTabelaPedido[0].id,
        produto_id: pedidos.produto_id,
        quantidade_produto: pedidos.quantidade_produto,
        valor_produto: buscarProduto.valor
      };
      removerValorestoque =
        buscarProduto.quantidade_estoque - pedidos.quantidade_produto;
      const cadastrarNaTabelaPedidoProdutos = await knex(
        'pedido_produtos'
      ).insert(objPedidos);
      const alterarEstoque = await knex('produtos')
        .update('quantidade_estoque', removerValorestoque)
        .where('id', pedidos.produto_id);
    }
    res.status(201).json({ Mensagem: 'Pedido cadastrado com sucesso.' });
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

const consultarPedido = async (req, res) => {
  const { cliente_id } = req.query;
  try {
    if (cliente_id) {
      objComProdutos = [];

      const buscarCliente = await knex('clientes').where('id', cliente_id);
      if (buscarCliente.length === 0) {
        return res.status(404).json({ Mensagem: 'Cliente não encontrado' });
      }

      const buscarPedidosCliente = await knex('pedidos').where(
        'cliente_id',
        cliente_id
      );
      if (buscarPedidosCliente.length === 0) {
        return res
          .status(404)
          .json({ Mensagem: 'Este cliente não possui pedidos' });
      }
      for (let compra of buscarPedidosCliente) {
        const pedido = {
          id: compra.id,
          valor_total: compra.valor_total,
          observacao: compra.observacao,
          cliente_id: parseInt(compra.cliente_id, 10)
        };
        pedido_produtos = [];

        const buscarDetalhesdaCompra = await knex(
          'pedido_produtos as produtosPedidos'
        ).where('pedido_id', compra.id);

        for (let i = 0; buscarDetalhesdaCompra.length > i; i++) {
          if (buscarDetalhesdaCompra[i].pedido_id === compra.id) {
            const detalhes = {
              id: buscarDetalhesdaCompra[i].id,
              quantidade_produto: buscarDetalhesdaCompra[i].quantidade_produto,
              valor_produto: buscarDetalhesdaCompra[i].valor_produto,
              pedido_id: buscarDetalhesdaCompra[i].pedido_id,
              produto_id: buscarDetalhesdaCompra[i].produto_id
            };
            pedido_produtos.push(detalhes);
          }
        }
        const apresentar = {
          pedido,
          pedido_produtos
        };
        objComProdutos.push(apresentar);
      }
      return res.status(200).json(objComProdutos);
    } else {
      objComProdutos = [];

      const buscarPedidosCliente = await knex("pedidos");
      for (let compra of buscarPedidosCliente) {
        const pedido = {
          id: compra.id,
          valor_total: compra.valor_total,
          observacao: compra.observacao,
          cliente_id: parseInt(compra.cliente_id, 10)
        };

        pedido_produtos = [];
        const buscarDetalhesdaCompra = await knex(
          'pedido_produtos as produtosPedidos'
        ).where('pedido_id', compra.id);

        for (let i = 0; buscarDetalhesdaCompra.length > i; i++) {
          if (buscarDetalhesdaCompra[i].pedido_id === compra.id) {
            const detalhes = {
              id: buscarDetalhesdaCompra[i].id,
              quantidade_produto: buscarDetalhesdaCompra[i].quantidade_produto,
              valor_produto: buscarDetalhesdaCompra[i].valor_produto,
              pedido_id: buscarDetalhesdaCompra[i].pedido_id,
              produto_id: buscarDetalhesdaCompra[i].produto_id
            };
            pedido_produtos.push(detalhes);
          }
        }
        const apresentar = {
          pedido,
          pedido_produtos
        };

        objComProdutos.push(apresentar);
      }
      return res.status(200).json(objComProdutos);
    }
  } catch (error) {
    return res.status(400).json({ messagem: error.message });
  }
};

module.exports = {
  cadastrarPedido,
  consultarPedido
};
