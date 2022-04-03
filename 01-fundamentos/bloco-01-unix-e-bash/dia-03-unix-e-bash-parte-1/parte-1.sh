#!/bin/bash

# Resolução dos exercícios: Parte I - Criação de arquivos e diretórios

# Exercício 1

mkdir unix_tests
cd unix_tests/

# Exercício 2

touch trybe.txt

# Exercício 3

cp trybe.txt trybe_backup.txt

# Exercício 4

mv trybe.txt trybe.old

# Exercício 5

mkdir backup

# Exercício 6

mv trybe_backup.txt backup/

# Exercício 7

mkdir backup2

# Exercício 8

cd backup/
mv trybe_backup.txt ../backup2

# Exercício 9

cd ..
rmdir backup

# Exercício 10

mv backup2 backup

# Exercício 11

pwd
ls -la

# Exercício 12

rm -rf  backup

# Exercício 13

clear

# Exercício 14

head -5 skills.txt

# Exercício 15

tail -4 skills.txt

# Exercício 16

rm -rf *.txt
