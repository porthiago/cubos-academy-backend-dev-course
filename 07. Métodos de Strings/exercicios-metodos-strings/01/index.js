const comentario = "Esse COvId é muito perigoso!";

function verificarComentario () {

    if (comentario.toLowerCase().includes("covid") || comentario.toLowerCase().includes("pandemia")) {

        console.log("Comentário bloqueado por conter palavras proibidas");

    } else {

        console.log("Comentário autorizado");
    };

} ;

verificarComentario();
