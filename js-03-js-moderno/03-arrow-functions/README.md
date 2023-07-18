## ARROW FUNCTIONS

Uma arrow function é uma forma diferente de escrever funções anônimas. 

Não utiliza a palavra function, utiliza '=>' após os parâmetros (por isso arrow, do inglês, seta ou flecha).

Não possui seus próprias this, arguments, super e new.target

Também permite retornar diretamente uma expressão, caso seja uma função de uma única linha. 

Exemplo: 

```js

const sum = (a, b) => {
    return a + b
}

const multiply = (a, b) => a * b

```