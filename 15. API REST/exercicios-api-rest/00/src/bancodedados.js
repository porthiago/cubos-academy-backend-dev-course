const bancodedados = {
    identificadorInstrutor:3,
    identificadorAula:2,
    instrutores: [
        {
            id: 1,
            nome: 'Guido',
            email: 'guido@email.com',
            status: true
        },
        {
            id: 2,
            nome: 'Dani',
            email: 'dani@email.com',
            status: true
        }
    ],
    aulas: [
        {
            id_aula: 1,
            id_instrutor: 2,
            nome_do_instrutor: 'Dani',
            titulo: 'HTML e CSS',
            descricao: 'Aprender HTML e CSS'
        }
    ]
}

module.exports = bancodedados;