let montante;
let capital;
let taxaDeJuros;
let tempoEmMeses;

capital = 60_000;
montante = 90_000;
tempoEmMeses = 24;

taxaDeJuros = ((montante / capital) ** (1 / tempoEmMeses) - 1) * 100;

console.log(`O seu financiamento de ${capital} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(2)}%, pois após ${tempoEmMeses} meses você teve que pagar ${montante} reais.`)
