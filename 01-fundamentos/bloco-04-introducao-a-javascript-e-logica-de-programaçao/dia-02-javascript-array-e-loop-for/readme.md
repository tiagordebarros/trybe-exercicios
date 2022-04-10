### Arrays (listas)

#### Exercício 1

- Obtenha o valor *"Serviços"* do array `menu` :

Copiar

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ;

console.log(menuServices);
```

#### Exercício 2

- Procure o índice do valor *"Portfólio"* do array `menu` :

Copiar

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = ;

console.log(indexOfPortfolio);
```

#### Exercício 3

- Adicione o valor *"Contato"* no final do array `menu` :

Copiar

```javascript
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

console.log(menu);
```

---

### For

#### Exercício 1

- Utilize o `for` para imprimir os elementos da lista `groceryList` com o `console.log()` :

Copiar

```javascript
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
```

------

### For/of

#### Exercício 1

- Utilize o `for/of` para imprimir os elementos da lista `names` com o `console.log()` :

Copiar

```javascript
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
```

------

### Agora a prática

#### Vamos colocar mão na massa?

[Preparamos estes exercícios ](https://be-trybe.typeform.com/to/nVivcI32)para você fixar seus conhecimentos em **JavaScript - Array e loop For** 🎯💪. Vamos lá?

#### Aprofunde seus conhecimentos

Leia atentamente os enunciados e faça o que se pede! Iremos utilizar esse array para realizar os exercícios do 1 ao 7:

Copiar

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função `console.log()` ;
2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

- A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

5. Utilizando `for` , descubra qual o maior valor contido no array e imprima-o;

6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

7. Utilizando `for` , descubra qual o menor valor contido no array e imprima-o;

8. Utilizando `for` , crie um array que vá de 1 até 25 e imprima o resultado;

9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por `2` .

---

### Bônus

Para os próximos dois exercícios [leia este artigo ](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/)e tente entender o que está acontencedo no código abaixo:

Copiar

```javascript
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

Com base na leitura que fez, considere o array `numbers` abaixo e faça os exercícios:

Copiar

```javascript
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

1. Ordene o array `numbers` em ordem crescente e imprima seus valores;
2. Ordene o array `numbers` em ordem decrescente e imprima seus valores;
3. Agora crie um novo array a partir do array `numbers` , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array `numbers` multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o `for` e o método `push` . O resultado deve ser o array abaixo:

Copiar

```javascript
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```

---

