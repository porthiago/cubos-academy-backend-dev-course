const express = require("express");
const fs = require("fs/promises");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const texto = "Hello, World";
  await fs.writeFile("./src/b.txt", texto);

  res.json("ok");
});

app.post("/", async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const teste = await fs.readFile("./src/usuarios.json");

    const pessoas = JSON.parse(teste);

    console.log(pessoas);

    // pessoas.push({
    //   nome,
    //   idade,
    // });

    // const pessoasStringfy = JSON.stringify(pessoas);

    // await fs.writeFile("./src/usuarios.json", pessoasStringfy);

    // return res.json("Pessoa Cadastrada Com Sucesso");
  } catch (erro) {
    return res.json(`Deu erro: ${erro.message}`);
  } finally {
    console.log("Isso sempre executado");
  }
});

app.listen(3000);
