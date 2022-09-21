-- Exercícios de fixação da seção "Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING"
USE sakila;

-- Exercício 1
SELECT rating, AVG(length) AS average
FROM film
GROUP BY rating
HAVING average BETWEEN 115.0 AND 121.50
ORDER BY average DESC;

-- Exercício 2
SELECT rating, SUM(replacement_cost) AS custo_subtituicao_total
FROM film
GROUP by rating
HAVING custo_subtituicao_total > 3950.50
ORDER BY custo_subtituicao_total ASC;
