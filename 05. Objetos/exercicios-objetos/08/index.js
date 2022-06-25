const usuarios = [
    {
        nome: "João",
        pets: [],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

for (let usuario of usuarios) {

    let qtdPets = usuario.pets.length;

    if (qtdPets === 0) {

        console.log(`Sou ${usuario.nome} e não tenho pets.`)

    } else if (qtdPets === 1) {

        console.log(`Sou ${usuario.nome} e tenho 1 pet.`)

    } else {

        console.log(`Sou ${usuario.nome} e tenho ${qtdPets} pets.`)

    }

}