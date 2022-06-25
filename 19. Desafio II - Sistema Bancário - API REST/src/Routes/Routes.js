const express = require("express");
const roteador = express.Router();

const controladorBanco = require("../Controllers/BankController");

roteador.get("/", controladorBanco.listarContas);
roteador.get("/:numeroConta/usuario", controladorBanco.obterConta);
roteador.post("/", controladorBanco.criarConta);
roteador.put("/:numeroConta/usuario", controladorBanco.atualizarConta);
roteador.delete("/:numeroConta", controladorBanco.deletarConta);
roteador.post("/transacoes/depositar", controladorBanco.depositarValor);
roteador.post("/transacoes/sacar", controladorBanco.sacarValor);
roteador.post("/transacoes/transferir", controladorBanco.transferirValor);
roteador.get("/saldo", controladorBanco.exibirSaldo);
roteador.get("/extrato", controladorBanco.mostrarExtrato);

module.exports = roteador;
