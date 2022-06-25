// Ela deve comprar a casa em um ano e vendê-la em outro, e deve fazê-lo com prejuízo.
// Por exemplo, a casa é avaliada em preço = [20, 15, 8, 2, 12] nos próximos 5 anos (preco.length).
// Ela pode comprar a casa em qualquer ano, mas deve revendê-la com prejuízo em um dos anos seguintes.
// Sua perda mínima seria incorrida comprando no 2º ano em preço[1] = 15 e revendendo no 5º ano em preço[4] = 12.

const precos = [5, 10, 3];

//Manter um elemento do indice teso enquanto o outro é percorrido, só alterar esse elemento depois todo o resto foi comparado
//For dentro de for
//Não vale lucro (ou seja, diferença negativa)
//Extrair a menor diferença

let diferenca;
let menorDiferenca = 999999999999999999999999999999999999;


for (let indicePrecoDeCompra = 0; indicePrecoDeCompra < precos.length; indicePrecoDeCompra++) {

    for (let indicePrecoDeVenda = indicePrecoDeCompra + 1; indicePrecoDeVenda < precos.length; indicePrecoDeVenda++) {

        if (precos[indicePrecoDeCompra] > precos[indicePrecoDeVenda]) {

            diferenca = precos[indicePrecoDeCompra] - precos[indicePrecoDeVenda];

            if (diferenca < menorDiferenca) {

                menorDiferenca = diferenca;
            }
        };
    };
};


console.log(menorDiferenca);