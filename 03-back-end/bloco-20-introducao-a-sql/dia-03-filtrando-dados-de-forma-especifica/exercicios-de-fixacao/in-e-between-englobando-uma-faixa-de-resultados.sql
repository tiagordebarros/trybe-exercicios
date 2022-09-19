-- Exercícios de fixação da seção "IN e BETWEEN - englobando uma faixa de resultados"

USE sakila;

-- Exercício 1
SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name ASC;

-- Exercício 2
SELECT email FROM customer
WHERE address_id BETWEEN 172 AND 176
ORDER BY email ASC;

-- Exercício 3
SELECT COUNT(*) AS numero_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

-- Exercício 4
SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;

-- Exercício 5
SELECT title, rating FROM film
WHERE rating IN('G', 'PG', 'PG-13')
ORDER BY title ASC
LIMIT 500;
