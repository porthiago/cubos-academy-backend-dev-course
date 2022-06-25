let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

let conjuntoDeNomes = nome.split(' ');
let primeiraLetra;
let restoDoNome;
let nomeFormatado = '';

const emailFormatado = email.trim();

if (identificador.length !== 6) {
    identificadorCorrigido = identificador.padStart(6, "0");
};

for (nome of conjuntoDeNomes) {
    primeiraLetra = nome[0];
    restoDoNome = nome.slice(1);
    nomeFormatado += ' ' + primeiraLetra.toUpperCase() + restoDoNome;
};

console.log(identificadorCorrigido);
console.log(nomeFormatado.trim());
console.log(emailFormatado);




