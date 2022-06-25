const string = 'string' //gnirts
const theWonderBoy = "the wonder boy"
const tenet = 'tenet_'
const strangerThings = 'stranger things'

function mundoInvertido(string) {

    let reverseString = [];

    for (let i = 0; i < string.length; i++) {

        reverseString.push(string[i]);


    }
    reverseString.reverse()

    let reverseString2 = '';

    for (let i = 0; i < reverseString.length; i++) {

        reverseString2 += reverseString[i]

    }


    console.log(reverseString2);

}

mundoInvertido(strangerThings);