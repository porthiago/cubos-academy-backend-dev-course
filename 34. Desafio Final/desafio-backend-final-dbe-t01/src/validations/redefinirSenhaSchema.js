const yup = require("./yup");

const redefinirSenhaSchema = yup.object().shape({
  email: yup.string().email().required(),
  senha_antiga: yup.string().required(),
  senha_nova: yup.string().required(),
});

module.exports = redefinirSenhaSchema;
