//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
let valorDoProduto = 130_00;


if (tipoDePagamento === "credito") {

    valorDoProduto = valorDoProduto - (valorDoProduto * 0.05);
    valorDoProduto /= 100;

    console.log(`Valor a ser pago: R$ ${valorDoProduto.toFixed(2)}`);

} else if (tipoDePagamento === "cheque") {

    valorDoProduto = valorDoProduto - (valorDoProduto * 0.03);
    valorDoProduto /= 100;

    console.log(`Valor a ser pago: R$ ${valorDoProduto.toFixed(2)}`);

} else if (tipoDePagamento === "dinheiro") {

    valorDoProduto = valorDoProduto - (valorDoProduto * 0.1);
    valorDoProduto /= 100;

    console.log(`Valor a ser pago: R$ ${valorDoProduto.toFixed(2)}`);

}

