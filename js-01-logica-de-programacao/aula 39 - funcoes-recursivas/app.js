// FUNÇÃO RECURSIVA - É uma função que chama ela mesma, ou seja, ela se auto-chama durante sua execução

function divide(num){
    console.log(num)

    // Se o resto da divisão do número por dois for igual a 0
    if(num % 2 === 0){
        // divida o número novamente, ele voltará ao início da execução. 
        divide(num / 2)
    } else {
        // Quando o dividendo n der mais pra ser por 2, ele retornará o número
        return num
    }

}

divide(40) /* Ele vai retornar 40 / 20 / 10 / 5 */

// PERIGOS DE UMA FUNÇÃO RECURSIVA
// Primeira função executa, na primeira ela chama a segunda função, se tiver uma terceira, ele para a segunda e executa a terceira

function dobrar(num){
    console.log(num)
    dobrar(num * 2)
}

// dobrar(1)

//----------------------------------------

// Justamente pelos perigos da função, é necessário definir um momento que esta função se encerra, se não ela vai continuar se chamando eternamente

// Exemplo real de função recursiva

// fatorial de 5 -> !5 === 5 * 4 * 3 * 2 * 1 === 5 * !4 
function fatorial(num){

    console.log("Número: " + num)
    if(num === 0){ // Caso base -> O momento em que a função irá parar
        return 1
    } else if (num === 1){
        return 1
    } else {
        console.log(num + " * !" + (num - 1) )
        return num * fatorial(num - 1)
    }

}

console.log(fatorial(5));