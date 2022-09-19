-- Exercícios de fixação da seção "Data e tempo - lidando com resultados temporais"

USE sakila;

-- Exercício 1
SELECT COUNT(*) AS qunatidade_de_pagamentos FROM payment
WHERE DATE(payment_date) LIKE '2005-05-25%';

-- Exercício 2
SELECT COUNT(*) AS intervalo_de_pagamentos FROM payment
WHERE DATE(payment_date) BETWEEN '2005-07-01' AND '2005-08-22';

-- Exercício 3
SELECT DATE(rental_date) AS data,
YEAR(rental_date) AS ano,
MONTH(rental_date) AS mes,
DAY(rental_date) AS dia,
HOUR(rental_date) AS hora,
MINUTE(rental_date) AS minuto,
SECOND(rental_date) AS segundo
FROM rental
WHERE rental_id = 10330;

-- Exercício 4
SELECT * FROM payment
WHERE payment_date LIKE '2005-07-28 22%';
