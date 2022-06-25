const nome = 'Guido Cerqueira';

function criarNickName(nome) {

    while (nome.includes(' ')) {

        nome = nome.replace(' ', '');

    };

    const nomeArroba = '@' + nome;
    const nomeLowerCase = nomeArroba.toLowerCase();
    const nomeSliced = nomeLowerCase.slice(0, 13);

    console.log(nomeSliced);


}

criarNickName(nome);