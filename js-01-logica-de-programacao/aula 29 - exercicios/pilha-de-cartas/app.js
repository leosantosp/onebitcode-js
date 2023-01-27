let cheap = [];
let option = "";

do{
    let cards = "";
    
    for(let i = 0; i < cheap.length; i++) {
        cards += cheap[i]+"\n";
    }

    option = prompt("Bem-vindo(a) ao Baralho Virtual\nEstas são as cartas disponíveis no baralho\n"+
                    cards+"\n"+
                    "Selecione uma das opções abaixo:\n 1 -> Adicionar carta\n 2 -> Puxar carta \n 3 -> Sair");

    switch(option){
        case "1":
            let newCard = prompt("Digite o nome da carta que será adicionada");
            cheap.push(newCard);
            break;
        
        case "2":
            let drawCard = cheap.pop();
            alert("Retirando carta do baralho...");
            alert("Você comprou a carta: " + drawCard);
            break;

        case "3":
            alert("Encerrando...");
            break;
        
        default:
            alert("Opção digitada não é válida");
    }

} while (option !== "3");