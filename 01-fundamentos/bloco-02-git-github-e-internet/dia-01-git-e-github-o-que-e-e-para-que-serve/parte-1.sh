#!/bin/bash

# Resolução dos exercícios: Parte 1 - Instalação e configuração
# Observação: alguns dos resultados foram mascarados por segurança

brew install git
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

git config --global user.name "Tiago R***"
git config --global user.email tiago***@gmail.com

git config --global core.editor "code --wait"

code .gitconfig

git --version

git config --list