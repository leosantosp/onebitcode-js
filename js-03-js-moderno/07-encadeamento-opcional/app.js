const user = {
    name: "John Doe",
    email: "doejohn@email.com",
    friends: [{
      name: "Mary",
      address: {
        street: "Some Street",
        number: 89
      }
    }],
    age: 42,
    phone: {
      countryCode: "+55",
      ddd: "22",
      number: "998765432"
    }
  }
  
// Se quisessemos exibir, você sabe que n existe a propriedade phone dentro de friends
console.log(user.friends[0].phone.ddd); // Ele retorna o erro cannot read properties of undefined (reading 'ddd');

// Como evitar este erro?
console.log(user?.friends[0]?.phone?.ddd);
/*
  Tentar ler o user, se ele não for null ou undefined
  aí ele tenta ler a próxima propriedade

  Agora se for null ou undefined, ele vai devolver imediatamente (parar de ler).
*/

console.log(user.brothers?.[5].name);
// Para ler arrays