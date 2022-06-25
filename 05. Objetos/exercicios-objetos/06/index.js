const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

const jovens = [];

const adultos = [];

for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].idade < 18) {

        jovens.push(usuarios[i].nome);
        // console.log(jovens);


    } else {

        adultos.push(usuarios[i].nome);
        // console.log(adultos);
    }
}


console.log(`Os jovens são: ${jovens}`);
console.log(`Os adultos são: ${adultos}`);


