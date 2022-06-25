let valorDaCompra;
let numeroDeParcelas;
let taxaDeJuros;
let valorParcelado;


valorDaCompra = 100;
numeroDeParcelas = -1;
taxaDeJuros = 1 / 100;

//desconto a vista // sem desconto parcelado

if (numeroDeParcelas === 1) {

    valorDaCompra = valorDaCompra - (valorDaCompra * 10 / 100);

    console.log(`Você recebeu 10% de desconto e pagará ${valorDaCompra} reais`);

} else if (numeroDeParcelas > 1 && numeroDeParcelas < 7) {

    valorDaCompra = valorDaCompra / numeroDeParcelas;
    console.log(`Você irá pagar ${valorDaCompra.toFixed(2)} reais em ${numeroDeParcelas}x sem juros`);

} else if (numeroDeParcelas > 6 && numeroDeParcelas <= 12) {

    valorDaCompra = valorDaCompra * ((1 + taxaDeJuros) ** numeroDeParcelas);
    valorParcelado = valorDaCompra / numeroDeParcelas;

    console.log(`Você irá pagar um total de ${valorDaCompra.toFixed(2)} reais acrescido de juros em parcelas de ${numeroDeParcelas}x de ${valorParcelado.toFixed(2)} reais `);
} else {
    console.log("Número de parcelas inválido.");
}