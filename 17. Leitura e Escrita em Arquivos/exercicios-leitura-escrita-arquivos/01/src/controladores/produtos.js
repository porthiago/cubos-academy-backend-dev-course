const produtos = require('../bancodedados/dadosprodutos');

const { getStateFromZipcode } = require('utils-playground');

const listarProdutos = (req, res) => {
    return res.status(200).json(produtos)
}

const obterProduto = (req, res) => {
    const { idProduto } = req.params;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    return res.status(200).json(produtoEncontrado);
}

const calcularFrete = async (req, res) => {
    const { idProduto, cep } = req.params;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    try {
        const estado = await getStateFromZipcode(cep);

        if (estado === 'BA' || estado === 'SE' || estado === 'AL' || estado === 'PE' || estado === 'PB') {
            const frete = produtoEncontrado.valor * 0.1;
    
            return res.status(200).json({
                produto:
                {
                    id: produtoEncontrado.id,
                    nome: produtoEncontrado.nome,
                    valor: produtoEncontrado.valor
                },
                frete: {
                    estado,
                    frete
                }
            });
        } else if (estado === 'SP' || estado === 'RJ') {
            const frete = produtoEncontrado.valor * 0.15;
    
            return res.status(200).json({
                produto:
                {
                    id: produtoEncontrado.id,
                    nome: produtoEncontrado.nome,
                    valor: produtoEncontrado.valor
                },
                frete: {
                    estado,
                    frete
                }
            });
        } else {
            const frete = produtoEncontrado.valor * 0.12;
    
            return res.status(200).json({
                produto:
                {
                    id: produtoEncontrado.id,
                    nome: produtoEncontrado.nome,
                    valor: produtoEncontrado.valor
                },
                frete: {
                    estado,
                    frete
                }
            });
        }
    } catch (err) {
        res.status(404).json('CEP Inválido');
    }
}

module.exports = {
    listarProdutos,
    obterProduto,
    calcularFrete
}