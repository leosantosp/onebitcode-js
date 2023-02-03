// ESCOPO nada mais é que o contexto onde a variável foi declarada

// Escopo externo -> Pode ser utilizado em escopo interno
let pokemon = "Charmander"

function evoluir(){
    // Escopo interno -> Não pode ser utilizado em escopo externo
    pokemon = "Charmeleon" 
}

console.log(pokemon) // Charmander
evoluir()
console.log(pokemon) // Charmeleon


//-------------------------------

function criarAnimal(){
    let animal = "Gato";

    return animal // Se utilizarmos o return, então, poderemos utilizar em escopo externo
}

criarAnimal()
console.log(animal) // O erro exibido será 'animal' is not defined


/* O motivo pelo qual o 'var' deixou de ser utilizado para declarar variáveis
É que ela ignora esta regra, ela pode ser chamada fora do escopo interno */

