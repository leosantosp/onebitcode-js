function addContact(){
    const section = document.getElementById('contacts-list');

    // Criar título para contato
    const h3 = document.createElement('h3');
    h3.innerText = 'Novo Contato';

    const ul = document.createElement('ul');
    
    // dentro dessa ul, preciso de uma li
    const nameLi = document.createElement('li');
    nameLi.innerText = 'Nome: ';
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'fullname';
    nameInput.className = 'form-control';
    nameLi.appendChild(nameInput);
    ul.appendChild(nameLi);

    ul.appendChild(document.createElement('br'));

    const phoneLi = document.createElement('li');
    phoneLi.innerText = 'Phone: ';

    const phoneInput = document.createElement('input');
    phoneInput.type = 'phone';
    phoneInput.name = 'phone';
    phoneInput.className = 'form-control';
    phoneLi.appendChild(phoneInput);
    ul.appendChild(phoneLi);

    ul.appendChild(document.createElement('br'));


    const addressLi = document.createElement('li');
    addressLi.innerHTML = "<label for='address'>Endereço</label>";

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.name = 'address';
    addressInput.className = 'form-control';
    addressLi.appendChild(addressInput);
    ul.appendChild(addressLi);

    ul.appendChild(document.createElement('br'));


    // append -> permite adicionar varios elementos de uma vez só
    section.append(h3, ul);

}


function removeContact(){
    const section = document.getElementById('contacts-list');

    const titles = document.getElementsByTagName('h3');
    const contacts = document.getElementsByTagName('ul');
    
    // remover um dos filhos
    section.removeChild(titles[titles.length - 1]);
    section.removeChild(contacts[contacts.length - 1]);
}