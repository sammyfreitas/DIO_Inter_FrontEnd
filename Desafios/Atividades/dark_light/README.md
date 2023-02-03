# Entendendo o D.O.M.
## O que é
   <b>Document Object Model</b></br>
   O DOM HTML é um padrão de como <b>acessar e modificar os elementos HTML de uma págia</b>.</br>

![image](https://user-images.githubusercontent.com/55243757/151561073-05e81c1a-478e-4fa4-a065-42ed380207ac.png)</br>

## D.O.M vs B.O.M
   O `DOM` é a árvore de dependências do `HTML`, enquanto a o `BOM` é a árvore de dependências do `Browser`.</br>

   <b>BOM</b> Browser Object Model</br>
   
   * Tudo o que está dentro do objeto window.</br>
![image](https://user-images.githubusercontent.com/55243757/151561544-ee74652a-23c0-429c-a17d-131b0275f791.png)</br>

## Métodos
   <b>Estrutura HTML</b></br>

![image](https://user-images.githubusercontent.com/55243757/151563078-4716d986-98f7-4616-8380-e2474447c64a.png)

   Selecionando os elementos de uma página</br>
![image](https://user-images.githubusercontent.com/55243757/151563943-8ce42fd3-a5e9-4ffd-a9e9-f0ae3769d4fd.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151564556-174eb072-7240-45a8-ad47-6693dd3befa9.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151564668-bd6fa15a-abb9-49e1-94ef-24b2f7f93403.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151565469-31edf973-c276-4a44-b89a-69802b6b310d.png)  ![image](https://user-images.githubusercontent.com/55243757/151565828-25100063-2792-4130-b687-d03d973f8688.png)

## Classes
   Element.classList</br>

![image](https://user-images.githubusercontent.com/55243757/151566757-1d546a52-188a-4d2b-8208-3d328338479a.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151567276-22de2cfd-abdc-49f0-a98d-6c5fecc93c64.png)</br>

![image](https://user-images.githubusercontent.com/55243757/151567538-463f777c-282f-4b87-b31b-1384ae2bcf16.png)</br>

   Acessando diretamento o `CSS` de um elemento

![image](https://user-images.githubusercontent.com/55243757/151567946-cc4e42f2-4a2a-4b07-80af-695a2aa1777d.png)

# Eventos
## Tipos
   * <b>Eventos do mouse</b> mouseover, mouseout</br>
   * <b>Eventos de clique</b> click, dbclick</br>
   * <b>Eventos de atualização</b> change, load</br>

## Acionando eventos
   Podem ser programados via javascript adicionando `listerns` aos elementos do `DOM` ou adicionados diretamente em tags no `HTML`.</br>

   <b>Event listener</b></br>
   Diretamente no Javascript, cria um evento que vai ser acionado no momento em que o usuário realizar determinada ação.</br>

![image](https://user-images.githubusercontent.com/55243757/151570761-0c1b2402-ebf4-40e8-b471-282500a116c7.png)</br>
   
   <b>Atributo HTML</b></br>
   Especifica a função a ser chamada diretamente no elemento `HTML`.</br>

![image](https://user-images.githubusercontent.com/55243757/151571587-b1fb5463-506e-4a97-b796-b385a2786fb5.png)