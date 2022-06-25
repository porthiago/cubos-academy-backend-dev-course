
const pessoa = {

    nome: 'Thiago',
    idade: 35,
    altura: 1.75,
    temCNH: false,
    apelidos: ['Quinho', 'Thi']

};

let verificacaoCNH = pessoa.temCNHtemCNH ? 'possui CNH' : 'não possui CNH';


let mensagem = `${pessoa.nome} tem ${pessoa.idade} anos de idade, altura ${pessoa.altura} e ${verificacaoCNH}. Tem como apelido ${pessoa.apelidos}`;

console.log(mensagem);