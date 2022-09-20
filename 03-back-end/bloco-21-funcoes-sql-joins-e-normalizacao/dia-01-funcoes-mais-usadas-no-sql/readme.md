# Funções mais usadas no SQL

## Conteúdos

###  Manipulação de strings

Agora, vamos fixar os aprendizados com alguns desafios:

1. Faça uma *query* que exiba a palavra `'trybe'` em CAIXA ALTA.
2. Faça uma *query* que transforme a frase `'Você já ouviu falar do DuckDuckGo?'` em `'Você já ouviu falar do Google?'`.
3. Utilizando uma *query*, encontre quantos caracteres temos em `'Uma frase qualquer'`.
4. Extraia e retorne apenas a palavra “JavaScript” da frase `'A linguagem JavaScript está entre as mais usadas'`.
5. Por fim, padronize a string `'RUA NORTE 1500, SÃO PAULO, BRASIL'` para que suas informações estejam todas em caixa baixa.

### Condicionais

1. Usando o `IF` na tabela `sakila.film`, exiba o **id do filme**, o **título** e uma coluna extra chamada **‘conheço o filme?’**, em que deve-se avaliar se o nome do filme é ‘**ACE GOLDFINGER**‘. Caso seja, exiba “Já assisti a esse filme”. Caso contrário, exiba “Não conheço o filme”. Não esqueça de usar um *alias* para renomear a coluna da condicional.

2. Usando o CASE na tabela sakila.film, exiba o título, a classificação indicativa (rating) e uma coluna extra que vamos chamar de ‘público-alvo’ em que colocaremos a classificação do filme de acordo com as seguintes siglas:

   - **G:** “Livre para todos”;

   - **PG:** “Não recomendado para menores de 10 anos”;

   - **PG-13:** “Não recomendado para menores de 13 anos”;

   - **R:** “Não recomendado para menores de 17 anos”;

   - **Se não cair em nenhuma das classificações anteriores:** “Proibido para menores de idade”.

### Funções matemáticas do MySQL

1. Monte uma *query* que gere um valor entre **15** e **20**.

2. Monte uma *query* que exiba o valor arredondado de **15.7515971** com uma precisão de 5 casas decimais.

3. Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o **valor aproximado** para baixo dessa média?

4. Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o **valor aproximado** para cima dessa média?

### Trabalhando com datas

Para fixar, responda como seria possível encontrar as seguintes informações:

1. Monte uma *query* que exiba a diferença de dias entre `'2030-01-20'` e hoje.

2. Monte uma *query* exiba a diferença de horas entre `'10:25:45'` e `'11:00:00'`.

### Utilizando as funções de agregação `AVG`, `MIN`, `MAX`, `SUM` e `COUNT`

Para praticar, vamos encontrar algumas informações sobre os filmes cadastrados em nossa base de dados.

1. Monte um query que exiba:
   - A **média de duração** dos filmes e dê o nome da coluna de ‘Média de Duração’;
   - A **duração mínima** dos filmes como ‘Duração Mínima’;
   - A **duração máxima** dos filmes como ‘Duração Máxima’;
   - A **soma de todas** as durações como ‘Tempo de Exibição Total’;
   - E, finalmente, a **quantidade total** de filmes cadastrados na tabela `sakila.film` como ‘Filmes Registrados’.

### Exibindo e filtrando dados de forma agrupada com `GROUP BY` e `HAVING`

1. Usando a query a seguir, modifique-a de forma que exiba apenas as durações médias que estão entre 115.0 a 121.50. Além disso, dê um `alias` (apelido) à coluna gerada por `AVG(length)`, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma decrescente.

Copiar

```sql
1SELECT rating, AVG(length)
2FROM sakila.film
3GROUP BY rating;
```

2. Usando a query a seguir, exiba apenas os valores de **total do custo de substituição** que estão acima de $3950.50. Dê um `alias` que faça sentido para `SUM(replacement_cost)`, de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

Copiar

```sql
1SELECT rating, SUM(replacement_cost)
2FROM sakila.film
3GROUP by rating;
```

## Exercícios

### Agora, a prática

**Restaure o banco de dados abaixo antes de continuar:**

Para realizar os exercícios propostos para o dia, **faremos uso da tabela `employees`** do banco de dados `hr`. O banco de dados pode ser gerado e restaurado usando [este arquivo SQL](https://lms-assets.betrybe.com/lms/sakila.sql).

## Instruções de como restaurar o banco de dados

1. Baixe o conteúdo do arquivo `.sql` linkado acima;
2. Copie todo o código SQL;
3. Abra o MySQL Workbench e abra uma nova janela de query;
4. Copie todo o código para dentro dessa janela;
5. Selecione todo o código usando Ctrl + a;
6. Execute o código teclando Ctrl + ENTER.

## Exercícios

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

**1.** Escreva uma query que exiba o maior salário da tabela.

**2.** 🚀 Escreva uma query que exiba a diferença entre o maior e o menor salário.

**3.** 🚀 Escreva uma query que exiba a média salarial de cada `JOB_ID`, ordenando pela média salarial em ordem decrescente.

**4.** Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.

**5.** 🚀 Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.

**6.** Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (`IT_PROG`).

**7.** Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (`JOB_ID`).

**8.** Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (`IT_PROG`).

**9.** Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (`IT_PROG`).

**10.** 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. **Dica:** agrupe pelo `DEPARTMENT_ID`.

**11.** 🚀 Escreva uma query que atualize a coluna `PHONE_NUMBER`, de modo que todos os telefones iniciados por `515` agora devem iniciar com `777`.

**12.** Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.

**13.** Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `ano no qual foi contratado` (exiba somente o ano).

**14.** 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `dia do mês no qual foi contratado` (exiba somente o dia).

**15.** Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `mês no qual foi contratado` (exiba somente o mês).

**16.** Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.

**17.** Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

**18.** 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário: `nome`, `sobrenome`, `tempo que trabalha na empresa (em dias)`.

---

