const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function(){
    input.value = 'Olá, mundo!';
    console.log(input.value); // Comportamento em tempo real, pega o valor em tempo real
    // getAttribute vai pegar o valor de um atributo
    console.log(input.getAttribute('value')); // Ele pegará o valor que está no HTML, 'pré-definido'

});

document.getElementById('type').addEventListener('click', function(){
    input.type = input.type !== 'date' ? 'date' : 'text';
    // setAttribute vai setar um valor de atributo
    input.setAttribute('type', 'radio');

});

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo...';
});

document.getElementById('disable').addEventListener('click', function(){
    // Vou transformar ele em um valor diferente do atual utilizando !input.disabled, eu nego o valor atual dele
    input.setAttribute('disabled', !input.disabled);
    input.disabled = true;
});

document.getElementById('data').addEventListener('click', function(){
    // Propriedade de cada elemento que referencia todos os atributos do tipo 'data-'
    const data = input.dataset.something;
    console.log("O valor do atributo data-something é: " + data);
    input.dataset.something = 'Algum outro valor';
    console.log("O valor do atributo data-something agora é: " + data);

})