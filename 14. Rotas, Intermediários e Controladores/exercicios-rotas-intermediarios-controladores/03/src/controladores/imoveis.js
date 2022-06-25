const imoveis = require('../dados/dados_imoveis')

const exibirTodosOsResultados = (req,res)=>{
    res.send(imoveis);
}

const filtrarResultados = (req, res)=>{
    const IDRecebido = req.params.id;
    let resultado;

   resultado = imoveis.filter((imovel)=>{
       return imovel.id === Number(IDRecebido);
   });
   res.send(resultado);
}

module.exports = {
    exibirTodosOsResultados,
    filtrarResultados
}