const filaDeDentro = ["Jose", "Maria"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

//O limite de elementos para a filaDeDentro deverá ser 5. 
//Portanto, enquanto houverem elementos na filaDeFora e espaços disponíveis dentro do limite na filaDeDentro, 
//deveremos passar o primeiro elemento da filaDeFora para a última posição da filaDeDentro.


while (filaDeDentro.length < 5) {


    filaDeDentro.push(filaDeFora[0]);
    filaDeFora.shift();


}


console.log(filaDeDentro);
console.log(filaDeFora);