
function apresentar(pessoa) {

    const faixaEtaria = verificarFaixaEtaria(pessoa.idade);

    console.log(`Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria} de ${pessoa.idade} anos e sou ${pessoa.profissao}(a)`);

}

function verificarFaixaEtaria(idade) {

    if (idade <= 21) {

        return 'jovem';

    } else if (idade > 66) {

        return 'idoso(a)';

    } else {

        return 'adulto(a)'

    }

};

const pessoa1 = {
    nome: 'José',
    idade: 20,
    profissao: 'professor'
};

const pessoa2 = {
    nome: 'Pedro',
    idade: 40,
    profissao: 'pedreiro'
};

const pessoa3 = {
    nome: 'Maria',
    idade: 80,
    profissao: 'admnistrador'
};


apresentar(pessoa1);
apresentar(pessoa2);
apresentar(pessoa3);