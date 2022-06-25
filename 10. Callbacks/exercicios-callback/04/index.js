let timerInSeconds = 1;
let timeAlarminngInSeconds = 10;

const executeTimer = () => {
    console.log(`Timer iniciado, disparando alarme em ${timerInSeconds} segundo${timerInSeconds === 1? '':'s'}`)

    setTimeout(() => {
        let counter = 0;
        let intervalID = setInterval(() => {
            console.log('Beep beep!');
            counter++

            if (counter === timeAlarminngInSeconds) {
                clearInterval(intervalID);
            }
        }, 1000);
    }, timerInSeconds * 1000)
}

executeTimer();