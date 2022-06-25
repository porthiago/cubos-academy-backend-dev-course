let timeToAlarmSeconds = 1;
let alarmingDurationSeconds = 5;
let snoozeTimeSeconds = 1; 
let snoozeQuantity = 2;

const triggerAlarm = () => {
  let counter = 0;
  let intervalID = setInterval(()=>{
    console.log('Beep Beep');
    counter++
      if (counter === alarmingDurationSeconds) {
        clearInterval(intervalID);
        
        if (snoozeQuantity > 0) {
          setTimeout(()=>{console.log(`Soneca ativada, próximo alarme em ${snoozeTimeSeconds} segundo${snoozeTimeSeconds === 1? '':'s'}`)}, 1000);
          setTimeout(triggerAlarm, snoozeTimeSeconds * 1000);
          snoozeQuantity --
        } else {
          setTimeout(()=>{console.log('Fim do Timer!')}, 1000);
        }
        
      }
  }, 1000);
}

setTimeout(triggerAlarm, timeToAlarmSeconds * 1000, console.log(`Timer iniciado, disparando alarme em ${timeToAlarmSeconds} segundo${timeToAlarmSeconds === 1? '':'s'}`));