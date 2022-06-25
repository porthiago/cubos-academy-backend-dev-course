const nomes = ["Ana", "Joana", "Carlos", "amanda", "amalia", "Agnes", "Armando"];

let nomesComLetraA = [];

for (let item of nomes) {

    if (item[0] === 'A' || item[0] === 'a') {

        nomesComLetraA.push(item);

    }

}

console.log(nomesComLetraA);