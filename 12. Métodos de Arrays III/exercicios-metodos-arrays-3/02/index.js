const cidades = [
    'Salvador',
    'São Paulo',
    'Brasilia',
    'Recife',
    'Rio de Janeiro'
];

const maiorString = cidades.reduce((elementoInicial, elementoAtual)=>{
    let maior = elementoInicial;

    if (elementoAtual.length > maior.length) {
        maior = elementoAtual;
    }

    return maior
});

console.log(maiorString);