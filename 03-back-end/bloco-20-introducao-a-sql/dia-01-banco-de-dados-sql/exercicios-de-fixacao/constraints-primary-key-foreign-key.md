### Constraints (restrições), chaves primárias e chaves estrangeiras

#### Exercícios de fixação

![img](https://assets.app.betrybe.com/back-end/sql/images/table1-a6228d5cf09aea61d1e205b18663d256.png)

Conteúdo da tabela address

Sem ter acesso à estrutura interna de como essa tabela foi criada, quero que você tente responder ao seguinte:

1. Quais constraints a coluna address_id poderia ter? Por quê?

   **Resposta**: A coluna address_id possui a constraint *Primary Key* para que exista um número identificador único. Além disso, a *Primary Key* não permite que ela seja nula.

2. A coluna `city_id` é um número. Você consegue identificar que tipo de *constraint* foi aplicado nela?

   **Resposta:** A coluna `city_id` é do tipo *Foreign Key*, e nela foi aplicada a constraint *Foreign Key*.

3. A coluna `address` (endereço) possui uma *constraint*. Qual tipo de *constraint* seria interessante ser aplicado a ela para que sempre exista um valor na coluna quando uma nova linha for criada?

   **Resposta:** A restrição aplicada na coluna address é a restrição *NOT NULL*. Dessa maneira, é interessante que a coluna address sempre esteja preenchida em função de ser uma informação crucial para essa tabela, além de a tabela não fazer sentido sem essa informação preenchida.

Temos aqui uma outra tabela:

![img](https://assets.app.betrybe.com/back-end/sql/images/IntroductionCityTable-647aaf2f2be1406e6dbd68e50d9e5f90.png)

1. Que tipo de *constraint* a coluna `city_id` possui?

   **Resposta:** A coluna city*id possui o tipo _Primary Key*.

2. Qual é o motivo da coluna `country_id` não possuir nomes de country (país)? Ela é algum tipo de chave primária ou estrangeira?

   **Resposta:** Isso acontece porque a coluna `country_id` é apenas uma referência para a sua tabela original, e o número que é exibido nessa tabela representa uma *Foreign Key*. Caso você queira ver o nome do país, você deve ir até a tabela na qual o `country_id` é uma *Primary Key*.

Na tabela a seguir:

![img](https://assets.app.betrybe.com/back-end/sql/images/IntroductionFilmTable-5695e125b1b141ba2b9f45faa0d6d394.png)

1. Qual coluna possui uma *Primary Key*?

   **Resposta:** A coluna `film_id` possui uma *Primary Key*.

2. Qual coluna possui uma *Foreign Key*?

   **Resposta:** A coluna `category_id` possui uma *Foreign Key*.

   ---

   