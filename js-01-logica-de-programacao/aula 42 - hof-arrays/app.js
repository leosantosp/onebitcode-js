// MÉTODOS DE ARRAYS

const personagens = [
    {nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"},
]

/* 
MAP -> Serve pra fazer transformação em arrays. 
Pegar um array existente e criar um novo array baseado nele 
*/

/* Se tentássemos fazer esta mesma ideia sem o map */

// const nomes = []

// for(let i = 0; i < personagens.length; i++){
//     nomes.push(personagens[i].nome);
// }

// console.log(nomes)

/* Agora, utilizando o .map */

const nomes = personagens.map(function(personagem){
    return personagem.nome
})


//-----------------------------------------------------

/*
FILTER -> Serve para filtrar elementos específicos de um array. 
E ele também cria uma nova array
*/

/* Como faríamos o uso do FILTER sem utilizá-lo */
// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === "Orc"){
//         orcs.push(personagens[i])
//     }
// }

// console.log(orcs)

const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc" /* Ele vai utilizar essa condição para filtrar */
})

console.log(orcs)


//-----------------------------------------------------

/*
REDUCE -> Serve pra transformar o array em outro elemento. Exemplo: transformar array em objeto/string/valor
Para nosso exemplo, podia utilizamos para somar todos os níveis
Ele também cria uma nova array
*/

                                        /* O primeiro parametro é o valor acumulado da iteração anterior */
                                        /* O segundo parametro é o valor da iteração atual */
const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log(nivelTotal)
/* O segundo parâmetro do reduce() serve para indicar qual que é o valor inicial do nosso primeiro parâmetro que 
vai acumulando */

/*
    Agrupando personagens por raça em um novo objeto utilizando o reduce
*/

const racas = personagens.reduce(function(valorAcumulado, personagem){
    /* Verificar se existe a chave, vai devolver um array */
    if(valorAcumulado[personagem.raca]){
        /* Pegue a Raça do Personagem de valor acumulado e coloque todas as propriedades de personagem dentro dele */
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        /* Se a propriedade ainda não existe, crie a propriedade com o personagem atual */
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

/* A variável racas comece como um objeto vazio */

//-------------------------------------------------------

/*
SORT -> Que do inglês 'ordenar' serve para 'ordenar' arrays
Pega os elementos de um array e troca a posição deles de acordo com algum critério. 
Exemplo, vamos ordenar os personagens baseado no nível deles
*/

/* Ele modifica o array que a gente chama */
/* 1, 2, 4, 7, 3, 0
Ele vai comparando os elementos de dois em dois e vai indo para o próximo. (Ex: 1,2 -> 2,4 -> 4,7 ->) */
personagens.sort(function(a, b){
    /* Devolva negativo ou zero */
    return a.nivel - b.nivel
    // Ele vai fazer uma comparação entre dois elementos, se a conta der negativa, ele deixa o elemento onde está
    // Se der positiva, ele joga pra frente
})

console.log(personagens);

// Utilizar o sort sem modificar o array
const personagensOrdenados = personagens.slice().sort(function(a, b){
    return b.nivel - a.nivel
})

console.log(personagensOrdenados)