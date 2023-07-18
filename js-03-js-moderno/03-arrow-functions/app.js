// FUNÇÃO NORMAL
function normalSum(a, b){
    return a + b;
}

console.log(`Soma normal: ${normalSum(2, 2)}`);


// FUNÇÃO ANÔNIMA
const anonymousSum = function (a, b) {
    return a + b;
}

console.log(`Soma anonima: ${anonymousSum(2, 2)}`);


// ARROW FUNCTION
const arrowSum = (a, b) => {
    return a + b;
} 
console.log(`Soma arrow function: ${arrowSum(2, 2)}`);

// Arrow function consigo fazer em apenas uma linha
const subtract = (a, b) => a - b;
console.log(`Subtração: ${subtract(5, 2)}`);

// Quando você tem um parâmetro, nem parenteses você precisa
const double = n => `O dobro de ${n} é ${n*2}`;

const number = 21;
console.log(double(number));

//-------------------------------------------

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen'];

const startingWithP = towns.filter(town => town[0] === 'P');

console.log(startingWithP);