# Docker Todo-List (Projeto) 📚

A proposta base desse projeto era:

1. Conteinerizar aplicações;
2. Criar uma conexão entre elas;
3. Orquestrar seu funcionamento.

O principal objetivo era conteinerizar uma aplicação fullstack completa: um aplicativo de tarefas.

Principal tecnologia envolvida: Docker. Testado com  Jest. Analisado com ESLint e StyleLint. Clique [aqui](https://tiagordebarros.github.io/projetos/docker-todo-list/index.html) para visualizá-lo.

**Requisitos:**

- [x] 1 - Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12
- [x] 2 - Inicie o container 01container
- [x] 3 - Liste os containers filtrando pelo nome 01container
- [x] 4 - Execute o comando cat /etc/os-release no container 01container sem se acoplar a ele
- [x] 5 - Remova o container 01container
- [x] 6 - Faça o download da imagem nginx com a versão 1.21.3-alpine sem criar ou rodar um container
- [x] 7 - Rode um novo container com a imagem nginx com a versão 1.21.3-alpine em segundo plano nomeando-o como 02images e mapeando sua porta padrão de acesso para porta 3000 do sistema hospedeiro
- [x] 8 - Pare o container 02images que está em andamento
- [x] 9 - Gere uma build a partir do Dockerfile do back-end do todo-app nomeando a imagem para todobackend
- [x] 10 - Gere uma build a partir do Dockerfile do front-end do todo-app nomeando a imagem para todofrontend
- [x] 11 - Gere uma build a partir do Dockerfile dos testes do todo-app nomeando a imagem para todotests
- [ ] 12 - Suba uma orquestração em segundo plano com o docker-compose de forma que backend, frontend e tests consigam se comunicar

---

