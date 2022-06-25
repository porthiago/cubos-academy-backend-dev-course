const idade = 65;

function verificacaoDeFaixaEtaria(idade) {

    if (idade <= 21) {

        return 'É uma pessoa jovem';
    } else if (idade > 66) {

        return 'É uma pessoa idosa';

    } else {

        return 'É uma pessoa adulta'

    }

}

const faixaEtariaVerificada = verificacaoDeFaixaEtaria(idade);

console.log(faixaEtariaVerificada);