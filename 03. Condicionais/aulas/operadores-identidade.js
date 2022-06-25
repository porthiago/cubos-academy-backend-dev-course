let ehIdentico;
let naoEhIdentico;

ehIdentico = 18 === 18; // true - number x number
console.log(ehIdentico);
ehIdentico = 18 === "18"; // false - number x string
console.log(ehIdentico);
ehIdentico = 18 == "18"; // true - identidade necessita de 3 iguais (===)
console.log(ehIdentico);

naoEhIdentico = 18 !== 18; // false - number x number
console.log(naoEhIdentico);
naoEhIdentico = 18 !== "18"; // true - number x string
console.log(naoEhIdentico);
naoEhIdentico = 18 != "18"; // false - são identicos, o operador de identidade precisaria de mais 1 igual (==!)
console.log(naoEhIdentico);

