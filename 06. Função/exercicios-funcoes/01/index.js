const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};

function corrigirProva(prova) {

    let acertos = 0;
    let notaFinal = 0;

    for (let i = 0; i < prova.questoes.length; i++) {

        if (prova.questoes[i].resposta === prova.questoes[i].correta) {

            acertos++

        }

        notaFinal = (prova.valor / prova.questoes.length) * acertos;

    }

    console.log(`O aluno(a) ${prova.aluno} acertou ${acertos} questões e obteve nota ${notaFinal}`);


}

corrigirProva(prova);