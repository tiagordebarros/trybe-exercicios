-- Exercícios de fixação da seção "DELETE - removendo dados de uma tabela"

USE sakila;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
SELECT * FROM actor;

SELECT * FROM film_actor;

SELECT * FROM actor
WHERE first_name = 'KARL';

DELETE FROM film_actor
WHERE actor_id = 12;

DELETE FROM actor
WHERE first_name = 'KARL';

-- Exercício 2
SELECT * FROM actor
WHERE first_name = 'MATTHEW';

DELETE FROM film_actor
WHERE actor_id IN(8, 103, 181);

DELETE FROM actor
WHERE first_name = 'MATTHEW';

-- Exercício 3
SELECT * FROM film_text;

DELETE FROM film_text
WHERE description LIKE '%saga%';

-- Exercício 4
SELECT * FROM film_actor;
SELECT * FROM film_category;

TRUNCATE film_actor;
TRUNCATE film_category;

-- Exercício 5
-- Tabelas inspecionadas via aba 'DDL' do 'Table Inspector'

-- Exercício 6
-- Banco de dados restaurado!
