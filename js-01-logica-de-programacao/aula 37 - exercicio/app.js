alert("Seja bem-vindo a Calculadora Geométrica Digital");

let option = ""
let base
let altura
let baseMaior
let baseMenor
let lado
let raio 

do{

    option = prompt("Escoha uma das opções de cálculo que gostaria de utilizar:\n 1 -> Área do Triângulo\n 2 -> Área do Retângulo\n 3 -> Área do Quadrado\n 4 -> Área do Trapézio\n 5 -> Área do Círculo\n 6 -> Sair");
    
    function areaTriangulo(a, b){
        const resultado = (a * b) / 2
        return resultado
    }

    function areaRetangulo(a, b){
        const resultado = a * b
        return resultado
    }

    function areaQuadrado(a){
        return areaRetangulo(a, a)
    }
    
    function areaTrapezio(a, b, c){
        const resultado = ((a * b) * c) / 2
        return resultado
    }
    
    function areaCirculo(a){
        const pi = 3.14
        const resultado = pi * (a * a)
        return resultado
    }

    switch(option){
        case "1":
            alert("Você escolheu para cálculo a Área do Triângulo")
            base = parseFloat(prompt("Digite o valor da base:"))
            altura = parseFloat(prompt("Digite o valor da altura"))
            alert("A área do triângulo é igual a " + areaTriangulo(base, altura))
            break;

        case "2":
            alert("Você escolheu para cálculo a Área do Retângulo")
            base = parseFloat(prompt("Digite o valor da base"))
            altura = parseFloat(prompt("Digite o valor da altura"))
            alert("A área do Retângulo é igual a " + areaRetangulo(base, altura))
            break;

        case "3":
            alert("Você escolheu para cálculo a Área do Quadrado")
            lado = parseFloat(prompt("Digite o valor do lado do quadrado"))
            alert("Á área do quadrado é igual a " + areaQuadrado(lado))
            break;
            
        case "4":
            alert("Você escolheu para cálculo a Área do Trapézio")
            baseMaior = parseFloat(prompt("Digite o valor da base maior"))
            baseMenor = parseFloat(prompt("Digite o valor da base menor"))
            altura = parseFloat(prompt("Digite o valor da altura"))
            alert("A área do trapézio é igual a " + areaTrapezio(baseMaior, baseMenor, altura))
            break;

        case "5":
            alert("Você escolheu para cálculo a Área do Círculo")
            raio = parseFloat(prompt("Digite o valor do raio"))
            alert("A área do círculo é igual a " + areaCirculo(raio))
            break;

        case "6":
            alert("Efetuando o logoff...");
            break;
    }



} while(option !== 6);

alert("Você efetuou o logoff!");