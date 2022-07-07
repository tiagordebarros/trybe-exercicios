# 'Hello, world!' no React!

## Conteúdos

### Gerenciador de pacotes

Instalação e teste do primeiro react app.

### Conceitos iniciais

Sem exercícios de fixação.

### JSX

🚀 Para fixar, crie um elemento JSX que recebe o valor "Hello, JSX" de uma constante chamada `textJSX`, e o incorpore em uma tag `h1`.

### ReactDOM.render

Crie um novo projeto `React` usando o `create-react-app`, ou use o projeto criado na seção inicial, e insira o seguinte código no arquivo `index.js`.

Copiar

```react
import React from 'react';
import ReactDOM from 'react-dom';

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString('pt', { hour12: true })}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```

### CSS e Import

Para facilitar o entendimento veja o exemplo abaixo:

Copiar

```css
/* App.css */
.App {
  background-color: #282c34;
  text-align: center;
}
```

Copiar

```jsx
// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>APP</h1>
    </div>
  );
}

export default App;
```

Se quiser ver um exemplo maior da importação e utilização do `CSS` retorne ao app `testando-meu-computador` que você criou na seção de instalação, ao observar a estrutura você verá que não é nada muito diferente do que você já estava fazendo.

### Criação de componentes funcionais e de classe

Sem exercícios de fixação.

### Métodos

Sem exercícios de fixação.

### Classes e React

🚀 Para fixar tudo o que você aprendeu siga os passos à seguir para criar o seu primeiro componente React de classe:

1. Crie um novo projeto utilizando `npx create-react-app nome-app`

- ⚠️ **Substitua o `nome-app` pelo que você desejar para seu app** ⚠️

1. Na pasta `src`, acesse `App.js` e remova todo o conteúdo da função `App`, de modo que ela fique assim:

Copiar

```jsx
  import React from 'react';

  class App extends React.Component {
    render() {
      return ();
    }
  }
  
  export default App;
```

1. Na pasta `src`, crie um arquivo chamado `About.js`. Em seguida, acesse o arquivo `About.js` e crie um componente que retorne um `<h1>` com o seu nome e um parágrafo `<p>` com uma breve descrição sobre você.

- Lembre-se, quando vamos retornar mais de um elemento é preciso que eles estejam dentro de um `<div>`.

1. Vamos criar uma lista das habilidades que você já aprendeu no curso dentro do componente `About`.

- No componente `About`, adicione dentro da função `render`, antes de retornar o JSX o seguinte código:

Copiar

```jsx
const skills = ["HTML"] // adicione mais habilidades aqui
const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
```

- Esse código cria uma lista em JSX das habilidades (`jsxSkills`) usando a array de strings `skills`.
- Adicione na array `skills` mais habilidades que você já aprendeu no curso!
- Adicione um `<h2>` com o título "Minhas Habilidades"
- Adicione uma lista não ordenada depois do título e coloque nela a array `jsxSkills`

1. Importe seu componente em `App.js` de modo que ele seja renderizado na tela quando a aplicação for iniciada, `npm start`.

- Para isso você precisará utilizar o `export default` para exportar seu componente, o `export default` é sempre utilizado quando queremos exportar apenas um elemento de um arquivo, seja uma função, um componente ou uma variável. A penúltima linha do arquivo `About.js` deverá ficar da seguinte forma:

Copiar

```jsx
    export default About;
```

1. Execute sua aplicação, `npm start`, e verifique se tudo ocorreu como o esperado. Ao finalizar esse exercício você terá feito o seu primeiro componente React de classe. Parabéns! 🎉

> Nota: Ao rodar a aplicação, pode aparecer a mensagem de erro `Each child in a list should have a unique "key" prop.` no console do navegador. Mas não se preocupe com isso no momento, pois futuramente será explicado como corrigir esse erro. 😉

### Conclusão

Sem exercícios de fixação.

## Exercícios

### Exercícios React

1. 🚀 Crie um novo projeto utilizando `npx create-react-app nome-app` e acesse a pasta `nome-app`

- ⚠️ **Substitua o `nome-app` pelo que você desejar para seu app** ⚠️

2. 🚀 Crie uma lista de tarefas simples seguindo os passos abaixo:

- insira a função `Task` a seguir acima do seu componente `App` dentro do arquivo `App.js`:

Copiar

```jsx
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
```

- agora, chame a função dentro do seu componente `App` (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando `npm start`.
- por fim, crie uma array de compromissos e use a função `map` para que cada item do array apareça, como um item de lista, no seu componente `App`.

3. 🚀 Crie um novo projeto utilizando npx create-react-app.

- Na pasta src, crie um novo arquivo chamado `Header.jsx`, que representará o componente Header;
- No arquivo `Header.jsx`, crie uma classe React, chamada `Header`. Essa classe deve renderizar uma tag `h1` com o texto 'Conteúdos de Front-End'. Não esqueça de exportar esse componente;
- No arquivo `App.js`, importe o componente `Header` criado anteriormente;
- Renderize o componente `Header` no `App.js`;
- Na pasta src, crie um novo arquivo chamado `Content.jsx`, que representará o componente `Content`;
- Dentro do arquivo `Content.jsx`, crie uma classe React chamada `Content`;
- Ainda no arquivo `Content.jsx`, adicione o seguinte array:

Copiar

```jsx
const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];
```

- A classe `Content` deve renderizar o array `conteudos` com a utilização da função map, como visto anteriormente, com o seguinte formato:

Copiar

```jsx
O conteúdo é: `Nome do Conteúdo`
Status: `Status do Conteúdo`
Bloco: `Bloco do Conteúdo`
```

- Lembre-se de adicionar o atributo 'key' ao elemento pai dessa lista, na renderização.

- Exporte o componente `Content`;
- No arquivo `App.js`, importe o componente `Content` criado anteriormente;
- Renderize o componente `Content` no `App.js`;
- Crie um novo arquivo `Footer.jsx`;
- No arquivo `Footer.jsx`, crie uma classe chamada `Footer`.
- A classe `Footer` deve renderizar uma tag `h1` com o texto "E isso é só o começo...". Não esqueça de exportar o componente criado.
- Importe o componente `Footer` no `app.js`
- Renderize o componente `Footer` no `app.js`.

4. 🚀 **Bônus** Estilize a aplicação do exercicio 3. Para isso, adicione classes para estilização dos seus componentes de forma que cada conteúdo listado seja um Card.

Para adicionar uma classe de estilização em um elemento HTML, utilize o atributo className:

Copiar

```jsx
<footer className='footer'>
  ...
</footer>
```

---

