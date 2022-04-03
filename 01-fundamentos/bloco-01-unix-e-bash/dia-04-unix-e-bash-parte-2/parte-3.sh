#!/bin/bash

# Resolução dos exercícios: Parte III - Processos & Jobs

# Exercício 1

ps

# Exercício 2

sleep 30 &

# Exercício 3

ps
kill 2353

# Exercício 4

sleep 30
# Então se pressinona ^Z
bg

# Exercício 5

sleep 300 &

# Exercício 6

sleep 200
# Então se pressinona ^Z
sleep 100
# Então se pressinona ^Z

# Exercício 7

jobs
fg %1
# Então se pressinona ^Z

# Exercício 8

bg %3

# Exercício 9

# Mata o processo pelo ID do Job
kill %2
# Mata o processo pelo PID 
kill 3337
