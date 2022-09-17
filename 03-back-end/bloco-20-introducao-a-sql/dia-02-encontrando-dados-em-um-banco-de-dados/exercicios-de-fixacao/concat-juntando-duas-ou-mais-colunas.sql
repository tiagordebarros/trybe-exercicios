-- Exercícios de fixação da seção "CONCAT - juntando duas ou mais colunas"

SELECT CONCAT(title, ' ', release_year) AS 'lançamento_do_filme' FROM sakila.film; -- Exercício 1
SELECT CONCAT(title, ' ', rating) AS 'classificacao' FROM sakila.film; -- Exercício 2
SELECT CONCAT(address, ' ', district) AS 'endereco' FROM sakila.address; -- Exercício 3
