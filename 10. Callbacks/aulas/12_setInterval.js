let i = 0;

let numbers = [0, 5, 10, 15, 20]

const idIntervald = setInterval(() => {

    if (i >= numbers.length - 1) {
        clearInterval(idIntervald)

    }
    console.log(numbers[i])
    i++

}, 1000)

