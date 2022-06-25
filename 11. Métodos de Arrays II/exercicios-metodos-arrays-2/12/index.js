const pessoas = [{
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const programadoresMaioresQueVinte = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Programador' && pessoa.idade > 20;
});

const jornalistasMaioresQueTrinta = pessoas.filter((pessoa) => {
    return pessoa.profissao === 'Jornalista' && pessoa.idade > 30;
});

const profissionaisJovens = pessoas.filter((pessoa) => {
    return pessoa.idade <= 29;
});

console.log('Programadores Com Mais de 20 Anos\n', programadoresMaioresQueVinte);
console.log('Jornalistas Com Mais de 30 Anos\n', jornalistasMaioresQueTrinta);
console.log('Profissionais Jovens\n', profissionaisJovens);