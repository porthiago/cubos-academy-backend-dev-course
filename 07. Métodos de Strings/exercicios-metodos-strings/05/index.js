const numeroCartao = '1111222233334444';

const numeroCartaoSlice = numeroCartao.slice(4, 12);
let preenchimento1;
let preenchimento2;

preenchimento1 = numeroCartaoSlice.padStart(12, "*");
preenchimento2 = preenchimento1.padEnd(16, "*");

console.log(preenchimento2);