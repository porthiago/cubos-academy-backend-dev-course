const somar = (req, res) => {
    const {num1, num2} = req.query;
    let resultado = Number(num1) + Number(num2);

    res.send(String(resultado));
 }

 const subtrair = (req, res) => {
    const {num1, num2} = req.query;
    let resultado = Number(num1) - Number(num2);

    res.send(String(resultado));
 }

 const multiplicar = (req, res) => {
    const {num1, num2} = req.query;
    let resultado = Number(num1) * Number(num2);

    res.send(String(resultado));
 }

 const dividir = (req, res) => {
    const {num1, num2} = req.query;
    let resultado = Number(num1) / Number(num2);

    res.send(String(resultado));
 }

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};