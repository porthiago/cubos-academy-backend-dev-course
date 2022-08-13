const supabase = require('../services/supabase');
const { urlImagemSchema } = require('../validations/imagemSchema');

const validarImagem = async urlImagem => {
  const nomeDaImagem = urlImagem.split('/pdv/')[1];

  await urlImagemSchema.validate({ urlImagem });

  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .list('', {
      limit: 1,
      offset: 0,
      sortBy: { column: 'name', order: 'asc' },
      search: nomeDaImagem
    });

  if (!data[0] || data[0].name !== nomeDaImagem) {
    return {
      messagem:
        'Não existe nenhuma imagem correspondente a url informada em produto_imagem'
    };
  }

  if (error) {
    return { mensagem: error };
  }
};

const excluirImagem = async urlImagem => {
  const nomeDaImagem = urlImagem.split('/pdv/')[1];

  const { data, error } = await supabase.storage
    .from(process.env.SUPABASE_BUCKET)
    .remove([nomeDaImagem]);
};

module.exports = { validarImagem, excluirImagem };
