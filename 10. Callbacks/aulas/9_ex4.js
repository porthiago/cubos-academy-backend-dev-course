const workMicrowave = (time) => {
    console.log('Iniciado')

    setTimeout (() => {
        console.log('Finalizado')
    }, time )
}

workMicrowave(3000)