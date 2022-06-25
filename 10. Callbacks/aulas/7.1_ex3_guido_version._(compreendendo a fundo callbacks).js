const professores = [{
        nome: 'Guido',
        stack: 'Back'
    },
    {
        nome: 'Vidal',
        stack: 'Back'
    },
    {
        nome: 'Dani',
        stack: 'Front'
    },
    {
        nome: 'Ruli',
        stack: 'Front'
    }
];

// const buscador = (array, callback) => {
//     const lista = [];
//     let indice = 0;

//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//             lista[indice] = array[i];
//             indice++;
//         }
//     }

//     return lista;
// }

// const buscador = (array, callback) => {
//     const lista = [];

//     for (let i = 0; i < array.length; i++) {
//         if (callback(array[i])) {
//              lista.push(array[i]);
    
//         }
//     }

//     return lista;
// }

const buscador = (array, retorno) => {
    const lista = [];

    for (let objeto of array) {
        if (retorno(objeto.stack)) {
             lista.push(objeto);
    
        }
    }

     console.log(lista);
}

const filtrarStack = (stack) => {
    return stack === 'Back';
    
}

buscador(professores,filtrarStack);

