let {alunos, idAluno} = require('../bancodedados/dados');
const cursos = require('../bancodedados/dados_cursos');

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
}

const cadastrarAluno = (req, res) => {
   let {nome, sobrenome, idade, curso} = req.body

   if (!nome || nome.trim() === '') {
       return res.status(400).json({mensagem:'O campo nome é obrigatório'})
   }

   if (!sobrenome || sobrenome.trim() === '') {
    return res.status(400).json({mensagem:'O campo sobrenome é obrigatório'})
}

if (!idade) {
    return res.status(400).json({mensagem:'O campo idade é obrigatório'})
} else if (idade < 18) {
        return res.status(400).json({mensagem:'Não é permitido cadastro de pessoas menores de 18 anos'})
    }

if (!curso || curso.trim() === '') {
   return res.status(400).json({mensagem:'O campo curso é obrigatório'})
} 

if (!cursos.includes(curso)) {
    return res.status(400).json({mensagem:'Curso Invalido! É necessário registrar um curso válido.'})
}    

   const aluno = {
       id: idAluno++,
       nome,
       sobrenome,
       idade,
       curso
   }

   alunos.push(aluno);

   return res.status(201).json(aluno);
}

const obterAluno = (req, res) => {
    const { id } = req.params;
    let aluno;

    if (isNaN(Number(id))) {
        return res.status(400).json({mensagem: "O id não um é número válido"});

    } else {
            aluno = alunos.find((aluno)=>{
            return aluno.id === Number(id);
        })

    }
 
        if (!aluno) {
            return res.status(404).json({mensagem: "Aluno Não Encontrado"});
        }

    return res.status(200).json(aluno);
}

const excluirAluno = (req, res) => {
    const { id } = req.params;

    let indexAlunoRemovido;
    let alunoRemovido;

    if (isNaN(Number(id))) {
        return res.status(400).json({mensagem: "O id não um é número válido"});

    } else {
            
        indexAlunoRemovido = alunos.findIndex((aluno)=>{
            return aluno.id === Number(id); 
        });

    }
 
        if (indexAlunoRemovido === -1) {
            return res.status(404).json({mensagem: "Aluno Não Encontrado"});
        } else {
            alunoRemovido = alunos.splice(indexAlunoRemovido,1);
        }

    return res.status(200).json(alunoRemovido);

}

const substituirAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    let alunoSubstituir = alunos.find((aluno)=>{
        return aluno.id === Number(id);
    })
   
    if (alunoSubstituir) {

        alunoSubstituir.nome = nome.trim() !== '' ? nome :  res.status(400).json({mensagem:'O campo nome é obrigatório'});
        alunoSubstituir.sobrenome = sobrenome.trim() !== '' ? sobrenome : res.status(400).json({mensagem:'O campo sobrenome é obrigatório'});
        alunoSubstituir.idade = idade >= 18 ? idade : res.status(400).json({mensagem:'Não é permitido cadastro de pessoas menores de 18 anos'});
        alunoSubstituir.curso = cursos.includes(curso) ? curso : res.status(400).json({mensagem:'Curso Invalido! É necessário registrar um curso válido.'});

        return res.status(200).json({mensagem: 'Aluno substituído.'});
    
    } else {
        return res.status(400).json({mensagem:'Não existe aluno para o ID informado.'});
    }
}

const alterarDadosAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;

    let alunoAlterarDados = alunos.find((aluno)=>{
        return aluno.id === Number(id);
    })
   
    if (alunoAlterarDados) {

        alunoAlterarDados.nome = nome.trim() !== '' ? nome :  res.status(400).json({mensagem:'O campo nome é obrigatório'});
        alunoAlterarDados.sobrenome = sobrenome.trim() !== '' ? sobrenome : res.status(400).json({mensagem:'O campo sobrenome é obrigatório'});
        alunoAlterarDados.idade = idade >= 18 ? idade : res.status(400).json({mensagem:'Não é permitido cadastro de pessoas menores de 18 anos'});
        alunoAlterarDados.curso = cursos.includes(curso) ? curso : res.status(400).json({mensagem:'Curso Invalido! É necessário registrar um curso válido.'});

        return res.status(200).json({mensagem: 'Dados alterados com sucesso.'});
    
    } else {
        return res.status(400).json({mensagem:'Não existe aluno para o ID informado.'});
    }
}

module.exports = {
    listarAlunos,
    cadastrarAluno,
    obterAluno,
    excluirAluno,
    substituirAluno,
    alterarDadosAluno
}