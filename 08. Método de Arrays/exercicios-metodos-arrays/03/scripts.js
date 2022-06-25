const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

const determininarCarrosPorPosicao = (carros, posicao) => {

    let carrosRecorte = carros.slice(posicao, posicao + 3);

    console.log(carrosRecorte.join(" - "));

};

determininarCarrosPorPosicao(nomes, posicao);