// This: O que é?
// A palavra reservada this é uma referência de contexto. No exemplo, this refere-se ao ojeto pessoa.

const pessoa = {
  firstName: "André",
  lastName: "Soares",
  id: 1,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
  getId: function () {
    return this.id;
  }
};

pessoa.fullName(); // "André Soares"
pessoa.getId(); // 1


//*********************************************** */
// Seu valor pode mudar de acordo com o lugarno código onde foi chamada.

//Contexto               /           Referência
//Em um objeto(metódo)   /   Próprio objeto do metódo
// Sozinha               /  Objeto global(em navegadores,window) 
//Função                 /  Objeto global
//Evento                 / Elemento que recebeu o evento

//************************************************ */
console.log(this) //  {}

(function() {
  console.log(this);
})(); // Object global []

// Manipulando seu valor
//Call

const pessoa = {
  nome: 'Miguel',
};

const animal = {
  nome: 'Murphy',
};

function getSomething() {
  console.log(this.nome);
}

getSomething.call(pessoa);
