const userName = "Leonardo"
let opcao

alert("Seja bem-vindo " + userName + ". Selecione uma das opções");

opcao = parseFloat(prompt("1. Iniciar sistema\n 2. Carregar arquivo\n 3. Controles\n 4. Configurações\n 5. Encerrar"))

do {
    alert("A opção escolhida foi a "+opcao);
    opcao = parseFloat(prompt("1. Iniciar sistema\n 2. Carregar arquivo\n 3. Controles\n 4. Configurações\n 5. Encerrar"))
} while (opcao !== 5)
alert("Você escolheu a opção 5 - Encerrar")
alert("O sistema está sendo encerrado...")