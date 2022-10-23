# ORM - Interface da aplicação com o banco de dados

## Conteúdos

### O que é ORM
Sem exercícios de fixação.

### Mapeamentos
Sem exercícios de fixação.

### Sequelize
Sem exercícios de fixação.

### Configurando o Sequelize
Sem exercícios de fixação.

### Model
Sem exercícios de fixação.

### Migrations
Sem exercícios de fixação.

### Seeders
Sem exercícios de fixação.

### Operações
Sem exercícios de fixação.

### Conclusão
Sem exercícios de fixação.

### Bônus - Testes
Sem exercícios de fixação.

## Exercícios

### Agora, a prática

#### Instruções para a realização dos exercícios

Neste exercício vamos criar uma API simples, onde será possível criar um livro ou listar todos os livros da base de dados. Vamos utilizar MySQL como banco de dados e Sequelize como nosso ORM.

#### Detalhes do projeto

1.  Crie uma nova pasta e inicie um projeto com Express:

Copiar

```bash
1npm init -y
2
3npm install express
```

2.  Crie o arquivo  `index.js`;
    
3.  Instale o pacote  `sequelize`  e o  `mysql2`:
    

Copiar

```bash
1npm install sequelize mysql2
```

4.  Instale o pacote  `sequelize-cli`  como uma dependência de desenvolvimento:

Copiar

```bash
1npm install --save-dev sequelize-cli
```

5.  Use o  `Sequelize-CLI`  para iniciar a configuração do ORM:

Copiar

```bash
1npx sequelize-cli init
```

Esse comando vai gerar as pastas  `models`,  `seeder`,  `config`  e  `migration`  dentro do seu projeto.

6.  Garanta que tem um servidor MySQL rodando e coloque todas as configurações de acesso dentro do arquivo  `config/config.js`;
    
7.  Altere o arquivo  `models/index.js`  para carregar o arquivo  `config/config.js`  corretamente;
    
8.  Crie o arquivo  `index.js`  com a estrutura básica de uma API com Express.
    

Copiar

```js
1const express = require('express');
2const app = express();
3const PORT = process.env.PORT || 3000;
4
5app.use(express.json());
6
7app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
```

> 🚀  _Se liga nesse foguete!_
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀  **Exercício 1**: Crie uma  **migration**  para criar uma tabela books com as seguintes colunas:

-   `id`: dever ser do tipo  `integer`, não pode ser nula e ser a chave primária da tabela com auto incremento;
-   `title`: deve ser do tipo  `string`  e não pode ser nulo;
-   `author`: deve ser do tipo  `string`  e não pode ser nulo;
-   `pageQuantity`: deve ser do tipo  `integer`  e pode ser nulo;
-   `createdAt`: deve ser do tipo  `date`  e não pode ser nulo;
-   `updatedAt`: deve ser do tipo  `date`  e não pode ser nulo;

Obs: o método  `down`  da migration deve ser capaz de remover a tabela.

Obs 2: Execute o comando  `npx sequelize db:migrate`  e verifique se a tabela foi criada antes de continuar para os próximos exercícios.

🚀  **Exercício 2**: Crie o  **model**  `Book`  utilizando a API do Sequelize. O model deve conter os seguintes campos:

-   `title`: deve ser do tipo  `DateType.STRING`
-   `author`: deve ser do tipo  `DateType.STRING`
-   `pageQuantity`: deve ser do tipo  `DateType.INTEGER`
-   `createdAt`: deve ser do tipo  `DateType.DATE`
-   `updatedAt`: deve ser do tipo  `DateType.DATE`

Nos próximos exercícios você vai desenvolver uma API utilizando as camadas de  **service**  e  **controller**.

#### 🚀 Listando os livros

**Exercício 3**: Crie um  **service**  `BooksService`  com o método  `getAll`  para retornar uma lista de livros por meio do  **model**  `Book`.

**Exercício 4**: Crie um  **controller**  `BooksController`  com o método  `getAll`  sendo um  _middleware_  para retornar a lista de livros por meio do método  `getAll`  de  `BookService`.

