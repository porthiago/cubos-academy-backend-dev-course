const jogadores = require('../bancodedados');

let i = 0;

const exibirJogador = (req, res) => {
    if (i === jogadores.length) {
        i = 0

        if (jogadores[i] !== undefined) {
            res.send(`É a vez de ${jogadores[i]} jogar!`);
            i++
        } else {
            res.send('Todos os jogadores foram removidos');   
        }
    } else if((jogadores.length-1) < 0) {
        res.send('Todos os jogadores foram removidos');
    } else if (jogadores.length !== 0) {
        res.send(`É a vez de ${jogadores[i]} jogar!`);
        i++
    }
}

const removerJogador = (req, res) => {
    const { indice } = req.query;

    if (indice < jogadores.length) {
    let jogadorRemovido = jogadores.splice(indice, 1);
    res.send(`Jogador(a) ${ jogadorRemovido } foi removido(a).`);
        
} else{
    res.send(`Não existe jogador no índice informado ${indice} para ser removido.`)
}

}

const adicionarJogador = (req, res) => {
    const {nome, indice} = req.query
    const primeiraLetra = nome[0].toUpperCase();
    const restoPalavra = nome.slice(1);
    let nomeFormatado = primeiraLetra + restoPalavra

    if (indice < jogadores.length) {
        jogadores.splice(indice,0,nomeFormatado)
        res.send(`Jogador(a) ${nomeFormatado} foi adicionado(a) no indice ${indice}`);
    } else if(!indice) {
        jogadores.push(nomeFormatado);
        res.send(`Jogador(a) ${nomeFormatado} foi adicionado(a) no indice ${jogadores.length-1}`);
    } else {
        res.send(`O índice informado ${indice} não existe no array. Novo jogador não adicionado.`)
    }
}
    
module.exports = {
    exibirJogador,
    removerJogador,
    adicionarJogador
}