# Arquitetura de Software: Camada Service

## Conteúdos

### Introdução à camada Service
Sem exercícios de fixação.

### A camada Service
Sem exercícios de fixação.

### O que é Regra de Negócio?
Sem exercícios de fixação.

### Praticando 1
Sem exercícios de fixação.

### Testes de Unidade na Camada Service
Sem exercícios de fixação.

### Validações
Sem exercícios de fixação.

### Mockando a Camada Model
Sem exercícios de fixação.

### Praticando 2
Sem exercícios de fixação.

## Exercícios

### Agora, a prática

> 🚀  _Se liga nesse foguete!_
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Agora é a hora de criar algumas funções da camada Service que vão usar as funções da camada Model que fizemos anteriormente.

Nessas novas funções vamos validar se os dados que recebemos da camada Controller estão de acordo com as regras de negócio.

E para deixar bem nítido esses contratos e garantir o funcionamento da camada, vamos usar o TDD! 💪

> **Passos gerais para criação da camada de service usando TDD**
> 
> _1 - Determinar como a nossa função na camada Service vai funcionar (contrato):_
> 
> -   Que dados são recebidos pelo controller?
> -   Que validações precisam ser feitas?
> -   Quais funções do model usamos?
> -   Que resultado será retornado para o controller em cada caso?
> 
> _2 - Criar testes baseados nos contratos_
> 
> -   Testar caminhos que geram erros de validação
> -   Testar caminho que retorna com sucesso
> 
> _3 - Implementar código na camada Service_
> 
> -   Escrever funções
> -   Verificar se passam nos testes
> 
> _4 - Isolar testes usando stubs_
> 
> -   Criar stubs para recursos externos (camada Model, por exemplo)
> -   Testes devem funcionar sem os recursos disponíveis (DB, por exemplo)

#### Preparação

-   Acesse a branch dos exercícios de Model que você fez no repositório do projeto e crie uma nova branch a partir dela
-   Caso falte alguma parte, crie uma branch nova a partir da branch  `simple-application-model-live-lectures`  e copie os arquivos do gabarito do dia de Model.
-   Inicie o banco de dados e rode o script SQL da raiz do projeto para iniciar a DB
-   Feito isso, estamos prontos para a camada Service! 🚀

#### **Exercício 1 - Listar as pessoas motoristas (service)**

Crie uma função na camada Service que lista as pessoas motoristas em nosso app.

> Sobre a função

A função deve:

-   Se chamar  `getDrivers`;
-   Usar a camada Model para receber a lista de motoristas;
-   Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service.

> Exemplo de resposta bem sucedida

Copiar

```js
1{
2  type: null,
3  message: [
4    { id: 1, name: 'Liana Cisneiros' },
5    { id: 2, name: 'Fábio Frazão' },
6    { id: 3, name: 'Anastacia Bicalho' },
7    { id: 4, name: 'Samara Granjeiro' },
8    { id: 5, name: 'Levi Teixeira' },
9  ],
10}
```

##### **Parte 1.1: Crie testes unitários para a função  `getDrivers`**

> Cenários de teste

-   Listando as pessoas motoristas
    -   a lista de motoristas é um array
    -   retorna a lista de motoristas com sucesso

##### **Parte 1.2: Implemente a função  `getDrivers`  na camada Service**

-   Chame as funções da camada Model conforme a necessidade
-   Confirme que a função passa nos testes

##### **Parte 1.3: Crie stubs para isolar os testes**

-   Use stubs da função da camada Model para isolar seus testes
-   Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

#### **Exercício 2 - Cadastrar um carro (service)**

Crie uma função na camada Service que cadastra um carro em nosso app.

A função deve:

-   Se chamar  `createCar`;
-   Receber o modelo, cor e placa do novo carro;
-   Retornar um objeto de erro caso algum dado não seja recebido ou seja inválido;
-   Usar a camada Model para cadastrar um novo carro no banco de dados;
-   Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service;

> Parâmetros a serem recebidos

-   `model`: string com pelo menos 3 caracteres ex:  `"Ford Ka"`
-   `color`: string com pelo menos 2 caracteres ex.:  `"Azul"`
-   `licensePlate`: string com exatamente 7 caracteres ex.:  `"ABC1D2E"`

