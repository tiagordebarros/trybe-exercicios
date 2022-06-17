### Application Programming Interface (API)

Crie um arquivo `index.html` e adicione o seguinte código:

Copiar

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <header>
    <h1>Importância do JSON</h1>
  </header>
  <main>
    <article>
      <h2>O JSON é utilizado por empresas como:</h2>
      <ul id="corporations-used-by"></ul>
    </article>
    <article>
      <h2>As vantagens de se usar JSON são:</h2>
      <ul id="advantages"></ul>
    </article>
    <article>
      <h2>Esse formato também pode ser lido pelas seguintes linguagens:</h2>
      <ul id="languages-used-by"></ul>
    </article>
  </main>
  <script type="module" src="script.js"></script>
</body>
</html>
```

Também crie um arquivo `script.js` e adicione a lógica a seguir:

Copiar

```javascript
const jsonInfo = `{
  "muitasEmpresasUsam": [
    "Google",
    "Twitter",
    "Facebook",
    "etc..."
  ],
  "temVariasVantagens": [
    "Legível",
    "Fácil de usar",
    "Leve",
    "Popular",
    "Versátil"
  ],
  "muitasLinguagensDaoSuporte": [
    "Python",
    "C",
    "C++",
    "Java",
    "PHP"
  ]
}`;

const usoJSONPorque = JSON.parse(jsonInfo);

const corporationsList = document.getElementById('corporations-used-by');
const advantagesList = document.getElementById('advantages');
const languagesList = document.getElementById('languages-used-by');

usoJSONPorque.muitasEmpresasUsam.map((empresa) => {
  const newLi = document.createElement('li');
  newLi.innerText = empresa;
  corporationsList.appendChild(newLi);
});

usoJSONPorque.temVariasVantagens.map((vantagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = vantagens;
  advantagesList.appendChild(newLi);
});

usoJSONPorque.muitasLinguagensDaoSuporte.map((linguagens) => {
  const newLi = document.createElement('li');
  newLi.innerText = linguagens;
  languagesList.appendChild(newLi);
});
```

Nesse script, utilizamos o `JSON.parse()` para analisar nosso json (nesse caso, uma string) e converter em um formato compatível com o JavaScript. Assim, temos mais poder sobre as informações e podemos manipular elas para, por exemplo, adicionar elas ao DOM.

### Relembrando o fluxo assíncrono

Sem exercícios.

### Promises

Sem exercícios.

### Fetch API

Vamos criar uma função que faz um fetch apenas para um *endpoint* específico. Entenda *endpoint*, em se tratando de APIs, como sendo o caminho (url) que retorna alguma informação específica da API. Para isso, vamos usar como *endpoint* uma [url](https://api.chucknorris.io/jokes/random?category=dev) que nos retorna elogios sobre Chuck Norris (elogios, porque ninguém faz piadas com Chuck Norris).

Antes de você ir para o código, como você vai rodar o código direto no Node e não no browser, será necessário instalar o `node-fetch`. Execute o comando abaixo caso você ainda não tenha o `package.json`:

Copiar

```bash
npm init -y
```

depois, instale o `node-fetch`:

Copiar

```bash
npm i node-fetch@^2
```

Note que foi utilizado o `@^2` ao final do nome do pacote para especificar que deve ser instalado a versão mais atual, mas que não seja maior que a **2**. Essa especificação ocorre visto que a versão **3** do `node-fetch` foi alterada para ser usada através de módulos do JS, podendo ser importada apenas através do `import` e não mais do `require`.

Agora crie um arquivo `fetch.js` e insira o código abaixo para testar sua funcionalidade:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();
```

Ao rodar esse código você vai perceber que no console foi impresso `Promise { <pending> }` ao invés da piada. Como foi explicado no tópico de Promises, se o fluxo assíncrono não for controlado, ela vai retornar o seu estado e não o dado requisitado.

