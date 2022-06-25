const convidados = require('../dados_convidados')

const listarConvidados = (req, res) => {
    const { nome } = req.query;
  
    let nomeInformadoFoiConvidado;

    if (nome) {
        nomeInformadoFoiConvidado = convidados.some((convidado) => {
            return convidado === nome;
        }) 

        if (nomeInformadoFoiConvidado) {
            return res.status(200).json({mensagem:"Convidado presente."})
        } else {
            return res.status(200).json({mensagem:"O convidado buscado não está presente na lista."})
        }

    } else {
        return res.status(200).json(convidados)
    }
}

const adicionarConvidado = (req, res) => {
    const { nome } = req.body;

    if (!convidados.includes(nome)) {
        convidados.push(nome);

        return res.status(201).json({mensagem: "Convidado adicionado."});

    } else {
        return res.status(400).json({mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queira adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também."})
    }
}

const removerConvidado = (req, res) => {
    const { nome } = req.params;

    const indexConvidadoRemover = convidados.findIndex((convidado)=>{
        return convidado === nome
    });

    if (indexConvidadoRemover === -1) {
        return res.status(400).json({mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido."})
    } else {
        convidados.splice(indexConvidadoRemover,1);
        return res.status(200).json({mensagem: "Convidado removido."})
    }
}

module.exports = {
    listarConvidados,
    adicionarConvidado,
    removerConvidado
};