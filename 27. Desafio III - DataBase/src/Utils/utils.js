const verificarCamposObrigatoriosUsuarios = campos => {
  if (!campos.nome) {
    return {
      mensagem: 'É necessário preencher o campo nome'
    };
  }

  if (!campos.email) {
    return {
      mensagem: 'É necessário preencher o campo email'
    };
  }

  if (!campos.senha) {
    return {
      mensagem: 'É necessário preencher o campo senha'
    };
  }
};

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

const verificarCamposObrigatoriosTransacoes = campos => {
  if (!campos.tipo) {
    return {
      mensagem: 'É necessário preencher o campo tipo'
    };
  }

  if (campos.tipo !== 'entrada' && campos.tipo !== 'saida') {
    return {
      messagem: 'O tipo informado deve ser entrada ou saida'
    };
  }

  if (!campos.descricao) {
    return {
      mensagem: 'É necessário preencher o campo descricao'
    };
  }

  if (!campos.valor && campos.valor !== 0) {
    return {
      mensagem: 'É necessário preencher o campo valor'
    };
  }

  if (!campos.data) {
    return {
      mensagem: 'É necessário preencher o campo data'
    };
  }

  if (!campos.categoria_id) {
    return {
      mensagem: 'É necessário preencher o campo categoria_id'
    };
  }
};

module.exports = {
  verificarCamposObrigatoriosUsuarios,
  verificarCamposObrigatoriosTransacoes,
  verificarExistenciaEmail
};
