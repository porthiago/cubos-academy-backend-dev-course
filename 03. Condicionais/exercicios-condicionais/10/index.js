const caractere = "c";

if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {

    console.log("Vogal Maíuscula")

} else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {

    console.log("Vogal Minúscula");

} else if (caractere >= 0 && caractere <= 9) {

    console.log("Número");

} else {

    console.log("Consoante")

}
