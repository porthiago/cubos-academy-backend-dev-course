const yup = require("./yup");

const cadastrarPedidoSchema = yup.object().shape({
  cliente_id: yup.string().required(),
  pedido_produtos: yup.array().required(),
});

const objPedido_ProdutoSchema = yup.object().shape({
  produto_id: yup.number().required().positive(),
  quantidade_produto: yup.number().required().positive(),
});

module.exports = { cadastrarPedidoSchema, objPedido_ProdutoSchema };
