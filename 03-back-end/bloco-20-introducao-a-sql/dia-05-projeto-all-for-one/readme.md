# All For One (Projeto) 📚

A proposta base desse projeto era:

1. Manipular banco de dados em SQL;
2. Utilizar o MySql Workbench corretamente;
3. Fazer uso dos comandos base do SQL: INSERT, SELECT, UPDATE, DELETE, etc, de modo a fazer uso do CRUD .

Principal objetivo: manipular um banco de dados, denominado Northwind, com os principais comandos do SQL, fazendo uso do MySql Workbench.

Principal tecnologia envolvida: MySql. Testado com  Jest. Analisado com ESLint e StyleLint. Clique [aqui](https://tiagordebarros.github.io/projetos/mysql-all-for-one/index.html) para visualizá-lo.

**Requisitos:**

- [x] 1 - Exiba apenas os nomes dos produtos da tabela 'products'
- [x] 2 - Exiba os dados de todas as colunas da tabela 'products'
- [x] 3 - Escreva uma query que exiba os valores da coluna que contém a primary key da tabela 'products'
- [x] 4 - Conte quantos registros existem na coluna 'product_name' da tabela 'products'
- [x] 5 - Monte uma query que exiba os dados da tabela 'products' a partir do quarto registro até o décimo terceiro
- [x] 6 - Exiba os dados das colunas 'product_name' e 'id' da tabela 'products' de maneira que os resultados estejam em ordem alfabética dos nomes
- [x] 7 - Mostre apenas os ids dos 5 últimos registros da tabela 'products' ordenados por 'id'
- [x] 8 - Faça uma consulta que retorne três colunas, respectivamente, com os nomes 'A', 'Trybe' e 'eh', e com valores referentes a soma de '5 + 6', a string 'de', a soma de '2 + 8'
- [x] 9 - Mostre todos os valores da coluna 'notes' da tabela 'purchase_orders' que não são nulos
- [x] 10 - Mostre todos os dados da tabela 'purchase_orders' em ordem decrescente ordenados por 'created_by' em que o 'created_by' é maior ou igual a 3
- [x] 11 - Exiba os dados da coluna 'notes' da tabela 'purchase_orders' em que seu valor de 'Purchase generated based on Order' é maior ou igual a 30 e menor ou igual a 39
- [x] 12 - Mostre os resultados da coluna 'submitted_date' da tabela 'purchase_orders' em que a 'submitted_date' é do dia 26 de abril de 2006
- [x] 13 - Mostre o resultado da coluna 'supplier_id' da tabela 'purchase_orders' em que o 'supplier_id' seja 1 ou 3
- [x] 14 - Mostre os resultados da coluna 'supplier_id' da tabela 'purchase_orders' em que o 'supplier_id' seja maior ou igual a 1 e menor ou igual 3
- [x] 15 - Mostre somente as horas, sem os minutos e os segundos, da coluna 'submitted_date' de todos registros da tabela 'purchase_orders'
- [x] 16 - Exiba os resultados da coluna 'submitted_date' da tabela 'purchase_orders' que estão entre '2006-01-26 00:00:00' e '2006-03-31 23:59:59'
- [x] 17 - Mostre os registros das colunas 'id' e 'supplier_id' da tabela 'purchase_orders' em que os 'supplier_id' sejam tanto 1, ou 3, ou 5, ou 7
- [x] 18 - Mostre todos os registros da tabela 'purchase_orders' que tem o valor na coluna 'supplier_id' igual a 3 e o valor na coluna 'status_id' igual a 2
- [x] 19 - Mostre a quantidade de pedidos que foram feitos na tabela 'orders' pelo 'employee_id' igual a 5 ou 6, e que foram enviados através do método coluna 'shipper_id' igual a 2
- [x] 20 - Adicione à tabela 'order_details' um registro com 'order_id': 69, 'product_id': 80, 'quantity': 15.0000, 'unit_price': 15.0000, 'discount': 0, 'status_id': 2, 'date_allocated': NULL, 'purchase_order_id': NULL e 'inventory_id': 129
- [x] 21 - Adicione com um único 'INSERT', duas linhas à tabela 'order_details' com os mesmos dados do requisito 20
- [x] 22 - Atualize os dados na coluna 'discount' da tabela 'order_details' para 15
- [x] 23 - Atualize os dados da coluna 'discount' da tabela 'order_details' para 30, onde o valor na coluna 'unit_price' seja menor que 10.0000
- [x] 24 - Atualize os dados da coluna 'discount' da tabela 'order_details' para 45, onde o valor na coluna 'unit_price' seja maior que 10.0000 e o id seja um número entre 30 e 40
- [x] 25 - Delete todos os dados na coluna 'unit_price' da tabela 'order_details' em que o valor seja menor que 10.0000
- [x] 26 - Delete todos os dados na coluna 'unit_price' da tabela 'order_details' em que o valor seja maior que 10.0000
- [x] 27 - Delete todos os dados da tabela 'order_details'

---