**Exercício 5**: Vincule a rota  `GET /books`  para acessar seu  **controller**.

#### 🚀 Buscando um livro pelo id

**Exercício 6**: No  **service**  `BooksService`  crie um método  `getById`  que recebe um  `id`  como parâmetro e use o  **model**  `Book`  para buscar esse livro. Retorne o objeto encontrado pelo  **model**.

**Exercício 7**: No  **controller**  `BooksController`  crie o método  `getById`  sendo um  _middleware_  que recebe o  `id`  como parâmetro de rota e buscar o livro por meio do  **service**. Se o livro não existir a resposta da requisição deve ter o status  `404`  e o  _json_  `{ "message": "Book not found" }`.

**Exercício 8**: Vincule a rota  `GET /books/:id`  para acessar seu  **controller**.

#### 🚀 Cadastrando um livro

**Exercício 9**: No  **service**  `BooksService`  crie um método  `create`  que recebe um objeto com os atributos  `title`,  `author`,  `pageQuantity`  e salve um novo livro utilizando o  **model**  `Book`.

**Exercício 10**: No  **controller**  `BooksController`  crie o método  `create`  sendo um  _middleware_  que recebe os atributos  `title`,  `author`,  `pageQuantity`  do  _body_  da requisição e salve os dados por meio do  **service**.

**Exercício 11**: Vincule a rota  `POST /books`  para acessar seu  **controller**.

#### 🚀 Editando um livro

**Exercício 12**: No  **service**  `BooksService`  crie um método  `update`  que recebe dois parâmetros: o  `id`  do livro a ser alterado e um objeto com os atributos  `title`,  `author`,  `pageQuantity`  e atualize o livro utilizando o  **model**  `Book`.

**Exercício 13**: No  **controller**  `BooksController`  crie o método  `update`  sendo um middleware que recebe o  `id`  como parâmetro de rota e os atributos  `title`,  `author`,  `pageQuantity`  do  _body_  da requisição e salve os dados por meio do  **service**. A requisição deve retornar o status  `200`  e a mensagem ‘Book updated!’. Se o livro não for encontrado retornar a mensagem ‘Book not found!’.

**Exercício 14**: Vincule a rota  `PUT /books/:id`  para acessar seu  **controller**.

#### 🚀 Removendo um livro

**Exercício 15**: No  **service**  `BooksService`  crie um método  `remove`  que recebe o  `id`  do livro a ser removido e remova o mesmo utilizando o model  `Book`.

**Exercício 16**: No  **controller**  `BooksController`  crie o método  `remove`  sendo um  _middleware_  que recebe o  `id`  como parâmetro de rota e remova o livro por meio do  **service**.

**Exercício 17**: Vincule a rota  `DELETE /books/:id`  para acessar seu  **controller**.

Faça um teste no Thunder Client para ver se o endpoint está funcional.

-   Em caso de erro, os endpoints devem retornar status code  `500`  com a mensagem: ‘Algo deu errado’.

### Bônus

1.  Crie um  `seeder`  usando o  `Sequelize-CLI`, populando a sua base com pelo menos um livro;
    
2.  Crie um método  `getByAuthor`  em  `BooksService`  para buscar uma lista de livros por  `author`;
    
3.  Refatore o método  `getAll`  de forma que ser for enviado uma query string  `author`  ele seja capaz de pegar a lista usando o método  `getByAuthor`  de  `BooksService`;
    
4.  Refatore os métodos  `getAll`  e  `getByAuthor`  para que a lista de livros seja ordenada pelo título em ordem alfabética;
    
5.  Crie uma migration para adicionar a coluna  `publisher`  (editora) na tabela  `Books`. Modifique as camadas de serviço para que esse campo seja utilizado no cadastro e na edição;
    
6.  Escreva testes unitários para o  `model`;
    
7.  Escreva testes unitários para o  `service`  criado, isolando a camada de  `models`.
---
