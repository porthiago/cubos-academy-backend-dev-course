const yup = require('./yup');

const clienteSchema = yup.object().shape({
  nome: yup.string().strict().required(),
  email: yup.string().strict().email().required(),
  cpf: yup.string().required().min(11).max(11),
  cep: yup.string().min(8).max(8).nullable()
});

module.exports = clienteSchema;
