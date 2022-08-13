const verificarExistenciaEmail = async (email, id) => {
  const conexao = require('../Config/conexao');
  try {
    if (!id) {
      const query = `SELECT * FROM usuarios WHERE email = $1`;
      const usuario = await conexao.query(query, [email]);
      if (usuario.rowCount > 0) {
        return { mensagem: 'O email informado já foi cadastrado' };
      }
    }
  } catch (erro) {
    return {
      mensagem: 'Não foi possível verificar o email informado',
      detalhes: erro.message
    };
  }

  try {
    if (id) {
      const query = `SELECT * FROM usuarios WHERE email = $1 AND id <> $2`;
      const usuario = await conexao.query(query, [email, id]);

      if (usuario.rowCount > 0) {
        return { mensagem: 'O email informado já foi cadastrado' };
      }
    }
  } catch (erro) {
    return {
      mensagem: 'Não foi possível verificar o email informado',
      detalhes: erro.message
    };
  }
};

module.exports = {
  verificarExistenciaEmail
};
