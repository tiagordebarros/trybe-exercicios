### Conceitos

Sem exercícios.

----

### Introdução, estrutura básica, flex-direction, flex-wrap, flex-flow e reverse

#### Para fixar

Vamos colocar em prática os novos conhecimentos adquiridos? Copie o código abaixo e realize os exercícios de fixação propostos.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Flex Flow</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
    </div>
  </body>
</html>
```

**1 -** Teste as possibilidades (`row`, `column`, `row-reverse` e `column-reverse`) para a propriedade `flex-direction`.

**2 -** Teste as possibilidades (`wrap` e `nowrap`) para a propriedade `flex-wrap`.

**3 -** Teste as possibilidades para a propriedade `flex-flow`.

-----

### Propriedades: justify-content, align-items e align-content

#### Para fixar

Interessante quantas possibilidades para manipular o posicionamento de elementos o flex-box nos traz, não é? Copie o código abaixo e teste algumas destas possibilidades para fixar seu conhecimento.

**1 -** Utilizando o código abaixo, teste as possibilidades (`center`, `flex-start`, `flex-end`, `space-around` e `space-between`) para a propriedade `justify-content`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Justify Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 20%;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
    </div>
  </body>
</html>
```

**2 -** Teste as possibilidades (`center`, `flex-start`, `flex-end`, `stretch` e `baseline`) para a propriedade `align-items`. Não se esqueça de copiar o código abaixo! 😉

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Items</title>
    <style>
      .box-one {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 70px;
        min-height: 80px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-two {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 50px;
      }

      .box-three {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 30px;
        margin: 10px 5px;
        min-height: 50px;
        text-align: center;
        width: 50px;
      }

      .box-container {
        background-color: #0fa36b;
        display: flex;
        /* ADICIONE AQUI SEUS TESTES */
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box-one">1</div>
      <div class="box-two">2</div>
      <div class="box-three">3</div>
    </div>
  </body>
</html>
```

**3 -** Teste as possibilidades (`center`, `flex-start`, `flex-end`, `stretch`, `space-around` e `space-between`) para a propriedade `align-content`.

Copiar

```html
<!DOCTYPE html>
<html lang="pt">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox - Align Content</title>
    <style>
      .box {
        color: #9069EF;
        background-color: rgb(243, 243, 243);
        border: 2px solid #232525;
        font-size: 50px;
        min-height: 60px;
        margin: 10px 5px;
        text-align: center;
        width: 30%;
      }

      .box-container {
        /* ADICIONE AQUI SEUS TESTES */
        background-color: #0fa36b;
        display: flex;
        flex-wrap: wrap;
        height: 600px;
      }
    </style>

  </head>
  <body>
    <div class="box-container">
      <div class="box">1</div>
      <div class="box">2</div>
      <div class="box">3</div>
      <div class="box">4</div>
      <div class="box">5</div>
      <div class="box">6</div>
      <div class="box">7</div>
      <div class="box">8</div>
      <div class="box">9</div>
    </div>
  </body>
</html>
```

------

### 🚀 Trybe Tech-Gallery

Após conhecer um pouco mais dos conceitos de **Flexbox**, o que acha de praticar seus conhecimentos em uma aplicação WEB?

![Trybe Tech Gallery Preview](https://assets.app.betrybe.com/fundamentals/css-flexbox/css-flexbox-part-1/images/trybe-tech-gallery-fddd3bf57004a861a1f7eb6067441ef1.jpeg)

Trybe Tech Gallery Preview

No exemplo acima foi criada uma galeria de fotos de algumas das tecnologias que você aprenderá no curso da Trybe. As imagens utilizadas estarão disponíveis para você, mas...caso queira, sinta-se livre para criar a página com a temática que você preferir ok? Só atente-se aos enunciados para que a proposta do exercício seja cumprida!

**Atenção**: os exercícios estão disponíveis [neste repositório](https://github.com/tryber/exercise-tech-gallery). As instruções de como realizar o exercício estão no `README.md` do repositório **exercise-tech-gallery**. As imagens utilizadas estão disponíveis na pasta **images** do repositório. 😉

**Spoiler**: Caso queira praticar ainda mais, na seção de recursos adicionais existem alguns exercícios gamificados que são super divertidos. 🚀

---