## PARÂMETROS REST | REST PARAMS

É uma técnica que permite a uma função receba qualquer número de parâmetros
    - Com ela, a gente consegue trabalhar com uma função que consegue passar pra ela, qualquer número de parâmetros

Permite que manipule esses parâmetros como um array na definição (o que diferencia do objeto arguments)

Exemplo:
```js

    function sum(...numbers){
        // Método 'reduce' só funciona em arrays
        return numbers.reduce((accum, num) => accum + num, 0);
    }

```