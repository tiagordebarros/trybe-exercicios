# Banco de dados SQL

## Conteúdos

### O que é e quais são os tipos de bancos de dados

Sem exercícios de fixação.

### O que é SQL?

Sem exercícios de fixação.

### Como essas informações (tabelas) são armazenadas?

Sem exercícios de fixação.

### *Constraints* (restrições), chaves primárias e chaves estrangeiras

Então, tendo esses aprendizados em mente, vamos tentar chegar a algumas conclusões utilizando como exemplo a tabela a seguir:

![img](https://assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Conteúdo da tabela address

Sem ter acesso à estrutura interna de como essa tabela foi criada, tente responder as seguintes perguntas:

1. Quais *constraints* a coluna `address_id` poderia ter? Por quê?
2. A coluna `city_id` é um número. Consegue identificar que tipo de *constraint* foi aplicado a ela?
3. A coluna `address` (endereço) possui uma *constraint*. Qual tipo de *constraint* seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

Temos aqui uma outra tabela:

![img](https://assets.app.betrybe.com/back-end/sql/images/table2-bc817500d0add9d388501e776cdd26d6.png)

Conteúdo da tabela `city`

1. Que tipo de *constraint* a coluna `city_id` possui?
2. Qual é o motivo de a coluna `country_id` não possuir nomes de *country* (país)? Ela é algum tipo de chave primária ou estrangeira?

Na tabela a seguir:

![img](https://assets.app.betrybe.com/back-end/sql/images/table3-dfbcb99a6654c108ca5f6258e7a3dcd1.png)

Conteúdo da tabela `film`

1. Qual coluna possui uma ***primary key\***?
2. Qual coluna possui uma ***foreign key\***?

### Instalando MySQL Server

Sem exercícios de fixação. Somente instalação.

### Verificando o status da instalação

Sem exercícios de fixação.

### Configurando a inicialização e senha do servidor MYSQL

Sem exercícios de fixação.

### Desinstalando o MySQL Server

Sem exercícios de fixação.

### MySQL na linha de comando

Usando os comandos que você acabou de aprender, resolva os seguintes desafios:

1. Entre no banco de dados `mysql`.
2. Visualize todas as tabelas desse banco.
3. Visualize a estrutura de pelo menos 10 tabelas diferentes e tente entender o tipo de estrutura que costuma ser utilizada.
4. Crie um novo banco de dados com o seu nome e depois entre nele!

Pronto! Agora você pode executar comandos **SQL** dentro do seu banco de dados sem usar a interface gráfica, o que pode ser útil em alguns cenários em que você não tem acesso ao **MySQL Workbench**.

### Instalando uma interface gráfica (MySQL Workbench)

Sem exercícios de fixação. Somente instalação.

### Restaurando o banco de dados de prática `sakila`

Sem exercícios de fixação.

### Utilizando as principais features do workbench (Crash course do workbench)

Sem exercícios de fixação.

### O que é uma entidade?

Sem exercícios de fixação.

### Como os dados são ligados?

Sem exercícios de fixação.

## Exercícios

### Agora a prática

Agora vamos abrir o **Workbench** e fazer uma análise prática do banco de dados `sakila`, que já deve estar instalado, caso você tenha feito a instalação do **MySql Workbench** de forma padrão. Caso o banco `sakila` não esteja disponível, volte até a seção `Restaurando o banco de dados de prática sakila` e siga as instruções listadas. Com esse banco disponível na sua instalação do **Workbench**, sua missão agora é tentar finalizar os exercícios a seguir!

**Exercício 1**: Descubra como fazer uma pesquisa em qualquer tabela sem utilizar uma linha de código usando o **MySql Workbench**.

**Exercício 2**: Descubra como é possível criar uma tabela sem usar código **SQL** usando o **MySql Workbench**.

**Exercício 3**: Feito isso, crie uma tabela com as seguintes restrições:

Nome da tabela: `filme`

Colunas:

- ***filme_id\*** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
- ***descricao\*** - não permite nulos, tipo texto (varchar(100));
- ***ano_lancamento\*** - não permite nulos, tipo int;
- ***nota\*** - permite nulos, tipo int;

**Exercício 4**: Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

**Exercício 5**: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

**Exercício 6**: Qual tipo de relacionamento a tabela `country` faz com a tabela `city`?

**Exercício 7**: Abra tabela por tabela do banco `sakila` e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

---

