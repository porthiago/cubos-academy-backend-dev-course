const numeros = [54, 22, 14, 87, 10, 284];

indice = 0;
temNumero10 = false;

while (indice <= numeros.length - 1) {

    if (numeros[indice] === 10) {

        console.log(indice);
        temNumero10 = true;
    }

    indice++

}

if (!temNumero10) {

    console.log(-1);
}

