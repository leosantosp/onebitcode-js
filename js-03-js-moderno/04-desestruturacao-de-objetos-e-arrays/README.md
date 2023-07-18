## DESESTRUTURAÇÃO DE OBJETOS E ARRAYS

Funcionalidade que permite criar variáveis a partir de propriedades de um objeto ou elementos de um array

No caso das propriedades do objeto, as variáveis serão criadas com mesmo nome da propriedade

No caso dos elementos do array, podemos atribuir qualquer nome para a variável

Também pode ser utilizada de outras formas, como nos parâmetros de uma função

Exemplo: 
```js
    const { name, email } = person
    const [x, y] = coordinates

    function hello({name}){
        console.log(`Hello, ${name}`);
    }
```