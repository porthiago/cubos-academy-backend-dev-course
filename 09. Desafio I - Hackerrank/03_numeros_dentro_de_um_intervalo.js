const numeros = [10, 5, 20]

const verificarNumeros = (numero, limiteInferior, limiteSuperior) => {

    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log('PERTENCE');
    } else {
        console.log('NAO PERTENCE');
    }
};

verificarNumeros(...numeros);