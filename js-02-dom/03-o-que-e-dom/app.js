function show() {
    /*
        O getElementById permite que você pegue no documento um elemento que possui o id indicado dentro das aspas simples.
        Por tratar-se de um ID, ele retorna apenas um elemento.
    */
    const contactList = document.getElementById('contact-list');
    console.log(contactList);

    /**
     * O getElementsByTagName permite que você pegue no documento os elementos que possuam a tag indicado dentro das aspas simples.
     */
    const listElements = document.getElementsByTagName('li');
    console.log(listElements);

    /**
     * O getElementsByClassName permite que você pegue no documento os elementos que possuam a classe indicado dentro das aspas simples.
     */
    const contactInputs = document.getElementsByClassName('contact-input');
    console.log(contactInputs);

    /**
     * O querySelectorAll permite que você pegue no documento todos os elementos que atendam a query informada. Diferentemente dos 'get's, neste você
     * consegue ser bem mais específico sobre qual o elemento que você precisa utilizando indicativos em CSS.
     */
    const contacts = document.querySelectorAll('#contact-list > li > label');
    console.log(contacts);

    /**
     * O getElementsByName permite que você pegue no documento todos os elementos que atendam pelo nome indicado na propriedade 'name' do HTML
     */
    const contact1 = document.getElementsByName('contact1');
    console.log(contact1);

    /**
     * O querySelector funciona da mesma forma que o querySelectorAll, sua unica diferença é que o 'All' permite que você pesquisa todos os elementos que
     * atendam aquela requisição. O querySelector apenas localiza o primeiro item que ele encontrar no documento que atenda ao requisito. 
     */
    const firstContact = document.querySelector('#contact-list > li > label');
    console.log(firstContact);



}