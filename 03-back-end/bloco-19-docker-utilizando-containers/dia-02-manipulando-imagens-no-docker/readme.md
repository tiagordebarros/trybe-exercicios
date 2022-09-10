# Manipulando Imagens no Docker

## Conteúdos

### Obtendo e removendo imagens

Sem exercícios de fixação.

### Criando nossa primeira imagem Docker

Agora, vamos criar uma imagem Docker que, quando executada como um container, vai imprimir na tela a seguinte mensagem: `Eu sou uma pessoa estudante da Trybe!` e terminar sua execução. Para isso, vamos criar um arquivo `Dockerfile` na pasta que estamos programando com o conteúdo abaixo para a construção dessa imagem:

Copiar

```dockerfile
FROM alpine:3.14
CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]
```

Baseando-se então no Dockerfile acima, vamos executar o comando `docker build -t primeira-imagem`.

*Que tal executar nossa nova imagem `primeira-imagem` como um container e ver se deu tudo certo?* Bora se testar! 🐋

### Criando nosso primeiro servidor Web

#### Construção da imagem

Vamos começar a construir nossa imagem com um arquivo chamado `index.html`, que será a página inicial do nosso servidor web. Copie o conteúdo abaixo e crie este arquivo no seu computador:

Copiar

```html
<!DOCTYPE html>
   <html>
      <head>
      <title>Docker é muito legal!</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>Minha primeira página rodando em Docker.</h1>
      <p>Esta página estava dentro de uma imagem, que agora foi executada como um container.</p>
   </body>
</html>
```

Pronto! Com este arquivo HTML finalizado, podemos começar a escrever nosso Dockerfile e entender duas novas palavras reservadas: o `COPY` e o `EXPOSE`! Veja o arquivo completo abaixo:

Copiar

```dockerfile
FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs/
EXPOSE 80
CMD ["httpd-foreground"]
```

Vamos construir nossa imagem e verificar se deu tudo certo?

- Vamos chamar esta nova imagem Docker de **meu-servidor-web**. Para isso, siga os comandos abaixo:

Copiar

```bash
pessoa@trybe:~$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
pessoa@trybe:~$ docker build -t meu-servidor-web .
Sending build context to Docker daemon  4.608kB
Step 1/4 : FROM httpd:2.4
2.4: Pulling from library/httpd
1fe172e4850f: Pull complete
e2fa1fe9b1ec: Pull complete
60dd7398e74e: Pull complete
ea2ca81c6d4c: Pull complete
f646c69a26ec: Pull complete
Digest: sha256:e02a2ef36151905c790efb0a8472f690010150f062639bd8c0760e7b1e884c07
Status: Downloaded newer image for httpd:2.4
 ---> c30a46771695
Step 2/4 : COPY index.html /usr/local/apache2/htdocs/
 ---> 7d0383790929
Step 3/4 : EXPOSE 80
 ---> Running in b1ff2675de2c
Removing intermediate container b1ff2675de2c
 ---> 6b36d46af133
Step 4/4 : CMD ["httpd-foreground"]
 ---> Running in 4ccc22554fbf
Removing intermediate container 4ccc22554fbf
 ---> 5c1536911684
Successfully built 5c1536911684
Successfully tagged meu-servidor-web:latest
pessoa@trybe:~$
```

Vamos executar um servidor web em nosso computador a partir da nossa nova imagem Docker. Ao subir essa imagem como um novo container, poderemos acessar este servidor através do nosso navegador!

Vamos começar?

Copiar

```bash
pessoa@trybe:~$ docker images
REPOSITORY         TAG       IMAGE ID       CREATED          SIZE
meu-servidor-web   latest    5c1536911684   12 minutes ago   144MB
httpd              2.4       c30a46771695   10 days ago      144MB
pessoa@trybe:~$ docker run --rm -d -p 1234:80 --name meu-container meu-servidor-web
e93c74aa767dff092caa42413d8982c4fd823376233812a28c4b76dbdf4f4b6f
pessoa@trybe:~$
```

Agora acessamos o endereço `http://localhost:1234` em nosso navegador web e vemos o seguinte:

