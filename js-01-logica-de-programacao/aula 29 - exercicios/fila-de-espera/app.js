let patients = ['Leonardo', 'Eliane', 'José', 'Lucas', 'Yasmin'];
let listPatients = "";
for(indice = 0; indice < patients.length; indice++){
    patient = patients[indice];
    listPatients += "O "+indice+"° da fila é o "+patient+"\n"
}

const option = parseFloat(prompt("Seja bem-vindo(a) ao Consultório Médico\n"+
"Estes são os pacientes que estão aguardando atendimento\n"+
listPatients + "\n" +
"Escolha uma das opções\n 1 -> Novo paciente \n 2 -> Consultar paciente \n 3 -> Sair"));

switch(option){
    case 1:
        let newPatient = prompt("Insira o nome do paciente");
        patients.push(newPatient);

        option = parseFloat(prompt("Seja bem-vindo(a) ao Consultório Médico\n"+
                                        "Estes são os pacientes que estão aguardando atendimento\n"+
                                        listPatients + "\n" +
                                        "Escolha uma das opções\n 1 -> Novo paciente \n 2 -> Consultar paciente \n 3 -> Sair"));
        break;

    case 2:
        let consultPatient = patients.shift();
        alert("Consultando o paciente "+consultPatient);
        alert(consultPatient + " deixando o consultório");

        option = parseFloat(prompt("Seja bem-vindo(a) ao Consultório Médico\n"+
                                        "Estes são os pacientes que estão aguardando atendimento\n"+
                                        listPatients + "\n" +
                                        "Escolha uma das opções\n 1 -> Novo paciente \n 2 -> Consultar paciente \n 3 -> Sair"));

        break;

    case 3:
        alert("Encerrando o sistema...")
        break;

    default :
        alert("Esta opção não é válida");
}