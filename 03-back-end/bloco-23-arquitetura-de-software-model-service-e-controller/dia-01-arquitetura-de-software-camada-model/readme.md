# Arquitetura de Software: Camada Model

## Conteúdos

### Arquitetura de Software
Sem exercícios de fixação.

### Arquitetura MSC
Sem exercícios de fixação.

### Camada Model
Sem exercícios de fixação.

### Refatorando uma Aplicação
Sem exercícios de fixação.

### Escrevendo teste de unidade
Sem exercícios de fixação.

### Implementando o model de viagens
Sem exercícios de fixação.

### Conclusão
Sem exercícios de fixação.

### Bônus - Promise.all
#### Para fixar

-   Com o módulo  `fs`, crie uma função que lê e escreve vários arquivos ao mesmo tempo.
    
    -   Utilize o  `Promise.all`  para manipular vários arquivos ao mesmo tempo.
    -   Dado o seguinte array de strings:  `['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']`, faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a  `file<index + 1>.txt`. Por exemplo, para a string “Finalmente”, o nome do arquivo é  `file1.txt`.
    -   Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado  `fileAll.txt`.
    -   O conteúdo do arquivo  `fileAll.txt`  deverá ser  `Finalmente estou usando Promise.all !!!`.

## Exercícios

### Agora, a prática
> 🚀  _Se liga nesse foguete!_
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

⚠️  **Atenção:**  A resolução dos exercícios deste dia (5.1), será utilizada como base nos exercícios dos dias 5.2 e 5.3, portanto, lembre-se de realizá-los. 😉

Você mandou bem na refatoração! 🎉

Agora, a empresa  `Trybecar`  confiou em você para criar alguns componentes e testes somente para a camada de  `Model`.

Eles precisam que você forneça as seguintes funcionalidades que realizam acesso com o banco de dados:

🎯 Listar todas as pessoas motoristas que estão cadastradas;

🎯 Cadastrar um novo carro;

🎯 Cadastrar uma pessoa motorista;

🎯 Encontrar um carro por meio do id;

🎯 Encontrar uma pessoa motorista por meio do id;

🎯 Criar o relacionamento N:N entre as pessoas motoristas e os carros.

Para isso, crie uma branch a partir do seguinte  [repositório](https://github.com/tryber/msc-architecture-trybecar/tree/simple-application-model-course).

Agora, faça os exercícios abaixo:

## 🚀 Exercício 1

1.  Crie testes unitários da camada de model responsável por listar todas as pessoas motoristas cadastradas no banco de dados.
    
    **Você deve verificar que:**
    

-   A função retorna uma estrutura de array;
    
-   Retorna a lista de pessoas motoristas com o seguinte formato:
    

Copiar

```js
1const expected = [
2  {
3    id: 1,
4    name: 'Liana Cisneiros',
5  }, 
6  {
7    id: 2,
8    name: 'Fábio Frazão',
9  },
10];
```

De olho na dica 👀: Crie o stub da conexão com o banco de dados.

2.  Crie a camada de model responsável por listar todas as pessoas motoristas.

## 🚀 Exercício 2

1.  Crie testes unitários da camada de model responsável por cadastrar um carro no banco de dados.
    
    **Você deve verificar que:**
    

-   Retorna o id do carro cadastrado com o seguinte formato:
    

Copiar

```js
1const expected = 1;
```

2.  Crie a camada de model responsável por cadastrar um carro.

## 🚀 Exercício 3

1.  Crie testes unitários da camada de model responsável por encontrar um carro por meio do id.
    
    **Você deve verificar que:**
    

-   Retorna o carro solicitado pelo  `id`  com o seguinte formato:
    

Copiar

```js
1const expected = {
2  id: 2,
3  model: 'Volkswagen Gol',
4  color: 'Vermelho',
5  licensePlate: 'DZG-4376',
6};
```

2.  Crie a camada de model responsável por encontrar um carro por meio do id.

## 🚀 Exercício 4

1.  Crie testes unitários da camada de model responsável por encontrar uma pessoa motorista por meio do id.
    
    **Você deve verificar que:**
    

-   Retorna a pessoa motorista solicitado pelo  `id`  com o seguinte formato:
    

Copiar

```js
1const expected = {
2  id: 1,
3  name: 'Liana Cisneiros',
4};
```

2.  Crie a camada de model responsável por encontrar uma pessoas motorista por meio do id.

## 🚀 Exercício 5

1.  Crie testes unitários da camada de model responsável por cadastrar uma pessoa motorista.
    
    **Você deve verificar que:**
    

-   Retorna a pessoa motorista cadastrada com o seguinte formato:
    

Copiar

```js
1const expected = 1;
```

2.  Crie a camada de model responsável por cadastrar uma pessoa motorista.

## 🚀 Exercício 6

1.  Crie testes unitários da camada de model responsável por criar o relacionamento N:N entre as pessoas motoristas e os carros.
    
    **Você deve verificar que:**
    

-   Retorna o relacionamento entre motorista e carro cadastrado com o seguinte formato:
    

Copiar

```js
1const expected = 1;
```

2.  Crie a camada de model responsável por cadastrar as pessoas motoristas com o relacionamento N:N com os carros cadastrados.

---