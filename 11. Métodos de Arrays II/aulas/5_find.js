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

const resultado = usuarios.find((usuario)=>{
    return usuario.nome === 'Guido';
})

console.log(resultado)