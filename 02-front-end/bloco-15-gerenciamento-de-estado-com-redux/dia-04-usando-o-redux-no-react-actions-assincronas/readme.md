# Usando o Redux no React - Actions Assíncronas

## Conteúdos

### redux-thunk

Sem exercícios de fixação.

### Exemplos guiados

Sem exercícios de fixação. Somente exemplos.

## Exercícios

### Agora, a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

1. 🚀 Chegou a hora de colocar em prática tudo que você aprendeu até aqui fazendo [o exercício deste repositório.](https://github.com/tryber/exercise-redux-thunk)
2. Vamos fazer uma pequena aplicação que nos permitirá buscar informações sobre as personagens da série de livros: "As Crônicas de Gelo e Fogo", a qual gerou a famosa série de televisão: *Game of Thrones*. Vamos lá, pois *O inverno está chegando*. Acesse o [repositório do exercício](https://github.com/tryber/exercise-game-of-thrones-characters) e realize os exercícios descritos no README.

![img](https://assets.app.betrybe.com/front-end/redux/react-with-redux-part-2/images/jon_snow_know_everything-c33ef2d4e845df6678bcfc495567125b.gif)

Jon Snow Knows Everything

#### Bônus

Como Redux exige muita prática, eis aqui mais um exercício! Desta vez, um mini-projeto para se desenvolver e guardar no portfólio!

Você conhece o [Reddit](https://reddit.com/)? É uma comunidade na qual pessoas conseguem criar grupos de discussão acerca de algum assunto. Tal grupo é chamado de `subreddit`. Para cada `subreddit`, pessoas podem fazer postagens (`posts`).

Como exercício, você vai fazer uma aplicação que permite a quem usá-la ver `posts` referentes a `2` `subreddits`:

1. `reactjs`
2. `frontend`

Sua aplicação deve permitir a quem for usá-la poder *escolher* de qual `subreddit` se deseja ver as postagens. No momento que selecionar o `subreddit`, uma requisição precisa ser feita no `reddit` para buscar os `posts` referentes ao `subreddit` escolhido. Para cada postagem, você precisa mostrar **pelo menos** o título do `post`. Além disso, sua aplicação deve permitir a quem usá-la a possibilidade de **atualizar** a lista de postagens referentes ao `subreddit` escolhido.

É **obrigatório** que você gerencie o estado de sua aplicação com ***Redux\***, guardando os `subreddits`, assim como os `posts` de cada `subreddit`, no `store`. Você precisa fazer uso do `redux-thunk` para permitir criar `actions` assíncronas.

**Pontos importantes:**

1. Para buscar os `posts` referentes a um `subreddit`, você pode fazer uma requisição `GET` para `https://www.reddit.com/r/<subreddit>.json`. Ou seja, se você precisar buscar posts do `subreddit` `reactjs`, você faria uma chamada para `https://www.reddit.com/r/reactjs.json`.

- No `json` retornado, você encontra os dados referentes aos `posts` dentro da propriedade `data.children`. Para cada post dentro de `data.children`, você encontra seu título correspondente na propriedade `data.title`.

2. Antes de começar sua implementação, **pare e pense** sobre **como** desenhar o estado da sua aplicação. Faça as seguintes perguntas para si:

- O que preciso guardar no estado?
- Como vou **estruturar** e **organizar** meus dados?
- Quais `actions` preciso ter para **modelar** os eventos que ocorrerão na minha aplicação (fazer uma requisição, obter sua resposta, atualizar a lista, etc...)?
- Como vou organizar meus `reducers` (lembrando que **NUNCA** deve-se alterar o estado, e sim **criar** um [novo](https://redux.js.org/introduction/three-principles#changes-are-made-with-pure-functions))?

3. Como você está fazendo uma requisição de um recurso externo, o que acontece se a requisição de postagens referentes a um `subreddit` falhar? Resposta: Adicione na sua aplicação tratamento de erro para esses casos, salvando no estado da sua aplicação a mensagem de erro para o `subreddit` correspondente.

> Dica: procure e **investigue** no *Google* como fazer tratamento de erro de requisição no contexto de ***Redux\***.

4. Como forma de ter um melhor diagnóstico sobre o fluxo de dados em uma aplicação ***Redux\***, instale o middleware [`redux-logger`](https://github.com/LogRocket/redux-logger) e o integre na sua aplicação.

5. Instale a extensão do *Chrome* [`redux-dev-tools`](https://github.com/reduxjs/redux-devtools) e a integre na sua aplicação. Com isso, você tem um ambiente completo para poder analisar e depurar sua aplicação. 🚀

Na Gif abaixo é apresentado uma sequência de sugestão da implementação da aplicação.

![img](https://assets.app.betrybe.com/front-end/redux/react-with-redux-part-2/solutions-eef15e860b3e48ee16442509c17f15ed.gif)

Exemplo dos exercícios feitos

------