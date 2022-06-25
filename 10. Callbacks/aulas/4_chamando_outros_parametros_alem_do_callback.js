const somar = (primeiroNumero, segundoNumero, callback) => {
        const resultado = primeiroNumero + segundoNumero;
        callback(resultado);
}

somar(10,15, (resultado)=>{
    console.log(`Resultado:${resultado}`)
})