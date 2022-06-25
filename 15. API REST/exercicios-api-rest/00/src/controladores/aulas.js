let { identificadorAula, instrutores, aulas } = require('../bancodedados');

const cadatrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'O instrutor não existe' });
    }

    const aula = {
        id_aula: identificadorAula++,
        id_instrutor: Number(idInstrutor),
        nome_do_instrutor: instrutores[idInstrutor-1].nome,
        titulo,
        descricao
    }

    aulas.push(aula);

    return res.status(201).json(aula);
}

const exibirAulas = (req, res) => {
    return res.status(200).json(aulas)
}

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula)=>{
        return aula.id_aula === Number(id);
    })

    if (!aula) {
        return res.status(404).json({mensagem: 'aula não encontrada.'})
    }

    return res.status(200).json(aula);
}

const exibirAulasDeUmInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const aulasFiltradas = aulas.filter((aula) => {
        return aula.id_instrutor === Number(idInstrutor);
    });

    if (aulasFiltradas.length === 0) {
        return res.status(404).json({ mensagem: 'Não existem aulas cadastradas para esse instrutor' });
    }

    return res.status(200).json(aulasFiltradas);
}

module.exports = {
    cadatrarAula,
    exibirAulas,
    obterAula,
    exibirAulasDeUmInstrutor
}