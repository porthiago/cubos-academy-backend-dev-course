const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

console.log(`O livro está na posição ${livros.findIndex((livro)=>{
    return livro === nomeDoLivro;
}) + 1}`);