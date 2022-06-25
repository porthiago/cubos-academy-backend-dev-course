// VER COMO SIMPLIFICAR OS FOR'S

const precos = [50, 150, 200, 300, 400, 600, 700];

let soma = 0;
let precoMenor = precos[0];

for (let preco of precos) {

    soma += preco;

    if (preco < precoMenor) {

        precoMenor = preco;

    }

}


if (precos.length >= 5) {

    console.log(soma - precoMenor);

} else {

    console.log(soma);

}