const person = {
    name: 'Leonardo',
    job: 'Assistente',
    parents: ['Jose', 'Eliane']
}

const name = person.name;

// Variável desestruturada
const { job, parents } = person; //Ele já entende que queremos desestruturar o objeto person e pegar as propriedades job e parents

console.log(name, job, parents);

//-----------------------

const [father, mother] = parents; // Ela vai dizer que queremos quebrar o array e pegar essas duas variáveis

console.log(father, mother);

//----------------- 
// Também conseguimos com funções, dentro dos parâmetros

function createUser({ name, job, parents }){
    const id = Math.floor(Math.random() * 9999); // Pegar um número aleatório
    return {
        id, 
        name: name,
        job: job,
        parents: parents
    }
}

const leo = createUser(person);

console.log(leo);