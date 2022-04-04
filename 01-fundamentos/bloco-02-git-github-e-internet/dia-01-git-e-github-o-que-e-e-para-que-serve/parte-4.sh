#!/bin/bash

# Resolução dos exercícios: Parte 4 - O seu repositório no GitHub
# Observação: alguns dos resultados foram mascarados por segurança

# Transformei o diretório local em um diretório GIT através dos seguintes comandos:
git init
touch README.md
git add .
git commit -m "Initial commit"

# No GitHub segui as seguintes diretrizes:

# 1- Criei um repositório com o nome "trybe-exercicios";
# 2- Não o inicializei com o README.md, pois eu já o havía criado anteriormente.
# 3- Cliquei no botão SSH e copiei a URL do repositório;
# 4- Executei o seguinte comando para adicionar a URL ao repositório local:

    git remote add origin "***URL_DO_REPOSITÓRIO***"
    git remote -v
    git push origin master

# 5 - Por fim, adicionei uma descrição ao README.md do repositório "trybe-exercicios".