const usuarios = [
    {
        nome: "João",
        idade: 25,
        // maiorDeIdade:true
    },
    {
        nome: "Ana",
        idade: 18,
        // maiorDeIdade:true
    },
    {
        nome: "Beatriz",
        idade: 15,
        // maiorDeIdade:false
    },
    {
        nome: "Carlos",
        idade: 16,
        // maiorDeIdade:false
    },
    {
        nome: "Antonio",
        idade: 32,
        // maiorDeIdade:false
    },
]

let { maiorDeIdade, teste } = usuarios;


for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].idade >= 18) {

        usuarios[i].maiorDeIdade = true;


    } else {

        usuarios[i].maiorDeIdade = false;

    }

}

console.log(usuarios);

