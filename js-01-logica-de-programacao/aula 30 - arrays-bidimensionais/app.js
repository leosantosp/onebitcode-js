// ARRAY COMUM
const arr = [
    "1° Nível",
    "2° Nível",
    "3° Nível"
]

console.log(arr); 


// ARRAY BIDIMENSIONAIS -> ARRAYS DENTRO DE UM ARRAY
const arrbid = [
    [
        "1° Nível",
        "2° Nível",
        "3° Nível"
    ],
    [
        ["1° Nível", 42],
        ["2° Nível", 52],
        ["3° Nível", 62]
    ],
    [
        "1° Nível",
        "2° Nível",
        "3° Nível"
    ]
]

console.log(arrbid[1][0]);


// EXEMPLO DE MATRIZ COM ARRAY BIDIMENSIONAL
const matriz = [
    ["l1, c1", "l1, c2", "l1, c3", "l1, c4"],
    ["l2, c1", "l2, c2", "l2, c3", "l2, c4"],
    ["l3, c1", "l3, c2", "l3, c3", "l3, c4"]
]

console.table(matriz);

matriz.push(["Nova linha"])
matriz[0].push(['Nova coluna']);
console.table(matriz);
