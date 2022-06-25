const aposentada = true;
const portadoraDeDoenca = false;
const totalDeRendimentos = 4_000_000; //emCentavos

if (aposentada || portadoraDeDoenca) {

    console.log("ISENTA");

} else if (totalDeRendimentos <= 2_855_970) {

    console.log("VAZA LEAO! JA TA DIFICIL SEM VOCE");

} else {

    console.log("PEGA LEAO");

}