// SESSION STORAGE -> Após fechar a guia, as informações são limpas
document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session');
    // O sessionStorage por ser uma propriedade dentro do window, não há necessidade de chamar o window
    // O setItem('nome do index', valor que será atribuido);
    sessionStorage.setItem('info', input.value);

    /* Nós temos outras funções no sessionStorage, segue algumas:
        * removeItem('nome do index') -> remove um item do session
        * clear -> limpa todos os valores dentro da session
        * getItem('nome do index') -> pega o valor de um item da session
        * length -> pega quantos valores existem dentro do sessionStorage
        * key(number) -> revela o nome da key que esta na posição indicada
    */

    input.value = ''; // Limpar após armazenar a informação

});

// Para ler os dados do sessionStorage
document.getElementById('readSession').addEventListener('click', function(){    
    const info = sessionStorage.getItem('info');
    alert('A informação salva é: ' + info);
});



// LOCAL STORAGE -> Após fechar a guia, as informações continuam gravadas
document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local');
    // localStorage tem as mesmas funções que o sessionStorage
    localStorage.setItem('text', input.value);

    input.value = '';
});

// Para ler os dados do LocalStorage
document.getElementById('readLocal').addEventListener('click', function(){    
    const text = localStorage.getItem('text');
    alert('O texto salvo é: ' + text);
});


// COOKIES
document.getElementById('cookieBtn').addEventListener('click', function(){
    // Os Cookies são mais elaborados de se trabalhar
    const input = document.getElementById('cookie');
    
    // expires -> data no formato utc quando ele expirará
    // path -> caminhos onde o cookie ficará disponível
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';';
    const expiration = 'expires=' + new Date(2023,7,17) + ';';
    const path = 'path=/;'; // Ficará disponível em qualquer página

    document.cookie = cookie + expiration + path;

    input.value = '';
    console.log(document.cookie);
});

document.getElementById('cookie2Btn').addEventListener('click', function(){
    // Os Cookies são mais elaborados de se trabalhar
    const input = document.getElementById('cookie2');
    
    // expires -> data no formato utc quando ele expirará
    // path -> caminhos onde o cookie ficará disponível
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';';
    const expiration = 'expires=' + new Date(2023,8,17) + ';';
    const path = 'path=/;'; // Ficará disponível em qualquer página

    document.cookie = cookie + expiration + path;

    input.value = '';
    console.log(document.cookie);
});