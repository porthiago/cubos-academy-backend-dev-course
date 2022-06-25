const { setHours, setMinutes, getDay } = require("date-fns");

const taAberto = (data) => {
  const dia = getDay(data);

  if (dia !== 0 && dia !== 6) {
    let abertura = setHours(data, 8);
    abertura = setMinutes(abertura, 0);
    let fechamento = setHours(data, 18);
    fechamento = setMinutes(fechamento, 0);

    return +data >= +abertura && +data <= +fechamento;
  } else if (dia === 6) {
    let abertura = setHours(data, 8);
    abertura = setMinutes(abertura, 0);
    let fechamento = setHours(data, 12);
    fechamento = setMinutes(fechamento, 0);

    return +data >= +abertura && +data <= +fechamento;
  } else {
    return false;
  }
};

console.log(taAberto(new Date(2021, 3, 25, 12))); // deve retornar false, pois é um domingo

console.log(taAberto(new Date(2021, 3, 26, 12))); // deve retornar true, pois é uma segunda

console.log(taAberto(new Date(2021, 3, 26, 7, 59))); // deve retornar false, pois é muito cedo (7h59)

console.log(taAberto(new Date(2021, 3, 24, 9, 30))); // deve retornar true, pois é sábado de manhã (9h30)
