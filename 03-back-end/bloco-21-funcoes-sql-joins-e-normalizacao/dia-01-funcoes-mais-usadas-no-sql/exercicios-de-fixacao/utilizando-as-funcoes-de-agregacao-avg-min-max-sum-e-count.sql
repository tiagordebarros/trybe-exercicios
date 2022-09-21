-- Exercícios de fixação da seção "Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT"
USE sakila;

-- Exercício 1
SELECT 
AVG(length) AS 'Média de Duração',
MIN(length) AS 'Duração Mínima',
MAX(length) AS 'Duração Máxima',
SUM(length) AS 'Tempo de Exibição Total',
COUNT(*) AS 'Filmes Registrados'
FROM film;