![Acesso ao servidor pelo navegador web](https://assets.app.betrybe.com/back-end/docker/docker-images/images/expor-porta-docker-18e8cec724ac73710b2f33b8eef191b7.png)

### Criando imagens mais robustas

Para este novo exemplo, vamos criar um servidor web novamente, porém haverá uma etapa de **pré-processamento**. Para esta etapa, vamos utilizar uma ferramenta chamada [Hugo](https://gohugo.io/), que nos permite criar páginas web a partir de templates.

O objetivo da ferramenta **Hugo** é facilitar a criação de páginas, de modo que as pessoas possam focar mais em escrever o **conteúdo** do que se preocupar com **tags HTML** das páginas.

Vamos começar criando três arquivos, sendo eles:

- **config.toml**: será um arquivo de configuração para o **Hugo**;
- **index.html**: será o template HTML que o **Hugo** utilizará para gerar páginas;
- **_index.md**: será o arquivo com o conteúdo de fato.

▶️ Para o arquivo `config.toml`, use o seguinte código-fonte:

Copiar

```toml
name = "Meu site em Hugo"
```

▶️ Para o arquivo `index.html`, use o seguinte código-fonte:

Copiar

```html
<!DOCTYPE html>
   <html>
      <head>
      <title>{{ .Title }}</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
   </head>
   <body>
      <h1>{{ .Title }}</h1>
      {{ .Content }}
   </body>
</html>
```

▶️ Para o arquivo `_index.md`, use o seguinte código-fonte:

Copiar

```markdown
---
title: Meu site em Hugo
---

Meu conteúdo super interessante!
```

▶️ Por fim, para o nosso arquivo `Dockerfile`, use o seguinte código-fonte:

Copiar

```dockerfile
FROM nginx:1.21-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
RUN mv /site/public/* /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

Com os arquivos criados acima, vamos executar o comando `docker build -t site-hugo .`. Veja a saída dos comandos a seguir:

Copiar

```bash
pessoa@trybe:~$ docker images
REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
pessoa@trybe:~$ docker build -t site-hugo .
Sending build context to Docker daemon   5.12kB
[...]
Successfully tagged site-hugo:latest
pessoa@trybe:~$ docker images
REPOSITORY   TAG           IMAGE ID       CREATED          SIZE
site-hugo    latest        51dc918e901d   12 seconds ago   78.8MB
nginx        1.21-alpine   51696c87e77e   3 weeks ago      23.4MB
```

Agora, vamos executar um novo container utilizando nossa imagem recém criada. Lembre-se que vamos utilizar a flag `-p` para mapear uma porta entre nosso computador e a porta do container. Para isso, utilize o seguinte comando:

Copiar

```bash
docker run -p 1234:80 -d --name meu-container site-hugo
```

Agora, abra seu navegador web e acesse o endereço `http://localhost:1234`, verifique se consegue visualizar a página HTML:

![Acesso ao servidor NGINX pelo navegador web](https://assets.app.betrybe.com/back-end/docker/docker-images/images/meu-site-hugo-31571bff0a61b4a53a0dc75688cea8b5.png)

Opa, **funcionou!** Não se esqueça de remover o container com o comando abaixo:

Copiar

```bash
docker rm -f meu-container
```

Considere o Dockerfile abaixo, que é o mesmo utilizado no exemplo anterior.

- Na linha 8, nós instalamos a ferramenta **Hugo**, que foi útil apenas durante a execução do comando `RUN hugo --minify --gc`, na linha 9.
- Após isso, a gente não precisou mais dessa ferramenta, porém ela ainda ficou instalada em nossa imagem Docker, **ocupando espaço**.

Copiar

```dockerfile
FROM nginx:1.21-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
RUN mv /site/public/* /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]
```

▶️ Nosso objetivo agora é continuar utilizando o `docker build` para fazer tudo o que for necessário para construir uma imagem Docker funcional, ou seja, não queremos instalar **nada extra** em nosso computador. Precisamos encontrar uma maneira de:

1. Instalar a ferramenta **Hugo**;

2. Executar o comando `hugo --minify --gc`;

3. Obter as páginas HTML resultantes;

4. Criar uma **nova imagem limpa** baseada no **nginx**;

5. Copiar apenas as páginas HTML geradas pelo Hugo para esta nova imagem;

   > Após tudo isso, vamos ter uma imagem Docker apenas com o **nginx** e as páginas geradas pelo **Hugo**.

   Veja a seguir o mesmo exemplo de Dockerfile que utilizamos anteriormente, porém adaptado para fazer a construção em múltiplos estágios, e assim, usar imagens intermediárias:

   Copiar

   ```dockerfile
   # Primeiro Estágio
   FROM alpine:3.14 AS primeiro-estagio
   WORKDIR /site
   
   COPY config.toml config.toml
   COPY index.html /site/layouts/index.html
   COPY _index.md /site/content/_index.md
   
   RUN apk add hugo
   RUN hugo --minify --gc
   
   # Segundo Estágio
   FROM nginx:1.21-alpine AS segundo-estagio
   COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
   ENTRYPOINT ["nginx", "-g", "daemon off;"]
   ```

*Vamos construir essa nova imagem Docker e compará-la com a imagem anterior?* 🧐

Veja a saída dos comandos abaixo:

Copiar

```bash
pessoa@trybe:~$ docker build -t multi-stage-site-hugo .
Sending build context to Docker daemon  6.144kB
[......]
Successfully tagged multi-stage-site-hugo:latest
pessoa@trybe:~$ docker images
REPOSITORY              TAG           IMAGE ID       CREATED          SIZE
<none>                  <none>        49f9fac0ad9a   3 seconds ago    65.7MB
multi-stage-site-hugo   latest        c5f6e09557ff   3 seconds ago    23.4MB
site-hugo               latest        51dc918e901d   41 minutes ago   78.8MB
nginx                   1.21-alpine   51696c87e77e   3 weeks ago      23.4MB
alpine                  3.14          e04c818066af   3 weeks ago      5.59MB
pessoa@trybe:~$
```

> Veja a diferença de tamanho das imagens! A imagem **site-hugo**, de apenas um estágio, possui `78.8MB` de tamanho, enquanto a nossa nova imagem usando múltiplos estágios, **multi-stage-site-hugo**, possui apenas `23.4MB`.

### RUN vs. ENTRYPOINT vs. CMD

▶️ Considere o seguinte Dockerfile abaixo e que já construímos essa imagem com nome de `exemplo-cmd`:

Copiar

```dockerfile
FROM alpine:3.14
CMD ["echo", "Olá mundo!"]
```

▶️ Ao executar essa imagem como um container com o comando `docker run --rm exemplo-cmd`, sem passar nenhum parâmetro extra, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-cmd
Olá mundo!
pessoa@trybe:~$
```

▶️ Agora, ao executar essa imagem como um container com o comando `docker run --rm exemplo-cmd echo "Sou diferente!"`, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-cmd echo "Sou diferente!"
Sou diferente!
pessoa@trybe:~$
```

> Perceba que o conteúdo de `CMD` foi totalmente substituído.

▶️ Agora, vamos mudar este Dockerfile de `CMD` para `ENTRYPOINT`, de modo a construir essa imagem com o nome de `exemplo-entrypoint`:

Copiar

```dockerfile
FROM alpine:3.14
ENTRYPOINT ["echo", "Olá mundo!"]
```

▶️ Ao executar essa imagem como um container com o comando `docker run --rm exemplo-entrypoint`, sem passar nenhum parâmetro extra, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-entrypoint
Olá mundo!
pessoa@trybe:~$
```

▶️ Agora, ao executar essa imagem como um container com o comando `docker run --rm exemplo-entrypoint "Sou diferente!"`, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-entrypoint "Sou diferente!"
Olá mundo! Sou diferente!
pessoa@trybe:~$
```

> Perceba que o conteúdo de `ENTRYPOINT` **não** é substituído e que o parâmetro `"Sou diferente"` é colocado depois do comando do `ENTRYPOINT`. Isso significa que o container executou o comando `echo "Olá mundo!" "Sou diferente"`.

▶️ Agora, vamos mudar este Dockerfile para usar `CMD` e `ENTRYPOINT` ao mesmo tempo, de modo a construir essa imagem com o nome de `exemplo-entrypoint-cmd`:

Copiar

```dockerfile
FROM alpine:3.14
ENTRYPOINT ["echo"]
CMD ["Sou a mensagem padrão."]
```

▶️ Ao executar essa imagem como um container com o comando `docker run --rm exemplo-entrypoint-cmd`, sem passar nenhum parâmetro extra, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-entrypoint-cmd
Sou a mensagem padrão.
pessoa@trybe:~$
```

▶️ Agora, ao executar essa imagem como um container com o comando `docker run --rm exemplo-entrypoint-cmd "Sou uma mensagem nova!"`, temos:

Copiar

```bash
pessoa@trybe:~$ docker run --rm exemplo-entrypoint-cmd "Sou uma mensagem nova!"
Sou uma mensagem nova!
pessoa@trybe:~$
```

### Recapitulando

Sem exercícios de fixação.

## Exercícios

### Agora a prática

Vamos juntar tudo o que aprendemos até aqui e exercitar mais ainda nosso aprendizado!

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto!
>
> Todos os exercícios vão contribuir com sua formação, mas fique de olho nesses! 👀

🚀 **Exercício**:

Vamos usar uma imagem disponível no DockerHub conhecida como *"cowsay"* (uma vaca falante no terminal 🐮)!

A ideia é deixarmos a mensagem para o *cowsay* parametrizável. Dessa forma, conseguiremos executar o seguinte comando:

Copiar

```bash
    docker container run cowsay Muuuuuuhhh
```

E teremos a seguinte saída no terminal:

Copiar

```bash
____________
< Muuuuuuhhh >
------------
         \   ^__^
         \  (oo)\_______
            (__)\       )\/\
               ||----w |
               ||     ||
```

Para isso:

1. Crie um *Dockerfile* utilizando a imagem `chuanwen/cowsay`.
2. Defina um `ENTRYPOINT` para a execução do comando.

- *Observe que o executável `cowsay` está no diretório `/usr/games/`*
- *Lembre-se que com ele, diferente do `CMD`, o comando não poderá ser sobrescrito com o `docker run`, porém conseguiremos passar parâmetros ao binário e exploraremos esse recurso para poder passar a mensagem.*

1. Utilize o `CMD` para definir uma mensagem padrão.
2. Gere uma `build` e execute um container baseado em sua imagem sem passar nenhum comando.
3. Execute um novo container passando sua mensagem para testar. Além da mensagem você pode utilizar a opção `-l` para listar outros personagens disponíveis e então executar algo como `docker container run cowsay -f dragon-and-cow "VQV TRYBE"`, para exibir um dragão junto com a vaquinha.

------