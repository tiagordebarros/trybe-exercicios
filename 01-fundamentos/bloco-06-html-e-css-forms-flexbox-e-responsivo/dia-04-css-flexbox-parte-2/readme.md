### Propriedade: align-self

#### Para fixar

Copie o código abaixo e no seu editor de código, teste as possibilidades para a propriedade `align-self`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ALIGN SELF</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 300px;
        margin: auto;
        width: 500px;
      }

      .keep {
        align-self: center;
        background-color: #FAA488;
        display: flex;
        justify-content: center;
        width: 150px;
        list-style: none;
      }

      .change {
        /* Altere a propriedade align-self. */
        align-self: center;
        background-color: #FBD26A;
        display: flex;
        justify-content: center;
        width: 200px;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="keep">REFERÊNCIA</li>
      <li class="change">ELEMENTO TESTE</li>
      <li class="keep">REFERÊNCIA</li>
    </ul>
  </body>
</html>
```

------

### Propriedade: order

#### Para fixar

Copie o código abaixo e teste as possibilidades de ordenação.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        border: 1px solid black;
        display: flex;
        height: 50px;
        margin: auto;
        width: 500px;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        width: 125px;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade order. */
        order: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade order. */
        order: 2;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade order. */
        order: 3;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade order. */
        order: 4;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

------

### Propriedades: flex-grow, flex-shrink, flex-basis

#### Para fixar

**1 -** Teste as possibilidades para a propriedade `flex-grow`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - ORDER</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade grow. */
        flex-grow: 1;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

------

**2 -** Teste as possibilidades para a propriedade `flex-shrink`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - SHRINK</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

      .four {
        background-color: #006472;
        display: flex;
        /* Altere a propriedade shrink. */
        flex-shrink: 1;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

------

**3 -** Teste as possibilidades para a propriedade `flex-basis`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS FLEXBOX - BASIS</title>
    <style>
      .container {
        display: flex;
        height: 50px;
        margin: auto;
        width: 100%;
      }

      .box {
        align-items: center;
        display: flex;
        justify-content: center;
        /* Altere a propriedade flex-basis */
        flex-basis: 500px;
        flex-grow: 0;
        flex-shrink: 1;
      }

      .one {
        background-color: #FBD26A;
        list-style: none;
      }

      .two {
        background-color: #FAA488;
        list-style: none;
      }

      .three {
        background-color: #9069EF;
        list-style: none;
      }

      .four {
        background-color: #006472;
        list-style: none;
      }

    </style>
  </head>
  <body>
    <ul class="container">
      <li class="box one">1</li>
      <li class="box two">2</li>
      <li class="box three">3</li>
      <li class="box four">4</li>
    </ul>
  </body>
</html>
```

------

### Subcontainers, subitens e margin

Sem exercícios.

---

### Agora a prática

Para os exercícios a seguir, crie um arquivo `HTML` e um arquivo `CSS`, copie o código abaixo e siga as instruções de cada enunciado.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TRYFLIX</title>
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <header class="header-container">
      <nav class="menu-container">
        <ul>
          <li>Cadastre-se</li>
          <li>Conecte-se</li>
          <li>Sobre</li>
        </ul>
      </nav>
      <section class="logo-container">
        <img
          src="https://fontmeme.com/permalink/201215/2044acc483426f38dc2c79c3c84ab998.png"
          alt="Website Logo"
        />
      </section>
    </header>

  </body>
</html>
```

Copiar

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu';
}

body {
  background-color: rgb(247, 247, 247);
}

.header-container {
  background-color: #5C687C;
  display: flex;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.menu-container {
  display: flex;
}

.menu-container ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.menu-container li {
  color: white;
  font-weight: 500;
  font-size: 1.3rem;
  list-style: none;
  margin-right: 10px;
}
```

#### Parte 1

**1 -** Adicione uma propriedade que defina o tamanho `Flexbox` base para o container da imagem `268px` e para o container do menu `500px`. Após aplicar as propriedades o `header` deverá estar similar a imagem abaixo:

![Header exercicio 1](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-1-674f5d9d4c151da1ab54acf4f396daa1.jpeg)

------

**2 -** Adicione uma propriedade `Flexbox` que modifique a **ordem** em que a logomarca e os itens do menu aparecem na tela. Após aplicar a propriedade o `header` deverá estar similar a imagem abaixo:

![Header exercicio 2](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-2-dc1d9e68dac9ffbdb06fa8252228e3e9.jpeg)

------

**3 -** Adicione uma propriedade `Flexbox` que faça o container do menu crescer, quando houver espaço disponível. Após aplicar a propriedade o `header` deverá estar similar a imagem abaixo:

![Header exercicio 3](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-3-6d768e437a772cbe8eba69409d92ee1e.jpeg)

------

**4 -** Utilize a propriedade `align-self` no elemento correto para que o `header` da página tenha o seguinte comportamento:

![Header exercicio 4](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-4-a12c3e9b78e50e09e6ff10c6526f69c2.jpeg)

------

#### Parte 2

Vamos continuar praticando com a continuação do `header` realizado no exercício acima e construir um `main` com o restante de sua página. Copie o restante dos códigos `HTML` e `CSS` e aplique a seus documentos criados anteriormente.

Copiar

```html
    <main class="main-container">
      <section class="movie-container">
        <section>
          <h2>Assista hoje</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </section>
        <article>
          <h2>Mais assitidos</h2>
          <div class="card-container">
            <div>FILMES 1</div>
            <div>FILMES 2</div>
            <div>FILMES 3</div>
            <div>FILMES 4</div>
            <div>FILMES 5</div>
            <div>FILMES 6</div>
            <div>FILMES 7</div>
            <div>FILMES 8</div>
            <div>FILMES 9</div>
          </div>
        </article>
      </section>
  <aside class="aside-container">
    <h3>Últimas notícias</h3>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>

    <h4>Title</h4>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet officia in provident esse excepturi ipsam!</p>
  </aside>
</main>
```

Copiar

```css
.main-container {
  display: flex;
  flex-wrap: wrap;
}

.movie-container {
  display: flex;
  flex-direction: column;
}

.movie-container h2 {
  margin: 40px 0;
  text-align: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card-container div {
  align-items: center;
  background-color: #5C687C;
  border: black solid 1px;
  display: flex;
  height: 150px;
  justify-content: center;
  margin: 10px;
}

.aside-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
}

.aside-container h3, h4 {
  margin-bottom: 10px;
  text-align: center;
}

.aside-container p {
  margin: 10px 0;
  text-align: justify;
}
```

------

**1 -** Aplique uma base de `350px` para seu container `aside`. Deverá ficar similar a imagem abaixo:

![Main do exercicio 1](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-1-14da05bad73a2378cf6c069efde84487.png)

------

**2 -** Aplique um alinhamento para centralizar e outro para expandir. Seu `aside` apresentar o seguinte comportamento:

![Main do exercicio 2](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-2-0013af9d7e3b58c390b02f68c3b6dc88.png)

------

**3 -** Adicione uma propriedade que faça com que seu container de filmes tenha uma base de `700px` e outra base de `16%` para as `div` do container de seu card. Deve ficar similar a imagem abaixo:

![Main do exercicio 3](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-3-c5ea4449115f8ffeb479c1d04b232c5d.png)

------

**4 -** Aplique uma propriedade com o valor 10 que expanda o container de filmes. Deve ficar similar a imagem abaixo:

![Main do exercicio 3](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-4-18361432450af8c5ebb09178ec760db1.png)

------

**5 -** Adicione uma propriedade com o valor 1 que faça com que suas `div` do container de filmes ocupe todo o espaço em branco. Deve ficar similar a imagem abaixo:

![Main do exercicio 3](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-2/images/exercicio-part2-5-d9fbed9436c1c55676b94a8fd2d8a22f.png)

------

#### Parte 3 (opcional)

Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de ***HTML\***, ***CSS\*** e ***JavaScript\*** e estruture as páginas utilizando **Flexbox**.

---

### Bonus

Que bom que você chegou até aqui, e para treinar ainda mais as propriedades estudadas de Flexbox reunimos alguns exercícios gameficados que são super divertidos.🚀

- [Flexbox Web Flow](https://www.flexboxgame.com/)
- [Flexbox Froggy - exercícios de 14 a 24](https://flexboxfroggy.com/)
- [Flexbox Defense - exercícios de 10 a 12](http://www.flexboxdefense.com/)

---

