const { hoursToMilliseconds } = require("date-fns");

const validarPromoção = (inicioDaPromocao, dataDaCompra, tempoDaPromocaoHs) => {
  const diferencaDeTempo = +dataDaCompra - +inicioDaPromocao;
  return (
    diferencaDeTempo >= 0 &&
    diferencaDeTempo <= hoursToMilliseconds(tempoDaPromocaoHs)
  );
};

console.log(
  validarPromoção(new Date(2022, 2, 1, 0, 0), new Date(2022, 2, 2, 0, 0), 24)
);
