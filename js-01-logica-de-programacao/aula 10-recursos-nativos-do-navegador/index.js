let nome = "Leonardo";

console.log(nome); /* Mostra o conteúdo dentro do encadeamento no console */
console.error(nome); /* Mostra a mensagem no console com a estilização de um erro */
console.warn(nome); /* Mostra a mensagem no console com a estilização de um aviso */


/* Representa a aba do nosso navegador - WINDOW */
/* window.alert(nome); /* Exibirá um alerta na aba em que ele foi chamado */
nome = window.prompt("Insira o seu nome");
window.alert("Seja bem-vindo "+nome);
let confirmacao = window.confirm("Confirma que deseja acessar o site?");
console.log(confirmacao);
/* Window é o objeto global do navegador, ou seja, não é necessário ficar sempre mencionando
window.alert / window.confirm / window.prompt */

nome = prompt();
alert();
confirm();

document /* Faz referência a nossa página em HTML */