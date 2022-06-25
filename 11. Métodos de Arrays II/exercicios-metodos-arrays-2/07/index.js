const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const localizarRuaPorCEP = (cep) => {
    const enderecoLocalizado = enderecos.find((enderecoObjt) => {
       return enderecoObjt.cep === cep; 
    });

   enderecoLocalizado ? console.log(enderecoLocalizado.rua) : console.log('CEP não localizado');
}

localizarRuaPorCEP(00222444);

