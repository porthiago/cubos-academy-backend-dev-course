const arquivos = ['foto.jpg','mp3.bat','video.mp4'];

const detectarVirus = (arrayArquivos) => {
    const resultado = arrayArquivos.some((elemento) => {
        return elemento.includes('.bat')
    })

    if (resultado) {
        console.log('Vírus Detectado');
    } else {
        console.log('Nenhum Vírus Encontrado');
    }
}

detectarVirus(arquivos)