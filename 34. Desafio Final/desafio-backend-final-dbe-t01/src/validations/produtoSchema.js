const yup = require('./yup');

const produtoSchema = yup.object().shape({
  descricao: yup.string().strict().required(),
  quantidade_estoque: yup.number().strict().required().min(0).integer(),
  valor: yup.number().strict().required().min(0).integer(),
  categoria_id: yup.string().required()
});

module.exports = produtoSchema;
