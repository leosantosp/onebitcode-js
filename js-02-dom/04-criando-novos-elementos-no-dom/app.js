function addInput(){
    const ul = document.getElementById('inputs');

    // Criar o elemento
    const newLi = document.createElement('li');
    newLi.className = 'list-item';
    // innerText -> apenas texto
    // innerHTML -> adicione tags direto no javascript (PERIGOSA: Permite que HTML seja executado, abre brechas na segurança)
    newLi.innerText = "Novo input: ";

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'name';
    newInput.className = 'form-control';

    // appendChild, posso passar um nó, onde posso passar outras variáveis que ficarão dentro dela
    newLi.appendChild(newInput);
    ul.appendChild(newLi);
    
}