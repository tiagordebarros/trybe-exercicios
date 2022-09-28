# Transformando ideias em um modelo de banco de dados

## Conteúdos

### Primeiros passos

Sem exercícios de fixação.

### Database Design - Como modelar um banco de dados

Sem exercícios de fixação.

### O que é a Normalização?

Sem exercícios de fixação.

### 1ª Forma Normal

Sem exercícios de fixação.

### 2ª Forma Normal

Sem exercícios de fixação.

### 3ª Forma Normal

Sem exercícios de fixação.

## Exercícios

### Normalização de dados

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Vamos consolidar toda a explicação passada até o momento através de alguns desafios.

**Exercício 1:** 🚀 Normalize a tabela a seguir para a 1ª Forma Normal.

Não se preocupe em montar a estrutura em código `SQL` neste primeiro momento. Crie apenas uma planilha (Excel, Google Sheets, Open Office Calc ou semelhantes) da estrutura esperada.

| Funcionario_id | Nome     | Sobrenome | Contato                  | Contato         | DataCadastro           | Setor                 |
| -------------- | -------- | --------- | ------------------------ | --------------- | ---------------------- | --------------------- |
| 12             | Joseph   | Rodrigues | jo@gmail.com             | (35)998552-1445 | 2020-05-05 08:50:25    | Administração, Vendas |
| 13             | André    | Freeman   | andre1990@gmail.com      | (47)99522-4996  | 5 de Fevereiro de 2020 | Operacional           |
| 14             | Cíntia   | Duval     | cindy@outlook.com        | (33)99855-4669  | 2020-05-05 10:55:35    | Estratégico, Vendas   |
| 15             | Fernanda | Mendes    | fernandamendes@yahoo.com | (33)99200-1556  | 2020-05-05 11:45:40    | Marketing             |

**Exercício 2:** 🚀 Usando a estrutura (já normalizada para 1ª Forma Normal) da tabela anterior, transforme-a agora na 2ª Forma Normal.

**Exercício 3:** 🚀 Monte uma query que:

- Crie um banco de dados chamado `normalization`;
- Crie todas as tabelas resultantes do exercício 2 (na 2ª Forma Normal);
- Popule todas as tabelas com os dados fornecidos nos exercícios.

#### Hora de mexer os dedos 🧑‍💻

Após ter visto todo o processo de como sair de um problema e chegar até a criação de um banco de dados, é preciso praticar para internalizar o conteúdo. Com isso em mente, segue a proposta:

Refaça o banco de dados `albuns`, caso já o tenha criado no decorrer da aula de hoje. Então, apague o banco de dados e recarregue a página para que as respostas sobre como criar o banco de dados e tabelas não estejam visíveis e expandidas.

Tente, com a ajuda do material de hoje:

1. Identificar as entidades, atributos e relacionamentos.
2. Criar o diagrama e o banco novamente por conta própria, sem olhar as respostas, que estão encapsuladas.

| ![Blocos de respostas](https://content-assets.betrybe.com/prod/Blocos%20de%20respostas.png) |
| :----------------------------------------------------------: |
|                     Blocos de respostas                      |

É crucial que você tente chegar às suas próprias conclusões após assistir a este conteúdo. Dessa maneira você terá uma melhor absorção dos tópicos estudados neste material.

### Agora, a prática

**Exercício 1:** 🚀 Um zoológico precisa de um banco de dados para armazenar informações sobre os seus animais. As informações a serem armazenadas sobre cada animal são:

- Nome;
- Espécie;
- Sexo;
- Idade;
- Localização.

Cada animal também possui **vários** cuidadores, e cada cuidador pode ser responsável por mais de um animal. Além disso, cada cuidador possui **um** gerente, sendo que cada gerente pode ser responsável por mais de um cuidador.

Siga os passos aprendidos no dia de hoje para modelar essa base de dados.

### Normalização

Consulte as imagens associadas aos exercícios como referência para resolução.

Não é necessário montar queries para resolver os exercícios. Crie novas planilhas com suas respostas.

**Exercício 2:** 🚀 Converta a tabela desnormalizada abaixo para a 1ª Forma Normal. [Planilha aqui](https://lms-assets.betrybe.com/lms/primeira-forma-normal.xlsx)

| ![Tabela exercício 2 desnormalizada](https://content-assets.betrybe.com/prod/Tabela%201%20desnormalizada.png) |
| :----------------------------------------------------------: |
|              Tabela exercício 2 desnormalizada               |

**Exercício 3:** 🚀 Converta a tabela desnormalizada abaixo (que já está nos padrões da 1ª Forma Normal) para a 2ª Forma Normal. [Planilha aqui](https://lms-assets.betrybe.com/lms/segunda-forma-normal.xlsx)

| ![Tabela exercício 3 desnormalizada](https://content-assets.betrybe.com/prod/Tabela%20exerc%C3%ADcio%203%20desnormalizada.png) |
| :----------------------------------------------------------: |
|              Tabela exercício 3 desnormalizada               |

**Exercício 4:** 🚀 Agora, converta essa outra tabela (que já está nos moldes das duas primeiras formas) para a 3ª Forma Normal. [Planilha aqui](https://lms-assets.betrybe.com/lms/terceira-forma-normal.xlsx)

| ![Tabela exercício 4 desnormalizada](https://content-assets.betrybe.com/prod/Tabela%20exerc%C3%ADcio%204%20desnormalizada.png) |
| :----------------------------------------------------------: |
|              Tabela exercício 4 desnormalizada               |

### Bônus

**Exercício 5:** Faça os exercícios sobre normalização (em inglês) [deste link](https://www.javaguicodexample.com/normalizationnotes.pdf).

---

