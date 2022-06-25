//Refatorar se possível

const precos = [200, 150, 50, 100];

let precoTotal = 0;
let menorPreco = Infinity;
let precoPromocional;

for (let preco of precos) {
    precoTotal += preco;

    if (preco < menorPreco) {
        menorPreco = preco;
    }
}

if (precos.length >= 3) {
    precoPromocional = precoTotal - (menorPreco * 50 / 100);
    console.log(precoPromocional)
    
} else {
    console.log(precoTotal);
}