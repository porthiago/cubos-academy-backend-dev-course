const yup = require("./yup");

const loginUsuarioSchema = yup.object().shape({
  email: yup.string().email().required(),
  senha: yup.string().required(),
});

module.exports = loginUsuarioSchema;
