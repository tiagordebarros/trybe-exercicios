# Orquestrando Containers com Docker Compose

## Conteúdos

### Instalação do Compose

Sem exercícios de fixação.

### Criando nosso primeiro arquivo Compose

Nosso objetivo será criar três serviços que vão comunicar-se entre si. Vamos simular uma arquitetura muito comum com um **banco de dados**, um serviço de **back-end** e um serviço de **front-end**. Este exemplo é muito importante, pois mostrará a necessidade de utilizar o *Compose* para gerenciar múltiplos serviços ao mesmo tempo!

A estrutura de pastas ficará desta maneira:

Copiar

```bash
aula-docker-compose/
├── backend
│   └── Dockerfile
├── frontend
│   └── Dockerfile
└── docker-compose.yaml
```

Para criar a Imagem Docker do **back-end**, crie a pasta `backend` e o arquivo Dockerfile com o seguinte conteúdo:

Copiar

```dockerfile
FROM betrybe/docker-compose-example-backend:v1
ENTRYPOINT ["npm", "start"]
```

Para criar a Imagem Docker do **front-end**, crie a pasta `frontend` e o arquivo Dockerfile com o seguinte conteúdo:

Copiar

```dockerfile
FROM betrybe/docker-compose-example-frontend:v1
ENTRYPOINT ["npm", "start"]
```

Para o **database**, vamos usar a seguinte Imagem Docker já pronta:

- `betrybe/docker-compose-example-database:v1`

### Gerenciando nossos Serviços

Chamamos o ato de executar todos os serviços do *Compose* de **subir**. Para subir todos os serviços, utilizamos o comando `docker-compose up` no terminal.

gora precisamos visualizar o **status** dos nossos serviços, faremos isso usando o comando `docker-compose ps`.

É comum fazer várias alterações em nosso código durante a fase de desenvolvimento. Algumas dessas alterações nos obrigam a **reconstruir** a Imagem Docker, ou seja, precisamos *forçar* a execução do `docker build` novamente.

Para exemplificar,vamos alterar o arquivo Dockerfile do **front-end**, onde substituiremos a linha de ENTRYPOINT. O novo arquivo `~/aula-docker-compose/frontend/Dockerfile` ficará assim:

Copiar

```dockerfile
FROM betrybe/docker-compose-example-frontend:v1
ENTRYPOINT ["sh", "-c", "npm start > /var/log/frontend/logs.txt"]
```

Podemos deixar nítido que as imagens precisam ser construídas novamente usando o *Compose*. Para isso, utilizamos a flag `--build`, junto com o comando `docker-compose up`. Veja o exemplo de saída do comando abaixo:

Copiar

```bash
pessoa@trybe:~/aula-docker-compose$ docker-compose up -d --build
Building backend
[...]
Successfully tagged aula-docker-compose_backend:latest
Building frontend
[...]
Successfully tagged aula-docker-compose_frontend:latest
aula-docker-compose_database_1 is up-to-date
aula-docker-compose_backend_1 is up-to-date
Recreating aula-docker-compose_frontend_1 ... done
pessoa@trybe:~/aula-docker-compose$
```

> 🥇 Veja que legal: ambas as imagens acima foram reconstruídas, **back-end** e **front-end**. Entretanto, o *Compose* fez a atualização apenas do serviço **front-end**, o qual foi o único que sofreu alterações de fato em sua Imagem Docker.

 Se quisermos descer nossos serviços, podemos utilizar o comando `docker-compose down`. 

Além de subir e descer, é possível **subir apenas parte dos serviços**! Para isso, podemos usar o comando `docker-compose up <serviço>`.

Outro comando importante do *Compose* é o `docker-compose logs <nome-do-serviço>`.

### Arquivos Compose mais robustos

Veja nosso arquivo `docker-compose.yaml` abaixo. Copie e substitua seu arquivo local para acompanhar os exemplos. 😉

Copiar

```yaml
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db

volumes:
  dados-do-banco:
```

Primeiramente, vamos continuar utilizando o arquivo `docker-compose.yaml` que usamos para criar os volumes. Porém, o arquivo sofreu algumas modificações. Confira o arquivo completo abaixo:

Copiar

```yaml
version: "3"
services:
  frontend:
    build: frontend/
    restart: always
    ports:
      - 3000:3000
    depends_on:
      - backend
    volumes:
      - ./logs:/var/log/frontend
    networks:
      - rede-virtual-1
  backend:
    build: backend/
    restart: always
    ports:
      - 3001:3001
    environment:
      - DB_HOST=database
    depends_on:
      - database
    networks:
      - rede-virtual-1
      - rede-virtual-2
  database:
    image: betrybe/docker-compose-example-database:v1
    restart: always
    volumes:
      - dados-do-banco:/data/db
    networks:
      - rede-virtual-2

volumes:
  dados-do-banco:

networks:
  rede-virtual-1:
  rede-virtual-2:
```

### Serviço vs. container

Sem exercícios de fixação.

### Bônus: Tópicos extras sobre Docker

Sem exercícios de fixação.

## Exercícios

### Agora a prática

> 🚀 *Se liga nesse foguete!*
>
> Os exercícios destacados com 🚀 são os fundamentais pra você ir bem no projeto! Todos os exercícios vão contribuir com sua formação mas fique de olho nesses! 👀

Pronto, agora já podemos "dockerizar" todas as nossa aplicações e, não só isso, podemos "dockerizar" nossos ambientes inteiro, tanto aplicações, quanto bancos de dados e outras tecnologias, assim como suas comunicações e configurações.

Bora praticar!

🚀 **Exercício 1**:

Vamos aprimorar nossos conhecimentos sobre `images` e `volumes`, para isso:

