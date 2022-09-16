# Encontrando dados em um banco de dados

## Conteúdos

### O que são *queries*

Sem exercícios de fixação.

### `SELECT`, o primeiro passo

Já vamos praticar? Aham!

1. Monte uma *query* que exiba seu nome na tela;
2. Monte uma *query* que exiba seu nome, sobrenome, cidade natal e idade na tela;
3. Monte uma *query* que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o `AS`, que é chamado de `alias` na linguagem **SQL** (*alias* é como um **apelido** no português);
4. Qual é o resultado de `13 * 8` ? Descubra usando apenas o `SELECT`;
5. Monte uma *query* que exiba a data e hora atuais. Dê a essa coluna o nome "data_atual".

Vamos agora entrar no banco de dados `sakila` e encontrar as seguintes informações, montando uma *query* para cada uma:

1. Escreva uma *query* que selecione todas as colunas da tabela `city`;
2. Escreva uma *query* que exiba apenas as colunas `first_name` e `last_name` da tabela `customer`;
3. Escreva uma *query* que exiba todas as colunas da tabela `rental`;
4. Escreva uma *query* que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela `film`;
5. Utilize o `SELECT` para explorar todas as tabelas do banco de dados.

### `CONCAT` - juntando duas ou mais colunas

Vamos brincar um pouco mais com isso?

