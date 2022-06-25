// (feito) As propriedades deverão ser um boolean chamado ligado e um number chamado velocidade.

const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado) {
            return 'Este carro já está ligado.';
        } else {
            this.ligado = true;
            return `Carro ligado. Velocidade: ${this.velocidade}`;
        }

    },
    desligar: function () {
        if (!this.ligado) {
            return 'Este carro já está desligado.';
        } else {
            this.ligado = false;
            this.velocidade = 0;
            return `Carro desligado. Velocidade ${this.velocidade}`;
        }
    },
    acelerar: function () {
        if (!this.ligado) {
            return `Não é possível acelerar um carro desligado.`;
        } else {
            this.velocidade += 10;
            return `Carro ligado. Velocidade: ${this.velocidade}`;
        }
    },
    desacelerar: function () {
        if (!this.ligado) {
            return 'Não é possível desacelerar um carro desligado.';
        } else {
            this.velocidade -= 10;
            return `Carro ligado. Velocidade: ${this.velocidade}`;
        }
    }

}

console.log(carro.desligar());
console.log(carro.ligar());
console.log(carro.ligar());
console.log(carro.acelerar());
console.log(carro.acelerar());
console.log(carro.desacelerar());
console.log(carro.desligar());
console.log(carro.acelerar());
console.log(carro.desacelerar());