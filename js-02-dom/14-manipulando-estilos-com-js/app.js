function useLightTheme(){
    // Elemento style serve para alterarmos o style de um componente
    document.body.style.color = '#212529';
    document.body.style.backgroundColor = '#F1F5F9';

    
}

// Vou criar junto com a função, o useDarkTheme
function useDarkTheme(){
    // Elemento style serve para alterarmos o style de um componente
    document.body.style.color = '#F1F5F9';
    document.body.style.backgroundColor = '#212529';
}

function switchTheme(){
    // classList permite manipular a lista de classes
    // classList possui alguns métodos, o toggle serve para alternar. Se ele tiver
    // a classe, ele vai remover, se não tiver, ele vai adicionar
    document.body.classList.toggle('is-light');
    document.body.classList.toggle('is-dark');

}



document.getElementById('lightBtn').addEventListener('click', useLightTheme);
document.getElementById('darkBtn').addEventListener('click', useDarkTheme);
document.getElementById('switchBtn').addEventListener('click', switchTheme);

