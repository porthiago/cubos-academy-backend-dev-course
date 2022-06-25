const getSerialMultiplication = (number, callback) => {
    let multipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result;

    for (let multiplier of multipliers) {
        result = number * multiplier;
        callback(`${number} x ${multiplier} = ${result}`);
    }

}

getSerialMultiplication(5, (result) => {
    console.log(result);d
});