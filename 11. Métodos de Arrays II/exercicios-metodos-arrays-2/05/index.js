const usuarios = [{
        nome: "André",
        idade: 29,
        habilitado: true,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const usuariosFiltrados = usuarios.filter((usuario) => {
    return usuario.idade > 18 && usuario.idade < 65;
});

const habilitados = usuariosFiltrados.every((usuario) => {
    return usuario.habilitado;
});

habilitados ? console.log('todos passaram no teste') : console.log('todos precisam estar habilitados');