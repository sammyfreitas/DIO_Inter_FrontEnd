// Função Autoinvocável
//Uma função anônima entre parênteses, seguida por outro par de parênteses, que representa sua chamada.
// Também pode ser utilizada com parâmetros ou armazenada em uma variável.
(
  function (a,b){
    return a + b;
  }
  )(1,2); //3
//..............................
const soma3 = (
  function () {
    return a +b;
  }
)(1,2);
console.log(soma3) //3

// Callbacks
// Uma função passa como argumento para outra....// Utilizando callbacks, você tem maior controle da ordem de chamadas.
const calc = function (oprecao,num1,num2){
  return operacao(num1,num2);
}
const soma = function (num1,num2) {
  return num1 + num2;
}
const sub = function(num1,num2){
  return num1 - num2;
}

const resultSoma = calc(soma,1,2);
const resultSub = calc(sub,1,2);

console.log(resultSub); //1
console.log(resultSoma); //3