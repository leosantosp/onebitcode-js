function register(ev){
    console.log(ev);

    const sectionElement = ev.currentTarget.parentNode;
    /* currentTarget vou pegar o elemento que iniciou este evento */
    const username = sectionElement.children.username.value;
    const password = sectionElement.children.password.value;
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value;

    if(password === passwordConfirmation){
        alert('Usuário ' + username + ' registrado');
    } else {
        alert('Senhas não conferem');
    }
}


const button = document.getElementById('register-button');

/* 
    Adicionar um esperador de eventos 
    O primeiro parâmetro é dizer qual o evento que eu quero ficar esperando
    O segundo parâmetro é uma função de callback, funções que serão chamadas em determinado momento

*/
                        /* Lembrando que passando apenas o nome, estou repassando
                            a função como um todo e não o seu resultado */
button.addEventListener('click', register);

function removeListener(){
    button.removeEventListener('click', register);
    alert('Event Removed');
}

button.addEventListener('mouseover', function(ev){
    console.log(ev.currentTarget);
});