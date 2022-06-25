const { format } = require("date-fns");
const { pt } = require("date-fns/locale/");

const formatarPadraoDe = (data) => {
  return format(data, "dd 'de' MMMM 'de' yyyy", { locale: pt });
};

const formatarPadraoBarras = (data) => {
  return format(data, "dd'/'MM'/'yyyy");
};

const formatarDiaMesAbrev = (data) => {
  return format(data, "d MMM", { locale: pt });
};

const formatarDiaMesAnoAbrev = (data) => {
  return format(data, "dd MMM yyyy", { locale: pt });
};

const formatarPadraoDeAbrev = (data) => {
  return format(data, "dd 'de' MMM 'de' yyyy", { locale: pt });
};

const formatarDiaMesAbrevBarra = (data) => {
  return format(data, "d'/'MMM", { locale: pt });
};

console.log(formatarPadraoDe(new Date()));
console.log(formatarPadraoBarras(new Date()));
console.log(formatarDiaMesAbrev(new Date()));
console.log(formatarDiaMesAnoAbrev(new Date()));
console.log(formatarPadraoDeAbrev(new Date()));
console.log(formatarDiaMesAbrevBarra(new Date()));
