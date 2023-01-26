 let velocidade = 0

do {
    alert("A velocidade do veículo é: "+ velocidade + " km/h")
    velocidade -= 20
} while(velocidade > 0)

/* No caso, como podemos ver a velocidade inicial já era 0. Pela lógica do while, 
ele não estava dentro da condição para executar o bloco. Então, o do while é tipo,
faça ao menos uma vez, mas para repetir, analise a condição */

alert("Velocidade final: " + velocidade + " km/h")