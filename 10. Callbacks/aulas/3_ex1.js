const processData = (callback) => {

    const usuario = 'Thiago';
    const idade = 35;

    callback(usuario, idade)

}

const solucao = (usuario, idade) => {
    if (idade) {

        const anoAtual = new Date().getFullYear();
        console.log(
            `Nome: ${usuario} Data de Nascimento: ${anoAtual - idade}`
        )
    } else {
        console.log(usuario)
    }
}

processData(solucao)