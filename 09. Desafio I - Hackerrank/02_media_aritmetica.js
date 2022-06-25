const lista = [2, 3, 4];

let somaDosElementos = 0;

for (let elemento of lista) {
    somaDosElementos += elemento;
};

console.log(somaDosElementos / lista.length);