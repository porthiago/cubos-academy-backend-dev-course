//Refatorar se possível

const min = 10;
const km = 10.95;

let valorTotal = 0;

switch (true) {
    case min > 20 && km > 10:
        valorTotal = ((20 * 50) + (10 * 70)) + (((min - 20) * 30) + ((km - 10) * 50));
        console.log(Math.floor(valorTotal));
        break;
    case min <= 20 && km > 10:
        valorTotal = ((min * 50) + (10 * 70)) + ((km - 10) * 50);
        console.log(Math.floor(valorTotal));
        break;
    case min > 20 && km <= 10:
        valorTotal = ((20 * 50) + (km * 70)) + ((min - 20) * 30);
        console.log(Math.floor(valorTotal));
        break;
    default:
        valorTotal = (min * 50) + (km * 70);
        console.log(Math.floor(valorTotal));
}

