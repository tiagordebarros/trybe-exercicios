# Arquitetura de Software: Camada Controller

## Conteúdos


### Introdução à camada Controller
Sem exercícios de fixação.

### Criando os middlewares de rotas
Sem exercícios de fixação.

### Criando os controllers
Sem exercícios de fixação.

### Criando o middleware de validação
Sem exercícios de fixação.

### Criando um teste de integração
Sem exercícios de fixação.

### Conclusão
Sem exercícios de fixação.

## Exercícios

### Agora, a prática

>   
> 🚀  _Se liga nesse foguete!_
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀 Ao longo desse bloco, você desenvolveu uma aplicação de UBER! Hoje você descobriu uma nova camada de arquitetura: a camada dos Controllers! Agora você vai desenvolver os controllers e os testes da sua aplicação de maneira que ela fique ainda mais estruturada.

ATENÇÃO! Não tente fazer tudo de uma vez caso ainda não se sinta confortável! Pense no nome das funções e desenvolva seus códigos com calma, sempre fazendo os testes para cada função e  _mockando_  o que for necessário!

Bons estudos! #VQV

#### Preparação

-   Acesse a branch dos exercícios de Service que você fez no repositório do projeto e crie uma nova branch a partir dela
-   Caso falte alguma parte, crie uma branch nova a partir da branch  `simple-application-model-live-lectures`  e copie os arquivos do gabarito do dia de Service
-   Inicie o container do banco de dados e rode o script SQL da raiz do projeto para iniciar a DB
-   Feito isso, estamos prontos para a camada Controller. Bora criar algumas funções para essa camada! 🚀

> Obs: Sinta-se livre para criar os  `middlewares`  que achar necessário para a validação das funções dos exercícios, somente lembre-se de testar os middlewares criados.

#### 🚀  **Exercício 1**

-   Para Realizar o exercício 1, será necessário criar os seguintes arquivos:
    -   O arquivo  `tests/unit/controllers/mocks/driver-exercises.controller.mock.js`;
    -   O arquivo  `tests/unit/controllers/driver-exercises.controller.test.js`;
    -   O arquivo  `src/controllers/index.js`;
    -   O arquivo  `src/controllers/driver.controller.js`;
    -   O arquivo  `src/routers/driver.router.js`;
    -   O arquivo  `src/routers/index.js`;

1.  Desenvolva os  **testes**  da função  `driverController.getDrivers()`, que é responsável por buscar todos os motoristas cadastrados. A função  `driverController.getDrivers()`  deve utilizar a camada de controller.

> 👀 De olho na dica 👀: Os caminhos e arquivos mencionados acima serão reutilizados nos próximos exercícios, porém nesse primeiro exercício será necessários cria-los.

> Obs: Não se preocupe ao ver os testes falharem. Criaremos a função de maneira que faça eles passarem.

2.  Desenvolva a função  `getDrivers`  de maneira que ela passe em nossos testes.
    
3.  Crie a rota  _GET_  `/drivers`
    

#### 🚀  **Exercício 2**

Finalmente chegou a hora de estruturarmos uma rota  _POST_! E para isso vamos utilizar a função  `driverController.createDriver()`, responsável por cadastrar um novo motorista. Para isso:

-   Para Realizar o exercício 2, será necessário criar o seguinte arquivo:
    -   `src/utils/errorMap.js`  com o seguinte conteúdo:

Copiar

```js
1const errorMap = {
2  TRAVEL_NOT_FOUND: 404,
3  DRIVER_NOT_FOUND: 404,
4  CAR_NOT_FOUND: 404,
5  INVALID_VALUE: 422,
6  TRAVEL_CONFLICT: 409,
7};
8
9const mapError = (type) => errorMap[type] || 500;
10
11module.exports = {
12  errorMap,
13  mapError,
14};
```

1.  Desenvolva os  **testes**  da função  `driverController.createDriver()`, que é responsável por cadastrar um novo motorista.
    
2.  Desenvolva a função  `createDriver`  de maneira que ela passe em nossos testes.
    
3.  Crie a rota  _POST_  `/drivers`
    

Agora que estamos com nossa rota  _POST_  `/drivers`  pronta, podemos criar middlewares para validar suas requisições:

4.  (Opcional) Crie os testes para um middleware que valida se a chave  `name`  é obrigatória.
    
5.  (Opcional) Crie o middleware e utilize na rota  _POST_  `/drivers`.
    

-   Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
    -   O arquivo  `tests/unit/middlewares/validateDriverNameField.middleware.js`;
    -   O arquivo  `src/middlewares/validateDriverNameField.js`;

#### 🚀  **Exercício 3**

-   Para Realizar o exercício 3, será necessário criar os seguintes arquivos:
    -   O arquivo  `tests/unit/controllers/mocks/car-exercises.controller.mock.js`;
    -   O arquivo`tests/unit/controllers/car-exercises.controller.test.js`;
    -   O arquivo`src/controllers/car.controllers.js`;
    -   O arquivo`src/routers/car.router.js`;

Agora que você fez a  `controller`  para a função  `createDriver`com seus devidos testes e rotas, faça o mesmo para a função  `createCar`, que é nossa função responsável por cadastrar um novo carro.

1.  Desenvolva os testes da função  `carController.createCar()`, que é responsável por cadastrar um novo carro.
    
2.  Desenvolva a função  `createCar`  de maneira que ela passe em nossos testes.
    
3.  Crie a rota  _POST_  `/cars`
    

Agora que estamos com nossa rota  _POST_  `/cars`  pronta, podemos criar middlewares para validar suas requisições:

4.  (Opcional) Crie os testes para um middleware que valida se as chaves  `model, color e licensePlate`  são obrigatórias.
    
5.  (Opcional) Crie o middleware e utilize na rota  _POST_  `/cars`.
    

-   Para Realizar os exercícios opcionais, sugerimos que crie os seguintes arquivos:
    -   O arquivo  `tests/unit/middlewares/validateCarFields.middleware.js`;
    -   O arquivo  `src/middlewares/validateCarFields.middleware.js`;

> 👀 De olho na dica 👀: Toda a aplicação já está praticamente “pronta”. O que fará com que os testes falhem vai ser a ausência da rota  _POST_  `/cars`.
---