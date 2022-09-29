const readline = require('readline-sync');

const weight = readline.questionInt('What’ your weight? ');
const height = readline.questionFloat('What’ your height? ');

const bmi = () => {
   return (weight / (height ** 2)).toFixed(2)
}

console.log(`BMI: ${bmi()}`);
