// PARCIALMENTE RESOLVIDO
// VER ONDE ESTÁ O PROBLEMA

const sequencia = '>>>>>>>>>';
const imagens = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7'];

let indice = 0;

for (let caractere of sequencia) {

    if (caractere === '>') {

        indice++;

    } else {

        indice--;

    }

}

console.log(indice);
console.log(imagens.length);


if (indice < 0) {

    indice = imagens.length + (indice) % (imagens.length);

} else if (indice > imagens.length) {

    indice = (imagens.length + (indice) % (imagens.length)) - (imagens.length);

}

console.log(indice);
