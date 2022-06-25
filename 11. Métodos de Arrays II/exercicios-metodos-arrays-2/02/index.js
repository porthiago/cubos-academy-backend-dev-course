const palavras = ["livro", "cana", "sol", "carro", "boca"]

const resultado = palavras.some((palavra)=>{
  return palavra.length > 5
})

resultado ? console.log('existe palavra inválida') : console.log('array validado');