const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
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

const associarPetAoDono = (pet) => {

    let encontrouPet;

    for (let usuario of usuarios) {

        encontrouPet = usuario.pets.includes(pet);

        if (encontrouPet) {

            return `O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`;

        };
    };

    return `Que pena ${pet}, não encontramos seu dono(a)`;
};

console.log(associarPetAoDono('Totó'));
console.log(associarPetAoDono('Salsicha'));