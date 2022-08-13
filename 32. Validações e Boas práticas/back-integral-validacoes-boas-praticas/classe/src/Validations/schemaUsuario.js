const yup = require('./configuracoes');

const schemaUsuario = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required()
});

module.exports = schemaUsuario;
