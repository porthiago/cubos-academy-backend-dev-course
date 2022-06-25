const { buscarEndereco } = require("utils-playground");
const fs = require("fs/promises");

const encontrarEnderecos = async (req, res) => {
  const cep = req.params.cep;

  try {
    const enderecosArquivoJson = await fs.readFile("./src/enderecos.json");
    const enderecosJs = JSON.parse(enderecosArquivoJson);

    const enderecoEncontrado = enderecosJs.find((endereco) => {
      const cepFormatado = endereco.cep.replace("-", "");
      return cep === cepFormatado;
    });

    if (enderecoEncontrado) {
      res.json(enderecoEncontrado);
    } else {
      const enderecoObitdoApiExterna = await buscarEndereco(cep);

      enderecosJs.push(enderecoObitdoApiExterna);

      const enderecosJson = JSON.stringify(enderecosJs);
      await fs.writeFile("./src/enderecos.json", enderecosJson);
      return res.json(enderecoObitdoApiExterna);
    }
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};

module.exports = {
  encontrarEnderecos,
};
