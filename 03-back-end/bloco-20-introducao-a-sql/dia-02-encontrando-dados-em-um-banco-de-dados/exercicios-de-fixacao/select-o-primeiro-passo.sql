-- Exercícios de fixação da seção "SELECT, o primeiro passo"

--
-- Parte 1
--

SELECT 'Tiago'; -- Exercício 1
SELECT 'Tiago', 'Ribeiro de Barros', 'Caxias do Sul', 31; -- Exercício 2
SELECT 'Tiago' AS nome, 'Ribeiro de Barros' AS sobrenome, 'Caxias do Sul' AS 'cidade_natal', 31 AS idade; -- Exercício 3
SELECT 13 * 8; -- Exercício 4
SELECT now() AS 'data_atual'; -- Exercício 5

--
-- Parte 2
--

SELECT * FROM sakila.city; -- Exercício 1
SELECT firstname, lastname FROM sakila.customer; -- Exercício 2
SELECT * FROM sakila.rental; -- Exercício 3
SELECT title, description, release_year FROM sakila.film; -- Exercício 4
SELECT * FROM sakila.nome_da_tabela; -- Exercício 5
