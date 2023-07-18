
// Quando trabalhamos com rest params, deixamos ele no final dos parâmetros
function sum(...numbers){
    // reduce( (acumulador, elemento atual) => retornar o acumulador + o número, inicializar o valor do acumulador em 0 );
    return numbers.reduce((accum, num) => accum + num, 0);
}

console.log(sum(1, 1));
console.log(sum(2, 2, 2, 2, 2, 2));

