const username = "Leonardo"
let operation
let balance = parseFloat(prompt("Olá " + username + ". Digite quanto você tem de saldo disponível"))
let value

do{
    operation = parseFloat(prompt("Seja bem-vindo(a) ao Controle Financeiro " + username + "\n"+
    "Você tem disponível R$ " + balance + ". Qual operação gostaria de efetuar?\n"+
    "1. Adicionar\n"+
    "2. Retirada\n"+
    "3. Sair"));


    if(operation === 1){
        value = parseFloat(prompt("Digite o valor que deseja adicionar a sua conta!"))
        balance += value
        alert("Valor adicionado com sucesso! Seu novo saldo é de R$ "+balance)
    } else if(operation === 2){
        value = parseFloat(prompt("Digite o valor que deseja retirar da sua conta!"))
        balance -= value
        alert("Valor debitado com sucesso! Seu novo saldo é de R$ "+balance)
    }

} while(operation !== 3)

alert("Saindo do Controle Financeiro...")


