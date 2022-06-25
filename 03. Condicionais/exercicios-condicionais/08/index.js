const idade = 66;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (idade < 12 || possuiPatologia || altura < 100 || idade > 65) {

    console.log("ACESSO NEGADO");

} else {

    if (idade < 18 || ehEstudante) {

        console.log("10 reais");

    } else {

        console.log("20 reais");
    }

}

