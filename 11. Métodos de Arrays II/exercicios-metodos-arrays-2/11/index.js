const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
    "amelia",
    "Amarildo",
    "Armando"
];

const nomesFiltrados = nomes.filter((nome)=>{
    return nome[0] === 'a' || nome[0] === 'A';
});

console.log(nomesFiltrados);