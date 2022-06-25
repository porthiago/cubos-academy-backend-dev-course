
function imprimirData(data, mes, ano) {

    const dataString = String(data);
    const mesString = String(mes);

    console.log(`${dataString.padStart(2, "0")}/${mesString.padStart(2, "0")}/${ano}`);

}

imprimirData(1, 1, 2022);