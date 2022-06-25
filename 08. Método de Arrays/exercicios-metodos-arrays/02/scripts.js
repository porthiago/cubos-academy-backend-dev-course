const nomes = ['Juninho', 'Vidal', 'Guido', 'Pedro', 'Maria', 'José', 'Mustafá', 'Epaminondas'];
const tamanhoDoGrupo = 3;

function dividirGrupo(nomes, tamanhoDoGrupo) {

    let grupo;
    let numeroDoGrupo = 1;

    if (nomes.length > tamanhoDoGrupo) {

        for (let i = 0; i < nomes.length; i += tamanhoDoGrupo) {

            grupo = nomes.slice(i, i + tamanhoDoGrupo).join(', ');
            console.log('Grupo' + ' ' + numeroDoGrupo + ': ' + grupo);
            numeroDoGrupo++
        };

    } else {

        grupo = nomes.join(', ');
        console.log('Grupo' + ' ' + numeroDoGrupo + ': ' + grupo);
    };

}

dividirGrupo(nomes, tamanhoDoGrupo);