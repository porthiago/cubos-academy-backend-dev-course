
function verificarMaioridade(idade) {

    if (idade >= 18) {

        return true;

    } else {

        return false;

    }

}

const maiorDeIdade = verificarMaioridade(18);

if (maiorDeIdade) {

    console.log('É maior de idade');
} else {

    console.log('É menor de idade');
}

