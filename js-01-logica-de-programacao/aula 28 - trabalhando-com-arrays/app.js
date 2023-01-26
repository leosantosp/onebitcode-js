const arr = ["Kirito", "Asuna", "Yui", "Klein", "Agil", "Yuriko", "Naruto", "Sakura", "Sasuke"]

// ADICIONAR ELEMENTOS NO ARRAY
    // PUSH -> adicionar elemento no final do array
    let tamanho = arr.push("Lisbeth");
    console.log(tamanho); // Tras a quantidade de elementos no array

    // UNSHIFT -> Adicionar elementos no começo do array
    arr.unshift("Heathcliff");

// REMOVER ELEMENTOS NO ARRAY
    // POP -> Remove o último elemento do array
    let ultimoElemento = arr.pop();
    console.log(arr);
    console.log(ultimoElemento);

    // SHIFT -> Remove o primeiro elemento do array
    ultimoElemento = arr.shift()
    console.log(arr)
    console.log(ultimoElemento)

// PESQUISAR POR UM ELEMENTO
    // INCLUDES -> Verifica se aquele elemento existe no array (retorna TRUE ou FALSE)
    const inclui = arr.includes("Kirito")

    // INDEX OF -> Qual é o índice do elemento
    const indice = arr.indexOf("Asuna")

    
// CORTAR e CONCATENAR
    // SLICE -> Cortar um elemento
    const mainCharacters = arr.slice(0, 2)
    const others = arr.slice(-4);

    // CONCAT -> Concatenar um elemento
    const sociedade = mainCharacters.concat(others, "Final")

// SUBSTITUIÇÃO DOS ELEMENTOS
    // SPLICE -> Remover um grupo de elementos de um array e inserir um novo grupo
                                        //splice(a partir de qual indice, quantos elementos, qual o valor a ser substituído)
    const elementosRemovidos = sociedade.splice(indice, 1, "Asuna, o Relâmpago")

// ITERAR SOBRE OS ELEMENTOS
    for(let indice = 0; indice < sociedade.length; indice++){
        const elemento = sociedade[indice]
        console.log(elemento + " se encontra na posição " + indice)
    }
