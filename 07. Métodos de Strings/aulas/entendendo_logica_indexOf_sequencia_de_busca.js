// Sequencia de Busca via IndexOf

//saber se um email é válido
//tem que ter um pelo menos um @
//tem que ter pelo menos um ponto depois do @

const email = "jose.messias@cubos.academy";

const indexArroba = email.indexOf("@"); //4

const indexPontoAposArroba = email.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições");
} else {
    console.log("Não há nenhum ponto após o arroba.");
}

//Entender a lógica da questão
// A condição colocada pela Jr aqui foi, o que é que email tem
//.... que o diferencia?
// Entendeu como essa lógica se aplicava de acordo com tais caracteres diferenciais
// Criar variável para manipular indexOf que retorna "number" of "first index"
// O indexOf só retorna o indice se houver o caractere, logo, ele funciona tanto para
//... o retorno do indice como para dizer se o caractere está presente ou não
