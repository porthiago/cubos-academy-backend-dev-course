const pessoa = {

    nome: 'Malaquias',
    idade: 70,
    profissao: 'repórter',
    altura: 180

}

// function welcome(nome, idade, profissao, altura) {

//     nome = pessoa.nome;
//     idade = pessoa.idade;
//     profissao = pessoa.profissao;
//     altura = pessoa.altura;

//     if (idade < 18) {

//         console.log(`Olá, me chamo ${nome}, sou um jovem de ${idade} anos de idade, sou ${profissao} e tenho ${altura / 100 + '0'} m de altura`)

//     } else if (idade > 65) {

//         console.log(`Olá, me chamo ${nome}, sou um senhor de ${idade} anos de idade, sou ${profissao} e tenho ${altura / 100 + '0'} m de altura`)


//     } else {

//         console.log(`Olá, me chamo ${nome}, sou um adulto de ${idade} anos de idade, sou ${profissao} e tenho ${altura / 100 + '0'} m de altura`)
//     }


// }

function welcome() {

    // console.log(`Olá, me chamo ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos de idade, sou ${pessoa.profissao} e tenho ${pessoa.altura / 100 + '0'} m de altura`)

    if (pessoa.idade < 18) {

        console.log(`Olá, me chamo ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos de idade, sou ${pessoa.profissao} e tenho ${pessoa.altura / 100 + '0'} m de altura`)

    } else if (pessoa.idade > 65) {

        console.log(`Olá, me chamo ${pessoa.nome}, sou um senhor de ${pessoa.idade} anos de idade, sou ${pessoa.profissao} e tenho ${pessoa.altura / 100 + '0'} m de altura`)


    } else {

        console.log(`Olá, me chamo ${pessoa.nome}, sou um adulto de ${pessoa.idade} anos de idade, sou ${pessoa.profissao} e tenho ${pessoa.altura / 100 + '0'} m de altura`)
    }


}

welcome();

