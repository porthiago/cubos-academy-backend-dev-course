const lista = [12, 20, 10, 7]

let menorIdadePermitida = 'Infinity';
let qtdPessoasDeMaior = 0;

for (let idade of lista) {
    if (idade >= 18) {
        qtdPessoasDeMaior++;

        if (idade < menorIdadePermitida) {
            menorIdadePermitida = idade;
        };
    };
};

qtdPessoasDeMaior === 0 ? console.log('CRESCA E APARECA') : console.log(menorIdadePermitida);