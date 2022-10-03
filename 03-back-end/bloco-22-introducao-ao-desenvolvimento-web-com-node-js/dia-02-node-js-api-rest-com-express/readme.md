# Node.js: API REST com Express

## Conteúdos

### Como iniciamos a construção de algo?

Sem exercícios de fixação.

### Meu primeiro servidor Node.js

Sem exercícios de fixação. Somente exemplo guiado.

### Express

Sem exercícios de fixação. Somente exemplo guiado.

### Abrindo nossa API pro mundo com Endpoints

Sem exercícios de fixação.

### ‘Hello, world!’ na nossa API

Sem exercícios de fixação. Somente exemplo guiado.

### Criando nossa primeira API

Que tal treinar seus conhecimentos e listar um time pelo seu `id`? Crie um endpoint do tipo `GET` com a rota `/teams/:id`.

### E essa tal arquitetura REST?

Sem exercícios de fixação.

### Em suma

Sem exercícios de fixação.

## Exercícios 

### Agora, a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Como foi seu aprendizado até aqui? Que tal realizar os exercícios abaixo?

1. Qual é a função do código de status `400` e `422`?

2. Qual é a função do código de status `401`?

Observe o array de objetos abaixo:

Copiar

```js
1const activities = [
2  {
3    id: 1,
4    description: 'Banho no cachorro',
5    status: 'A fazer',
6  },
7  {
8    id: 2,
9    description: 'Cortar a grama',
10    status: 'A fazer',
11  },
12  {
13    id: 3,
14    description: 'Estudar JavaScript',
15    status: 'Feito',
16  },
17];
```

Agora, faça os exercícios a seguir:

3. Crie um servidor Node.js utilizando o framework Express 🚀

4. Crie um endpoint do tipo `GET` com a rota `/myActivities/:id`, que possa listar uma atividade do array por `id` 🚀

5. Crie um endpoint do tipo `GET` com a rota `/myActivities`, que possa listar todas as atividades do array 🚀

6. Crie um endpoint do tipo `GET` com a rota `/filter/myActivities`, que possa listar todas as atividades filtradas por `status` do array.

> A rota deve receber a informação por `query` e a chave deve-se chamar `status`. A chave `status` vai trazer consigo valor de `Feito` ou `A fazer` e o endpoint deve fazer o filtro das atividades 🚀

### Bônus

7. Crie um endpoint do tipo `GET` com a rota `/search/myActivities`, que possa listar todas as atividades filtradas por um termo específico do array.

> A rota deve receber a informação por `query` e a chave deve-se chamar `q`. A chave vai trazer consigo valor de ‘cachorro’ por exemplo, e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio 🚀

---

