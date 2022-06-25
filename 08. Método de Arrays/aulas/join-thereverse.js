const string = 'string' //gnirts
const theWonderBoy = "the wonder boy"
const tenet = 'tenet_'
const strangerThings = 'stranger things'

function mundoInvertido(string) {

    stringToRevert = string.split("");
    stringToRevert.reverse();
    revertedString = stringToRevert.join("");

    console.log(revertedString);


}

mundoInvertido(tenet);