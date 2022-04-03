#!/bin/bash

# Resolução dos exercícios: Parte II - Manipulação & Busca

# Exercício 1

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

cat countries.txt

# Exercício 3

less countries.txt 

# Exercício 4

less countries.txt 
# Dentro do arquivo basta digitar /Zambia e a tecla Enter

# Exercício 5

grep Brazil countries.txt

# Exercício 6

grep brazil countries.txt

# Exercício 7

grep -v fox phrases.txt

# Exercício 8

wc -w phrases.txt

# Exercício 9

wc -l phrases.txt

# Exercício 10

touch empty.tbt  empty.pdf

# Exercício 11

ls -la

# Exercício 12

ls -a *.txt

# Exercício 13

ls -a *.txt *.tbt

# Exercício 14

man ls
