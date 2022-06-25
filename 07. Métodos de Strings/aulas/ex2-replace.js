function replaceAll(valorOriginal, valorConvertido, searchTxt, replaceTxt) {

    valorConvertido = valorOriginal.replace(searchTxt, replaceTxt);

    while (valorConvertido.includes(',')) {
        valorConvertido = valorConvertido.replace(searchTxt, replaceTxt);


    }

    return valorConvertido

}

const numero = '1,350,000,000,000,000';

console.log(replaceAll(numero, '', ',', '.'));