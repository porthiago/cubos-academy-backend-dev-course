const numeros = [0, 122, 4, 6, 8, 44];

const resultado = numeros.every((numero) => {
    return numero % 2 === 0;
});

resultado ? console.log('array válido') : console.log('array inválido');