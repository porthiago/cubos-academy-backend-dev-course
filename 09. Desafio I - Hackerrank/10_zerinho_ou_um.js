// Refatorar

const jogadores = [
    {
        "nome": "Herman",
        "jogada": 0
    },
    {
        "nome": "Rhodes",
        "jogada": 0
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 0
    },
    {
        "nome": "Saundra",
        "jogada": 0
    },
    {
        "nome": "Klein",
        "jogada": 0
    }

]

let turmaDo0 = [];
let turmaDo1 = [];

// for (let i = 0; i < jogadores.length; i++) {

//     if (jogadores[i].jogada === 0) {
//         turmaDo0.push(jogadores[i].nome);
//     } else {
//         turmaDo1.push(jogadores[i].nome);
//     }
// }

console.log(jogadores.length)

for (let n in jogadores) {

    console.log(n)
}

if (turmaDo0.length === 1) {
    console.log(turmaDo0.toString());
} else if (turmaDo1.length === 1) {
    console.log(turmaDo1.toString());
} else {
    console.log('NINGUEM')
}