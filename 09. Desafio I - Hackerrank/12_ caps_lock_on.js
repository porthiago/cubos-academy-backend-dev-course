function formatarPalavra(palavra) {
    let primeiraLetra = palavra[0];
    let restoDaPalavra = palavra.slice(1);
    let palavraFormatada = '';

    if (palavra.includes(palavra.toUpperCase())) {
        palavraFormatada = palavra.toLowerCase();

    } else if (primeiraLetra.includes(primeiraLetra.toLowerCase()) && restoDaPalavra.includes(restoDaPalavra.toUpperCase())) {
        palavraFormatada = primeiraLetra.toUpperCase() + restoDaPalavra.toLowerCase();
    } else {
        palavraFormatada = palavra;
    }

    console.log(palavraFormatada);
}

formatarPalavra('tHIAGO')

// formatarPalavra('lock'); //lock
// formatarPalavra('Lock'); //Lock
// formatarPalavra('LOCK'); //lock
// formatarPalavra('lOCK') //Lock
// formatarPalavra('lOCk') //lOCk