let option = "";
let jobs = [];

do{
    

    /* Faça um menu com 6 opções. O menu sempre fica dentro do DoWHILE */
    option = prompt("Seja bem-vindo ao VAGAS Digitais\n"+
    "Para prosseguir digite qual das opções você quer acessar:\n\n"+
    "1 -> Vagas Disponíveis\n"+
    "2 -> Criar Vaga\n"+
    "3 -> Visualizar uma vaga\n"+
    "4 -> Inscrever um candidato em uma vaga\n"+
    "5 -> Excluir uma vaga\n"+
    "6 -> Sair");
  

    switch(option){

        /* Mostre todas as Vagas */
        case "1":
            let showAllJobs = "";

            for(let i = 0; i < jobs.length; i++) {
                showAllJobs += 
                    "Vaga: " + (i + 1) +
                    "\n Título da Vaga: " + jobs[i].title +
                    "\n Descrição da Vaga: " + jobs[i].description +
                    "\n Data Limite: " + jobs[i].deadline +
                    "\n Candidatos inscritos: " + jobs[i].candidates.length + "\n\n"
                    
            }

            alert(showAllJobs);

            break;

        /* Cadastre uma Vaga */
        case "2":
            const job = {};
            job.title = prompt("Digite o título da vaga")
            job.description = prompt("Digite a descrição da vaga")
            job.deadline = prompt("Digite a data limite da vaga")
            job.candidates = []

            const createJob = confirm("Deseja criar a vaga?\n\n"+
            "Dados da vaga:\n"
            +"Título da Vaga: " + job.title + 
            "\nDescrição da Vaga: " + job.description +
            "\nData Limite da Vaga: " + job.deadline)

            if(createJob == true){
                jobs.push(job)
                alert("Vaga criada com sucesso!")
            } else {
                alert("Voltando ao menu...")
            }

            break;

        /* Mostre uma Vaga em Específico */
        case "3":
            
            let showJob = parseFloat(prompt("Digite o ID da Vaga\n Caso haja necessidade, volte ao menu principal"));
            let index = (showJob - 1)
            alert("Dados da Vaga " + showJob
            + "\n ID da Vaga: " + showJob
            + "\n Título da Vaga: " + jobs[index].title
            + "\n Descrição da Vaga: " + jobs[index].description
            +"\n Data Limite: " + jobs[index].deadline
            +"\n Inscritos na Vaga: " + jobs[index].candidates.length)

            break;

        /* Inscrever um candidato em uma vaga */
        case "4":
            const cadidateName = prompt("Digite o nome do candidato");
            const jobIndex = parseFloat(prompt("Digite o ID da vaga"));
            const indexConvert = (jobIndex - 1);


            const applyJob = confirm(
                "Confirme os dados antes\n"
                +"Candidato: " + cadidateName + " está se candidatando a vaga"
                +"\nVaga: " + jobIndex
                +"\nTítulo: " + jobs[indexConvert].title
                +"\nDescrição: " + jobs[indexConvert].description
                +"\nData Limite: " + jobs[indexConvert].deadline
                +"\nClique em OK para confirmar candidatura"
            )

            if(applyJob === true){
                jobs[indexConvert].candidates.push(cadidateName);
            } else {
                alert("Voltando ao menu...")
            }

            break;
        
        case "5":
            const deleteIndex = parseFloat(prompt("Digite o ID da Vaga que deseja excluir"))
            const delConvert = (deleteIndex - 1)

            const deleteJob = confirm(
                "Confirme os dados antes da exclusão\n"
                +"Vaga: " + deleteIndex
                +"\nTítulo: " + jobs[delConvert].title
                +"\nDescrição: " + jobs[delConvert].description
                +"\nData Limite: " + jobs[delConvert].deadline
                +"\nClique em OK para confirmar a exclusão"
            )

            if(deleteJob === true){
                jobs.splice(delConvert, 1);
            } else {
                alert("Voltando ao menu...")
            }


            break;

        case "6":
            alert("Fechando sistema...")
            alert("Sistema encerrado!")
            break;

        default:
            alert("Opção inválida! Digite novamente");
            break;
    }

} while (option !== 6)