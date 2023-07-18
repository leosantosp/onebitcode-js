const a = 0;

const b = null;

const c = "Teste";

console.log(a || b || c); 
// Ele vai avaliar por um valor que seja false, se for, ele vai pular ele. 
// a = 0, o 0 é considerado como false. 
// b = null, o null é pulado em situações de false.
// c = "", é diferente pois é uma string que tem conteúdo, ele conta como true. 

console.log(a ?? b ?? c);
// caso seja null ou undefined, ele pula pro proximo e por aí vai. 

let d = 0;
let e = d || 42;
console.log({d, e})

e = d ?? 42; // Se 'd' for null, 'e' será igual a 42
console.log({d, e})

// Aplicação onde ele vai inserir um valor, ou uma app web. Precisamos verificar se o item foi informado algum valor
let f = null ?? 42; // Vai dar 42
f = undefined ?? 42; // Var dar 42

console.log({f});