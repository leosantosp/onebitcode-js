function calcularMedia(a, b){
    const media = (a + b) / 2

    return " A media é " + media // O 'return' é necessário para que o valor vá para fora da função
}

const resultado = calcularMedia(7, 2);
alert(resultado);






function criarProduto(nome, preco){
    const produto = {
        nome, // nome: nome
        preco, // preco: preco
        estoque: 1
    }

    return produto
}



console.log(criarProduto('ACER Aspire 5', 3000)); 


function areaRetangular(base, altura){
    return base * altura // return necessariamente não precisa de uma variável
}

console.log(areaRetangular(3,5));


// return pode também chamar outra função

function areaQuadrada(lado){
    return areaRetangular(lado, lado)
}

console.log(areaQuadrada(9))

//--------------------------------------------------------

// Eu também posso ter vários returns na mesma função

function maioridade(idade){
    if(idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(maioridade(29));
console.log(maioridade(13));