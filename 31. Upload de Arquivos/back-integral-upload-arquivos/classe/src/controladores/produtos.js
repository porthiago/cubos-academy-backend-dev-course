const knex = require('../conexao');
const supabase = require('../servicos/supabase');

const listarProdutos = async (req, res) => {
  const { usuario } = req;
  const { categoria } = req.query;

  try {
    const produtos = await knex('produtos')
      .where({ usuario_id: usuario.id })
      .where(query => {
        if (categoria) {
          return query.where('categoria', 'ilike', `%${categoria}%`);
        }
      });

    return res.status(200).json(produtos);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const obterProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const produto = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id
      })
      .first();

    if (!produto) {
      return res.status(404).json('Produto não encontrado');
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const cadastrarProduto = async (req, res) => {
  const { usuario } = req;
  const { nome, estoque, preco, categoria, descricao, imagem, nomeDaImagem } =
    req.body;

  if (!nome) {
    return res.status(404).json('O campo nome é obrigatório');
  }

  if (!estoque) {
    return res.status(404).json('O campo estoque é obrigatório');
  }

  if (!preco) {
    return res.status(404).json('O campo preco é obrigatório');
  }

  if (!descricao) {
    return res.status(404).json('O campo descricao é obrigatório');
  }

  let urlDaImagem;

  if (imagem) {
    try {
      const buffer = Buffer.from(imagem, 'base64');
      const { data, error } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .upload(nomeDaImagem, buffer);

      if (error) {
        return res.status(400).json({ error });
      }

      const { publicURL, error: errorPublicUrl } = supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .getPublicUrl(nomeDaImagem);

      if (errorPublicUrl) {
        return res.status(400).json({ error });
      }

      urlDaImagem = publicURL;
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  try {
    const produto = await knex('produtos')
      .insert({
        usuario_id: usuario.id,
        nome,
        estoque,
        preco,
        categoria,
        descricao,
        imagem: urlDaImagem
      })
      .returning('*');

    if (!produto) {
      return res.status(400).json('O produto não foi cadastrado');
    }

    return res.status(200).json(produto);
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const atualizarImagemProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { imagem, nomeDaImagem } = req.body;

  if (!imagem) {
    return res.status(404).json('O campo imagem é obrigatório');
  }

  if (!nomeDaImagem) {
    return res.status(404).json('O campo nome da imagem é obrigatório');
  }

  try {
    const produtoEncontrado = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json('Produto não encontrado');
    }

    const buffer = Buffer.from(imagem, 'base64');

    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .update(nomeDaImagem, buffer);

    if (error) {
      return res.status(400).json({ error });
    }

    const { publicURL, error: errorPublicUrl } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(nomeDaImagem);

    if (errorPublicUrl) {
      return res.status(400).json({ error });
    }

    const produto = await knex('produtos').where({ id }).update({
      imagem: publicURL
    });

    if (!produto) {
      return res.status(400).json('A imagem do produto não foi atualizado');
    }

    return res
      .status(200)
      .json({messagem: 'A imagem do produto foi atualizado com sucesso.', imagem: publicURL});
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirImagemProduto = async (req, res) => { 
    const { usuario } = req;
    const { id } = req.params;
    const { nomeDaImagem } = req.body;
    
    try {
        const produtoEncontrado = await knex('produtos')
        .where({
            id,
            usuario_id: usuario.id
        })
        .first();
    
        if (!produtoEncontrado) {
        return res.status(404).json('Produto não encontrado');
        }
    
        const { imagem } = produtoEncontrado;
    
        if (!imagem) {
        return res.status(404).json('O produto não possui imagem');
        }
    
        const { error } = await supabase.storage
        .from(process.env.SUPABASE_BUCKET)
        .remove([nomeDaImagem]);
    
        if (error) {
        return res.status(400).json({ error });
        }
    
        const produto = await knex('produtos').where({ id }).update({
        imagem: null
        });
    
        if (!produto) {
        return res.status(400).json('A imagem do produto não foi excluída');
        }
    
        return res.status(200).json({messagem: 'A imagem do produto foi excluída com sucesso.'});
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

const atualizarProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;
  const { nome, estoque, preco, categoria, descricao, imagem } = req.body;

  if (!nome && !estoque && !preco && !categoria && !descricao && !imagem) {
    return res
      .status(404)
      .json('Informe ao menos um campo para atualizaçao do produto');
  }

  try {
    const produtoEncontrado = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json('Produto não encontrado');
    }

    const produto = await knex('produtos').where({ id }).update({
      nome,
      estoque,
      preco,
      categoria,
      descricao,
      imagem
    });

    if (!produto) {
      return res.status(400).json('O produto não foi atualizado');
    }

    return res.status(200).json('produto foi atualizado com sucesso.');
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const excluirProduto = async (req, res) => {
  const { usuario } = req;
  const { id } = req.params;

  try {
    const produtoEncontrado = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id
      })
      .first();

    if (!produtoEncontrado) {
      return res.status(404).json('Produto não encontrado');
    }

    const produtoExcluido = await knex('produtos')
      .where({
        id,
        usuario_id: usuario.id
      })
      .del();

    if (!produtoExcluido) {
      return res.status(400).json('O produto não foi excluido');
    }

    return res.status(200).json('Produto excluido com sucesso');
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports = {
  listarProdutos,
  obterProduto,
  cadastrarProduto,
  atualizarProduto,
  excluirProduto,
  atualizarImagemProduto,
  excluirImagemProduto
};
