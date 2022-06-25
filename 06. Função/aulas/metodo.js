
const pessoa1 = {
    nome: 'José',
    idade: 20,
    profissao: 'professor',
    apresentar: function () {

        const faixaEtaria = this.verificarFaixaEtaria(this.idade);

        console.log(`Meu nome é ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}(a)`);

    },
    verificarFaixaEtaria: function () {

        if (this.idade <= 21) {

            return 'jovem';

        } else if (this.idade > 66) {

            return 'idoso(a)';

        } else {

            return 'adulto(a)';

        };

    }
};

pessoa1.apresentar();
pessoa1.verificarFaixaEtaria();