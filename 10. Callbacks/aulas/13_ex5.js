const workMicrowave = (time) => {
    let timeCounter = 0;

    console.log('Iniciado')

   const microwaveTimeCounter = setInterval (()=> {
        console.log(timeCounter)
        timeCounter++

        if (timeCounter >= time /1000) {  //compreender
            clearInterval(microwaveTimeCounter)
            console.log('Finalizado')
        }
    },1000)
}

workMicrowave(2000)