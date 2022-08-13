const yup = require('./configuracoes');

const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required()
});

module.exports = schemaLogin;