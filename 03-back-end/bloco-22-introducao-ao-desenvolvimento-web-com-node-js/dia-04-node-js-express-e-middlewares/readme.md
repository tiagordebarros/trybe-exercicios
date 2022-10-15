# Node.js: Express e Middlewares

## Conteúdos

### Middlewares

🚀 Se liga nesse foguete!

Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

🚀 Crie um middleware existingId para garantir que o id passado como parâmetro na rota GET /teams/:id existe no objeto teams. Refatore essa rota para usar o middleware.

🚀 Reaproveite esse middleware e refatore as rotas PUT /teams/:id e DELETE /teams/:id para usarem ele também.

🚀 Mova o middleware validateTeam para o arquivo src/middlewares/validateTeam.js, mas continue usando o middleware nas rotas POST /teams e PUT /teams/:id.

### Middlewares Assíncronos

Sem exercícios de fixação.

### Práticas comuns de middlewares

Sem exercícios de fixação.

### Usando middlewares de terceiros

Sem exercícios de fixação.

### Router middleware

Sem exercícios de fixação.

### Lidando com erros

Sem exercícios de fixação.

### Conclusão

Sem exercícios de fixação.

## Exercícios

### Agora, a prática

> 🚀  _Se liga nesse foguete!_
> 
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

 #### Exercício 1 🚀

Uma startup de Ecoturismo te procurou para construir uma aplicação back-end que auxilie na criação e compartilhamento de locais ainda não registrados na natureza. O objetivo é valorizar e promover a capacidade turística do Brasil e os principais requisitos da API que essa startup solicitou são:

-   Cadastrar novas atividades de ecoturismo com as seguintes informações:
    -   Nome da atividade;
    -   Preço;
    -   Descrição: contendo avaliação, dificuldade e data de criação da atividade.

Analisando os requisitos acima, a pessoa  _Tech Lead_  identificou as seguintes chaves para a requisição:

Copiar

```json
1{
2  "name": "Trekking",
3  "price": 0,
4  "description": {
5    "rating": 5,
6    "difficulty": "Fácil",
7    "createdAt": "10/08/2022"
8  }
9}
```

Agora, faça os exercícios abaixo:

1.  Crie um servidor Node.js utilizando o framework Express com a estrutura inicial do  `app.js`  e  `server.js`  e prepare o ambiente instalando a biblioteca  `nodemon`.
    
2.  Adicione um middleware criado pela comunidade que tem como função interpretar conteúdo  `JSON`.
    
3.  Crie um endpoint  `POST`  com a rota  `/activities`  para adicionar novas atividades. Ela deve:
    
    -   Retornar o status  `201`  e uma mensagem de sucesso quando a atividade tiver sido inserida (formato json);
    -   **Sugestão:**  `{ "message": "Atividade cadastrada com sucesso!" }`.
4.  Crie um middleware de validação para a chave  `name`. Ela deve:
    
    -   Ser obrigatória;
        
    -   Retornar o status  `400`  e uma mensagem em formato json;
        
        -   **Sugestão:**  `{ "message": "O campo name é obrigatório" }`.
    -   Ter mais de 4 caracteres;
        
    -   Retornar o status  `400`  e uma mensagem em formato json;
        
        -   **Sugestão:**  `{ "message": "O campo name deve ter pelo menos 4 caracteres" }`.
5.  Crie um middleware de validação para a chave  `price`. Ela deve:
    
    -   Ser obrigatória;
        
    -   Retornar o status  `400`  e uma mensagem em formato json;
        
        -   **Sugestão:**  `{ "message": "O campo price é obrigatório" }`.
    -   Ser um número maior ou igual a zero;
        
    -   Retornar o status  `400`  e uma mensagem em formato json;
        
        -   **Sugestão:**  `{ "message": "O campo price deve ser um número maior ou igual a zero" }`.
6.  Crie um middleware de validação para a chave  `description`  que possui as chaves  `createdAt`,  `rating`  e  `difficulty`. Ela deve:
    
    -   Ter todas as chaves obrigatórias;
    -   Retornar o status  `400`  para todas e uma mensagem em formato json;
        -   **Sugestão:**  `{ "message": "O campo description é obrigatório" }`;
        -   **Sugestão:**  `{ "message": "O campo createdAt é obrigatório" }`;
        -   **Sugestão:**  `{ "message": "O campo rating é obrigatório" }`;
        -   **Sugestão:**  `{ "message": "O campo difficulty é obrigatório" }`.
7.  Crie um middleware de validação para a chave  `createdAt`. Ela deve:
    
    -   Ter uma data válida no formato  `dd/mm/aaaa`;
    -   Retornar o status  `400`  e uma mensagem em formato json;
        -   **Sugestão:**  `{ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" }`.
8.  Crie um middleware de validação para a chave  `rating`. Ela deve:
    
    -   Ter um número inteiro entre 1 e 5;
    -   Retornar o status  `400`  e uma mensagem em formato json;
        -   **Sugestão:**  `{ "message": "O campo rating deve ser um número inteiro entre 1 e 5" }`.
9.  Crie um middleware de validação para a chave  `difficulty`. Ela deve:
    
    -   Ter apenas 3 classificações: “Fácil”, “Médio” ou “Difícil”;
    -   Retornar o status  `400`  e uma mensagem em formato json;
        -   **Sugestão:**  `{ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" }`.

#### Exercício 2 🚀

Parabéns! Seu cliente ficou muito satisfeito com o trabalho e solicitou mais alguns requisitos para você implementar. Veja abaixo:

-   Cadastrar pessoas usuárias das atividades de ecoturismo com as seguintes informações:
    -   Email;
    -   Senha;
    -   Primeiro nome;
    -   Telefone;
-   Permitir que somente pessoas cadastradas realizem o cadastro de novas atividades de ecoturismo.

Agora, faça os exercícios abaixo:

1.  Crie um endpoint  `POST`  com a rota  `/signup`  para cadastrar pessoas usuárias. Ela deve:
    
    -   Ter os campos  `email`,  `password`,  `firstName`  e  `phone`  obrigatoriamente;
    -   Caso os campos não sejam preenchidos, retornar o status  `401 - Unauthorized`  e uma mensagem (formato json);
        -   **Sugestão:**  `{ "message": "Campos ausentes!" }`.
    -   Gerar um token aleatório válido;
    -   Retornar o status  `200`  e uma mensagem contendo o token (formato json);
        -   **Sugestão:**  `{ token: '<token-aleatorio>' }`.

> De olho na dica👀: Para gerar o token você pode utilizar a função  `randomBytes`, do módulo  `crypto`  do Node, dessa forma:

Copiar

```js
1const crypto = require('crypto');
2
3function generateToken() {
4  return crypto.randomBytes(8).toString('hex');
5}
6
7module.exports = generateToken;
```

2.  Crie um middleware de autenticação ao endpoint  `POST`  com a rota  `/activities`. Ela deve:
    
    -   Ser validada por meio do token que foi gerado ao realizar o  `signup`;
    -   Ser encontrada pelo header  `Authorization`;
    -   Ter exatamente 16 caracteres;
    -   Caso o token seja inválido ou inexistente, retornar o status  `401 - Unauthorized`  e uma mensagem (formato json);
        -   **Sugestão:**  `{ "message": "Token inválido!" }`.
---