1. Na tabela `sakila.film`, monte uma *query* que exiba o **título** e o **ano de lançamento** dos filmes em uma coluna e dê a ela o nome `lançamento_do_filme`.
2. Na tabela `sakila.film`, crie uma *query* que exiba o **título** do filme e sua **classificação indicativa** (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome `classificação`. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.
3. Na tabela `sakila.address`, monte uma *query* que exiba a **rua** e o **distrito** de cada registro em uma coluna apenas, e dê a essa coluna o nome `endereço`.

### `DISTINCT` - evitando dados repetidos

Perfeito! Então, depois de ter assistido ao vídeo sobre `DISTINCT`, dê uma olhada nesta tabela:

![img](https://assets.app.betrybe.com/back-end/sql/images/sampleTable1-1df75b03ae8e20c7da20d37904a634e6.png)

Tabela fictícia

Para criá-la no seu banco de dados, abra uma nova janela de *query* no **MySQL Workbench** e execute o seguinte código:

Copiar

```sql
CREATE DATABASE Escola;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    nome VARCHAR(7) CHARACTER SET utf8,
    idade INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);
```

Feito isso, você terá acesso à tabela `Estudantes` do banco de dados `Escola`. Levando em conta a explicação que você acabou de ver, como você montaria uma *query* para encontrar os seguintes dados?

1. Monte uma *query* para encontrar pares únicos de **nomes** e **idades**.
2. Quantas linhas você encontraria na *query* anterior?
3. Monte uma *query* para encontrar somente os **nomes** únicos.
4. Quantas linhas você encontraria na *query* anterior?
5. Monte uma *query* para encontrar somente as **idades** únicas.
6. Quantas linhas você encontraria na *query* anterior?

### `COUNT` - contando resultados

Percebeu que você pode usar o `COUNT` de maneiras bem criativas, certo? Legal, então vamos pensar no seguinte cenário:

![img](https://assets.app.betrybe.com/back-end/sql/images/sampleSelect1-f3fffe6ff17225ce4ffaa1a843e29405.png)

tabela staff

Essa é a tabela `staff` do banco de dados `sakila`. Como você poderia responder às seguintes questões?

1. **Quantas senhas** temos cadastradas nessa tabela?
2. **Quantas pessoas** temos no total trabalhando para nossa empresa?
3. **Quantos emails** temos cadastrados nessa tabela?

### `LIMIT` - especificando a quantidade de resultados

Sem exercícios de fixação.

### `LIMIT OFFSET` - Pulando linhas desnecessárias

Tranquilo, não é? Agora, olhando o resultado a seguir, qual *query* eu teria que montar para trazer os 10 primeiros resultados, a partir de `JOHNNY`?

![img](https://assets.app.betrybe.com/back-end/sql/images/limit4-d2cddfe680162164a24131fee86ab759.png)

Tabela actor

### `RDER BY` - ordenando resultados

Sem exercícios de fixação.

### Juntando tudo que vimos hoje

Para os exercícios a seguir, vamos usar a tabela `sakila.film`:

- Escreva uma *query* que exiba **todos os filmes** cadastrados no banco de dados.
- Escreva uma *query* que exiba apenas o **nome** dos filmes, seu **ano de lançamento** e sua **classificação**.
- **Quantos filmes** temos cadastrados?

Para os exercícios a seguir, vamos usar a tabela `sakila.actor`:

- Escreva uma *query* que exiba apenas os **sobrenomes únicos** cadastrados.
- **Quantos sobrenomes únicos** temos na tabela?
- Ordene os valores na tabela **em ordem crescente** de sobrenomes e **em ordem decrescente** de nome.

Usando a tabela `language`:

- Crie uma pesquisa que mostre os **5 idiomas cadastrados**, mas **não mostre** o idioma `english`.

Usando a tabela `film`:

- Selecione todos os dados da tabela. Pronto, fez isso?
- Agora vamos tentar fazer o seguinte: Crie uma *query* para encontrar os **20 primeiros filmes**, incluindo o **título**, o **ano de lançamento**, a **duração**, a **classificação indicativa** e o **custo de substituição**. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.

## Exercícios

### Agora, a prática:

**Exercício 1**: Faça as tarefas de 1 a 15.

> Para realizar os exercícios do 1 ao 15, restaure o seguinte banco de dados:

Copiar

```sql
DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  code CHAR(4),
  name CHAR(50) NOT NULL,
  hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  scientist INT NOT NULL,
  project CHAR(4) NOT NULL,
  PRIMARY KEY (scientist, project),
  FOREIGN KEY (scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (project) REFERENCES Projects (code)
);

INSERT INTO Scientists(SSN,name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (code, name, hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (scientist, project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');
```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma *query* para exibir a string "This is SQL Exercise, Practice and Solution".
2. Escreva uma *query* para exibir três números em três colunas.
3. Escreva uma *query* para exibir a soma dos números 10 e 15.
4. Escreva uma *query* para exibir o resultado de uma expressão aritmética qualquer.
5. Escreva uma *query* para exibir todas as informações de todos os cientistas.
6. Escreva uma *query* para exibir o nome como "nome_do_projeto" e as horas como "tempo_de_trabalho" de cada projeto.
7. Escreva uma *query* para exibir o nome dos cientistas em ordem alfabética.
8. Escreva uma *query* para exibir o nome dos projetos em ordem alfabética descendente.
9. Escreva uma *query* que exiba a string "O projeto `name` precisou de `hours` horas para ser concluído." para cada projeto.
10. Escreva uma *query* para exibir o nome e as horas dos três projetos com a maior quantidade de horas.
11. Escreva uma *query* para exibir o código de todos os projetos da tabela `AssignedTo` sem que haja repetições.
12. Escreva uma *query* para exibir o nome do projeto com maior quantidade de horas.
13. Escreva uma *query* para exibir o nome do segundo projeto com menor quantidade de horas.
14. Escreva uma *query* para exibir todas as informações dos cinco projetos com a menor quantidade de horas.
15. Escreva uma *query* que exiba a string "Existem `Number` cientistas na tabela Scientists.", em que `Number` se refira a quantidade de cientistas.

### Bônus

**Exercício 2**: Para realizar as tarefas do 1 ao 4, restaure o seguinte banco de dados:

Copiar

```sql
DROP SCHEMA IF EXISTS PiecesProviders;
CREATE SCHEMA PiecesProviders;
USE PiecesProviders;

CREATE TABLE Pieces (
  code INTEGER PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Providers (
  code VARCHAR(40) PRIMARY KEY NOT NULL,
  name TEXT NOT NULL
);

CREATE TABLE Provides (
  piece INTEGER,
  FOREIGN KEY (piece) REFERENCES Pieces (code),
  provider VARCHAR(40),
  FOREIGN KEY (provider) REFERENCES Providers (code),
  price INTEGER NOT NULL,
  PRIMARY KEY (piece , provider)
);

INSERT INTO Providers(code, name)
  VALUES ('HAL', 'Clarke Enterprises'),
    ('RBT', 'Susan Calvin Corp.'),
    ('TNBC', 'Skellington Supplies');

INSERT INTO Pieces(code, name)
  VALUES (1, 'Sprocket'),
    (2, 'Screw'),
    (3, 'Nut'),
    (4, 'Bolt');

INSERT INTO Provides(piece, provider, price)
  VALUES (1, 'HAL', 10),
    (1, 'RBT', 15),
    (2, 'HAL', 20),
    (2, 'RBT', 25),
    (2, 'TNBC', 14),
    (3, 'RBT', 50),
    (3, 'TNBC', 45),
    (4, 'HAL', 5),
    (4, 'RBT', 7);
```

> Esse banco de dados é de uso livre, sendo licenciado de acordo com os termos [deste link](https://creativecommons.org/licenses/by-sa/3.0/).

1. Escreva uma *query* para exibir a peça e o preço de tudo que é provido pela empresa `RBT`.
2. Escreve uma *query* para exibir todas as informações das cinco peças com os maiores preços.
3. Escreva uma *query* para exibir o nome das empresas e preço das peças com os quatro maiores preços, começando a lista a partir do 3º item.
4. Escreva uma *query* para exibir todas as informações das peças que são providas pela empresa `HAL`. Ordene o resultado pelos preços das peças de forma decrescente.
5. Escreva uma *query* para exibir por quantas empresas a peça `1` é provida.

**Exercício 3**: Usando `WHERE`, faça os exercícios [deste link](https://www.w3schools.com/sql/exercise.asp?filename=exercise_where1).

**Exercício 4**: Aplicando restrições, faça os exercícios [deste link](https://sqlbolt.com/lesson/select_queries_with_constraints).

**Exercícios 5**: Estude e faça os exercícios das páginas "What is SQL?", "Table Basics" e "Selecting Data" [deste link](http://www.sqlcourse.com/intro.html).

**Exercício 6**: Exercícios de comparação de valores. Faça os exercícios [deste link](https://sqlzoo.net/wiki/SELECT_from_WORLD_Tutorial).

---

