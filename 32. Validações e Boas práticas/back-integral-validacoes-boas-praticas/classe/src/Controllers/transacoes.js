const conexao = require('../Config/conexao');
const schemaTransacao = require('../Validations/schemaTransacao');

const listarTransacoes = async (req, res) => {
  const { filtro } = req.query;

  try {
    if (filtro) {
      const query = `SELECT t.id, t.tipo, 
      t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id,
      c.descricao AS categoria_nome
      FROM transacoes t
      LEFT JOIN categorias c ON t.categoria_id = c.id
      WHERE t.usuario_id = $1 AND c.descricao ILIKE $2`;

      const resultadoFiltrado = [];

      if (Array.isArray(filtro)) {
        for (const elemento of filtro) {
          const transacoes = await conexao.query(query, [
            req.usuarioLogado.id,
            elemento
          ]);

          resultadoFiltrado.push(...transacoes.rows);
        }
      } else {
        const transacoes = await conexao.query(query, [
          req.usuarioLogado.id,
          filtro
        ]);

        resultadoFiltrado.push(...transacoes.rows);
      }

      if (resultadoFiltrado.length === 0) {
        return res.status(404).json({
          messagem: 'Nenhuma transação encontrada para as categorias informadas'
        });
      }

      return res.status(200).json(resultadoFiltrado);
    }
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível listar as transações',
      detalhes: erro.message
    });
  }

  try {
    const query = `SELECT t.id, t.tipo, 
    t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id,
    c.descricao AS categoria_nome
    FROM transacoes t
    LEFT JOIN categorias c ON t.categoria_id = c.id
    WHERE t.usuario_id = $1
    ORDER BY id`;

    const usuarios = await conexao.query(query, [req.usuarioLogado.id]);

    return res.status(200).json(usuarios.rows);
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível listar as transações',
      detalhes: erro.message
    });
  }
};

const detalharTransacao = async (req, res) => {
  try {
    const query = `SELECT t.id, t.tipo, 
    t.descricao, t.valor, t.data, t.usuario_id, t.categoria_id,
    c.descricao AS categoria_nome
    FROM transacoes t
    LEFT JOIN categorias c ON t.categoria_id = c.id
    WHERE t.id = $1 AND t.usuario_id = $2`;

    const transacao = await conexao.query(query, [
      req.params.id,
      req.usuarioLogado.id
    ]);

    if (transacao.rowCount === 0) {
      return res.status(404).json({
        messagem: 'Transação não encontrada'
      });
    }

    return res.status(200).json(transacao.rows[0]);
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível listar as transações',
      detalhes: erro.message
    });
  }
};

const cadastrarTransacao = async (req, res) => {
  const { tipo, descricao, valor, data, categoria_id } = req.body;

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res
      .status(400)
      .json({ messagem: 'O tipo informado deve ser entrada ou saida' });
  }

  let categoria;

  try {
    await schemaTransacao.validate(req.body);

    const query = `SELECT descricao FROM categorias WHERE id = $1`;

    categoria = await conexao.query(query, [categoria_id]);

    if (categoria.rowCount === 0) {
      return res.status(404).json({
        messagem: 'Categoria não encontrada'
      });
    }
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível cadastrar a transação',
      detalhes: erro.message
    });
  }

  let transacao;

  try {
    const query = `INSERT INTO transacoes (tipo, descricao, valor, data, usuario_id, categoria_id)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id, tipo, descricao, valor, data, usuario_id, categoria_id`;

    transacao = await conexao.query(query, [
      tipo,
      descricao,
      valor,
      data,
      req.usuarioLogado.id,
      categoria_id
    ]);

    return res.status(201).json({
      ...transacao.rows[0],
      categoria_nome: categoria.rows[0].descricao
    });
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível cadastrar a transação',
      detalhes: erro.message
    });
  }
};

const atualizarTransacao = async (req, res) => {
  const { tipo, descricao, valor, data, categoria_id } = req.body;

  if (tipo !== 'entrada' && tipo !== 'saida') {
    return res
      .status(400)
      .json({ messagem: 'O tipo informado deve ser entrada ou saida' });
  }

  try {
    await schemaTransacao.validate(req.body);

    const query = `SELECT * FROM transacoes 
    WHERE id = $1 AND usuario_id = $2`;

    const transacao = await conexao.query(query, [
      req.params.id,
      req.usuarioLogado.id
    ]);

    if (transacao.rowCount === 0) {
      return res.status(404).json({
        messagem: 'Transação não encontrada'
      });
    }
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível atualizar a transação',
      detalhes: erro.message
    });
  }

  try {
    const query = `SELECT * FROM categorias WHERE id = $1`;

    const categoria = await conexao.query(query, [categoria_id]);

    if (categoria.rowCount === 0) {
      return res.status(404).json({
        messagem: 'Categoria não encontrada'
      });
    }
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível atualizar a transação',
      detalhes: erro.message
    });
  }

  try {
    const query = `UPDATE transacoes 
    SET tipo = $1, descricao = $2, valor = $3, data = $4, categoria_id = $5 
    WHERE id = $6 AND usuario_id = $7`;

    const transacaoAtualizada = await conexao.query(query, [
      tipo,
      descricao,
      valor,
      data,
      categoria_id,
      req.params.id,
      req.usuarioLogado.id
    ]);

    return res.status(200).json({
      mensagem: 'Transação atualizada com sucesso'
    });
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível atualizar a transação',
      detalhes: erro.message
    });
  }
};

const excluirTransacao = async (req, res) => {
  try {
    const query = `SELECT * FROM transacoes 
    WHERE id = $1 AND usuario_id = $2`;

    const transacao = await conexao.query(query, [
      req.params.id,
      req.usuarioLogado.id
    ]);

    if (transacao.rowCount === 0) {
      return res.status(404).json({
        messagem: 'Transação não encontrada'
      });
    }
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível excluir a transação',
      detalhes: erro.message
    });
  }

  try {
    const query = `DELETE FROM transacoes 
    WHERE id = $1 AND usuario_id = $2`;

    await conexao.query(query, [req.params.id, req.usuarioLogado.id]);

    return res.status(200).json({ mensagem: 'Transação excluída com sucesso' });
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível excluir a transação',
      detalhes: erro.message
    });
  }
};

const obterExtrato = async (req, res) => {
  try {
    const query = `SELECT valor, tipo 
    FROM transacoes 
    WHERE usuario_id = $1 `;

    const transacoes = await conexao.query(query, [req.usuarioLogado.id]);

    const somaEntradas = transacoes.rows
      .filter(transacao => transacao.tipo === 'entrada')
      .reduce((total, transacao) => total + transacao.valor, 0);

    const somaSaidas = transacoes.rows
      .filter(transacao => transacao.tipo === 'saida')
      .reduce((total, transacao) => total + transacao.valor, 0);

    return res.status(200).json({
      entrada: somaEntradas,
      saida: somaSaidas,
      saldo: somaEntradas - somaSaidas
    });
  } catch (erro) {
    return res.status(400).json({
      messagem: 'Não foi possível obter o extrato',
      detalhes: erro.message
    });
  }
};

module.exports = {
  listarTransacoes,
  detalharTransacao,
  cadastrarTransacao,
  atualizarTransacao,
  excluirTransacao,
  obterExtrato
};
