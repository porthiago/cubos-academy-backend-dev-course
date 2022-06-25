
const stringCorrompida = "*Can***&&is %lupus )familiaris";
// const caracteresCorrompidos = '!@#$%&*().';
// let stringCorrigida = '';

// for (let caractere of stringCorrompida) {

//     //trancar primeiro caractere

//     for (let caractereCorrompido of caracteresCorrompidos) {

//         if (caractere === caractereCorrompido) {

//             console.log('achou caractere corrompido');
//             // stringCorrompida.shift();
//             // stringCorrompida = stringCorrigida;
//         }

//     }

// }

// console.log(stringCorrigida);

let stringCorrigida = '';

for (let caractere of stringCorrompida) {

    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' || caractere === '.') {

        caractere = ' ';

    } else {
        stringCorrigida += caractere;

    }

}
console.log(stringCorrigida);