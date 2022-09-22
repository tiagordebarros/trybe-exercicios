-- Banco de Dados Pixar

--
-- Exercícios da seção 'Bônus'
--

USE pixar;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 6
SELECT m.id, m.title, m.director, m.year, m.length_minutes
FROM Movies AS m
INNER JOIN BoxOffice AS bo
ON m.id = bo.movie_id
WHERE bo.rating > 8
AND m.theater_id IS NOT null;
