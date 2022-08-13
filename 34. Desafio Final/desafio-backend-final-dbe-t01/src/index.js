require("dotenv").config();
const express = require("express");
const app = express();
const rotasCategorias = require("./routes/rotasCategorias");
const rotasUsuarios = require("./routes/rotasUsuarios");
const rotasLogin = require("./routes/rotasLogin");
const rotasclientes = require("./routes/rotasClientes");
const rotasProdutos = require("./routes/rotasProdutos");
const rotasPedidos = require("./routes/rotasPedidos");
const rotasImagens = require("./routes/rotasImagens");

app.use(express.json({ limit: '10mb' }));

app.use("/categoria", rotasCategorias);
app.use("/usuario", rotasUsuarios);
app.use("/login", rotasLogin);
app.use("/cliente", rotasclientes);
app.use("/produto", rotasProdutos);
app.use("/pedido", rotasPedidos);
app.use("/upload", rotasImagens);


app.listen(process.env.PORT || 3000, () => {
  console.log(`Servidor iniciado através da porta ${process.env.PORT || 3000}`);
});
