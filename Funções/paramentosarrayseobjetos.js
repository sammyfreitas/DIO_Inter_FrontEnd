//Arrays

//Spread: uma forma de lidar separadamente com elementos.
// O que era parte de um array se torna um elemento independente.
function sum (x,y,z) {
  return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));

//Rest: combina os argumentos em um array
// O que era um elemento independente se torna parte de um array.
function confereTamanho(...args) {
  console.log(args.length)
}
confereTamanho() // 0
confereTamanho(1,2) // 2
confereTamanho(3,4,5) // 3

// Objetos - Object Destructuring
// Entre chaves{}, podemos filtrar apenas os dados que nos interessam em um objeto.
const user = {
  id: 42,
  displayName: 'jdoe',
  fullName: {
    firstname: 'John',
    lastName: 'Doe',
  }
};

function userId({id}) {
  return id;
}
function getFullName({fullName:{firstName: first, lastName:last}}) {
  return `${first} ${last}`
}

userId(user) //42
getFullname(user) // John Doe