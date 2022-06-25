const pessoas = ['1.João', 'Carlos', '4.ana', '2.pedro'];

pessoas.sort((a, b) => {
    return a.localeCompare(b);
})

console.log(pessoas)