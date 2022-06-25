const listaDeCompras = ["arroz", "feijão", "carne", "vodka", "macarrão"]

const resultado = listaDeCompras.some((item) => {
    return item === 'cerveja' || item === 'vodka';
})

resultado ? console.log('revise sua lista, joão. possui bebida com venda proibida!') : console.log('tudo certo, vamos as compras!');

