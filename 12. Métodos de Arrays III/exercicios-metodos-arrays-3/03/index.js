const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((valorInicial, valorAtual) => {
    let maiorValor = valorInicial;

    if (valorAtual > maiorValor) {
        maiorValor = valorAtual;
    }

    return maiorValor;
});

console.log(maiorNumero);