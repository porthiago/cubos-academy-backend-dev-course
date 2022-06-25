const calcularIMC = (altura, peso, callback) => {
    const imc = peso / (altura * altura);
    let faixa;

    if (imc < 18) {
       faixa = 'desnutrição'
    } else if (imc > 25) {
        faixa = 'sobrepeso'
    } else {
        faixa = 'normal'
    }


    callback(imc, faixa);
    
}


calcularIMC(1.87, 101, (imc, faixa) => {
    console.log(`IMC: ${imc.toFixed(2)}`)
    console.log(`Faixa Correspondente: ${faixa}`)
 
})
