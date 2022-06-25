const letras = ["A", "a", "B", "C", "E"];

let somaLetraE = 0;
temLetraE = false;

for (let item of letras) {

    if (item === "E" || item === "e") {


        somaLetraE++;
        temLetraE = true;

    }

}

if (temLetraE) {

    console.log(`Foram encontradas ${somaLetraE} letras "E" ou "e".`);

} else {

    console.log('Nenhuma letra "E" ou "e" foi encontrada.');
}
