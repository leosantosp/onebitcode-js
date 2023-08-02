/* Vamos começar pela funcionalidade de digitar na calculadora */

const main = document.querySelector('main'); // Nossa tag <main>
const root = document.querySelector(':root'); // O element ':root' do CSS
const input = document.getElementById('input'); // Pegar o input onde mostrará os cálculos
const resultInput = document.getElementById('result'); // Pegar o input do resultado

// Impedir que o usuário vá digitar, ou seja, só utilizar os botões. Se tentar digitar uma letra, não permitir. Neste array, temos a lista dos caracteres permitidos
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

// O evento 'keydown' identifica quando uma tecla é pressionada
input.addEventListener('keydown', function(ev){
    ev.preventDefault(); // Prevenir o comportamento padrão da função
    
    // Se a tecla do evento pressionada estiver inclusa nas allowedKeys
    if(allowedKeys.includes(ev.key)){ 
        input.value += ev.key;
        return; 
    }

    if(ev.key === 'Backspace'){ // Se a tecla pressionada for backspace
        input.value = input.value.slice(0, -1);
    }

    // Outra tecla que também deve ser permitida é o ENTER
    if(ev.key === 'Enter'){
        calculate(); // Fará a função calculate() ao pressionar o enter
    }

});

/* Esta função define que as teclas clicadas na aplicação funcionem */

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value; // Vou pegar dentro de todos os 'data-', vou pgar o 'data-value';
        input.value += value; // Então, pegarei o input.value e incrementarei com o botão pressionado
    });
});

// Função CLEAR, então, ao clicar no botão 'C', ele irá limpar o input
document.getElementById('clear').addEventListener('click', function(){
    input.value = ''; // Deixar o valor do input vazio
    input.focus(); // Imediatamente focar no input
});

// Função RESULT no botão de igual. Note que eu coloquei 'calculate' estou chamando a função
// E não o seu resultado
document.getElementById('equal').addEventListener('click', calculate);



// Funcionalidade de trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', changeTheme);

// Copiar para Área de Transferência
document.getElementById('copyToClipboard').addEventListener('click', copyClipboard);
