const cpf = "011.022.033-44";

function removerPontuacao(cpf) {

    let cpfReplace = cpf;

    while (cpfReplace.includes('.')) {
        cpfReplace = cpfReplace.replace('.', '')
    };

    cpfReplace = cpfReplace.replace('-', '');

    console.log(cpfReplace);
}

removerPontuacao(cpf);