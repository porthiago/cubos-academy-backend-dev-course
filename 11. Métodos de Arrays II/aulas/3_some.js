const nomes = ['João', 'Maria', 'José', 'Rodrigo'];

const resultado = nomes.some((nome)=> {
    return nome === '';
})

console.log(resultado)