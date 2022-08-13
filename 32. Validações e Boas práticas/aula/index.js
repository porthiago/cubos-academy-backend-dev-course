const express = require('express');
const yup = require('yup');
const {pt} = require('yup-locales')
const {setLocale} = require('yup');
setLocale(pt);

const app = express();

app.use(express.json());

app.post('/cadastro', async (req, res) => {
  const schema = yup.object().shape({
    nome: yup.string().required(),
    idade: yup.number().strict().required('Idade é obrigatória'),
    email: yup.string().email().required('O campo email é obrigatório'),
    senha: yup.string().required('O campo senha é obrigatório').min(5).max(10),
  })
  
console.log(req.body);

  try {
    await schema.validate(req.body);

    return res.json('validouu')
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  
  return res.json('ok')
});

app.listen(3000, () => {
    console.log('Server started on port 3000')
})