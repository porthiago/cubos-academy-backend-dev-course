let montante;
let capital;
let taxaDeJuros;
let periodo;

capital = 1000;
taxaDeJuros = 0.125;
periodo = 5;

montante = capital * ((1 + taxaDeJuros) ** periodo);

console.log(montante);