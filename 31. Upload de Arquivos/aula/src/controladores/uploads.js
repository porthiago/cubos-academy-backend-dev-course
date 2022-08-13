const supabase = require('../supabase');

const uploadImagem = async (req, res) => {
  const { nome, imagem } = req.body;


  try {
    const buffer = Buffer.from(imagem, 'base64');
    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(nome, buffer);

    if (error) {
      return res.status(400).json({ error });
    }

    const { publicURL, error: errorPublicUrl } = supabase
  .storage
  .from(process.env.SUPABASE_BUCKET)
  .getPublicUrl(nome)

  if (errorPublicUrl) {
    return res.status(400).json({ error });
  }

    return res.json(publicURL);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

const excluirImagem = async (req, res) => {};

module.exports = {
  uploadImagem,
  excluirImagem
};
