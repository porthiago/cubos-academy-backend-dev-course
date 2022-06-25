// Somar todos os itens do array

const numeros = [1, 1, 1];

let soma = 0;
let posicao = 0;

for (let numero of numeros) {
    soma += numero;
}

if (soma % numeros.length === 0) {
    posicao = numeros.length;
} else {
    posicao = soma % numeros.length;
}

console.log(posicao);