const { addDays } = require("date-fns");

const validarPromoção = (
  inicioDaPromocao,
  dataDaCompra,
  tempoDaPromocaoDias
) => {
  const fimDaPromocao = addDays(inicioDaPromocao, tempoDaPromocaoDias);

  return +dataDaCompra >= inicioDaPromocao && +dataDaCompra <= +fimDaPromocao;
};

console.log(
  validarPromoção(new Date(2022, 1, 29, 0, 0), new Date(2022, 2, 1, 0, 0), 30)
);
