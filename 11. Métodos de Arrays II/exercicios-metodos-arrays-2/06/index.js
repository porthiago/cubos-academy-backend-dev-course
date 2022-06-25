const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
    "Irecê"
];

const cidadesFiltradas = cidades.filter((cidade)=>{
    return cidade.length <= 8;
});

console.log(cidadesFiltradas.join(', '));