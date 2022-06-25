const express = require("express");

const app = express();

const rotas = require("./Routes/Routes");

app.use(express.json());

app.use("/contas", rotas);

app.listen(3000, () => {
  console.log("Servidor em execução na porta http://localhost:3000");
});
