const getSerialMultiplication = (numbersArray, callback) => {
    const multipliers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let number of numbersArray) {

        for (let multiplier of multipliers) {
            const result = number * multiplier;
            callback(`${number} x ${multiplier} = ${result}`);
        }

        console.log('---------------\n');
    }
}

getSerialMultiplication([1, 5, 2], (formattedResult) => {
    console.log(formattedResult);
})