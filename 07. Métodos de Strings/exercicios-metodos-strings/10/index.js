const nomeArquivo = 'Foto da Familia.jpeg';


//Procurar e achar o ponto
//procurar e achar o que vem depois do ponto
//jpg, jpeg, gif e png;

function validarImagem(arquivo) {

    if (arquivo.includes('.jpg') || arquivo.includes('.jpeg') || arquivo.includes('.gif') || arquivo.includes('png')) {

        console.log('Arquivo válido');

    } else {

        console.log('Arquivo inválido');
    };
};

validarImagem(nomeArquivo);