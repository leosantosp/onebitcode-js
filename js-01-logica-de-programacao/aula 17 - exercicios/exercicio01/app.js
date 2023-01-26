alert("Seja bem-vindo ao Teste de Velocidade");
let veiculoA = prompt("Insira o nome do primeiro veículo");
let veiculoAVelocidade = parseFloat(prompt("Digite a velocidade do veículo "+veiculoA));
let veiculoB = prompt("Insira o nome do segundo veículo");
let veiculoBVelocidade = parseFloat(prompt("Digie a velocidade do veiculo "+veiculoB));

if(veiculoAVelocidade > veiculoBVelocidade){
    alert("O veículo "+veiculoA+" é o mais rápido");
} else if (veiculoAVelocidade == veiculoBVelocidade){
    alert("Os dois veículos estão a mesma velocidade");
} else {
    alert("O veiculo "+veiculoB+" é o mais rápido")
}