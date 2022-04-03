#!/bin/bash

# Resolução dos exercícios: (Bônus) - Parte IV - O despertar do terminal

# Exercício 1

brew install cmatrix
cmatrix
# Então se pressinona ^c

# Exercício 2

brew install fortune
cat fortune.txt

# Exercício 3

wc -w fortune.txt

# Exercício 4

brew install sl
sl
sl -F

# Exercício 5

brew install cowsay
cowsay Olá Mundo!
cat fortune.txt | cowsay
# Vale a pena mostrar o resultado aqui:
 _________________________________________ 
/ Dear Mister Language Person: What is    \
| the purpose of the apostrophe?          |
|                                         |
| Answer: The apostrophe is used mainly   |
| in hand-lettered small business signs   |
| to alert the reader than an "S" is      |
| coming up at the end of a word, as in:  |
| WE DO NOT EXCEPT PERSONAL CHECK'S, or:  |
| NOT RESPONSIBLE FOR ANY ITEM'S. Another |
| important grammar concept to bear in    |
| mind when creating hand- lettered       |
| small-business signs is that you should |
| put quotation marks around random words |
| for decoration, as in "TRY" OUR HOT     |
| DOG'S, or even TRY "OUR" HOT DOG'S.     |
|                                         |
\ -- Dave Barry, "Tips for Writer's"      /
 ----------------------------------------- 
        \   ^__^
         \  (oo)\_______
            (__)\       )\/\
                ||----w |
                ||     ||

# Exercício 6

factor 42

# Exercício 7

rev fortune.txt 
# O resultado desse exercício também é muito interessante:
?ehportsopa eht fo esoprup eht si tahW :nosreP egaugnaL retsiM raeD

sngis ssenisub llams derettel-dnah ni ylniam desu si ehportsopa ehT :rewsnA
:ni sa ,drow a fo dne eht ta pu gnimoc si "S" na naht redaer eht trela ot
.S'METI YNA ROF ELBISNOPSER TON :ro ,S'KCEHC LANOSREP TPECXE TON OD EW
derettel -dnah gnitaerc nehw dnim ni raeb ot tpecnoc rammarg tnatropmi rehtonA
modnar dnuora skram noitatouq tup dluohs uoy taht si sngis ssenisub-llams
.S'GOD TOH "RUO" YRT neve ro ,S'GOD TOH RUO "YRT" ni sa ,noitaroced rof sdrow
"s'retirW rof spiT" ,yrraB evaD --

# Exercício 8

telnet towel.blinkenlights.nl
