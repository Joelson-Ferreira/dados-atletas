# DEVstart - Trilha 1. Lógica de Programação
Projeto referente ao módulo "Lógica de programação" com Java Script do programa DEVstart do SENAI.

**rojeto de certificação 2 – Dados dos atletas**<br>

<p align="center">
  <img width="720" height="420" src="https://cdn.pixabay.com/photo/2017/03/27/13/00/hands-2178566_960_720.jpg">
</p>

**Resumo do projeto**<br>
Crie uma aplicação capaz de receber informações de um atleta, bem como calcular parâmetros e exibi-los para o usuário.

**Introdução**<br>
Os organizadores da competição realizada durante o projeto anterior gostaram muito da sua solução proposta e do seu perfil de desenvolvimento. Com isso, eles resolveram fazer uma nova encomenda utilizando a linguagem JavaScript, onde você deverá criar um software capaz de receber informações dos atletas e exibir a categoria, IMC, média calculada e demais informações capturadas.

A competição em questão possui a seguinte regra de avaliação:

	1 - Cada jurado pode fornecer uma nota de um (1) a dez (10);
	2 - A média é calculada com base nas três notas do meio, desconsiderando a maior e menor nota.

O organizador da competição contratou a sua equipe para criar uma aplicação capaz de receber o nome e notas dos atletas e realizar o devido cálculo. Você foi o encarregado de criar a solução utilizando a linguagem JavaScript.

**Especificações**<br>
Você deverá criar uma classe Atleta para concentrar os atributos e métodos dos atletas.

A classe deverá receber os seguintes atributos:

    • nome
    • idade
    • peso
    • altura
    • notas

A classe deverá possuir os seguintes métodos:

    • calculaCategoria(), para calcular a categoria do atleta;
    • calculaIMC(), para calcular o IMC do atleta;
    • calculaMediaValida(), para calcular a média válida do atleta.
    • obtemNomeAtleta(), que retorna o nome do atleta
    • obtemIdadeAtleta(), que retorna a idade do atleta
    • obtemPesoAtleta(), que retorna o peso do atleta
    • obtemNotasAtleta(), que retorna as notas do atleta
    • obtemCategoria(), que retorna a categoria do atleta
    • obtemIMC(), que retorna o IMC do atleta
    • obtemMediaValida(), que retorna a média válida do atleta
Utilize as seguintes regras:

1. Para calcular a categoria

    • Infantil: 9 a 11 anos
    • Juvenil: 12 e 13 anos
    • Intermediário: 14 e 15 anos
    • Adulto: 16 a 30 anos
    • Sem categoria: demais idades

2. Para calcular o IMC

    • Fórmula: imc = peso / (altura x altura)

3. Para calcular a média válida

    • Método: Utilize o metodologia abordada no Projeto de Certificação 1.

**Entrega**<br>
Você deverá criar um repositório na sua conta do GitHub chamado dados-atletas e adicionar na branch main/master um arquivo dados-atletas.js contendo a solução do projeto. Configure o repositório como público e insira o link para ele no campo Link da solução.
  
**Aluno**<br>

- Joelson Ferreira - <a href="https://www.linkedin.com/in/joelsonferreira/" target="_blank">LinkedIn</a>

**Como executar o código?**<br>
Copie o arquivo "dados-atletas.js" para uma pasta de projeto Java Script, em seu VSCode, e execute o código.
  
<br>**ATENÇÃO: Por favor, lembre-se de que os resultados desta trabalho são para fins acadêmicos, e não representa verdade absoluta. Use essas informações com discernimento e considere outras fontes e contexto antes de tirar conclusões definitivas.**
