### OBJETOS

- É uma estrutura do JS para se trabalhar com dicionários chave-valor

- O par chave-valor em um objeto javascript é chamado de propriedade
    - A chave é como nome da propriedade
    - Valor é o valor armazenado nessa propriedade

- Diferente dos arrays, seus elementos não possuem nenhuma sequência

- Uma propriedade também pode ter strings, números e booleanos como chave

- Uma propriedade pode armazenar qualquer tipo de dado como valor

- Pode ser criado através de chaves {} -> let objeto = {}

- Suas propriedades e funções podem ser referenciadas por encadeamento com ponto "." ou colchetes []
    - objeto.prop = "Olá, mundo!"
    - objeto.executar()

    - let name = "prop"
    objeto[name] = "Olá, mundo!"
    objeto.prop === objeto[name]
    let funcao = "executar"
    objeto[funcao]()