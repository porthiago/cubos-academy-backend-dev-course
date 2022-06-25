const usuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];

usuarios.sort((a, b)=>{
    return a.id - b.id
});

console.log(usuarios);

usuarios.sort((a, b)=>{
    return b.id - a.id
});

console.log(usuarios); 

