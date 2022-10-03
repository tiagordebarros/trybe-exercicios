# Node.js: Testes de Integração

## Conteúdos

### Testes não são de outro mundo!

Sem exercícios de fixação.

### Por que testar?

Sem exercícios de fixação.

### Tipos de teste

Sem exercícios de fixação.

### Testes automatizados

Sem exercícios de fixação.

### TDD - Desenvolvimento Orientado a Testes

Sem exercícios de fixação.

### Testes de Integração

Sem exercícios de fixação.

### Contratos de APIs

Sem exercícios de fixação.

### Definindo os Cenários de Teste

Sem exercícios de fixação.

### Escrevendo Testes

Sem exercícios de fixação.

### Construindo a API

Sem exercícios de fixação.

### Dublês de Teste

Sem exercícios de fixação.

### Finalizando a API

Sem exercícios de fixação.

## Exercícios

### Agora, a prática

Clientes da nossa API Cacao Trybe querem mais informações sobre os chocolates e cabe à você como pessoa desenvolvedora de back-end, criar mais três endpoints, para isso, utilize a técnica de TDD!

**GET `/chocolates/total` : Quantidade total de chocolates**

- Esse endpoint deve retornar a quantidade de tipos de chocolates que existem na base de dados, usando o seguinte contrato:

👉 **GET** *`/chocolates/total`*

- Objetivo: Retornar a quantidade de tipos de chocolates que existem.
- Código HTTP: `200 - OK`;
- Body (exemplo):

Copiar

```json
1{
2  "totalChocolates": 4 // quantidade de chocolates na base de dados
3}
```

1 - Crie os testes de integração para o endpoint GET `/chocolates/total`

- Crie um caso para o código retornado
- Crie outro caso para o retorno esperado

**Atenção:** Observe que os testes devem falhar por enquanto, como estamos desenvolvendo usando o conceito de TDD, mas não se preocupe que na sequência vamos fazer a implementação e os testes deverão passar. 👍

2 - Implemente o endpoint GET `/chocolates/total` na aplicação

- Crie um novo endpoint retornando o total de chocolates na base de dados
- Depois de implementar, verifique se os testes passam com sucesso

### Bônus

**GET `/chocolates/search` : Pesquisa de chocolates por nome**

- Esse endpoint deve retornar os chocolates que contém uma determinada palavra em seu nome, usando o seguinte contrato:

👉 **GET** *`/chocolates/search?name=Mo`*

- Objetivo: Retornar os chocolates que contém o termo pesquisado.
- Parâmetros de consulta (query params): `name`, tipo string
- Código HTTP: `200 - OK`
- Body (exemplo):

Copiar

```json
1[
2  {
3    "id": 3,
4    "name": "Mon Chéri",
5    "brandId": 2
6  },
7  {
8    "id": 4,
9    "name": "Mounds",
10    "brandId": 3
11  }
12]
```

- Caso não haja chocolates com a string passada, retorne um array vazio e status 404:

👉 **GET** *`/chocolates/search?name=ZZZ`*

- Objetivo: Retornar um array vazio quando não há chocolates que contenham o termo pesquisado.
- Parâmetros de consulta (query params): `name`, tipo string
- Código HTTP: `404 - Not Found`
- Body (exemplo):

Copiar

```json
1[]
```

3 - Crie os testes de integração para o endpoint GET `/chocolates/search`

- Crie um caso verificando o código e o retorno esperado para quando existirem chocolates com o nome informado
- Crie um caso para quando não existirem chocolates com o nome informado
- Verifique se os testes falham com sucesso

4 - Implemente o endpoint GET `/chocolates/search` na aplicação

- Crie um novo endpoint retornando os chocolates que tem a string `name` na base de dados
- Depois de implementar, verifique se os testes passam com sucesso

**PUT `/chocolates/:id` : Atualiza um chocolate**

- Esse endpoint deve atualizar um chocolate que existe na base de dados, usando o seguinte contrato:

👉 **PUT** *`/chocolates/1`*

- Objetivo: Atualizar um chocolate que existe na base de dados.
- Body da requisição (exemplo):

Copiar

```json
1{ 
2  "name": "Mint Pretty Good",
3  "brandId": 2
4}
```

- Código HTTP: `200 - OK`;
- Body da resposta (exemplo):

Copiar

```json
1{
2  "chocolate": { 
3    "id": 1,
4    "name": "Mint Pretty Good",
5    "brandId": 2
6  }
7}
```

- Caso não haja um chocolate com a `id` passada, retorne uma mensagem de erro com status 404:

👉 **PUT** *`/chocolates/555`*

- Objetivo: Retornar uma mensagem de erro quando não há um chocolate com a `id` passada.
- Body da requisição (exemplo):

Copiar

```json
1{ 
2  "name": "Mint Pretty Good",
3  "brandId": 2
4}
```

- Código HTTP: `404 - Not Found`
- Body da resposta (exemplo):

Copiar

```json
1{ 
2  "message": "chocolate not found"
3}
```

5 - Crie os testes de integração para o endpoint PUT `/chocolates/:id`

- Crie um caso verificando o código e o retorno esperado para quando o chocolate é atualizado
- Crie um caso para quando não existe chocolate com o `id` informado
- Verifique se os testes falham com sucesso

6 - Implemente o endpoint PUT `/chocolates/:id` na aplicação

- Crie um novo endpoint que atualiza um chocolate na base de dados
- Depois de implementar, verifique se os testes passam com sucesso

---

