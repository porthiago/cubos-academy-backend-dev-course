const array = [4, 1, 0, 3, 2, 8];

const resultado = array.reduce((acumulador, elementoAtual, indice, array)=>{
    return acumulador
}, 10 + 2)

console.log(resultado);