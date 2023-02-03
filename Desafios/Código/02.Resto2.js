/*Programando com JS
2 / 5 - Resto 2
----------------------------------------------------------------
 Intermediário
 Princípios Básicos
----------------------------------------------------------------
Desafio
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.

Entrada
A entrada contém um valor inteiro N (N < 10000).

Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

 
Exemplo de Entrada	Exemplo de Saída
13

2
15
28
41
...
 
*/

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde:  
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário; 
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente. 

let lines = gets().split('\n');

let N = parseInt(lines.shift());
for ( let i = 1; i < 10000; i++) {
 

//TODO: Imprima todos valores que quando divididos por N dão resto = 2, um por linha.

	if (i% N==2) print(i);
}