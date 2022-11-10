# Introdução ao TypeScript

## Conteúdos

### Introdução (O que é TypeScript?)
Sem exercícios de fixação.

### Tipagem (dicas de tipo)
Sem exercícios de fixação.

### Diferença entre Compilador e Transpilador
Sem exercícios de fixação.

### TSC - TypeScript Compiler
Sem exercícios de fixação.

### Introdução ao TSConfig
Sem exercícios de fixação.

### TypeScript Playground
Sem exercícios de fixação.

### Tipos e Subtipos
Sem exercícios de fixação.

### Primeiro programa em TypeScript

E agora, o que acha de colocar a mão na massa e incrementar mais esse nosso módulo de cálculo de área de figuras geométricas?

1.  Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois.  `(D * d) / 2`
    -   Calcule a área de um losango que tem D = 32cm e d = 18cm;
    -   Calcule a área de um losango que tem D = 200cm e d = 50cm;
    -   Calcule a área de um losango que tem D = 75cm e d = 25cm.
2.  Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois.  `((B + b) * h) / 2`
    -   Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm;
    -   Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 35cm;
    -   Calcule a área de um trapézio que tem B = 150cm, b = 120cm e altura = 80cm.
3.  Crie uma nova função para calcular a área de um círculo. A área do círculo de raio  `r`  é encontrada multiplicando o raio ao quadrado pelo número irracional ℼ (em geral utilizamos ℼ = 3,14).  `ℼ * r²`
    -   Calcule a área de um círculo de raio igual 25cm;
    -   Calcule a área de um círculo de raio igual 100cm;
    -   Calcule a área de um círculo de raio igual 12,5cm.

### Bônus - Enum ou enumeração

-   Crie uma  `Enum`  que represente os  `dias da semana`. Seu valor deve ser o número do dia.
-   Crie uma  `Enum`  que represente as  `cores do arco-íris`. Seu valor deve ser o nome das cores em português.

## Exercícios

### Agora, a prática

Antes de começar, crie uma pasta e, dentro dela, crie um pacote Node.js com o  `npm init`  chamado  `my-ts-scripts`. Realize os exercícios dentro desse pacote.

### Configuração Inicial

Copiar

```bash
1mkdir my-ts-scripts && cd my-ts-scripts
```

Copiar

```bash
1npm init -y
```

Copiar

```bash
1npm install -D @tsconfig/node16 @types/node typescript
```

Copiar

```bash
1touch tsconfig.json
```

Copiar

```json
1// ./tsconfig.json
2{
3  "extends": "@tsconfig/node16/tsconfig.json", // estendemos a configuração base para o Node 16
4  "compilerOptions": {
5    "outDir": "./dist", // pasta onde nossos arquivos compilados serão salvos
6  },
7}
```

#### Exercício 1

Temos um array  `characters`  que agrupa dados de jogadores em um MMORPG (“Jogo de representação de papéis online, multijogador em massa”) usado para manter o registro de uma guilda (grupo de jogadores) no acompanhamento da evolução do grupo. Esses dados foram adicionados sem se atentar para sua correta tipagem, o que pode ocasionar um bug no futuro. Faça a correta tipagem do array por meio do tipo  `Character`  e da função usada para imprimir as informações básicas de todos os jogadores.

Copiar

```typescript
1type Character = any;
2
3const characters: any = [
4  {
5    nickname: 'xKillerx',
6    class: 'warrior',
7    stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
8    createdAt: new Date('2003-10-1')
9  },
10  {
11    nickname: 'jainaProud',
12    class: 'mage',
13    stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
14    createdAt: new Date('2003-10-2')
15  },
16  {
17    nickname: 'catIn',
18    class: 'hunter',
19    stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
20    createdAt: new Date('2003-10-15')
21  },
22]
23
24function printCharacter(character: any, index: number) {
25  const { nickname, class: cls, createdAt } = character;
26
27  console.log(`\n\n===== Character: ${index + 1} ========`);
28  console.log(`nickname: ${nickname}
29class: ${cls}
30createdAt: ${createdAt}`);
31}
32
33characters.forEach(printCharacter);
```

