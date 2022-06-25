const express = require('express');
const app = express();

let tempoEmMinutos = 0;
let tempoEmSegundos = 0;
let contadorTemporal;
let cronometroAtivado = false;
let pausaAtivada = false;

let cronometro = () => {
    cronometroAtivado = true;
    pausaAtivada = false;

    contadorTemporal = setInterval(() => {
        tempoEmSegundos++

        if (tempoEmSegundos === 60) {
            tempoEmSegundos = 0;
            tempoEmMinutos++
        }
    }, 1000);
}

app.get('/', (req, res) => {
    res.send(`Tempo atual do cronômetro: ${tempoEmMinutos < 10 ? '0' + tempoEmMinutos : tempoEmMinutos} minutos e ${tempoEmSegundos < 10 ? '0' + tempoEmSegundos : tempoEmSegundos} segundos`);
});

app.get('/iniciar', (req, res) => {

    if (tempoEmSegundos === 0 && tempoEmMinutos === 0) {
        cronometro();
        cronometroAtivado = true;
    } else {
        clearInterval(contadorTemporal);
        tempoEmMinutos = 0
        tempoEmSegundos = 0
        cronometro();
        cronometroAtivado = true;
    }

    res.send('Cronômetro iniciado!');
});

app.get('/pausar', (req, res) => {
    pausaAtivada = true;
    cronometroAtivado = false;
    
    clearInterval(contadorTemporal);

    res.send('Cronômetro pausado!');

});

app.get('/continuar', (req, res) => {
    if (pausaAtivada && (tempoEmMinutos !== 0 || tempoEmSegundos !== 0)) {
        cronometro();
        cronometroAtivado = true;
    }

    res.send('Cronômetro continuando!');
});

app.get('/zerar', (req, res) => {
    clearInterval(contadorTemporal);
    tempoEmMinutos = 0
    tempoEmSegundos = 0

    if (cronometroAtivado) {
        cronometro();
    }

    if (pausaAtivada) {
        clearInterval(contadorTemporal);
    }

    res.send('Cronômetro zerado!');
});

app.listen(8000);