const printMessage = (name, age) => {
    console.log(`Olá, ${name}. Você tem ${age} anos `)
}

setTimeout(printMessage, 2000, 'Maria', 23);