1. Crie um arquivo HTML chamado `missao_trybe.html` que tenha a seguinte estrutura:
   - Tag `<title>` com o seguinte texto "Trybe";
   - Tag `<H1>` com o seguinte texto "Missão da Trybe";
   - Tag `<p>` com o seguinte texto "Gerar oportunidade para pessoas";
   - Salve o arquivo em qualquer lugar da sua máquina com a extensão `html`
2. Crie um container para manter um servidor `httpd:2.4` **Apache** e vincule sua porta interna com a porta 4545 da sua máquina local.
3. Após criar o container, acesse a página HTML que está rodando no servidor em seu browser.
4. Acesse o arquivo `missao_trybe.html` e acrescente a tag `<p>` com o seguinte texto: "Nosso negócio é GENTE! #VQV";
5. Obtenha o id do container `httpd:2.4`;
6. Obtenha o `Mounts` através da propriedade `Source`, que deve mostrar o volume desse container no *Docker Host*;
7. Agora pare o container `httpd:2.4`;
8. Exclua o seu container;
9. Verifique se a pasta onde você salvou o arquivo html permanece no mesmo lugar;
10. Obtenha o `IMAGE ID` do servidor;
11. Depois de obter o `IMAGE ID`, exclua a imagem.

🚀 **Exercício 2**:

Crie o arquivo Compose para subir um [ghost blog](https://ghost.org/). Essa plataforma é similar ao Wordpress e é utilizada para criar sites de conteúdo. Você pode ler no site oficial como criar conteúdos nele e utilizá-lo. Para esse exercício, utilizaremos apenas sua página de exemplo:

1. Utilize a versão "3" no arquivo;
2. Crie um `service` para subir a plataforma. Para isso, utilize a imagem `ghost:1-alpine`;
3. Publique a porta `2368`, fazendo *bind* também para a `2368`;
4. Suba a aplicação utilizando o `docker-compose` e então acesse a porta publicada para validar se deu tudo certo.

🚀 **Exercício 3**:

Por padrão, o `ghost` utiliza um `sqlite` interno para salvar as informações, porém vamos alterar esse comportamento para exercitar nossos conhecimentos:

1. Crie um novo serviço para o nosso banco de dados. Nesse caso, podemos utilizar um mysql, portanto use a imagem `mysql:5.7`;
2. Precisamos definir uma senha `root` para o nosso *bd*. Para isso, utilize a variável `MYSQL_ROOT_PASSWORD` e lembre-se que é possível utilizar a sintaxe `${}` para passar uma `env` do *host* para a `env` do *container*;
3. Agora precisamos configurar nosso service com o *ghost* para utilizar o MySQL. Para isso, defina a variável `database__client` para `mysql`;
4. Defina o nome `ghost` para o nome do *database* utilizando a variável `database__connection__database`;
5. Então, indique a conexão para o nosso MySQL na *env* `database__connection__host`;
6. Para definir a pessoa usuária (**root**) e senha (a mesma que definimos no nosso MySQL), utilize respectivamente as *envs* `database__connection__user` e `database__connection__password`.
7. Utilize a opção `depends_on` para criar relações de dependências entre os serviços.
8. Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse a porta.

**Exercício 4**:

Agora vamos praticar os conceitos de `volumes` e `networks`.

1. Configure o nosso serviço *mysql* para utilizar um volume conforme vimos no conteúdo. Utilize o caminho *target* `/var/lib/mysql`.
2. Em vez de utilizar a rede padrão criada pelo *Compose*, defina uma rede chamada `my-network` para a comunicação dos dois serviços.
3. Suba o ambiente com o novo arquivo usando o `docker-compose` e então acesse-o.

**Exercício 5**:

Agora vamos criar um novo arquivo Compose para rodarmos uma aplicação `React`, conforme vimos alguns exemplos do conteúdo:

1. Inicie um novo projeto `ReactJS` utilizando o *create-react-app*;
2. Crie o `Dockerfile`, conforme vimos na aula passada;
3. Crie um novo arquivo *Compose* utilizando a versão `3`;
4. Defina um serviço no arquivo para nosso *app*. Para isso, utilize a opção `build` para apontar para o `Dockerfile`;
5. Publique a porta exposta no `Dockerfile` fazendo *bind* para a porta `8080` do *localhost*;

**Exercício 6**:

Para simularmos o processo de desenvolvimento, faça a alteração em alguma parte do código do *app react*. Então, execute o comando para subir o serviço novamente, "rebuildando" a imagem para aplicar as alterações.

### Bônus

**Exercício 7**:

Crie um arquivo Compose para subir o Wordpress com *MySQL*:

1. Utilize a imagem `wordpress:latest` e `mysql:5.7`;
2. Faça bind da porta `80` do container do *wordpress* para `8080` do *host*;
3. Defina as seguintes variáveis para o wordpress:
   - WORDPRESS_DB_HOST: db:3306
   - WORDPRESS_DB_USER: wordpress
   - WORDPRESS_DB_PASSWORD: wordpress
   - WORDPRESS_DB_NAME: wordpress
4. Defina as seguintes variáveis para o mysql:
   - MYSQL_ROOT_PASSWORD: somewordpress
   - MYSQL_DATABASE: wordpress
   - MYSQL_USER: wordpress
   - MYSQL_PASSWORD: wordpress
5. Defina o volume `db_data` para o mysql;
6. Utilize o parâmetro `depends_on` para criar dependência entre os serviços;
7. Adicione a política de `restart` com o valor `always` aos serviços;
8. Suba os serviços utilizando `docker-compose` e abra no terminal para validar o funcionamento.

---

