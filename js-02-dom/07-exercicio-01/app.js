function newPlayer(){
    // Isto pegará o valor informado no input
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;

    const confirmPlayer = confirm('Você deseja escalar o jogador '+name+' como ' + position + '?');

    if(confirmPlayer){
        const teamList = document.getElementById('team-list');
        const playerItem = document.createElement('ul');
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ": "+ name + "(" + number + ")";
        teamList.appendChild(playerItem);

        document.getElementById('position').value = '';
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
    }
}

function removePlayer(){
    const number = document.getElementById('numberToRemove').value;
    const playerToRemove = document.getElementById('player-'+number);

    const confirmRemove = confirm('Você deseja remover o jogador ' + playerToRemove.innerText + '?');

    if(confirmRemove){
        document.getElementById('team-list').removeChild(playerToRemove);
        document.getElementById('numberToRemove').value = '';
    }
}