# JWT - (JSON Web Token)

## Conteúdos

### O que é o JWT?
Sem exercícios de fixação.

### Entendendo o JWT
Sem exercícios de fixação.

### Show me the code!
Sem exercícios de fixação.

### Implementando JWT
Sem exercícios de fixação.

## Exercícios

### Agora, a prática

Antes de começar, crie um novo projeto chamado  `hello-jwt`  utilizando o comando  `npm init @tryber/backend hello-jwt`, aceitando as opções padrão.

1.  🚀 Crie um  _endpoint_  `POST /login`.

-   O  _endpoint_  deve receber os seguintes dados no corpo da requisição:

Copiar

```json
1    {
2      "username": "algumNomeDeUsuario",
3      "password": "algumaSenha"
4    }
```

-   Caso  `username`  e  `password`  sejam válidos, retorne um  _token_  que atenda às seguintes especificações:
    -   Expira em uma hora;
    -   Contém, no  _payload_, o nome de usuário informado na  _request_;
    -   Contém, no  _payload_, uma propriedade  `admin`, com o valor  `false`.
    -   Para retornar o  _token_, utilize o seguinte formato no corpo da resposta:

Copiar

```json
1    {
2      "token": "<JWT aqui>"
3    }
```

-   Para que  `username`  seja válido, seu valor precisa ser uma  _string_  alfanumérica de, pelo menos, 5 caracteres.
-   Para que  `password`  seja válido, seu valor precisa ser uma  _string_  de, pelo menos, 5 caracteres.

2.  🚀 Altere o  _endpoint_  `POST /login`:

-   Caso  `username`  seja  `admin`  e  `password`  seja  `s3nh4S3gur4???`, a chave  `admin`  no  _payload_  do  _token_  gerado deve ter o valor  `true`.

3.  🚀 Crie o  _endpoint_  `/GET /users/me`:
4.  O  _endpoint_  só pode ser acessado por pessoas autenticadas.
5.  Para realizar a autenticação, a requisição deve conter o  _header_  `Authorization`, cujo valor deve ser um  _token_  válido.
6.  Caso o  _token_  não exista, retorne o status  `401 Unauthorized`, com o seguinte corpo da resposta:

Copiar

```json
1    {
2      "error": {
3        "message": "Token not found"
4      }
5    }
```

4.  Caso aconteça um erro ao validar o  _token_, retorne o status  `401 Unauthorized`  com o seguinte conteúdo no corpo:

Copiar

```json
1    {
2      "error": {
3      "message": "<mensagem de erro da biblioteca>"
4      }
5    }
```

5.  Caso o  _token_  seja válido, retorne o status  `200 OK`  e, no corpo da resposta, o nome de usuário ao qual aquele  _token_  pertence e o valor da propriedade  `admin`, no seguinte formato:

Copiar

```json
1    {
2      "username": "nome de usuário do token",
3      "admin": true || false
4    }
```

6.  Utilize um  _middleware_  exclusivo para a autenticação. Armazene-o no arquivo  `src/middlewares/auth.js`.
    
7.  🚀 Crie o  _endpoint_  `/GET /top-secret`.
    

-   O  _endpoint_  só pode ser acessado por pessoas autenticadas.
-   Apenas  _tokens_  contendo, no  _payload_, a propriedade  `admin`  com o valor  `true`  têm autorização para acessar esse  _endpoint_.
-   Caso o  _token_  não exista, retorne o status  `401 Unauthorized`, com o seguinte corpo da resposta:

Copiar

```json
1    {
2      "error": {
3        "message": "Token not found"
4      }
5    }
```

-   Caso aconteça um erro ao validar o  _token_, retorne o status  `401 Unauthorized`  com o seguinte conteúdo no corpo:

Copiar

```json
1    {
2      "error": {
3      "message": "<mensagem de erro da biblioteca>"
4      }
5    }
```

Copiar

```json
1    {
2      "error": {
3        "message": "Restricted access"
4      }
5    }
```

-   Caso o  _token_  seja válido e o  _payload_  contenha  `admin`  com o valor  `true`, retorne o seguinte JSON:

Copiar

```json
1    {
2      "secretInfo": "Peter Parker é o Homem-Arannha"
3    }
```

-   Para validar se a pessoa é admin, crie um novo  _middleware_  no arquivo  `src/middlewares/admin.js`.

### Bônus

1.  🚀 Crie o  _endpoint_  `POST /signup`.

-   O  _endpoint_  deve aceitar o seguinte JSON no corpo da requisição:

Copiar

```json
1    {
2      "username": "MariaCecília_Souza92",
3      "password": "%9!%e'c0c5w,q%%h9n3k"
4    }
```

-   Para validar os campos, considere os mesmos critérios do endpoint  `POST /login`.
-   Caso  `username`  já exista, retorne o status  `409 Conflict`  e o seguinte JSON:

Copiar

```json
1    {
2      "error": { "message": "user already exists" }
3    }
```

-   Caso os campos sejam válidos, armazene os dados no arquivo  `src/models/data/users.json`.
-   Ao armazenar os dados recebidos, adicione a propriedade  `admin`, que terá seu valor determinado da seguinte forma:
    -   Obtenha um número aleatório de 1 a 100 com o seguinte trecho de código:  `Math.floor(Math.random() * 100)`;
    -   Caso o número aleatório seja maior que  `50`,  `admin`  deve ser  `true`;
    -   Caso o número aleatório seja menor ou igual a  `50`,  `admin`  deve ser  `false`.
-   Após armazenar os novos dados, retorne um  _token_  que expire em uma hora e contenha  `username`  e  `admin`  no  _payload_. Utilize o seguinte formato na resposta:

Copiar

```json
1    {
2      "token": "<token gerado aqui>"
3    }
```

2.  🚀 Altere o  _endpoint_  de  _login_:

-   Antes de gerar o  _token_, verifique se o nome de usuário e a senha informados existem no arquivo  `users.json`.
-   Não permita mais o login do usuário  `admin`  com a senha fixa.
-   Informe, na propriedade  `admin`  do  _payload_  do  _token_, o mesmo valor da propriedade  `admin`  que está armazenado para aquela pessoa.

---