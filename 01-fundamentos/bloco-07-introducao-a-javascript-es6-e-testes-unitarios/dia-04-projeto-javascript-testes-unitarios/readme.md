# JavaScript Testes Unitários (Projeto) :books:

Projeto desenvolvido em JavaScript, testado com e sem TDD e analisado com ESLint. Clique [aqui](https://tiagordebarros.github.io/projetos/javascript-testes-unitarios/index.html) para visualizá-lo.

## Requisitos:

- [x] 1-Implemente a função average
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos. Caso a função receba algum valor não numérico ou um array vazio, o valor `undefined` deve ser retornado. Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1. O arquivo `average.spec.js` contém os testes para `average` já implementados. Implemente a função no arquivo `src/average.js` de forma que ela atenda aos testes propostos.
- [x] 2-Implemente os casos de teste para a função numbers
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário. Essa função já está implementada no arquivo `src/numbers.js`. Escreva pelo menos quatro testes para essa função para garantir que a implementação de `numbers` está correta.
- [x] 3-Implemente a função vqv
  Use template literals para escrever uma função que recebe seu nome e sua idade e retorna o parágrafo descrito abaixo:
- [x] 4-Implemente os casos de teste para a função circle
  A função `circle` recebe o raio de um círculo e retorna um objeto contendo suas informações: Raio, Área e Circunferência. Se não for especificado um raio, a função retorna `undefined`. Essa função já está implementada no arquivo `src/circle.js`. Escreva pelo menos seis testes para essa função para garantir que a implementação de `circle` está correta.
- [x] 5-Implemente a função createStudent
  A função `createStudent` recebe como parâmetro um **nome**, e retorna um objeto contendo duas chaves:
- [x] 6-Implemente os casos de teste para a função productDetails
  A função `productDetails` recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos:
- [x] 7-Implemente as funções calculator e arrayGenerator
  A função `calculator` recebe dois números inteiros como parâmetro e retorna um objeto com as seguintes chaves:
- [x] 8-Implemente a função myCounter
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array. Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
- [x] 9-Implemente os casos de teste para a função getCharacter
  A função `getCharacter` recebe uma string que representa o nome de um personagem e retorna um objeto contendo seu nome, sua classe e suas frases.
- [ ] 10-Implemente a função createMenu, bem como seus casos de teste
  Esse último requisito vai te guiar por um rico processo de Desenvolvimento Orientado a Testes ou TDD - Test Driven Development