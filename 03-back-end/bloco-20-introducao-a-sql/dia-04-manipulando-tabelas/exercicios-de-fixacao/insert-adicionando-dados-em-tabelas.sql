-- Exercícios de fixação da seção "INSERT - adicionando dados em tabelas"

USE sakila;

-- Exercício 1
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Tiago', 'Ribeiro de Barros', 100, 'tiagordebarros@gmail.com', 1, true, 'tiago', '123');

-- Exercício 2
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('ígor', 'Ribeiro de Barros', 100, 'igorbarros@gmail.com', 1, true, 'igor', '321'),
('Cristian', 'Bertin', 100, 'cristianbertin@gmail.com', 1, true, 'cristian', '7890');

-- Exercício 3
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name FROM customer
LIMIT 5;

-- Exercício 4
INSERT INTO category(name)
VALUES('Tech'), ('Art'), ('Anime');

-- Exercício 5
INSERT INTO store(manager_staff_id, address_id)
VALUES(3, 100);
