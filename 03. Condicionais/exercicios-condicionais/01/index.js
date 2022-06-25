const jogada1 = "tesoura"
const jogada2 = "tesoura"

if (jogada1 === "pedra" && jogada2 === "papel") {

    console.log("papel");

}

if (jogada1 === "pedra" && jogada2 === "tesoura") {


    console.log("pedra");

}

if (jogada1 === "tesoura" && jogada2 === "pedra") {

    console.log("pedra");

}

if (jogada1 === "tesoura" && jogada2 === "papel") {

    console.log("tesoura");

}

if (jogada1 === "papel" && jogada2 === "pedra") {

    console.log("papel");

}

if (jogada1 === "papel" && jogada2 === "tesoura") {

    console.log("tesoura");

}

if (jogada1 === jogada2) {

    console.log("empate")

}