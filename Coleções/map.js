//MAP - Apresentação do curso

// Coleções Chaveadas
//Objetivo do Curso 
// 1 - Apresentar o objeto Map
// 2 - Apresentar o objeto Set

/**************************************** */

//MAP - Estrutura, Métodos e Map vs Objeto

const myMap = new Map()

/*Características:
- Uma coleção de arrays no formato [chave,valor]
;
- Pode interado  por um loop for...of
*/

// Métodos - Coleções Chaveadas
// Adicionar, ler e deletar
const myMap = new Map()

myMap.set('apple','fruit');
//Map(1) {"apple" => "fruit"}

Mymap.get(apple);
//"fruit"

myMap.delete("apple")
// true

myMap.get("apple")
//undefined

//Map vs Objeto
/* 
- Maps poder ter chaves de qualquer tipo;
- Maps possuem a propriedade length;
- Maps são mais fáceis de iterar;
- Utilizando quando o vlaor das chaves é desconhecido;
- Os valores tem o mesmo tipo; */