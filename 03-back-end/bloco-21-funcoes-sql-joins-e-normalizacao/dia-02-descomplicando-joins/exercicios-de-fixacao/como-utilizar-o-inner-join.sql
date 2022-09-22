-- Exercícios de fixação da seção "Como utilizar o INNER JOIN"
USE sakila;

-- Exercício 1
SELECT a.actor_id, a.first_name, f.film_id
FROM actor AS a
INNER JOIN film_actor AS f
ON a.actor_id = f.actor_id;

-- Exercício 2
SELECT s.first_name, s.last_name, a.address
FROM staff AS s
INNER JOIN address AS a
ON s.address_id = a.address_id;

-- Exercício 3
SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
ORDER BY c.first_name DESC
LIMIT 100;

-- Exercício 4
SELECT c.first_name, c.email, a.address_id, a.address, a.district
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE a.district = 'california'
AND c.first_name LIKE '%rene%';

-- Exercício 5
SELECT c.first_name, COUNT(a.address) AS address_qunatify
FROM customer AS c
INNER JOIN address AS a
ON c.address_id = a.address_id
WHERE active = true
GROUP BY c.customer_id
ORDER BY first_name DESC;

-- Exercício 6
SELECT s.first_name, s.last_name, AVG(p.amount) AS average_payment
FROM staff AS s
INNER JOIN payment AS p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = '2006'
GROUP BY s.staff_id;

-- Exercício 7
SELECT a.actor_id, a.first_name, fa.film_id, f.title
FROM actor AS a
INNER JOIN film_actor AS fa
ON a.actor_id = fa.actor_id
INNER JOIN film AS f
ON fa.film_id = f.film_id;
