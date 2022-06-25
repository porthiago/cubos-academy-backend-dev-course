//Dados do Carrinho de Compras do Cliente
const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 30_00
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 50_00
        }
    ],

    imprimirResumoDoCarrinho: function () {

        console.log(`Cliente: ${this.nomeDoCliente}`);
        console.log(`Total de itens: ${this.calcularTotalDeItens()}`)
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)}`);

    },

    addProduto: function (produto) {

        if (produto.id === carrinho.produtos.id) {
            carrinho.produtos.qtd += produto.qtd
        } else {
            carrinho.produtos.push(produto);
        }

    },

    imprimirDetalhes: function () {

        console.log(`Cliente: ${this.nomeDoCliente} `);

        for (let produto of this.produtos) {

            console.log(`Item ${produto.id} - ${produto.nome} - ${produto.qtd} und - R$ ${(produto.qtd * produto.precoUnit / 100).toFixed(2)} `);

        }

        console.log(`Total de itens: ${this.calcularTotalDeItens()} `);
        console.log(`Total a pagar: R$ ${(this.calcularTotalAPagar() / 100).toFixed(2)} `);

    },

    calcularTotalDeItens: function () {
        let qtdTotalDeItens = 0;

        for (let produto of this.produtos) {

            qtdTotalDeItens += produto.qtd;

        }

        return qtdTotalDeItens;
    },

    calcularTotalAPagar: function () {

        let precoTotalDoProduto = 0;
        let valorTotalDaCompra = 0;

        for (let produto of this.produtos) {

            precoTotalDoProduto = produto.precoUnit * produto.qtd;
            valorTotalDaCompra += precoTotalDoProduto;

        }

        return valorTotalDaCompra;
    },

    calcularDesconto: function () {

        let descontoPrecoMaisBarato = 999999999999999999999999; // já é o desconto
        let Desconto10AcimaDe100 = 0;
        let descontoFinal = 0;

        if (this.calcularTotalDeItens() > 4) {

            for (let preco of this.produtos) {

                if (preco.precoUnit < descontoPrecoMaisBarato) {

                    descontoPrecoMaisBarato = preco.precoUnit;
                };
            };

        } else {
            descontoPrecoMaisBarato = 0;
        };

        if (this.calcularTotalAPagar() > 100_00) {

            Desconto10AcimaDe100 = (this.calcularTotalAPagar() * 10 / 100);

        };

        if (descontoPrecoMaisBarato > Desconto10AcimaDe100) {
            descontoFinal = descontoPrecoMaisBarato;
        } else {
            descontoFinal = Desconto10AcimaDe100;
        };

        console.log('R$ ' + (descontoFinal / 100).toFixed(2));
    }

};

//Adição de Produtos
const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
};
const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
};

carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.calcularDesconto();