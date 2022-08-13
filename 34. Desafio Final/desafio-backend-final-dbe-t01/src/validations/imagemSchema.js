const yup = require('./yup');

const imagemSchema = yup.object().shape({
  imagem: yup.string().required()
});

const urlImagemSchema = yup.object().shape({
  urlImagem: yup.string().url('A url informada em produto_imagem é inválida')
});

module.exports = { imagemSchema, urlImagemSchema };
