const carros = require('../bancodedados');

const listarCarros = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        });
    }
    
    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        });
    
    }
    
    res.send(resultado);

}

const encontrarCarro = (req, res) => {
    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(req.params.id);
    });

    if (carroEncontrado) {
        res.send(carroEncontrado); 
    } else {
        res.send('Carro não encontrado');
    }
}

module.exports = {
    listarCarros,
    encontrarCarro
}