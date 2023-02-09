
// Definir dentro do escopo, quais são as entradas que a função precisa
function double(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

// Chamando a função e passando o parâmetro
double(2)
double(5)
double() // O dobro de undefined é igula a NaN (não definido é igual Not a Number)


// É possível definir um padrão para o parâmetro caso insira nada
function sayHello(name = "usuário"){
    alert("Olá, " + name + "!");
}
sayHello("Leonardo");
sayHello()


function sum (a, b){
    alert("O resultado da soma é " + (a + b))
}

sum(2,3);


function createUser(name, email, password, type){
    const usuario = {
        name, // Mesmo que name: name
        email,
        password,
        type
    }

    console.log(usuario);
}

createUser("Leonardo", "leo.santosp@outlook.com", "1234", "admin");

//--------------------------------------------------

//FORMA INTELIGENTE DE PASSAR PARÂMETROS

function objetoComoParametro(usuario){
    usuario.nome;
    usuario.email
    usuario.telefone;
    usuario.senha;
    usuario.endereco;
    usuario.aniversario;
}

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: ""
}

objetoComoParametro(dadosDoUsuario);
