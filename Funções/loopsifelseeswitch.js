//if/else
//Condição
//Declaração1 (dentro de if): Ocorre caso a condição seja verdadeira.
//Declaração2 (dentro de else): Ocorre caso a condição seja falsa.
function numeroPositivo(num) {
  let resultado;

  if(num < 0){
    resultado = false;
  } else {
    resultado = true;
  }

  return resultado;
}

numeroPositivo(2) // true
numeroPositivo(-9) // false

//If/else
// Javascript não tem "elseif", as palavras sempre estão espaçadas!
function numeroPositivo(num) {
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10;

  if(ehNegativo) {
    return "Esse número é negativo!";
  } else if(!ehNegativo && maiorQueDez) {
    return "Esse número é positivo e maior que 10!"
  }
  return "Esse número é positivo!";
}

//Switch
// Equivale a uma comparação de tipo e valor(===).
// Sempre precisa de uma valor "default".
// ideal para quando se precisa comparar muitos valores.