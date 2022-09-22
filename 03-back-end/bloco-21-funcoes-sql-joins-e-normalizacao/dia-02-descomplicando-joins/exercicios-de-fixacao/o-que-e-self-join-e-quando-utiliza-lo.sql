-- Exercícios de fixação da seção "O que é SELF JOIN e quando utilizá-lo"
USE hr;

-- Exercício 1
SELECT 
CONCAT(e.first_name, ' ', e.last_name) AS contributor, 
CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employees AS e
INNER JOIN employees AS m
ON e.manager_id = m.employee_id
WHERE e.manager_id <> m.department_id;

-- Exercício 2
SELECT 
COUNT(CONCAT(e.first_name, ' ', e.last_name)) AS number_of_contributors, 
CONCAT(m.first_name, ' ', m.last_name) AS manager
FROM employees AS e
INNER JOIN employees AS m
ON e.manager_id = m.employee_id
WHERE e.manager_id <> m.department_id
GROUP BY manager;
