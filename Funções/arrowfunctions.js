//Arrow Functions
const helloWord = function() {
  return "Hello World";
}

const helloWord = () => {
  return "Hello World";
}

const helloWord = () => "Hello World"

//Sintaxe
const soma = (a,b) => a +b;
soma(4,6); // 10

const soma = a => a;
soma(4); //4
// Caso exista apenas uma linha, pode dispensar as chaves e o return.
// Caso existe apenas um parâmetro, pode dispensar os parênteses.

//Modo correto
soma(2,4);
function soma(a,b) {
  return a + b;
} 

// Modo errado
soma(2,4)
const soma(a,b) => a + b;

//Arrow function não faz hoisting!
// Outras restrições
// - "this" sempre será o objeto global.Métodos para modificar seu valor não irão funcionar;
// - Não existe o objeto "arguments";
// - O construtur (ex: new MeuObjeto()) também não pode ser utilizado.