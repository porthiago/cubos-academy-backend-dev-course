const numeros = [0, 1, 5,]

function retornarOitentaPorcentoCentral(numeros) {

    let teste = numeros.slice(Math.round(numeros.length * 0.1), Math.round(numeros.length - 1));
    console.log(teste);

}

retornarOitentaPorcentoCentral(numeros);