#### Exercício 2

Crie um script para converter unidades de medida de comprimento:

1.  Esse script deverá se chamar  `length.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

Nome

Símbolo

Valor

Quilômetro

km

1000m

Hectômetro

hm

100m

Decâmetro

dam

10m

Metro

m

1m

Decímetro

dm

0,1m

Centímetro

cm

0,01m

Milímetro

mm

0,001m

#### Exercício 3

Crie um script para converter unidades de medida de massa:

1.  Esse script deverá se chamar  `mass.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

Nome

Símbolo

Valor

Quilograma

kg

1000g

Hectograma

hg

100g

Decagrama

dag

10g

Grama

g

1g

Decigrama

dg

0,1g

Centigrama

cg

0,01g

Miligrama

mg

0,001g

#### Exercício 4

Crie um script para converter unidades de medida de capacidade:

1.  Esse script deverá se chamar  `capacity.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Tabela de conversão:**

Nome

Símbolo

Valor

Quilolitro

kl

1000l

Hectolitro

hl

100l

Decalitro

dal

10l

Litro

l

1l

Decilitro

dl

0,1l

Centilitro

cl

0,01l

Mililitro

ml

0,001l

#### Exercício 5

Crie um script para converter unidades de medida de área:

1.  Esse script deverá se chamar  `area.ts`;
2.  Ele script deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Obs:**  atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.

**Tabela de conversão:**

Nome

Símbolo

Valor

Quilômetro quadrado

km²

10⁶ m²

Hectômetro quadrado

hm²

10⁴ m²

Decâmetro quadrado

dam²

10² m²

Metro quadrado

m²

1m²

Decímetro quadrado

dm²

10⁻² m²

Centímetro quadrado

cm²

10⁻⁴ m²

Milímetro quadrado

mm²

10⁻⁶ m²

#### Exercício 6

Crie um script para converter unidades de medida de volume:

1.  Esse script deverá se chamar  `volume.ts`;
2.  Ele deverá possuir uma função chamada  `convert`  que recebe como parâmetro:
    -   valor - number
    -   unidade base - string
    -   unidade para a conversão - string

**Obs:**  atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.

**Tabela de conversão:**

Nome

Símbolo

Valor

Quilômetro cúbico

km³

10⁹ m³

Hectômetro cúbico

hm³

10⁶ m³

Decâmetro cúbico

dam³

10³ m³

Metro cúbico

m³

1m³

Decímetro cúbico

dm³

10⁻³ m³

Centímetro cúbico

cm³

10⁻⁶ m³

Milímetro cúbico

mm³

10⁻⁹ m³

#### Exercício 7

Vamos tornar nossos scripts de unidades de medida mais interativos! Vamos adicionar input de quem usa o script. Para isso, utilize o pacote  `readline-sync`,  [documentação](https://www.npmjs.com/package/readline-sync#utility_methods).

Em cada script, crie uma função chamada  `exec`  que:

1.  Capta as entradas da pessoa usuária via terminal;
2.  Chama a função de conversão passando as entradas da pessoa usuária como parâmetro;
3.  Exibe uma mensagem com o resultado. Ex: “1km é igual a 1000m.”;
4.  Não se esqueça de chamar a função exec ao final do script.  `exec();`“

#### Exercício 8

Crie um arquivo  `index.ts`  que pergunta qual conversão a pessoa usuária deseja realizar, e chama o script correspondente:

1.  O script deve ser acionado por meio do comando  `npm start`  no  `package.json`;
2.  Utilize o  `readline-sync`  para realizar o input de dados;
3.  Quando executado, o script deve exibir uma lista numerada dos scripts disponíveis;
4.  Você pode utilizar o  `require`  para executar o script em questão.

---