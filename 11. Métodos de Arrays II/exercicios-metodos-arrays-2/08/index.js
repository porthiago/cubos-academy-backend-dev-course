const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]

const frutasFormatadas = frutas.map((fruta)=>{
    const primeiraLetra = fruta[0].toUpperCase();
    const restoDaPalavra = fruta.slice(1).toLowerCase();
    return `${frutas.indexOf(fruta)} - ${primeiraLetra + restoDaPalavra}`;
});

console.log(frutasFormatadas)