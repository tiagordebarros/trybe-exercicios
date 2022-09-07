#!/bin/bash

# Resolução dos exercícios: Agora a prática

# Exercício 1

# Encontrada a distribuição Linux Debian no Docker Hub.

# Exercício 2

# Encontrado o comando para baixar a imagem localmente.

# Exercício 3

docker pull:stable-slim

# Exercício 4

docker container run --name debian-container -it debian:stable-slim 

# Exercício 5

cat /etc/*-release

# Exercício 6

exit

# Exercício 7

docker ps -l

# Exercício 8

docker container start b7bb34ef0048  

# Exercício 9

docker attach b7bb34ef0048 

# Exercício 10

cat /etc/debian_version

# Exercício 11

exit

# Exercício 12

docker container rm b7bb34ef0048

# Exercício 13

docker run -it --rm andrius/ascii-patrol

# Exercício 14

# [ctrl] + [c]
