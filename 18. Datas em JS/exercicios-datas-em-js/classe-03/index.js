const { setHours, setMinutes } = require("date-fns");

const taAberto = (data) => {
  let abertura = setHours(data, 8);
  let fechamento = setHours(data, 18);
  abertura = setMinutes(abertura, 0);
  fechamento = setMinutes(fechamento, 0);

  return +data >= +abertura && +data <= +fechamento;
};

console.log(taAberto(new Date(2015, 1, 1, 18, 1)));
console.log(taAberto(new Date(2015, 1, 1, 7)));
console.log(taAberto(new Date(2021, 3, 26, 12)));
