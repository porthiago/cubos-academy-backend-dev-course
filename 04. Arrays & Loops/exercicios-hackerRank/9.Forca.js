const palpite = 'a';
const palavra = 'abelha'

let count = 0;

for (let letra of palavra) {

    if (letra === palpite) {

        count++
    };
};

console.log(count);

//quantidade de vezes que uma letra aparece numa palavra