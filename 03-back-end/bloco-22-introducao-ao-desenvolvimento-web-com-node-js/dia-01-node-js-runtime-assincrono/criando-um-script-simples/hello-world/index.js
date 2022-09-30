const readline = require('readline-sync');

const name = readline.question('Qual é o seu nome? ');
const age = readline.questionInt('Qual é a sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
