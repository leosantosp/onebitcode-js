let turista
let resposta
let cidades = []
let cidade
let contador = 0

alert("Olá, seja bem-vindo ao programa 'Visitando Novas Cidades'")
turista = prompt("Para começarmos, qual o seu nome?")
resposta = parseFloat(prompt("Certo, "+turista+", diga-me, você já visitou alguma cidade?\n1. Sim\n 2. Não"))

while(resposta === 1){
    cidade = prompt("Digite o nome da cidade visitada");
    resposta = parseFloat(prompt("Certo, "+turista+", diga-me, você já visitou alguma outra cidade?\n1. Sim\n 2. Não"))
    cidades.push(cidade);

    if(resposta === 2){
        alert("Olá "+turista+", você visitou um total de "+cidades.length+" cidades. Observe a seguir as cidades mencionadas:");
        while(contador < cidades.length){
            alert(cidades[contador]+"\n");
            contador++
        }
    }
}

/* RESOLUÇÃO DO PROFESSOR */

const turistaNome = prompt("Eaí, turista! Qual o seu nome?");
let citys = ""
let counts = 0
let continueAsking = prompt("Você já visitou alguma cidade? (Sim/Não)")

while(continueAsking === "Sim"){
    let city = prompt("Qual é o nome da cidade visitada?")
    
    citys += " - " + city + "\n";
    counts++
    continueAsking = prompt("Você visitou alguma outra cidade? (Sim/Não)")
}

alert(
    "Turista: " + turistaNome +
    "\n Quantidade de cidades visitadas: " + counts +
    "\n Cidades visitadas: \n " + cidades
)