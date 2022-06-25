// function saudacao(teste) {
//     const olaNome = 'Olá, Thiago';
//     teste(olaNome);
// }

// saudacao(function (olaNome) {

//     if (olaNome = 'Olá, Guido') {
//         console.log(olaNome);
//     } else {
//         'Não é o Guido'
//     }

// });

const saudacao = (callback) => {
    const nome = 'Guido';
    callback(nome);
}

// saudacao(function (algumaCoisa) {

//     console.log(`Bem vindo, ${algumaCoisa}`);

// });

// const mensagem = nome => {
//     console.log(`Bem vindo, ${nome}`);
// }

saudacao(nome => {
    console.log(`Bem vindo, ${nome}`);
})