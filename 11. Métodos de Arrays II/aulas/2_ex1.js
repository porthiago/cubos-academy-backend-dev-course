const usuarios = [
    {
        nome: 'Thiago',
        idade: 35
    },
    {
        nome: 'Xu',
        idade: 30
    },
    {
        nome: 'Guido',
        idade: 17
    }
]

// const saoMaioresDeIdade = usuarios.every((usuario)=>{
//    return usuario.idade >= 18
// })

// saoMaioresDeIdade ? console.log('Festa Liberada') : console.log('Possui menor de idade')

const fiscalizarFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade >= 18;
    });

    if (resultado) {
        console.log('Festa Liberada')
    } else {
        console.log('Possui menor de idade')
    }
}

fiscalizarFesta(usuarios)