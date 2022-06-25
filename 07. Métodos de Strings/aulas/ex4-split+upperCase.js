let nomeCompleto = 'jose messsias junior';

const conjuntoDeNomes = nomeCompleto.split(' ');

let primeiraLetra;
let restoDoNome;
let nomeUpperCase = '';


for (let nome of conjuntoDeNomes) {

    primeiraLetra = nome[0];
    primeiraLetra = primeiraLetra.toUpperCase();

    restoDoNome = nome.slice(1);

    nomeUpperCase += ' ' + primeiraLetra + restoDoNome;

}

console.log(nomeUpperCase.trim());