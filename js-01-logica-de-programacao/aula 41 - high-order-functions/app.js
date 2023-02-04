// HIGH ORDER FUNCTIONS - Funções de Alta Ordem
/*
    Uma high-order function é uma função, onde conseguimos
    informar outra função como parâmetro
*/

function calcular(a, b, operacao){
    console.log("Realizando uma operação.")
    const resultado = operacao(a, b)
    return resultado
}

function somar(x, y){
    console.log("Realizando uma soma")
    return x + y
}

console.log(calcular(2, 3, somar))

console.log(calcular(8, 4, function(x, y){
    console.log("Realizando uma subtração")
    return x - y
}))

function exibirElemento(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
}

const lista = ["Maça", "Banana", "Laranja", "Limão"]

for (let i = 0; i < lista.length; i++){
    exibirElemento(lista[i], i, lista)
}

// FOR EACH -> Executar uma função para cada elemento de um array. Ela é uma High Order Function

lista.forEach(exibirElemento) // Sem a necessidade do for

lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})