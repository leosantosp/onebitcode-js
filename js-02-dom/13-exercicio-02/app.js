const addTech = document.getElementById('addTech'); // Botão addTech
const removeTech = document.getElementById('remove-tech');
const devsList = document.getElementById('devs-list'); // Lista de Devs
const cadDev = document.getElementById('cadDev'); // Botão cadDev

const techs = "";


function newTech(ev){
    ev.preventDefault();
    /* Peguei a section 'techs-list' pelo ID */
    const techsList = document.getElementById('techs-list');
    
    // Criar o elemento 'li'
    const newLi = document.createElement('li');
    newLi.className = 'tech-item';
    newLi.innerText = "Nova tecnologia: ";

    const techName = document.createElement('input');
    techName.type = 'text';
    techName.name = 'tech-name';

    const techExpName = document.createElement('label');
    techExpName.for = 'tech-exp';
    techExpName.innerText = ' Experiência';

    const techExp = document.createElement('input');
    techExp.type = 'radio';
    techExp.name = 'tech-exp';
    techExp.id = 'tech-exp1';

    const labelExp = document.createElement('label');
    labelExp.for = 'tech-exp1';
    labelExp.innerText = '0 - 2 Anos';

    const techExp2 = document.createElement('input');
    techExp2.type = 'radio';
    techExp2.name = 'tech-exp';
    techExp2.id = 'tech-exp2';

    const labelExp2 = document.createElement('label');
    labelExp2.for = 'tech-exp2';
    labelExp2.innerText = '3 - 4 Anos';

    const techExp3 = document.createElement('input');
    techExp3.type = 'radio';
    techExp3.name = 'tech-exp';
    techExp3.id = 'tech-exp3';

    const labelExp3 = document.createElement('label');
    labelExp3.for = 'tech-exp3';
    labelExp3.innerText = '3 - 4 Anos ';

    const removeTech = document.createElement('button');
    removeTech.id = 'remove-tech';
    removeTech.innerText = 'Remover tecnologia';
    
    newLi.appendChild(techName);
    newLi.appendChild(techExpName);
    newLi.appendChild(techExp);
    newLi.appendChild(labelExp);
    newLi.appendChild(techExp2);
    newLi.appendChild(labelExp2);
    newLi.appendChild(techExp3);
    newLi.appendChild(labelExp3);
    newLi.appendChild(removeTech);
    techsList.appendChild(newLi);



}

function deleteTech(){
    const techToRemove = document.getElementById('tech-name').value;

    
    
}


addTech.addEventListener('click', newTech);

removeTech.addEventListener('click', deleteTech);