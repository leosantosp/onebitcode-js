const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc'];

console.log(towns);
console.log(...towns);
console.log(...towns[0]);

const townsCopy = towns;

townsCopy.pop(); // Excluir o ultimo elemento do array
townsCopy.pop();
townsCopy.push('Juno'); // Adiciona no final um novo elemento

console.log({towns, townsCopy}); // O towns recebe a mesma alteração que o townsCopy
// Pois arrays recebem valores por referência. 

const townsClone = [...towns];
console.log(townsClone);
townsClone.push('Aldebaran');
console.log({towns, townsCopy, townsClone});

// Existe um caso específico onde você usa spread em objetos normais
const townsObj = {
    ...towns
}

const townsObjClone = {...townsObj};
townsObjClone.test = 'Teste';
console.log({townsObj, townsObjClone});