let startGame = false;

const formGame = document.getElementById('formGame');

formGame.addEventListener('submit', function(){

    const player1 = document.getElementById('player1');
    const player2 = document.getElementById('player2');

    if(player1.value !== '' & player2.value !== ''){
        startGame = true;
    } else {
        startGame = false;
    }

});

console.log(startGame);