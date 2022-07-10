# Componentes com estado e eventos

## Conteúdos

### Introdução ao estado

Sem exercícios de fixação.

### Introdução aos eventos

**1 -** Crie uma aplicação React com `npx create-react-app fancy-buttons`. Altere o componente `App.js` para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via `console.log()`. **Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!**

**2 -** Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via `console.log()`.

### Vinculando funções à classe com `this` e `bind` no `constructor`

**3 -** Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!

**4 -** Garanta acesso ao objeto `this` na função que você declarou.

### Unindo componentes com estados e eventos

**5 -** Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.

🦜 **Dica:** Uma possibilidade é você definir três chaves, uma para cada botão!

**6 -** Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

**7 -** Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

### State vs Props

Sem exercícios de fixação.

### Em resumo

Sem exercícios de fixação.

## Exercícios

### Agora a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

🚀 Hoje você vai incrementar a sua Pokedex utilizando *Estado*.

Você pode encontrar informações mais detalhadas no **[repositorio do exercício!](https://github.com/tryber/exercise-pokedex-state)**

![img](https://assets.app.betrybe.com/front-end/react/components-with-state/pokedex-899a2c228538b5313db0d59cb9d4f87d.gif)

Como ficará a sua pokedex

🦜 **Dica:** Você pode armazenar no estado do componente pai da aplicação o pokemon sobre o qual está iterando no momento *e* os filtros aplicados sobre a lista.

---

