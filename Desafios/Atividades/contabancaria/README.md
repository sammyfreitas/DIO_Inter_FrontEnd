## Atividade: Conta Bancária
   Nesta atividade, vamos testar os conceitos de Orientação a Objetos simulando a criação de diversos tipos de contas bancárias e operações disponíveis em cada uma.

   - Criar a classe `ContaBancaria`, que possui os parâmetros `agencia`, `número`, `tipo` e `saldo`;
   - Dentro de `ContaBancaria`, construa o <b>getter</b> e o <b>setter</b> de `saldo`;
   - Dentro de `ContaBancaria`, crie os métodos `sacar` e `depositar`;
   - Criar uma classe-filha chamada `ContaCorrente` que herda todos esses parâmetros e ainda possua o parâmetro `cartaoCredito`;
   - Ainda em `ContaCorrente`, construa o <b>getter</b> e o <b>setter</b> de `cartaoCredito`;
   - Ainda em `ContaCorrente`, faça com que o `tipo` seja 'conta corrente' por padrão;
   - Crie uma classe-filha chamada `ContaPoupanca` que herda todos os parâmetros de `ContaBancaria`;
   - Crie uma classe-filha chamada `ContaUniversitaria` que herda todos os parâmetros de `ContaBancaria`;
   - Faça com que o método `saque` de `ContaUniversitaria` apenas seja capaz de sacar valores <b>menores que 500 reais</b>.

## Demonstração do resultado do exercício

![image](https://user-images.githubusercontent.com/55243757/151379596-5f147fb6-14c8-497d-83cb-52eafa8aaa2a.png)