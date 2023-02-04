/* ### MÉTODOS - Eles são funções atreladas a objetos */

let pessoa = {
    nome: "Leonardo",
    idade: 23,
    // Função dentro de objeto não precisa de function
    dizerOla(){
        // 'this' eu me referecio ao próprio objeto
        console.log("Olá, meu nome é " + this.nome)
    }
}

console.log(pessoa) // Retorna o objeto
typeof pessoa // retorna o tipo da variável

pessoa.dizerOla()

