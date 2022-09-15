### Agora prática

**Exercício 1**: Descubra como fazer uma pesquisa em qualquer tabela sem usar uma linha de código.

**Resposta:** Basta clicar com botão direito na tabela e clicar em "select rows - limit 1000 (ou outro limite configurado)"

**Exercício 2**: Descubra como é possível criar uma tabela sem usar código SQL.

**Resposta:** Basta acessar a aba de Schemas, clicar no banco de dados (no nosso caso, o sakila) e por fim clicar em "create table" usando o botão direito sobre Tables.

**Exercício 3**: Feito isso, crie a seguinte tabela com as seguintes restrições:

**Nome da tabela:** `filme`

Colunas:

- ***filme_id\*** - primary key, tipo int, incrementa por 1 cada vez que um valor é inserido automaticamente;
- ***descricao\*** - não permite nulos, tipo texto (varchar(100));
- ***ano_lancamento\*** - não permite nulos, tipo int;
- ***nota\*** - permite nulos, tipo int;

 **Resposta:** Criada a tabela através da GUI do Mysql Workbench.

**Exercício 4**: Analise a tabela `city` e encontre a tabela à qual a coluna `country_id` faz referência.

**Resposta:** Faz referência à tabela country.

**Exercício 5**: Após resolver o exercício anterior, responda: qual tipo de relacionamento a tabela `city` faz com a tabela `country`?

**Resposta:** N:1

**Exercício 6**: Qual tipo de relacionamento a tabela `country` faz com a tabela `city`?

**Resposta:** 1:N

**Exercício 7**: Abra tabela por tabela do banco `sakila` e encontre no mínimo 3 exemplos de um relacionamentos 1:N ou N:1.

**Resposta:**

1. store -> staff
2. country -> city
3. film -> language

---

