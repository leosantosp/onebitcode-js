## OPERADOR SPREAD

- É um operador que permite espalhar (do inglês, spread) os elementos de um objeto iterável, como um array ou uma string (é como uma lista, podemos adicionar);

- Utiliza três pontos: ...iterableObject (sintaxe)

- Pode ser usado para diferentes fins como por exemplo: 
    [x] - Passar vários parâmetros de uma única vez. 
    [x] - Clonar objetos iteráveis.
    [x] - Fazer manipulações sem afetar o objeto original
    [x] - Transformar strings em arrays



Exemplo: 
```js

    let srt = "Olá, mundo!";
    let arr = [4,2,8,3,1];

    console.log(...str) // Separa as letras ' O l á , M u n d o '
    console.log(...arr) // Separa os elementos 4 2 8 3 1
```