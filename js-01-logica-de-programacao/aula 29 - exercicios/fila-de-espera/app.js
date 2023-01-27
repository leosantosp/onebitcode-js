let row = [];
let option = ""

do {
    let patients = ""
    for(let i = 0; i < row.length; i++) {
        patients += (i + 1) + "° - " + row[i] + "\n"
    }

    option = prompt("Seja bem-vindo(a) ao Consultório Virtual\n"+
    "Pacientes:\n " + patients +
    "\nEscolha uma opção:\n 1. Novo paciente\n 2. Consultar paciente\n 3. Sair")

    switch(option){
        case "1":
            const newPatient = prompt("Digite o nome do paciente");
            row.push(newPatient);
            break;
        
        case "2":
            const consultPatient = row.shift();
            alert("Consultando o paciente " + consultPatient);
            alert("Paciente " + consultPatient + " saindo do consultório");
            break;

        case "3":
            alert("Encerrando...");
            break;

        default:
            alert("A opção digitada não é válida");
            break;
    }
} while (option !== "3");