**- TIPOS DE DADOS --**

No JavaScrip, dados podem ser representados em formas diferentes.

Os tipos mais básicos, são os tipos PRIMITIVOS, são eles:
        - number (representação de númericos tanto inteiros como floats, no entanto possui um limite) e bigint (bigint representa um tipo númerico imenso, para usá-lo só colocar um 'n' no final do numero)
        - string (tipo de texto)
        - boolean (true or false)
        - null e undefined (nulo e não definido)

    typeof -> retorna o tipo de dado de um elemento


Outros tipos que existem também que são OBJETOS e FUNÇÕES
        - objeto é um conjunto de várias informações e permite armazenar vários valores diferentes
            window {
                0: window,
                1: window,
                2: window,
            }

        - funções são tarefas que você consegue executar dentro do seu código

-- VARIÁVEIS --

Servem para armazenar os dados para podermos usá-los no código
Criando variáveis podem ser com:
        - var -> Ao declarar um var, eu posso trocar o valor da variável (mais antiga e inapropriada)
        - let -> Ele funciona da mesma forma que o var, mas é uma forma mais moderna de declarar
        - const -> um tipo de dado para constante, um valor que não vai mudar.

-- OPERADORES --
    - Aritméticos
    - Agrupamento
    - Atribuição
    - Encadeamento
    - Incrementar / Decrementar

-- OPEADORES LOGICOS --

E (AND) ou &&
Ou (OR) usamos o ||
Não (NOT) usamos o !


--- WHILE ---
Cria laço de repetição que será executado enquanto uma determinada condição for verdadeira. 
O while aceita o break para parar a repetição a qualquer momento. 

-- DO WHILE --
O do while é parecido com o while, porém ele garante que o código será executado ao menos uma vez, mesmo que a condição seja falsa. 

No do while a primeira verificação da condição só acontece depois que o bloco foi executado uma vez. 
Faça alguma coisa enquanto condição

Sintaxe:

do {
    //...
} while (condição)


-- FOR --
For também serve para realizar repetições, porém a estrutura
é diferente do while e do while

Ele existe para abreviar o código em casos que seguem uma
estrutura especifica

PARA inicialização, condição, finalização FAÇA alguma coisa
*Incialização:* expressão que é executada antes de tudo
*Condição:* testada antes da execução do bloco
*Finalização:* expressão executada após o bloco de repetição


Um exemplo comum de uso do for é quando queremos iterar um número fixo de vezes, como uma vez para cada letra de uma palavra, ou uma vez para cada item de uma lisa. 

Sintaxe

for(inicializacao;condicao;finalizacao){}

