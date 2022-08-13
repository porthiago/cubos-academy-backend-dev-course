const supabase = require('../services/supabase');
const { imagemSchema } = require('../validations/imagemSchema');
const { decode } = require('base64-arraybuffer');

const upload = async (req, res) => {
  const { imagem } = req.body;

  const nomeDaImagem = `IMG_${Date.now().toString()}`;

  try {
    await imagemSchema.validate(req.body);

    const base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;

    const base64Valido = base64regex.test(imagem);

    if (!base64Valido) {
      return res.status(400).json({
        messagem:
          'O campo imagem deve ser preenchido com uma string no formato base 64 válido'
      });
    }

    const { data, error } = await supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .upload(nomeDaImagem, decode(imagem), {
        contentType: 'image'
      });

    if (error) {
      return res.status(400).json({
        messagem: 'Erro ao fazer upload da imagem',
        erro: error
      });
    }

    const { publicURL, error: errorPublicUrl } = supabase.storage
      .from(process.env.SUPABASE_BUCKET)
      .getPublicUrl(nomeDaImagem);

    if (errorPublicUrl) {
      return res
        .status(400)
        .json({ mensagem: 'Erro ao buscar url da imagem', erro: error });
    }

    return res.status(200).json(publicURL);
  } catch (error) {
    return res.status(400).json({ mensagem: error.message });
  }
};

module.exports = { upload };
