let temIngresso;
let censura;
let idade;
let acompanhadaDosPais;

temIngresso = true;
censura = 16;
idade = 15;
acompanhadaDosPais = true;

if (temIngresso && (idade >= censura || acompanhadaDosPais)) {
    console.log("Pode entrar.")
} else {
    console.log("Barrada!")
}
