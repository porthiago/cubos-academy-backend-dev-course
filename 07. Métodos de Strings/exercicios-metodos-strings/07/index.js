
function validarEmail(email) {

    if (email.includes("@") && email.includes('.')) {


        if (email[0] === ".") {

            console.log("E-mail inválido");

        } else if (email[email.length - 1] === ".") {

            console.log("E-mail inválido");

        } else {

            console.log('E-mail válido');
        }

    } else {

        console.log('E-mail Inválido');
    };

};

validarEmail('jose@cubos.academy');
validarEmail('jose@cubos.academy.br');
validarEmail('jose.messias@cubos.academy');
validarEmail('jose.messias@cubos.io');
validarEmail('jose@cubos');
validarEmail('jose.messias@cubos');
validarEmail('jose.messias@.');
validarEmail('jose.@cubos');
validarEmail('.@');
validarEmail('@.');
validarEmail('jose.messias@cubos.');
validarEmail('.messias@cubos.');
validarEmail('.messias@cubos');