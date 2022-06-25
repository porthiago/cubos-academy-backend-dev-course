const disparos = [0, 50, 90, 80, 100, 80, 40];

// if disparos[i] ou disparo of disparos === 70, countDisparo>70++
// if countDisparo>70 >= 3 (print: countDisparo>3), else (eliminado)

let countDisparoMaiorQue70 = 0;

for (let disparo of disparos) {

    if (disparo >= 70) {

        countDisparoMaiorQue70++;

    }
};

if (countDisparoMaiorQue70 >= 3) {

    console.log(countDisparoMaiorQue70);
} else {
    console.log("ELIMINADO");
}