Agora vamos corrigir esse problema:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();
```

Ao rodar o código acima recebemos um elogio sobre o Chuck Norris em nosso console. Bacana né?!

Ok, mas e ser der erro em alguma requisição? O que você pode fazer em relação a isso? Agora entra o `.catch()`! Vamos adicioná-lo ao código:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :(
// TypeError: Only absolute URLs are supported
```

Note que para forçar o erro retiramos o `https://` do início da `url`.

### Async e Await

O `async` é uma mão na roda. Para começar a usá-lo, basta colocar o `async` antes da definição de uma função. Vamos refatorar a função anterior para usar `async`:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```

Pronto! Perceba que continua funcionando exatamente da mesma forma que anteriormente. Tá achando que acabou? Ainda tem mais!

Temos duas maneiras de utilizar o `async await`, a primeira é mesclando com o `.then()` e o `.catch()`:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);

  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```

Usando o `await` , a `fetchJoke` espera o `fetch` terminar toda sua execução (até o último `.then()` ou `.catch()`) para só depois executar o `console.log()`.

A segunda é refatorando o `.then()` e o `.catch()` usando o `try` e o `catch`:

Copiar

```javascript
const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
```

Note que, quando você usa o `try` e o `catch`, é executado o código inserido no escopo do `try`, e caso alguma parte desse código dê erro, você o trata no escopo do `catch(error)`.

### Para fixar

Responda às perguntas a seguir para ter certeza de que você entendeu os textos. Discuta a resposta com o restante da turma (que tal uma pessoa abrir uma conversa no Slack para conversarem a respeito?!). Se bater alguma dúvida, volte aos textos!

1. O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
2. Quando você tem que enfileirar várias *callbacks*, que problema surge?
3. Por que as *Promises* são uma forma de resolver esse problema?
4. Quando você vai se comunicar com uma *API*, tal comunicação deve ser síncrona ou assíncrona? Lembre-se de que o serviço ao qual você está se conectando pode demorar muito ou pouco para dar retorno, pode estar fora do ar etc.
5. Dada a resposta anterior, o que é `fetch` e para que ele serve?

### Agora, a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

**1.** Como primeiro exercício, vamos usar a função `fetch`, que vimos na aula ao vivo, para criar um site simples com um *gerador de piadas ruins!*. Como? Vamos praticar!

