const users = [
    { nome: 'Guido', sobrenome: 'Cerqueira', idade: 31 },
    { nome: 'Daniel', sobrenome: 'Lopes', idade: 29 },
    { nome: 'Vitor', sobrenome: 'Vidal', idade: 28 },
];

const setUsersFullName = users.map((userObject)=> {
    return {
        fullName: `${userObject.nome} ${userObject.sobrenome}`, 
        idade: userObject.idade

    }
})

console.log(setUsersFullName)