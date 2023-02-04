// FUNÇÕES ANÔNIMAS -> 

function somar(a, b){
    return a + b
}

// const operacao = somar() -> Neste caso aqui estou armazenando o resultado da função somar dentro da variável
const operacao = somar // operacao é igual a função somar

console.log(operacao(4, 5)) // Ele vai retornar o 5, pois operacao é igual a somar. 

const subtrair = function subtracao(a , b){
    return a - b
}

console.log(subtrair(5, 2)) 
/* A gente consegue passar as funcoes em variaveis e as funções anônimas 
servem pra gente não precisar ficar dando nomes */

// Exemplo de funcao anonima
const multiplicacao = function(a,b){
    return a * b
}

console.log(multiplicacao(4, 2))



// PERIGO DAS FUNÇÕES ANONIMAS

olaMundo() // Mostrou resultado
oiMundo() /* Mesmo erro que a gente tem quando utiliza o let e o var, ou seja, 
as funções anônimas precisam ser chamadas abaixo da inicialização da função */

function olaMundo(){
    console.log("Olá mundo!")
}

const oiMundo = function () {
    console.log("Oi, mundo!")
}

