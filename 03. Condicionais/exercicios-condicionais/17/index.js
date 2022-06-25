//valor do produto comprado.
const valorDoProduto = 2_000_00;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 400_00;

let valorDasParcelas;
let parcelasRestantes;
let valorRestante;

valorDasParcelas = valorDoProduto / quantidadeDoParcelamento;
valorRestante = valorDoProduto - valorPago;
parcelasRestantes = valorRestante / valorDasParcelas;

console.log(`Restam ${parcelasRestantes.toFixed()} parcelas de R$${valorDasParcelas.toFixed(2) / 100}`);
