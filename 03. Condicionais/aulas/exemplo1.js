let temIngresso;
let censura;
let idade;

temIngresso = true;
censura = 16;
idade = 15;

if (temIngresso) {
    if (idade >= censura) {
        console.log("Pode entrar.")
    } else {
        console.log("Barrada por Censura!")
    }
} else {
    console.log("Barrada por falta de ingresso!")
}
