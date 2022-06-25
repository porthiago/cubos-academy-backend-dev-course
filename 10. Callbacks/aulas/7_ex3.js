const arrayDeObjetos = [
    {
        nome: 'Thiago',
        stack: 'Back'

    },
    {
        nome: 'Pedro',
        stack: 'Front'

    },
    {
        nome: 'Maria',
        stack: 'Front'

    },
    {
        nome: 'Josefina',
        stack: 'Front'

    }
];



const filtrarStack = (arrayDeObjetos, callback) => {
    let lista = [];

    for (let objeto of arrayDeObjetos) {
        if (callback(objeto.stack)) {
            lista.push(objeto);
        }
    }

     console.log(lista);
}

filtrarStack (arrayDeObjetos, (objeto) => {
     if(objeto.stack === 'Front') {
         return true;
     };
})

