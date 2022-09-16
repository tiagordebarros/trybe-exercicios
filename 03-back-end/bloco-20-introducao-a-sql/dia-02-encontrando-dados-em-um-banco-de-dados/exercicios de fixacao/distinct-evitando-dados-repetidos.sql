-- Exercícios de fixação da seção "DISTINCT - evitando dados repetidos"

--
-- Gera a tabela "Estudantes" no banco de dados "Escola"
--

CREATE DATABASE `Escola`;
CREATE TABLE IF NOT EXISTS Escola.Estudantes (
    `nome` VARCHAR(7) CHARACTER SET utf8,
    `idade` INT
);
INSERT INTO Escola.Estudantes VALUES
    ('Rafael', 25),
    ('Amanda', 30),
    ('Roberto', 45),
    ('Carol', 19),
    ('Amanda', 25);

--
-- Exercícios com base na tabela
--

SELECT DISTINCT name, idade FROM Escola.Estudantes; -- Exercício 1
-- R.: 5 linhas. -- Exercício 2
SELECT DISTINCT name FROM Escola.Estudantes; -- Exercício 3
-- R.: 4 linhas. -- Exercício 4
SELECT DISTINCT idade FROM Escola.Estudantes; -- Exercício 5
-- R.: 4 linhas. -- Exercício 6
