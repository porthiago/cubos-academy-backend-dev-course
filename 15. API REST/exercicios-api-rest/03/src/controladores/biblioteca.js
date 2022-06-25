let { livros, idLivro } = require('../dados_biblioteca');

const listarLivros = (req, res) => {
    return res.status(200).json(livros);
}

const obterLivro = (req, res) => {
    const { id } = req.params;

    if (!isNaN(Number(id))) {

        const livroEncontrado = livros.find((livro)=>{
            return livro.id === Number(id);
        })

        if (livroEncontrado) {
            return res.status(200).json(livroEncontrado);
        } else {
            return res.status(400).json({mensagem: "Não existe livro para o ID informado."});
        }

    } else {
        return res.status(400).json({mensagem: "O valor do parâmetro ID da URL não é um número válido."});
    }   
}

const adicionarLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;

    const livro = {
        id: idLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(livro);

    return res.status(201).json(livro);
}

const substituirLivro = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    let livroSubstituir = livros.find((livro)=>{
        return livro.id === Number(id);
    }) 
    
    if (livroSubstituir) {

        livroSubstituir.titulo = titulo
        livroSubstituir.autor = autor
        livroSubstituir.ano = ano
        livroSubstituir.numPaginas = numPaginas
    
    return res.status(200).json({mensagem: "Livro substituído."});

    } else {
    return res.status(200).json({mensagem: "Não existe livro a ser substituído para o ID informado."});
    } 
}

const alterarLivro = (req, res) => {
    const { id } = req.params;
    const {titulo, autor, ano, numPaginas} = req.body;

    let livroAlterar = livros.find((livro)=>{
        return livro.id === Number(id);
    }); 
    
    if (livroAlterar) {

        livroAlterar.titulo = titulo
        livroAlterar.autor = autor
        livroAlterar.ano = ano
        livroAlterar.numPaginas = numPaginas
    
    return res.status(200).json({mensagem: "Livro alterado."});

    } else {
    return res.status(200).json({mensagem: "Não existe livro a ser alterado para o ID informado."});
    } 
}

const excluirLivro = (req, res) => {
    const { id } = req.params;

    const indexLivroDeletar = livros.findIndex((livro)=>{
        return livro.id === Number(id);
    });

    if (indexLivroDeletar !== -1) {
        livros.splice(indexLivroDeletar, 1);

        return res.status(200).json({mensagem: "Livro removido."});
    } else {
        return res.status(400).json({mensagem: "Não existe livro a ser removido para o ID informado."});
    }
}

module.exports = {
    listarLivros,
    obterLivro,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    excluirLivro
}