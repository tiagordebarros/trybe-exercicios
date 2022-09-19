-- Exercícios de fixação da seção "Operadores booleanos e relacionais"

USE sakila;

-- Exercício 1
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- Exercício 2
SELECT first_name FROM customer
WHERE active IS false
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name ASC;

-- Exercício 3
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating <> 'NC-17'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title ASC
LIMIT 100;

-- Exercício 4
SELECT COUNT(*) AS quantidade_de_clientes_ativos FROM customer
WHERE store_id = 1 
AND active IS true;

-- Exercício 5
SELECT * FROM customer
WHERE store_id = 1
AND active IS NOT true;

-- Exercício 6
SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY replacement_cost ASC, title ASC
LIMIT 50;
