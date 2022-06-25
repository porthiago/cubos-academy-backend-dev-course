// Para calcular a nota final da manobra, descarta-se a maior e a menor nota e calcula-se a média aritimética das restantes.

//Percorrer array
//Achar o menor, achar o maior

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];

// const notas = [10, 20, 30, 40, 50, 5];

let notaMaior = notas[0];
let notaMenor = notas[0];
let resultado = 0;
let resultadoFinal;

for (let nota of notas) {

    if (nota > notaMaior) {
        notaMaior = nota;
    } else if (nota < notaMenor) {
        notaMenor = nota;
    }

    resultado += nota;

}


resultadoFinal = resultado - (notaMaior + notaMenor);

console.log(resultadoFinal / (notas.length - 2));


////////////////////////////////////
// let soma = 0, resultado;
// maior = notas[0], menor = notas[0];
// for (let nota of notas) {
//     soma += nota;

//     if (nota >= maior)
//         maior = nota;
//     else if (nota <= menor)
//         menor = nota;
// }
// resultado = soma - maior - menor;
// console.log(resultado / (notas.length - 2));
