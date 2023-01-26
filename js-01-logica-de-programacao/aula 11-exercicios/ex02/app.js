let numberA;
let numberB;
let resultSum;
let resultSub;
let resultTimes;
let resultDivision;


alert("Seja bem-vindo a minha primeira calculadora de 4 operações. Os dois valores que forem digitados aqui, iremos fazer os 4 cálculos das operações aritméticas neles.");
numberA = parseFloat(prompt("Para começarmos, digite o primeiro valor"));
numberB = parseFloat(prompt("Certo, agora digite o segundo valor"));



resultSum = numberA + numberB;
resultSub = numberA - numberB;
resultTimes = numberA * numberB;
resultDivision = numberA / numberB;

alert("Você digitou os valores: "+numberA+" e "+numberB);
alert(numberA+" + "+numberB+" é igual a "+resultSum);
alert(numberA+" - "+numberB+" é igual a "+resultSub);
alert(numberA+" * "+numberB+" é igual a "+resultTimes);
alert(numberA+" / "+numberB+" é igual a "+resultDivision);