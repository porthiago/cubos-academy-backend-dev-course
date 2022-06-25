const numeros = [3, 24, 1, 8, , 67, 11, 7, 15];

let guardaNumero = numeros[0];

for (let numero of numeros) {

    if (numero > guardaNumero) {

        guardaNumero = numero;

    }

}

console.log(guardaNumero);