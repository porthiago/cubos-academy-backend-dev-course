const texto = 'Cuidado, pois usuarios as      vezes deixam espacos vazios no fim do texto sem querer. ';

const palavras = texto.trim().split(' ');

let contadorDePalavras = 0;

for (let palavra of palavras) {
    if (palavra !== '') {
        contadorDePalavras++;
    };
};

console.log(contadorDePalavras);


console.log(palavras)
console.log(palavras.length);
console.log(contadorDePalavras);