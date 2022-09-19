-- Exercícios de fixação da seção "LIKE - criando pesquisas mais dinâmicas"

USE sakila;

-- Exercício 1
SELECT * FROM film
WHERE title LIKE '%ace%';

-- Exercício 2
SELECT * FROM film
WHERE description LIKE '%china';

-- Exercício 3
SELECT * FROM film
WHERE description LIKE '%girl%'
AND title LIKE '%lord';

-- Exercício 4
SELECT * FROM film
WHERE title LIKE '___gon%';

-- Exercício 5
SELECT * FROM film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%';

-- Exercício 6
SELECT * FROM film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%';

-- Exercício 7
SELECT * FROM film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%';
