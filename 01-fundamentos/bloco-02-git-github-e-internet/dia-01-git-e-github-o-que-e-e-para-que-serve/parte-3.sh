#!/bin/bash

# Resolução dos exercícios: Parte 3 - Adicionando uma chave SSH na sua conta do GitHub
# Observação: alguns dos resultados foram mascarados por segurança

ssh-keygen -t rsa -b 4096 -C "tiago***@gmail.com"

# Enter a file in which to save the key (/home/you/.ssh/id_rsa): [Press enter]

# Enter passphrase (empty for no passphrase): [Type a passphrase]
# Enter same passphrase again: [Type passphrase again]

eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa

cat ~/.ssh/id_rsa.pub

# Por fim, no GitHub, segui os segiuntes passos:
# 1- No canto superior direito do GitHub , clique na sua foto de perfil e clique em Settings;
# 2- Na barra lateral esquerda, clique em SSH and GPG keys;
# 3- Clique em New SSH key ou Add SSH key;
# 4- No campo Título , adicione um descrição para a nova chave;
# 5- Cole sua chave dentro do campo Key;
# 6- Clique em Add SSH key;
# 7- Caso seja solicitado, confirme sua senha do Github.