alert("Seja bem-vindo ao Conversor de Medidas");
let medida = parseFloat(prompt("Digite o valor em metros para realizar a conversão"));
let conversor = prompt("Digite a unidade de medida para converter o valor:\n mm / cm / dm / dam / hm / km");
let resultado
switch(conversor){
    case "mm":
        resultado = medida * 1000
        alert("A conversão de "+medida+"m para mm é igual a "+resultado+"mm");
        break;

    case "cm":
        resultado = medida * 100
        alert("A conversão de "+medida+"m para cm é igual a "+resultado+"cm");
        break;

    case "dm":
        resultado = medida * 10
        alert("A conversão de "+medida+"m para dm é igual a "+resultado+"dm");
        break;

    case "dam":
        resultado = medida / 10
        alert("A conversão de "+medida+"m para dam é igual a "+resultado+"dam");
        break;

    case "hm":
        resultado = medida / 100
        alert("A conversão de "+medida+"m para hm é igual a "+resultado+"hm");
        break;

    case "km":
        resultado = medida / 1000
        alert("A conversão de "+medida+"m para km é igual a "+resultado+"km");
        break;

    default :
        alert("Desculpe, a opção que você digitou é inválida. Atualize a página e tente novamente!");
        break;
}