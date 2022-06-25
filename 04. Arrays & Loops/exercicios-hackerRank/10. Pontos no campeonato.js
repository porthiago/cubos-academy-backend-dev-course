const resultados = [
    "V",
    "E",
    "V",
    "E"
]

let count = 0;

for (let resultado of resultados) {

    if (resultado === 'V') {
        count += 3
    } else if (resultado === 'E') {
        count++
    };

};

console.log(count);