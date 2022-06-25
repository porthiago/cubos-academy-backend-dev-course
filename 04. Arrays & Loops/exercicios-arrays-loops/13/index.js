const disjuntores = [true, false, true, false, true, true, false, false, true, false];

let indice = 0;

for (let item of disjuntores) {

    if (item) {

        console.log(indice);
    }

    indice++;

}