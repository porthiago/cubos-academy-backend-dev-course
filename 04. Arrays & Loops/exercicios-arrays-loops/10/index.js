const numeros = [8, 11, 4, 1];

let numeroMaior = numeros[0];
let numeroMenor = numeros[0];

for (let numero of numeros) {

    if (numero > numeroMaior) {

        numeroMaior = numero;

    } else if (numero < numeroMenor) {

        numeroMenor = numero;

    }

}

console.log(numeroMaior - numeroMenor);