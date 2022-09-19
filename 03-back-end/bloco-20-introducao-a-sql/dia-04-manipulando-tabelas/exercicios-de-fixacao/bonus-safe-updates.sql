-- Exercícios de fixação da seção "Bônus - --safe-updates"

USE sakila;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

-- Exercício 2
UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-Fi';

-- Exercício 3
UPDATE film
SET rental_rate = 25
WHERE rating IN('G', 'PG', 'PG-13')
AND replacement_cost > 20
AND length > 100;

-- Exercício 4
UPDATE film
    SET rental_rate = (
    CASE
	    WHEN length BETWEEN 0 AND 100 THEN 10
        WHEN length > 100 THEN 20
    ELSE
	    rental_rate
    END
);
