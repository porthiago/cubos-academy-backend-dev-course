const nota = 0.5;

if (nota >= 9 && nota <= 10) {

    console.log("O estudante obteve conceito A")

} else if (nota < 9 && nota >= 8) {

    console.log("O estudante obteve conceito B")

} else if (nota < 8 && nota >= 6) {

    console.log("O estudante obteve conceito C")

} else if (nota < 6 && nota >= 4) {

    console.log("O estudante obteve conceito D")

} else if (nota < 4 && nota >= 0) {

    console.log("O estudante obteve conceito E")

} else {

    console.log("Nota inválida")

}
