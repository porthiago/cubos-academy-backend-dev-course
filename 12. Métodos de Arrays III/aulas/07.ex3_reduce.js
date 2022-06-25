const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 50 },
];

const maiorIdade = usuarios.reduce((acumulador,elementoAtual)=>{
    let maior = acumulador;

    if(elementoAtual.idade > maior.idade) {
        maior = elementoAtual;
    }

    return maior;
})

console.log(maiorIdade)