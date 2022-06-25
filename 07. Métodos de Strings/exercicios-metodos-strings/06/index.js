const celular = 7199918888;
const celularString = celular.toString()

if (celularString.length === 11) {

    const formatacaoDDD = celularString.slice(0, 2);
    const parenteses1 = formatacaoDDD.padStart(3, "(");
    const parenteses2 = parenteses1.padEnd(4, ")");

    const codigo9 = celularString.slice(2, 3);

    const primeiroBlocoDoNumero = celularString.slice(3, 7);
    const segundoBlocoNumero = celularString.slice(7, 11);

    const numeroFormatado = parenteses2 + ' ' + codigo9 + ' ' + primeiroBlocoDoNumero + '-' + segundoBlocoNumero;


    console.log(numeroFormatado);

} else if (celularString.length === 10) {

    const formatacaoDDD = celularString.slice(0, 2);
    const parenteses1 = formatacaoDDD.padStart(3, "(");
    const parenteses2 = parenteses1.padEnd(4, ")");


    const primeiroBlocoDoNumero = celularString.slice(2, 6);
    const segundoBlocoNumero = celularString.slice(6, 10);

    const numeroFormatado = parenteses2 + ' ' + '9' + ' ' + primeiroBlocoDoNumero + '-' + segundoBlocoNumero;

    console.log(numeroFormatado);

} else if (celularString.length === 8) {

    const primeiroBlocoDoNumero = celularString.slice(0, 4);
    const segundoBlocoNumero = celularString.slice(4, 8);

    const numeroFormatado = '9' + ' ' + primeiroBlocoDoNumero + '-' + segundoBlocoNumero;

    console.log(numeroFormatado);

} else {
    console.log('Número Inválido');
}