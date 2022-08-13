const alteracaoDeSenhaEmail = (email, usuarioNome) => {
  return {
    from: "Projeto Desafio 4 <nao-responder@nao.com.br>",
    to: email,
    subject: "Sua senha foi alterada.",
    text: `Olá ${usuarioNome}, a sua senha foi alterada!`,
  };
};

module.exports = {
  alteracaoDeSenhaEmail,
};
