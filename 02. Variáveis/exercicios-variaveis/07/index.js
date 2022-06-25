let pessoasInfectadas;
let pessoasInicialmenteInfectadas;
let potencialdeInfeccao;
let tempo;

pessoasInicialmenteInfectadas = 1000;
potencialdeInfeccao = 4;
tempo = 100;

pessoasInfectadas = pessoasInicialmenteInfectadas * potencialdeInfeccao ** (tempo / 7);

console.log(pessoasInfectadas);

