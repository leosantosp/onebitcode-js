## OPERADOR DE COALESCÊNCIA NULA

Operador lógico (AND OR) que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o operando do lado esquerdo. 

Utiliza dois pontos de interrogação "??"

Vale destacar que ele é diferente do operador lógico OU ("||"), que dá pra curto-circuito em expressões falsy (por exemplo, o número 0);

Pode ser usado para operações lógicas e também para atribuições de valores padrão através de short-circuit evaluation (avaliação de curto-circuito)

Exemplo:

```js

    let a = 0;

    let c = a || 42 // c será 42
    c = a ?? 42 // c será 0, pois 0 é falsy, mas não nullish
    c = null ?? 42 // c será 42

```