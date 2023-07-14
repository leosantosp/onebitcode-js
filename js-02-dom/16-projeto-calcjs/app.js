/* Vamos começar pela funcionalidade de digitar na calculadora */

const main = document.querySelector('main'); // Nossa tag <main>
const root = document.querySelector(':root'); // O element ':root' do CSS
const input = document.getElementById('input'); // Pegar o input onde mostrará os cálculos
const resultInput = document.getElementById('result'); // Pegar o input do resultado

// Impedir que o usuário vá digitar, ou seja, só utilizar os botões. Se tentar digitar uma letra, não permitir

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];
// Neste array, temos a lista dos caracteres permitidos

// O evento 'keydown' identifica quando uma tecla é pressionada
input.addEventListener('keydown', function(ev){
    ev.preventDefault(); // Prevenir o comportamento padrão da função
    
    // Se a tecla do evento pressionada estiver inclusa nas allowedKeys
    if(allowedKeys.includes(ev.key)){ 
        // Vou pegar o value do input e juntar com a key pressionada
        input.value += ev.key;
        return; // Dar um return para encerrar a função
    }

    /* Até o momento, caso tentemos utilizar os botões pressionados, veremos que realmente
    ele não realiza a leitura das teclas, no entanto, o botão backspace 'apagar' não está
    funcionado. Vamos tratá-lo manualmente */

    if(ev.key === 'Backspace'){ // Se a tecla pressionada for backspace
        /* 
            Vou pegar o meu input.value e vou fazer um slice
            slice, vai cortar meu valor, colocamos o '0' para indicar que pegarei do
            primeiro valor e o -1, o '-1' indica que será 'até o penúltimo caractere' então
            ele cortará o último valor. Se fosse '-2' seria o anti-penúltimo.
        */
        input.value = input.value.slice(0, -1);
    }

    // Outra tecla que também deve ser permitida é o ENTER
    if(ev.key === 'Enter'){
        calculate(); // Fará a função calculate() ao pressionar o enter
    }

});

/* Outra coisa que precisamos definir é que não apenas as teclas pressionadas, 
mas as teclas na tela também precisam ser consideradas. No nosso HTML, definimos
todas as keys com a classe 'charkey' e utilizaremos ela para adicionar a funcionalidade
em todas de uma vez */

document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
    // forEach será executado para cada um dos botões
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


// Calcular todos os botões digitados
function calculate(){
    // Se colocarmos valores errados, como retornaremos os erros? 
    // Ele vai por padrão executar essas duas linhas e depois calcular o resultado
    resultInput.value = 'ERRO'; 
    resultInput.classList.add('error');

    // eval -> Avalia o código JS e executa o código
    // função eval precisa utilizar com muito cuidado, pois se a aplicação tem um back-end, pois
    // o usuário vai conseguir executar códigos JS dentro do código. 
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove('error');
    
}

// Funcionalidade de trocar o tema
document.getElementById('themeSwitcher').addEventListener('click', function(){
    if(main.dataset.theme === 'dark'){
        // O setProperty permite inserir uma propriedade no CSS
        root.style.setProperty('--bg-color', '#F1F5F9');
        root.style.setProperty('--border-color', '#AAA');
        root.style.setProperty('--font-color', '#212529');
        root.style.setProperty('--primary-color', '#26834A');

        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#666');
        root.style.setProperty('--font-color', '#F1F5F9');
        root.style.setProperty('--primary-color', '#4dff91');

        main.dataset.theme = 'dark';
    }
});

// Copiar para Área de Transferência
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    // O 'ev' foi utilizado para podermos pegar o botão
    const button = ev.currentTarget; // Quem acionou a função, ou seja, nosso botão
    if(button.innerText === 'Copy'){
        button.innerText = 'Copied!';
        button.classList.add('success');
        /* 
            IMPORTANTE: Diferença entre classList.add e className
            * O className altera o atributo class trocando todos os valores pelo que for passado depois do =
            * O classList.add() conseguimos passar várias classes como parâmetro e essas classes serão adicionadas no elemento selecionado,
            não alterando os valores que já estavam no atributo. 
        */

        /* 
            Copiar texto para área de transferência utilizando navigator, que é o navegador 
            Nessa área conseguimos escrever textos -> writeText, ler textos read
        */
        navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = 'Copy';
        button.classList.remove('success');
    }
});
