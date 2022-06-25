const pessoa1 = {
    nome: 'José',
    idade: 20,
    profissao: 'professor'
};

apresentar(pessoa1);

const pessoa2 = {
    nome: 'Pedro',
    idade: 50,
    profissao: 'pedreiro'
};

apresentar(pessoa2);

const pessoa3 = {
    nome: 'Maria',
    idade: 80,
    profissao: 'admnistrador(a)'
};

apresentar(pessoa3);

function apresentar(pessoa) {


    if (pessoa.idade <= 21) {

        console.log(`Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}`);

    } else if (pessoa.idade > 66) {

        console.log(`Meu nome é ${pessoa.nome}, sou um(a) senhor(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}`);

    } else {

        console.log(`Meu nome é ${pessoa.nome}, sou uma pessoa adulta de ${pessoa.idade} anos e sou ${pessoa.profissao}`);

    }

}