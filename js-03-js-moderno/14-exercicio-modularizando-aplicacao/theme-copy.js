function changeTheme(){
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
}

function copyClipboard(ev){
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
}