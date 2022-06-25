const players = ["Guido", "Dani", "Ruli", "Diego", "Vidal"];

const printPlayersByInterval = (playersArray, gameTimer) => {
    let i = 0;

    const intervalID = setInterval(() => {
        console.log(playersArray[i]);
        i++

        if (i === playersArray.length) {
            console.log('A rodada terminou!');
            clearInterval(intervalID);
        }

    }, gameTimer / playersArray.length);
}

printPlayersByInterval(players, 10_000);