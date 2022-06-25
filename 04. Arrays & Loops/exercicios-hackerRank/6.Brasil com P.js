const palavras = [
    "aveia",
    "manha",
    "ave"
]

const primeiraLetra = "a";
const segundaLetra = "v";

let i = 0;

for (let palavra of palavras) {

    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        console.log(palavra);
        i++
    }
}

if (i === 0) {
    console.log('NENHUMA');
};