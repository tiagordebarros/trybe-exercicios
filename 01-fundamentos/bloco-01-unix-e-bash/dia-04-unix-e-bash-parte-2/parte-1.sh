#!/bin/bash

# Resolução dos exercícios: Parte I - Comandos de Input e Output

# Exercício 1

cd unix_tests

# Exercício 2

cat >  skills2.txt
# Então adicionado 
# Internet 
# Unix
# Bash

# Exercício 3

cat >> skills2.txt
# Então adicionado:
# HTML
# CSS
# React
# Node.js
# MongoDB
cat skills2.txt

# Exercício 4

wc -l skills2.txt

# Exercício 5

head -3 skills2.txt | sort > top_skills.txt

# Exercício 6

cat > phrases2.txt
# Então adicionado:
# A fox film presents..
# Lorem ipsum dolor
# Teste
# Hello world!
# Este é um novo arquivo de frases!

# Exercício 7

grep "br" phrases2.txt | wc -l

# Exercício 8

grep -v "br" phrases2.txt | wc -l

# Exercício 9

cat >> phrases2.txt 
# Então adicionado:
## Suíça
## Brasil

# Exercício 10

cat phrases2.txt countries.txt > bunch_of_things.txt

# Exercício 11

sort bunch_of_things.txt
