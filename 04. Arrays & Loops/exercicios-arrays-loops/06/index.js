const numeros = [3, 4, 7, 8, 4, 6, 5, 10];

somaDeNumeros = 0;

for (let item of numeros) {

    if (item % 2 === 0) {
        somaDeNumeros += item

    }

}

console.log(somaDeNumeros);