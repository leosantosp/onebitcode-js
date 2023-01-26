alert("Seja bem-vindo a Dungeons and Dragons \n");
alert("Agora, uma batalha está acontecendo entre dois personagens.\n E você decidirá o futuro de um deles.\n Tudo será decidido em um golpe");

let strikerName = prompt("Digite o nome do personagem atacante");
let attackPower = parseFloat(prompt("Digite quantos pontos de ataque o "+strikerName+ " possui"));
let defensorName = prompt("Digite o nome do personagem defensor");
let defensorHP = parseFloat(prompt("Digite quantos pontos de vida (HP) o defensor "+defensorName+" possui"));
let defensePower = parseFloat(prompt("Digite quantos pontos de defesa o "+defensorName+" possui"));
let defensorShield = confirm("O defensor "+defensorName+" possui um escudo?\n Para Sim, clique em 'Ok' para Não, clique em 'Cancelar'");

if(attackPower > defensePower && defensorShield === false){
    let damage = attackPower - defensePower;
    defensorHP = defensorHP - damage;

    alert("O primeiro turno acabou! \n"+
          strikerName+" golpeou com sucesso!\n"+
          defensorName+" perdeu "+damage+" pontos de vida\n"+
          defensorName+" agora possui "+defensorHP+" pontos de vida"+
          defensorName+" possui "+defensePower+" pontos de defesa e não possui um escudo"+
          strikerName+" possui "+attackPower+" pontos de ataque\n");

} else if (attackPower > defensePower && defensorShield === true){
    let damage = (attackPower - defensePower) / 2;
    defensorHP = defensorHP - damage;

    alert("O primeiro turno acabou! \n"+
          strikerName+" golpeou com sucesso!\n"+
          defensorName+" estava utilizando um escudo, por isso os dados serão reduzidos pela metade\n"+
          defensorName+" perdeu "+damage+" pontos de vida\n"+
          defensorName+" agora possui "+defensorHP+" pontos de vida\n"+
          defensorName+" possui "+defensePower+" pontos de defesa e possui um escudo"+
          strikerName+" possui "+attackPower+" pontos de ataque\n");

} else if (attackPower <= defensePower){
    alert("O primeiro turno acabou! \n"+
          strikerName+" e "+defensorName+" estão em igualdade de poder\n"+
          "Danos não foram aplicados nesta rodada!"+
          defensorName+" possui "+defensorHP+ " pontos de vida\n"+
          defensorName+" possui "+defensePower+" pontos de defesa e possui um escudo"+
          strikerName+" possui "+attackPower+" pontos de ataque\n");
} else {
    alert("Alguma informação inserida não foi devida! Por favor, reinicie a rodada e tente novamente!");
}