- Primeiro, veja o [manual da *API* do site icanhazdadjoke.com](https://icanhazdadjoke.com/api). Ele esclarece como fazer as requisições ao serviço de piadas. Por hora, pode só passar o olho; agora vamos entender como funciona essa *API*:

  - Para começar, vamos fazer uma requisição via browser. Visite o site [icanhazdadjoke.com](https://icanhazdadjoke.com/api), e perceba que ele devolve uma página *HTML* com uma piada aleatória.

  - Em seguida, no terminal, vamos fazer a requisição: `curl -H "Accept: text/html" "https://icanhazdadjoke.com/"`. Perceba que o retorno é um *HTML* idêntico ao de uma requisição via browser com uma piada aleatória.

  - Para a próxima requisição, vamos usar o comando: `curl -H "Accept: text/plain" "https://icanhazdadjoke.com/"`. Veja que agora recebemos apenas a piada aleatória em formato texto.

  - Por fim, faça a requisição: `curl -H "Accept: application/json" "https://icanhazdadjoke.com/"`. Agora a *API* retorna um objeto no formato JSON.

    Perceba que, dependendo do que passamos na chave `Accept:` no header, definido por `-H` no comando, o serviço nos retorna uma resposta diferente.

- Utilize o *HTML* e o `js` a seguir como base: *(não se esqueça de utilizar a extensão **Live Server** e inspecionar o console do navegador para ver os logs)*

Copiar

```html
<!-- jokes.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
    <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

Copiar

```javascript
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

- Agora vamos tentar fazer as requisições a *API* usando `fetch`. Essa função recebe dois parâmetros:
  1. O endereço para o qual a requisição será feita, ou seja, a url do serviço.
  2. Um objeto contendo as especificações da requisição. Para essa *API*, atribuiremos a esse objeto as chaves `method` e `headers`

Copiar

```javascript
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject);
};

window.onload = () => fetchJoke();
```

O segundo parâmetro `myObject` define o tipo de request: `method: 'GET'` e o formato da resposta `headers: { 'Accept': 'application/json' }`, como visto nas requisições via `curl`.

- A função `fetch` **é uma \*Promise\*** (você não precisa entender o que é uma *Promise* agora, considere apenas como sendo algo assíncrono) e, como tal, dependendo de seus desdobramentos, podemos encadear procedimentos a serem feitos, utilizando as cláusulas `.then`(em caso de sucesso) e `.catch`(em caso de falha). A requisição `fetch` retorna um objeto *Response*. Utilizando `.then`, verifique a estrutura da resposta usando um `console.log` na `response` retornada pelo `fetch`.

Copiar

```javascript
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => console.log(response));
};

window.onload = () => fetchJoke();
```

- Viu a response? Até recebemos uma resposta do serviço, mas como é que eu consigo retirar o texto da piada daí 🤔?

Para isso, usamos o método `.json()` na resposta da *API*. Esse método converte o conteúdo do `body` da *Response* e retorna uma outra *Promise*, que, quando bem-sucedida, retorna um *JSON* contendo as informações da piada.

A partir do `fetch`, troque o `console.log()` anterior pelo método `.json()` e imprima os dados da requisição.

Copiar

```javascript
// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data));
};

window.onload = () => fetchJoke();
```

- Recebemos um objeto, certo? A partir daí, faça a piada aparecer no *DOM* da sua página!

**2.** Agora que tal um exercício menos guiado? Vamos consultar uma API que fornece os valores de crypto moedas e mostrar as 10 primeiras.

A documentação para a API que vamos utilizar esta disponível nesse [link](https://docs.coincap.io/).

Tente descobrir qual url vamos utilizar para buscar as informações que precisamos (um `array` com uma listagem das crypto moedas).

Se ficou na dúvida veja a seguir ***(spoiler alert!)\***

Copiar

```
url: `https://api.coincap.io/v2/assets`
```

Por se tratar de uma API pública a quantidade de requisições a ela é limitada, caso você se depare com o seguinte erro: `FetchError: invalid json response body at (url da API) reason: Unexpected token T in JSON at position 0`, significa que você foi bloqueado temporariamente, basta esperar 1 ou 2 minutos para poder voltar a usar normalmente.

1. Agora que temos a url vamos criar um arquivo (`api.js`, por exemplo) e dentro dele uma função para pegar o `array` com as moedas.
2. Crie também um arquivo HTML (`index.html`, por exemplo) que deve conter uma tag para listar as crypto moedas.
3. 🚀 Pronto, temos um `array` com os dados das moedas e um esqueleto do HTML, agora vamos fazer com que as moedas apareçam na tela. Utilize o seguinte formato: `Nome da moeda (símbolo da moeda): valor em dólares`. Exemplo: `Bitcoin (BTC): 46785.06`.
4. 🚀 Conseguiu mostrar as moedas na tela? Agora, que tal usar uma Higher Order Function para filtrar o `array` das moedas para mostrar apenas as 10 primeiras?
5. Não se esqueça de estilizar a página conforme o seu estilo (tanto no CSS quanto no HTML).

### Bonus

Que tal usarmos uma API para converter o preço das crypto moedas do exercício anterior para a nossa moeda local ao invés de mostrar o seu valor em dólar?

Para este exercício vamos utilizar a [Currency API](https://github.com/fawazahmed0/currency-api#readme). Tente descobrir qual url retorna os dados necessários para este exercício, mas caso fique na dúvida pode consultar a informação abaixo:

URL ***(spoiler alert!)***

Copiar

```html
baseUrl: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest`
endpoint: `/currencies/usd.min.json`
```

------