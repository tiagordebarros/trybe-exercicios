-- Banco de Dados Scientists
-- Licença: CC(Creative Commons)

DROP SCHEMA IF EXISTS Scientists;
CREATE SCHEMA Scientists;
USE Scientists;

CREATE TABLE Scientists (
  SSN INT,
  name CHAR(30) NOT NULL,
  PRIMARY KEY (SSN)
);

CREATE TABLE Projects (
  code CHAR(4),
  name CHAR(50) NOT NULL,
  hours INT,
  PRIMARY KEY (Code)
);

CREATE TABLE AssignedTo (
  scientist INT NOT NULL,
  project CHAR(4) NOT NULL,
  PRIMARY KEY (scientist, project),
  FOREIGN KEY (scientist) REFERENCES Scientists (SSN),
  FOREIGN KEY (project) REFERENCES Projects (code)
);

INSERT INTO Scientists(SSN,name)
  VALUES(123234877, 'Michael Rogers'),
    (152934485, 'Anand Manikutty'),
    (222364883, 'Carol Smith'),
    (326587417, 'Joe Stevens'),
    (332154719, 'Mary-Anne Foster'),
    (332569843, 'George ODonnell'),
    (546523478, 'John Doe'),
    (631231482, 'David Smith'),
    (654873219, 'Zacary Efron'),
    (745685214, 'Eric Goldsmith'),
    (845657245, 'Elizabeth Doe'),
    (845657246, 'Kumar Swamy');

 INSERT INTO Projects (code, name, hours)
  VALUES ('AeH1' ,'Winds: Studying Bernoullis Principle', 156),
    ('AeH2', 'Aerodynamics and Bridge Design', 189),
    ('AeH3', 'Aerodynamics and Gas Mileage', 256),
    ('AeH4', 'Aerodynamics and Ice Hockey', 789),
    ('AeH5', 'Aerodynamics of a Football', 98),
    ('AeH6', 'Aerodynamics of Air Hockey', 89),
    ('Ast1', 'A Matter of Time', 112),
    ('Ast2', 'A Puzzling Parallax', 299),
    ('Ast3', 'Build Your Own Telescope', 6546),
    ('Bte1', 'Juicy: Extracting Apple Juice with Pectinase', 321),
    ('Bte2', 'A Magnetic Primer Designer', 9684),
    ('Bte3', 'Bacterial Transformation Efficiency', 321),
    ('Che1', 'A Silver-Cleaning Battery', 545),
    ('Che2', 'A Soluble Separation Solution', 778);

 INSERT INTO AssignedTo (scientist, project)
  VALUES (123234877, 'AeH1'),
    (152934485, 'AeH3'),
    (222364883, 'Ast3'),
    (326587417, 'Ast3'),
    (332154719, 'Bte1'),
    (546523478, 'Che1'),
    (631231482, 'Ast3'),
    (654873219, 'Che1'),
    (745685214, 'AeH3'),
    (845657245, 'Ast1'),
    (845657246, 'Ast2'),
    (332569843, 'AeH4');

--
-- Exercícios da seção 'Agora a prática'
--

USE Scientists;
SELECT 'This is SQL Exercise, Practice and Solution'; -- Exercício 1
SELECT 1, 2, 3; -- Exercício 2
SELECT 10 + 15; -- Exercício 3
SELECT (1 + 2) * (3 / 4); -- Exercício 4
SELECT * FROM Scientists; -- Exercício 5
SELECT name AS nome_do_projeto, hours AS tempo_de_trabalho FROM Projects; -- Exercício 6
SELECT name FROM Scientists ORDER BY name ASC; -- Exercício 7
SELECT name FROM Projects ORDER BY name DESC; -- Exercício 8
SELECT CONCAT('O projeto', name, 'precisou de', hours, 'horas para ser concluído.') AS resultado FROM Projects; -- Exercício 9
SELECT name, hours FROM Projects ORDER BY hours DESC LIMIT 3; -- Exercício 10
SELECT DISTINCT project FROM AssignedTo; -- Exercício 11
SELECT name FROM Projects ORDER BY hours DESC LIMIT 1; -- Exercício 12
SELECT name FROM Projects ORDER BY hours ASC LIMIT 1 OFFSET 1; -- Exercício 13
SELECT * FROM Projects ORDER BY hours ASC LIMIT 5; -- Exercício 14
SELECT CONCAT('Existem', COUNT(Number), 'cientistas na tabela Scientists.') AS numero_de_cientistas FROM Scientists; -- Exercício 15
