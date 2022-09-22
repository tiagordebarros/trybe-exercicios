#  Descomplicando JOINs

## Conteúdos

### O que é um `JOIN`?

Sem exercícios de fixação.

### Como utilizar o `INNER JOIN`

Vamos ver agora alguns desafios para consolidar esse conhecimento sobre o `INNER JOIN`, utilizando o banco de dados `sakila`. Antes de começar a escrever suas *queries*, identifique quais tabelas contêm as informações de que você precisa e como elas estão relacionadas.

1. Monte uma *query* que exiba o **id do ator**, **nome do ator** e **id do filme** em que ele já atuou, usando as tabelas `actor` e `film_actor`.

2. Use o `JOIN` para exibir o **nome**, **sobrenome** e **endereço** de cada um dos funcionários do banco. Use as tabelas `staff` e `address`.

3. Exiba o **id do cliente**, **nome** e **email** dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente, juntamente com o **id do endereço** e o **nome da rua** onde o cliente mora. Essas informações podem ser encontradas nas tabelas `customer` e `address`.

4. Exiba o **nome**, **email**, **id do endereço**, **endereço** e **distrito** dos clientes que moram no distrito da California e que contêm “rene” em seus nomes. As informações podem ser encontradas nas tabelas `address` e `customer`.

5. Exiba o **nome** e a **quantidade de endereços** dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela `address` e `customer`.

6. Monte uma *query* que exiba o **nome**, **sobrenome** e a **média de valor** (`amount`) paga aos funcionários no ano de 2006. Use as tabelas `payment` e `staff`. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.

7. Monte uma *query* que exiba o **id do ator**, **nome**, **id do filme** e **título do filme**, usando as tabelas `actor`, `film_actor` e `film`. Dica: você precisará fazer mais de um `JOIN` na mesma *query*.

### Como utilizar o `LEFT JOIN` e o `RIGHT JOIN`

Sem exercícios de fixação.

### O que é `SELF JOIN` e quando utilizá-lo

Para fixar esses conceitos, tente encontrar as seguintes informações, utilizando o schema `hr`:

1. Queremos saber o **Nome** das **pessoas colaboradoras** e suas respectivas **gerências** (`manager`) cujos departamentos (`department`) são diferentes.
2. Exiba o **Nome** e a **quantidade de pessoas lideradas** de cada pessoa gerente.

### Bônus: Tópicos extras sobre MySQL

Sem exercícios de fixação.

## Exercícios

### Agora, a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

Faça os exercícios 1 a 6 utilizando banco de dados `Pixar` abaixo:

Copiar

```sql
1DROP SCHEMA IF EXISTS Pixar;
2CREATE SCHEMA Pixar;
3USE Pixar;
4CREATE TABLE Theater (
5    id INTEGER auto_increment PRIMARY KEY NOT NULL,
6    name VARCHAR(30) NOT NULL,
7    location VARCHAR(30) NULL
8);
9CREATE TABLE Movies (
10    id INTEGER auto_increment PRIMARY KEY NOT NULL,
11    title VARCHAR(30) NOT NULL,
12    director VARCHAR(30) NULL,
13    year INT NOT NULL,
14    length_minutes INT NOT NULL,
15    theater_id INTEGER,
16    FOREIGN KEY (theater_id) REFERENCES Theater (id)
17);
18CREATE TABLE BoxOffice (
19    movie_id INTEGER,
20    FOREIGN KEY (movie_id) REFERENCES Movies (id),
21    rating DECIMAL(2,1) NOT NULL,
22    domestic_sales INT NOT NULL,
23    international_sales INT NOT NULL
24);
25INSERT INTO Theater(name, location)
26    VALUES ('Cinemark', 'São Paulo'),
27        ('Brodway theater', 'Nova York'),
28        ('Phoenix theater', 'Londres'),
29        ('Le Champo', 'Paris'),
30        ('TLC Chinese Theater', 'Los Angeles'),
31        ('Regal Tikahtnu', 'Alaska');
32INSERT INTO Movies(title, director, year, length_minutes, theater_id)
33    VALUES ('Toy Story', 'John Lasseter', 1995, 81, 1),
34        ('Vida de inseto', 'Andrew Staton', 1998, 95, 3),
35        ('Ratatuille', 'Brad Bird', 2010, 115, NULL),
36        ('UP', 'Pete Docter', 2009, 101, 2),
37        ('Carros', 'John Lasseter', 2006, 117, NULL),
38        ('Toy Story 2', 'John Lasseter', 1999, 93, 5),
39        ('Valente', 'Brenda Chapman', 2012, 98, NULL),
40        ('Monstros SA', 'Pete Docter', 2001, 92, NULL),
41        ('Procurando Nemo', 'Jon Lasseter', 2003, 107, 4),
42        ('Os Incríveis', 'Brad Bird', 2004, 116, NULL),
43        ('WALL-E', 'Pete Docter', 2008, 104, NULL);
44INSERT INTO BoxOffice(movie_id, rating, domestic_sales, international_sales)
45    VALUES (1, 8.3, 190000000, 170000000),
46      (2, 7.2, 160000000, 200600000),
47      (3, 7.9, 245000000, 239000000),
48      (4, 6.1, 330000000, 540000000),
49      (5, 7.8, 140000000, 310000000),
50      (6, 5.8, 540000000, 600000000),
51      (7, 7.5, 250000000, 190000000),
52      (8, 8.5, 300000000, 250000000),
53      (10, 7.4, 460000000, 510000000),
54      (9, 6.8, 450000000, 370000000),
55      (11, 9.9, 290000000, 280000000);
```

**Exercício 1:** Utilizando o `INNER JOIN`, encontre as vendas nacionais (`domestic_sales`) e internacionais (`international_sales`) de cada filme.

🚀 **Exercício 2:** Utilizando o `INNER JOIN`, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (`international_sales`) do que vendas nacionais (`domestic_sales`).

🚀 **Exercício 3:** Utilizando o `INNER JOIN`, faça uma busca que retorne os filmes e sua avaliação (`rating`) em ordem decrescente.

**Exercício 4:** Utilizando o `LEFT JOIN`, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

**Exercício 5:** Utilizando o `RIGHT JOIN`, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.

### Bônus

🚀 **Exercício 6:** Utilizando o `INNER JOIN`, selecione todas as informações dos filmes que estão em cartaz (possuem `theater_id` diferente de `NULL`) com avaliação maior que 8.

---

