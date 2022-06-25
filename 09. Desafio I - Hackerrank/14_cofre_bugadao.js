function processData(input) {

    const splitInput = input.trim().split('\n');

    const senha = splitInput[0];
    const senhaRecebida = splitInput[1];

    let guardaSequencia = '';
    let senhaParaVerificacao = senhaRecebida;

    for (let i = 0; i < senha.length; i++) {

        for (let j = 0; j < senhaParaVerificacao.length; j++) {

            if (senha[i] === senhaParaVerificacao[j]) {
                guardaSequencia += senhaParaVerificacao[j];
                senhaParaVerificacao = senhaParaVerificacao.slice(senhaParaVerificacao.indexOf(senhaParaVerificacao[j]));
                break;
            }
        }
    }

    senha === guardaSequencia ? console.log('SIM') : console.log('NAO');
}

// processData('cubos\nxcxuxbxoxs\n') //SIM
// processData('cubos\nsubocxxx\n') //NAO
// processData('cubos\newvelrabsocaeln\n') //NAO
processData('cubos\nxccccxuuuuuxbxoxsxxxxxxssssssyyyyxxxccccccc\n') //SIM