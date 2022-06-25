const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {

        registroDeDeposito = {
            tipo: "Depósito",
            valor: valor
        };

        this.historicos.push(registroDeDeposito);
        this.saldo += valor;

        console.log(`Deposito de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`);


    },
    sacar: function (valor) {

        if (valor > this.saldo) {
            console.log(`Saldo insuficiente para o saque de: ${this.nome}`)
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${(valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}.`)

            registroDeSaque = {
                tipo: "Saque",
                valor: valor,
            };

            this.historicos.push(registroDeSaque);
        };



    },
    extrato: function () {

        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}`);
        console.log('Histórico:');

        for (let registro of this.historicos) {
            console.log(`${registro.tipo} de R$ ${(registro.valor / 100).toFixed(2)}`);
        }
    }
}

contaBancaria.depositar(100_00);
contaBancaria.sacar(500_00);
contaBancaria.sacar(50_00);
contaBancaria.extrato();