/* Vamos criar funções auxiliares, pois utilizaremos muito código repetitivo */

/* 
    Ela vai receber como parâmetro um texto e um htmlfor, que é o 'for' da label
*/
function createLabel(text, htmlFor){
    // Label vai ser igual a document.createElement que será do tipo label
    const label = document.createElement('label');
    
    label.htmlFor = htmlFor; // vou setar que o htmlFor será igual ao htmlFor que recebemos
    label.innerText = text; // vou setar que o texto recebido será colocado no innertext
    return label; // Retornar o resultado label
}

/* Criaremos uma função para criar Inputs, ele receberá id, value, name, type e placeholder
especificamente definimos em type para que o padrão seja text, caso não especificado */
function createInput(id, value, name, type = 'text', placeholder = '') {
    const input = document.createElement('input');
    input.id = id;
    input.value = value;
    input.name = name;
    input.type = type;
    input.placeholder = placeholder;

    return input;
}

/* Vamos começar a adicionar os comportamentos na página */
/* 
    Primeira coisa que nós queremos é que quando for clicando em addTech 
    aconteça algumas coisas.
*/

const addTechBtn = document.getElementById('addTechBtn');
const form = document.getElementById('devForm');
const developers = []; // Array onde vamos salvar os desenvolvedores
let inputRows = 0; // Criaremos uma variável para o n° de linhas que vamos ter de techs

/* Agora vou criar um evento de click para o meu botão de addTechBtn, que receberá uma
função de callback e dentro desta função iremos criar alguns elementos e colocá-los na tela */
addTechBtn.addEventListener('click', function(ev){
    const stackInputs = document.getElementById('stackInputs'); // pegando a 'ul'

    const newRow = document.createElement('li'); // Criar uma nova linha, um novo 'li' na 'ul'
    const rowIndex = inputRows; 
    inputRows++;
    
    /* Este inputRows, ele será o tamanho total, para cada elemento, 
    teremos um índice para cada 'li'. A teoria é que cada vez que for clicado, ele
    complementará o inputRows, incrementando-o e aumentando seu valor, fazendo com
    que cada vez que seja criado, um novo id seja atribuído. 
    Para tornar fácil o rastreamento.
     */
    newRow.id =  'inputRow-' + rowIndex;
    newRow.className = 'inputRow';

    /* Ele será a label para aparecer junto com o input da tecnologia */
    const techNameLabel = createLabel('Nome: ', 'techName-' + rowIndex);
    const techNameInput = createInput('techName-' + rowIndex, null, 'techName');

    // Agora precisamos por o input de radio
    const expLabel = createLabel('Experiência: ');

    const id1 = 'expRadio-'+rowIndex + '.1';
    const expRadio1 = createInput(id1, '0-2 anos', 'techExp-'+rowIndex, 'radio');
    const expLabel1 = createLabel('0-2 anos', id1);

    const id2 = 'expRadio-'+rowIndex + '.2';
    const expRadio2 = createInput(id2, '3-4 anos', 'techExp-'+rowIndex, 'radio');
    const expLabel2 = createLabel('3-4 anos', id2);

    const id3 = 'expRadio-'+rowIndex + '.3';
    const expRadio3 = createInput(id3, '+5 anos', 'techExp-'+rowIndex, 'radio');
    const expLabel3 = createLabel('+5 anos', id3);

    // Agora vamos criar o botão de remover a linha
    const removeRowBtn = document.createElement('button');
    removeRowBtn.type = 'button';
    removeRowBtn.innerText = 'Remover tecnologia';
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow);
    });

    
    // O append() é utilizado para adicionar vários filhos dentro deste elemento
    newRow.append(
        // Insiro para que ele seja adicionado dentro da nova linha, a 'label' e depois o 'input'
        techNameLabel, techNameInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowBtn
    );
    
    // Dentro da ul 'stackInputs', eu vou inserir uma 'newRow'
    stackInputs.appendChild(newRow);
    
});

/** Comportamento do formulário */

form.addEventListener('submit', function(ev){
    ev.preventDefault(); // Não atualizar a página, preventDefault impede o comportamento padrão

    const fullnameInput = document.getElementById('fullname');
    const inputRows = document.querySelectorAll('.inputRow'); // Pegar todas as linhas

    let technologies = [];
    inputRows.forEach(function(row){
        // Ele terá um seletor dinâmico, quero pegar o elemento com id igual a row.id
        // #rowId dentro desse rowId, to pegando o input[name] e o seu valor.
        const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value;
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value;
        technologies.push({name: techName, exp: techExp});
    });

    const newDev = {
        fullname: fullnameInput.value,
        technologies: technologies
    }

    developers.push(newDev);
    alert('Dev cadastrado com sucesso!');

    // Limpar os formulários
    fullnameInput.value = '';
    inputRows.forEach(function(row){
        row.remove();
    });

    console.log(developers);
})