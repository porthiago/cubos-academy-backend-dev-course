const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

// a) Números em Ordem Crescente
numeros.sort((a, b) => {
    return a - b;
});
console.log(numeros);

//b) Números em Ordem Decrescente
numeros.sort((a, b) => {
    return b - a;
});
console.log(numeros);

//c) Números Ordenados Segundo Tabela Unicode
numeros.sort();
console.log(numeros);

//d) Frutas em Ordem Alfabética Crescente
frutas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(frutas);

//e) Frutas em Ordem Alfabética Decrescente
frutas.sort((a, b) => {
    return b.localeCompare(a);
});
console.log(frutas);

//f) Frutas Ordenadas Pela Quantidade de Caracteres
frutas.sort((a, b)=> {
    return a.length - b.length;
});
console.log(frutas);