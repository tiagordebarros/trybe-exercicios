-- Banco de Dados w3resour_hr

--
-- Exercícios da seção 'Agora a prática'
--

USE hr;
SET SQL_SAFE_UPDATES = 0;

-- Exercício 1
SELECT MAX(salary) FROM employees;

-- Exercício 2
SELECT MAX(salary) - MIN(salary) FROM employees;

-- Exercício 3
SELECT job_id, AVG(salary) AS average_salary
FROM employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- Exercício 4
SELECT SUM(salary) FROM employees;

-- Exercício 5
SELECT
MAX(salary),
MIN(salary),
SUM(salary),
ROUND (AVG(salary), 2)
FROM employees;

-- Exercício 6
SELECT job_id , COUNT(*) AS 'total'
FROM employees
WHERE job_id = "it_prog";

-- Exercício 7
SELECT job_id, SUM(salary) AS sum_salary
FROM employees
GROUP BY job_id;

-- Exercício 8
SELECT job_id, SUM(salary) AS sum_salary
FROM employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- Exercício 9
SELECT job_id, AVG(salary) AS average_salary
FROM employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY average_salary DESC;

-- Exercício 10
SELECT 
department_id, 
AVG(salary) AS average_salary,
COUNT(*) AS employees
FROM employees
GROUP BY department_id
HAVING employees > 10;

-- Exercício 11
UPDATE employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- Exercício 12
SELECT * FROM employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- Exercício 13
SELECT employee_id, first_name, YEAR(hire_date) AS hire_year
FROM employees;

-- Exercício 14
SELECT employee_id, first_name, DAY(hire_date) AS hire_day
FROM employees;

-- Exercício 15
SELECT employee_id, first_name, MONTH(hire_date) AS hire_month
FROM employees;

-- Exercício 16
select UCASE(CONCAT(first_name, ' ', last_name)) AS employee_fullname
FROM employees;

-- Exercício 17
select last_name, hire_date FROM employees
WHERE hire_date LIKE '1987-07%';

-- Exercício 18
select first_name, last_name, 
DATEDIFF(CURRENT_DATE(), hire_date) AS days_worked
FROM employees;
