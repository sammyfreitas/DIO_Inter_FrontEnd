/* Estrutura, Métodos e Set vs Array */

//Estrutura

const myArray = [ 1,1,2,2,3,4,5,6,7,8,2,1];
const mySet = new Set(myArray);

// Sets são estruturas que armazenam apenas valores únicos.

//Métodos
// Adicionar , consultar e deletar
const mySet = new Set();

mySet.add(1);
mySet.add(5);

mySet.has(1); //true
mySet.has(3); //false
meySet.delete(5);

//Set vs Array
/* 
- Possui valores únicos;
- Em vez da propriedade lenght, consulta-se o número de registros pela propriedade size;
- Não possui os métodos map, filter, reduce etc.
*/