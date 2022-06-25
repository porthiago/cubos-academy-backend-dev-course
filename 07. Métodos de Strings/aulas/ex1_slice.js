const cidade = 'Aracajú-SE';

let estado;

const indexTraco = cidade.indexOf('-');

estado = cidade.slice(indexTraco + 1);

console.log(estado);