/*Programando com JS
3 / 5 - Nossos Dias Nunca Voltarão
----------------------------------------------------------------
 Intermediário
 Princípios Básicos
----------------------------------------------------------------
Desafio
E aí? Curtiu a Escola de Inverno deste ano? Para que esta Escola acontecesse, foram muitos que trabalharam, seja na elaboração dos problemas, na configuração do Portal, na logística do evento ou na captação dos recursos. Nosso agradecimento especial deste ano vai para o Prof. Ricardo Oliveira, que não somente aceitou vir ministrar as oficinas como também participou ativamente na organização da Escola. Temos certeza que a experiência e a carreira dele no ICPC como competidor e como coach motivaram e inspiraram todos nós.

Esperamos que você tenha gostado desses últimos dias em Essos e em Westeros, que tenha aprendido bastante e que tenha se divertido. Mas não é só em Essos e em Westeros que você deve se divertir. Aqui, em Além da Muralha, programar também é divertido. Continue estudando, continue treinando, e cada vez mais. O importante é o caminho que você vai trilhar daqui para frente. Nosso conselho é que você procure sempre aproveitar ao máximo cada momento, cada oficina, cada escola, cada treino, cada tempo de prática ou estudo em casa. Nossos dias nunca voltarão.

Entrada
A entrada consiste de um único inteiro N (1 ≤ N ≤ 34) numa linha.

Saída
Imprima os N primeiros caracteres da citação de Søren Kierkegaard definida pelas letras que foram sublinhadas no enunciado deste problema. Preste atenção, pois nenhum espaço foi sublinhado — você é que deve adivinhar o número e a localização dos espaços na frase. A única linha da saída deve consistir apenas de letras maiúsculas e espaços e ser finalizada por fim de linha.

 
Exemplos de Entrada	Exemplos de Saída
1					L
3					LIF
7					LIFE IS

Escola de Inverno da Maratona - Erechim RS - 2015
 
*/

// A função gets() é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print() para imprimir a saída (output) de dados e já pula uma linha ("\n")


let lines = gets().split("\n");

let n = parseInt(lines.shift());
//escreva o seu código aqui

if (n >= 1 && n <= 34) {
  const texto = 'Life is not a problem to be solved.'
  const text2 = texto.substr(0, n)
  const maiusc = text2.toUpperCase()
  console.log(maiusc)
}