alert("Bem-vindo(a) ao Robô da Tabuada")
let valueToTimes = parseFloat(prompt("Digite o número que deseja verificar a tabuada"))
let index = 1;
let tabuada = "";

for(alert("Calculando..."); index <= 20; index++ ){
    let result = valueToTimes * index
    tabuada += valueToTimes + " x " + index + " = " + result + "\n"
}

alert("Abaixo, segue os resultados da tabuada do "+valueToTimes+"\n" + tabuada)