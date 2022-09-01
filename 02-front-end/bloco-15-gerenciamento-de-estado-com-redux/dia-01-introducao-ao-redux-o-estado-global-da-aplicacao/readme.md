# Introdução ao Redux - O estado global da aplicação

## Conteúdos

### Peças do Redux

Sem exercícios de fixação.

### Entendendo actions, stores e reducers

**1** - [Criando um ***Redux\*** store](https://www.freecodecamp.org/learn/front-end-libraries/redux/create-a-redux-store)

**2** - [Buscando o estado dentro de um ***Redux\*** store](https://www.freecodecamp.org/learn/front-end-libraries/redux/get-state-from-the-redux-store)

**3** - [Definindo uma `Action`](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-a-redux-action)

### Combinando Reducers

Sem exercícios de fixação.

## Exercícios

### Agora a prática

Nos exercícios de hoje implementaremos o Redux puro, usando html e JavaScript, pois a intenção é compreendermos a mecânica desta biblioteca. Porém, na prática, usaremos mais o react-redux, que você aprenderá no próximo bloco.

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

#### 🚀 Exercício 1

Nesse exercício, vamos construir um estado gerenciado pelo Redux e realizar algumas modificações nele. O nosso objetivo será manipular a cor de um container através do Redux.

O código inicial será disponibilizado a seguir:

Copiar

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      button {
        height: 50px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>Color: <span id="value">white</span></p>
      <button id="previous">Previous color</button>
      <button id="next">Next color</button>
    </div>
    <script>
      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
    </script>
  </body>
</html>
```

Vamos às modificações que precisarão ser feitas, passo-a-passo:

**1** - Crie uma store para a nossa aplicação.

**2** - Crie um reducer, implementando um `switch` que retorne apenas o estado inicial como `default`.

> ⚠️ Não se esqueça de colocar o reducer como parâmetro para o `createStore`, feito na etapa anterior.

**3** - Incremente o `switch` criado no passo anterior com os `cases` `NEXT_COLOR` e `PREVIOUS_COLOR`. Essas actions devem alterar o valor `index` guardado no `INITIAL_STATE`.

> ⚠️ Atente-se aos limites de tamanho do array: as posições devem iniciar em 0 e não podem exceder a numeração do último item do array.

**4** - Crie `eventListeners` que escutam os cliques de cada botão, o **Previous color** e o **Next color**, e realizam um `dispatch` com as respectivas `actions`.

**5** - Faça o `subscribe` da store, alterando o `innerHTML` da tag com id `value` para a cor atual e o style do elemento com id `container`. Você deverá ser capaz de ver as cores mudando ao fundo e o nome da cor exibida.

**6** - Crie um botão com o texto **Random color**, um `eventListener` e uma `action` no `reducer`, adicionando uma cor aleatória ao array `colors` guardado em nosso estado inicial. Faça também com que essa cor seja mostrada ao ser criada, alterando o estado `index` para a posição dela.

> ⚠️ Para facilitar, segue uma função que gera cores aleatórias:

Copiar

```jsx
function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}
```

As cores criadas randomicamente devem ser armazenadas no array. Dessa forma, com os botões de **Next color** e **Previous color**, poderemos trafegar entre as cores padrões e as randômicas. Utilize o `spread operator` para adicionar cada cor randômica.

#### 🚀 Exercício 2

Vamos fazer uma aplicação que combina dois reducers: um para o tema (light mode e dark mode) e outro para o status do usuário (online e offline). Um botão deverá mudar o tema e outro botão deverá mudar o status. O código inicial está disponibilizado a seguir:

Copiar

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Trybe</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.js"></script>
    <style>
      body {
        color: white;
        background-color: #333;
        font-family: sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status">Offline</span></p>
      <button id="toggle-theme">Light Mode</button>
      <button id="toggle-status">Ficar Online</button>
    </div>
    <script>
      const THEME_INITIAL_STATE = {
        theme: 'dark',
      };

      const themeReducer = (state = THEME_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const STATUS_INITIAL_STATE = {
        status: 'offline',
      };

      const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const themeButton = document.getElementById('toggle-theme');
      const statusButton = document.getElementById('toggle-status');

      themeButton.addEventListener('click', () => {
        // coloque o código aqui.
      });

      statusButton.addEventListener('click', () => {
        // coloque o código aqui.
      });
    </script>
  </body>
</html>
```

**1** - Combine os reducers existentes com a função `combineReducers` e salve-o em uma constante.

**2** - Crie uma store com a combinação dos reducers.

**3** - Adicione um `case` dentro do `switch` de cada um dos reducers para alterar os estados `theme` e `status`. O objetivo do `themeReducer` é alternar o `theme` entre 'light' e 'dark'. O objetivo do `statusReducer` é alternar o `status` entre 'offline' e 'online'.

**4** - Faça o dispatch de cada uma das actions ao clicar nos respectivos botões.

**5** - Adicione um `store.subscribe()` para atualizar as seguintes informações na página:

- Se o tema for `light`, o `body` deverá possuir uma cor de fundo escura e uma letra clara.
- Se o tema for `dark`, deverá possuir uma cor de fundo clara e uma letra escura.
- Se o status for `online`, o `#status` deverá possuir o texto `Online`. Se o status for `offline`, o `#status` deverá possuir o texto `Offline`.
- Não se esqueça também de modificar o texto dos botões para refletirem exatamente o que eles fazem.

#### Bônus 1

Você irá fazer 13 exercícios propostos pelo site `freecodecamp`, com objetivo de consolidar seus conhecimentos acerca dos conceitos presentes no ***Redux***.

**1** - [Definindo um `action creator`](https://www.freecodecamp.org/learn/front-end-libraries/redux/define-an-action-creator)

**2** - [Enviando uma `action` para um `reducer`](https://www.freecodecamp.org/learn/front-end-libraries/redux/dispatch-an-action-event)

**3** - [Criando um `Reducer` para receber e manipular uma `action`](https://www.freecodecamp.org/learn/front-end-libraries/redux/handle-an-action-in-the-store)

**4** - [Criando um `reducer` que aceita `actions` de tipos distintos](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions)

**5** - [Usando `const` para os `action types`](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-const-for-action-types/)

**6** - [Registrando um `listener` para no `store`](https://www.freecodecamp.org/learn/front-end-libraries/redux/register-a-store-listener)

**7** - [Combinando múltiplos `reducers`](https://www.freecodecamp.org/learn/front-end-libraries/redux/combine-multiple-reducers)

**8** - [Enviando dados através das `actions`](https://www.freecodecamp.org/learn/front-end-libraries/redux/send-action-data-to-the-store)

**9** - [Criando um contador com ***Redux\***](https://www.freecodecamp.org/learn/front-end-libraries/redux/write-a-counter-with-redux)

**10** - [Por que nunca modificar um `state`?](https://www.freecodecamp.org/learn/front-end-libraries/redux/never-mutate-state)

**11** - [Utilizando o `spread operator` como ferramenta para manter a imutabilidade do `state`](https://www.freecodecamp.org/learn/front-end-libraries/redux/use-the-spread-operator-on-arrays)

**12** - [Removendo itens de um array preservando a imutabilidade](https://www.freecodecamp.org/learn/front-end-libraries/redux/remove-an-item-from-an-array)

**13** - [Trabalhando com `Object.assign`](https://www.freecodecamp.org/learn/front-end-libraries/redux/copy-an-object-with-object-assign)

------

