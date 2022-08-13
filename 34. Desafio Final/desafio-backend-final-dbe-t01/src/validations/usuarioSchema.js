const yup = require('./yup');

const usuarioSchema = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  senha: yup.string().required()
});

module.exports = usuarioSchema;
