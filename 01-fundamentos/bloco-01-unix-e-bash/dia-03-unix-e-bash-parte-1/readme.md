### Parte I - Criação de arquivos e diretórios

**Dica** : Para criação de arquivos vazios você pode utilizar o comando `touch nome-do-arquivo.extensao` .

1. Utilizando o terminal, aplique o comando de criação de diretórios que você aprendeu, crie um diretório chamado `unix_tests` e navegue até ele.
2. Crie um arquivo de texto com o nome `trybe.txt` .
3. Crie uma cópia do arquivo `trybe.txt` com nome `trybe_backup.txt` .
4. Renomeie o arquivo `trybe.txt` .
5. Dentro de `unix_tests` , crie um novo diretório chamado `backup` .
6. Mova o arquivo `trybe_backup.txt` para o diretório `backup` .
7. Dentro de `unix_tests` , crie um novo diretório chamado `backup2` .
8. Mova o arquivo `trybe_backup.txt` da pasta `backup` para a pasta `backup2` .
9. Apague a pasta `backup` .
10. Renomeie a pasta `backup2` para `backup` .
11. Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.
12. Apague o diretório `backup` .
13. Limpe o terminal.

**Para os exercícios 14 e 15, crie, de forma manual na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado `skills.txt` :**

Copiar

```sh
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL
```

1. Mostre na tela as 5 primeiras skills do arquivo `skills.txt` .
2. Mostre na tela as 4 últimas skills do arquivo `skills.txt` .
3. Apague todos os arquivos que terminem em `.txt` .

---

### Parte II - Manipulação & Busca

1. Na pasta `unix_tests` , baixe um arquivo com os nomes de todos os países do mundo utilizando o comando [curl:](https://linux.die.net/man/1/curl)

Copiar

```sh
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

1. Mostre todo o conteúdo do arquivo `countries.txt` na tela.

2. Mostre o conteúdo de `countries.txt` , página por página, até encontrar a `Zambia` .

3. Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia` .

4. Busque por `Brazil` no `countries.txt` .

5. Busque novamente por `brazil` , mas agora utilizando o *lower case* .

   **Para os próximos exercícios, crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.**

6. Busque pelas frases que não contenham a palavra `fox` .

7. Conte o número de palavras do arquivo `phrases.txt` .

8. Conte o número de linhas do arquivo `phrases.txt` .

9. Crie os arquivos `empty.tbt` e `empty.pdf` .

10. Liste todos os arquivos do diretório `unix_tests` .

11. Liste todos os arquivos que terminem com `txt` .

12. Liste todos os arquivos que terminem com `tbt` ou `txt` .

13. Acesse o manual do comando `ls` .

------
