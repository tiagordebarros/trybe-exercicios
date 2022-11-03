# API de Blogs (Projeto) 📚

A proposta base desse projeto era:

1. Desenvolver uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.
2. Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST.
3. Permitir criar, visualizar, deletar e atualizar os posts (CRUD).
4. Utilizar o ORM Sequelize para criar e atualizar o banco de dados.
5. Implementar o JSON Web Token.
6. API RESTful.

Principal objetivo: desenvolver uma API e um banco de dados para a produção de conteúdo para um blog!

Principais tecnologias envolvida: Noede.JS, Express, ORM Sequelize. Testado com  Jest e Frisby. Analisado com ESLint e StyleLint. Clique [aqui](https://tiagordebarros.github.io/projetos/blogs-api/index.html) para visualizá-lo.

**Requisitos:**

- [x] 01 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`

- [x] 02 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas

- [x] 03 - Sua aplicação deve ter o endpoint POST `/login`

- [x] 04 - Sua aplicação deve ter o endpoint POST `/user`

- [x] 05 - Sua aplicação deve ter o endpoint GET `/user`

- [x] 06 - Sua aplicação deve ter o endpoint GET `/user/:id`

- [x] 07 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas

- [x] 08 - Sua aplicação deve ter o endpoint POST `/categories`

- [x] 09 - Sua aplicação deve ter o endpoint GET `/categories`

- [x] 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas

- [x] 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

- [x] 12 - Sua aplicação deve ter o endpoint POST `/post`

- [x] 13 - Sua aplicação deve ter o endpoint GET `/post`

- [x] 14 - Sua aplicação deve ter o endpoint GET `/post/:id`

- [x] 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`

- [x] (Bônus) 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`

- [x] (Bônus) 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`

- [x] (Bônus) 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`

---
