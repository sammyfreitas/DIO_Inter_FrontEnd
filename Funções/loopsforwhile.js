//for
//Loop dentro de elementos iteráveis(arrays,strings).
function multiplicaPorDois(arr){
  let multiplicados = [];

  for(let i =0; i < arr.lenght; i++) {
    multiplicados.push(arr[i] * 2);
  }
  return multiplicados;
}
const meusNumeros = [2,33,456,356,40];

multiplicaPorDois(meusNumeros); // [4,66,912,712,80]

//loop entre propriedades enumeráveis de um objeto.
function forInExemplo(obj) {
  for(prop in obj) {
    console.log(prop);
  }
}
const meuObjeto = {
  nome: "Joâo",
  idade: "20",
  cidade: "Salvador"
}
forInExemplo(meuObejto);
// nome
// idade
// cidade

//****************************************
 function forInExemplo(obj) {
   for(prop in obj) {
     console.log(obj[prop]);
   }
 }
 const meuObjeto = {
   nome: "João",
   idade: "20",
   cidade: "Salvador"
 }
 forInExemplo(meuObjeto);
 // João
 // 20
 // Salvador

 //***************************************
 // Loop entre estruturas iteráveis (arrays,strings).
 function logLetras(palavra){
   for(letra of palavra) {
     console.log(letra);
   }
 }
 const palavra = "abacaxi";
 logLetras(palavra)
 //a
 //b
 //a
 //c
 //a
 //x
 //i

 //************************************** */
 function logNumeros(nums) {
   for(num of nums) {
     console.log(num);
   }
 }

 const nums = [30,20,233,2];

 logLetras(nums)
 //30
 //20
 //233
 //20

 //************************************** */

 //While e do...while
 // Executa instruções até que a condição se torne falsa.
 //Porém a primeira execução sempre ocorre.
 function exemploDoWhile() {
   let num = 0;

   do {
     console.log(num);
     num++;
   } while(num <= 5)
 }
 exemploDoWhile()
 //0 
 //1
 //2
 //3
 //4
 //5

 //****************************************** */
function exemploDoWhile() {
  let num = 6;

  do {
    console.log(num);
    num++;
  } while(num <= 5)
}

exemploDoWhile()
//6