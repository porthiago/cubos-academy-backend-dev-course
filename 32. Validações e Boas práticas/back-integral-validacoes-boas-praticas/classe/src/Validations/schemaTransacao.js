const yup = require('./configuracoes');

const schemaTransacao = yup.object().shape({
  tipo: yup.string().required(),
  descricao: yup.string().strict().required(),
  valor: yup.number().required(),
  data: yup.string().required(),
  categoria_id: yup.number().required()
});

module.exports = schemaTransacao;
