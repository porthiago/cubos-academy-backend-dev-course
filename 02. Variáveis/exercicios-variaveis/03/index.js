let valorSemDesconto;
let valorComDesconto;
let desconto;

valorSemDesconto = 129.99;
valorComDesconto = 80;

desconto = ((valorSemDesconto - valorComDesconto) * 100) / valorSemDesconto;

console.log(desconto.toFixed(2));