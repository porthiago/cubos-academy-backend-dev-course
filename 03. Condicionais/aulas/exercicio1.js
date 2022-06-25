let valorDaCompra;
let numeroDeParcelas;

valorDaCompra = 100;
numeroDeParcelas = 5;

//desconto a vista // sem desconto parcelado

if (numeroDeParcelas === 1) {

    valorDaCompra = valorDaCompra - (valorDaCompra * 10 / 100);

    console.log(`Você recebeu 10% de desconto e pagará ${valorDaCompra} reais`);

} else {

    valorDaCompra = valorDaCompra / numeroDeParcelas;
    console.log(`Você irá pagar ${valorDaCompra.toFixed(2)} reais em ${numeroDeParcelas}x sem juros`)
}