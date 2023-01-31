let immobile = [];
let option = "";

do {

    option = prompt("Olá, seja bem-vindo(a) ao Cadastro de Imóveis\n"+
    "Quantidade de móveis cadastrados: " + immobile.length + "\n" +
    "Escolha uma das opções abaixo: \n 1 -> Salvar imóvel\n 2 -> Mostrar todos imóveis \n 3 -> Sair");


    
    function Immobile(proprietary, rooms, bathrooms, garage){
        this.proprietary = proprietary;
        this.rooms = rooms;
        this.bathrooms = bathrooms;
        this.garage = garage;
    };



    switch(option){
        case "1":
            let proprietary = prompt("Digite o nome do proprietário");
            let rooms = parseFloat(prompt("Digite a quantidade de quartos disponíveis"));
            let bathrooms = parseFloat(prompt("Digite a quantidade de banheiros disponíveis"));
            let garage = confirm("Caso possua garagem, clique em OK, caso não, clique em Cancelar");

            immobile.push(new Immobile(proprietary, rooms, bathrooms, garage));

            break;

        case "2":
            let descImmobile = "";
            for(let i = 0; i < immobile.length; i++){
                let garage = "";

                if(immobile[i].garage === true){
                    garage = "Sim";
                } else {
                    garage = "Não";
                }

                descImmobile += "Imóvel n°" + (i+1) + "\n" +
                "Proprietário: " + immobile[i].proprietary + "\n" + 
                "Quartos: " + immobile[i].rooms + "\n" +
                "Banheiros: " + immobile[i].bathrooms + "\n" +
                "Garagem: " + garage + "\n\n\n"
            }

            alert(descImmobile);
            break;

        case "3":
            alert("Encerrando sistema...");
            break;

    }
} while (option !== 3);


// RESOLUÇÃO DO PROFESSOR

let imoveis = [];
let menu = "";

do {
  menu = prompt(
    "Bem vindo a minha imobiliaria" +
      "\nNumero de imoveis cadastrados: " +
      imoveis.length +
      "\nO que deseja?" +
      "\n\n1 - Salvar imovel" +
      "\n2 - Listar imoveis" +
      "\n3 - Sair"
  );

  switch (menu) {
    case "1":
      const imovel = {};
      imovel.nomePropietario = prompt("Qual o nome do propietario do imovel? ");
      imovel.quartos = prompt("Quantos quartos possui o imovel? ");
      imovel.banheiros = prompt("Quantos banheiros possui o imovel? ");
      imovel.garagem = prompt("Possui garagem? (Sim/Não) ");
      const confimacao = confirm("Deseja continuar?");
      if (confimacao) {
        imoveis.push(imovel);
        alert("Imovel adicionado com sucesso");
      } else {
        alert("Voltando ao menu...");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "imovel: " +
            (i + 1) +
            "\nPropietario: " +
            imoveis[i].nomePropietario +
            "\nNumero de quartos: " +
            imoveis[i].quartos +
            "\nNumero de banheiros: " +
            imoveis[i].banheiros +
            "\nPossui garagem? " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("Opção invalida");
      break;
  }
} while (menu !== "3");