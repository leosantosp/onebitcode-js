const idade = prompt("Informe sua idade: ");


if (idade > 18){
    alert("Você é maior de idade");
} else if(idade > 12) {
    alert("Você é menor de idade");
} else if(idade > 4){
    alert("Você é criança")
} else {
    alert("...")
}

/* const resultado = condicao ? resultado_verdadeiro : resultado_falso */

const resultado = idade > 18 ? alert("Você é maior de idade") : alert("Você é menor de idade");
