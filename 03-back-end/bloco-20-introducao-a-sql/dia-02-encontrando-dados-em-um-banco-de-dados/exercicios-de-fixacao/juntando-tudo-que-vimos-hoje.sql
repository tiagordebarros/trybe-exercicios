-- Exercícios de fixação da seção "Juntando tudo que vimos hoje"

--
-- Parte 1
--

SELECT * FROM sakila.film; -- Exercício 1
SELECT title, release_year, rental_rate FROM sakila.film; -- Exercício 2
SELECT COUNT(*) FROM sakila.film; -- Exercício 3

--
-- Parte 2
--

SELECT DISTINCT last_name FROM sakila.actor; -- Exercício 1
SELECT COUNT(DISTINCT last_name) FROM sakila.actor; -- Exercício 2
SELECT * FROM sakila.actor ORDER BY last_name ASC, first_name DESC; -- Exercício 3

--
-- Parte 3
--

SELECT * FROM sakila.language LIMIT 5 OFFSET 1; -- Exercício 1

--
-- Parte 3
--
SELECT * FROM sakila.film; -- Exercício 1
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost ASC
LIMIT 20; -- Exercício 2
