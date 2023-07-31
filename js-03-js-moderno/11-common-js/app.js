const render = require("./render"); // Função do commonJS que passe como parametro, o caminho de um arquivo
const store = require("./store");

console.log("Aplicação iniciada.");
render();
store();
console.log('Aplicação finalizada!');