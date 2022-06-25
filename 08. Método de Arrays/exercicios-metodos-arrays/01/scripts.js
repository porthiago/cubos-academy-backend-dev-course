const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];

function manipularFrutas(cestaDeFrutas, novaFruta) {

    cestaDeFrutas.reverse();
    console.log(cestaDeFrutas.join(', '));

    cestaDeFrutas.reverse();
    cestaDeFrutas.pop();
    cestaDeFrutas.shift()
    cestaDeFrutas.push(novaFruta.join(', '))
    console.log(cestaDeFrutas.join(', '))

}

manipularFrutas(frutas, ['Melão', 'Abacate', 'Pinha']);

