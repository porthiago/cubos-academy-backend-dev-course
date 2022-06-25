const texto = "Aprenda programar do zero na Cubos Academy";

function emailAmigavel (texto) {

    novoTexto =  texto.toLowerCase();

    while (novoTexto.includes(' ')) {

            novoTexto = novoTexto.replace(' ', '-');
    }

    console.log(novoTexto);
}

emailAmigavel(texto)
