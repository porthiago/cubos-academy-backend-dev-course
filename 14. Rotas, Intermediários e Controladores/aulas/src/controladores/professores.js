const professores = require('../bancodeados');


const filtrarProfessores = (req, res)=>{
    const {stack} = req.query
    let resultado = professores;

    console.log('cheguei no controlador de listagem de professor')
    if (stack) {
        resultado = professores.filter((professor)=>{
            return professor.stack === stack
        });
    }
    res.send(resultado);
}

const encontrarUmProfessor = (req, res)=>{
    console.log('rota para encontrar um professor');
    const professorEncontrado = professores.find((professor)=>{
        return professor.id === Number(req.params.id);
    })
    res.send(professorEncontrado);
}

module.exports = {filtrarProfessores, encontrarUmProfessor}