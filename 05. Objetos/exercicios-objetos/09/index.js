const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]

for (let i = 0; i < participantes.length; i++) {

    let posicao = i + 1; //compreendi que estava pedindo a posição como se fosse uma lista de pessoas, ou seja, começando por 1, e não o indice do objeto (que começa por 0)

    if (participantes[i].nome === 'Carlos') {

        console.log(`Galera... O Carlos está na posição ${posicao}, corre lá!`);

    }

}