> Exemplo de resposta bem sucedida

Copiar

```js
1{
2  type: null,
3  message: {
4    id: 1,
5    model: 'Chevrolet Monza',
6    color: 'Branco',
7    licensePlate: 'ABC1A2B',
8  },
9}
```

> Exemplo de resposta de erro

Copiar

```js
1{
2  type: 'INVALID_VALUE',
3  message: '"model" length must be at least 3 characters long',
4}
```

##### **Parte 2.1: Crie testes unitários para a função  `createCar`**

> Cenários de teste

-   Tentando cadastrar um novo carro com erros semânticos
    -   retorna um erro ao receber um modelo inválido
    -   retorna um erro ao receber uma cor inválida
    -   retorna um erro ao receber uma placa inválida
-   Cadastrando um novo carro com sucesso
    -   não retorna erros
    -   retorna o carro cadastrado

##### **Parte 2.2: Implemente a função  `createCar`  na camada Service**

-   Crie um schema do Joi e uma função de validação para validar os dados de um novo carro
-   Chame as funções da camada Model conforme a necessidade
-   Confirme que a função passa nos testes

##### **Parte 2.3: Crie stubs para isolar os testes**

-   Use stubs da função da camada Model para isolar seus testes
-   Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente

#### 🚀  **Exercício 3 - Cadastrar uma pessoa motorista (service)**

Crie uma função na camada Service que cadastra uma pessoa motorista em nosso app.

A função deve:

-   Se chamar  `createDriver`;
-   Receber o nome da pessoa motorista;
-   Receber opcionalmente um array de ids de carros já cadastrados em nossa base de dados;
-   Retornar um objeto de erro caso o nome não seja recebido ou seja inválido;
-   Retornar um objeto de erro caso o array de carros seja inválido ex.: algum carro não exista;
-   Usar a camada Model para cadastrar a pessoa motorista no banco de dados;
-   Vincular os carros do array de ids (caso seja passada) à pessoa motorista;
-   Retornar um objeto no mesmo padrão que as outras funções da nossa camada Service,
-   A lista de carros vinculados à pessoa motorista deve ser retornada junto com as outras informações da pessoa motorista.

> Parâmetros a serem recebidos

-   `name`: string com pelo menos 3 caracteres ex:  `"Gena"`
-   `carIds`: array com os ids dos carros a serem vinculados com a pessoa motorista (opcional)

> Exemplo de resposta bem sucedida

Copiar

```js
1{
2  type: null,
3  message: {
4    id: 1,
5    name: 'Gus',
6    cars: [
7      {
8        color: 'Branco',
9        id: 1,
10        licensePlate: 'NCA-0956',
11        model: 'Renault Sandero',
12      },
13      {
14        color: 'Vermelho',
15        id: 2,
16        licensePlate: 'DZG-4376',
17        model: 'Volkswagen Gol',
18      },
19    ],
20  }
21}
```

> Exemplo de resposta de erro

Copiar

```js
1{
2  type: 'CAR_NOT_FOUND',
3  message: 'Some car is not found',
4}
```

##### 🚀  **Parte 3.1: Crie testes unitários para a função  `createDriver`**

> Cenários de teste

-   Tentando cadastrar uma nova pessoa motorista com erros semânticos
    -   retorna um erro ao receber um nome inválido
    -   retorna um erro ao receber uma lista de carros inválida
-   Tentando cadastrar uma nova pessoa motorista com erros de id
    -   retorna o erro “CAR_NOT_FOUND”
    -   retorna a mensagem “Some car is not found”
-   Cadastrando uma nova pessoa motorista com sucesso sem carros
    -   retorna a pessoa motorista cadastrada
    -   não retorna erro
-   Cadastrando uma nova pessoa motorista com sucesso com carros
    -   retorna os carros vinculados à pessoa motorista
    -   não retorna erro

##### 🚀  **Parte 3.2: Implemente a função  `createDriver`  na camada Service**

-   Confirme que a função passa nos testes

##### 🚀  **Parte 3.3: Crie stubs para isolar os testes**

-   Use stubs da função da camada Model para isolar seus testes
-   Confirme que mesmo sem um banco de dados rodando os testes funcionam corretamente
---