let firstName;
let surname;
let studyField;
let birthYear;
const actualYear = 2023;
let idade;

firstName = prompt("Olá, bem-vindo ao Cadastro de Recrutas. Para começarmos digite abaixo seu primeiro nome");
surname = prompt("Perfeito! Agora digite o seu sobrenome");
studyField = prompt("Digite o seu campo de estudo");
birthYear = parseFloat(prompt("Agora para finalizarmos, digite o seu ano de nascimento"));

idade = actualYear - birthYear;

alert("Seja bem-vindo aos recrutas "+firstName+" "+surname+". \n Você tem "+idade+" anos. \n Seu campo de estudo escolhido foi "+studyField);

