const readline = require('readline-sync');

const weight = readline.questionInt('Qual é o seu peso (Kg) ? ');
const height = readline.questionFloat('Qual é a sua altura (m) ? ');

const bmiStatus = (imc) => {
    if(imc < 18.5) {
        console.log('Abaixo do peso (magreza)');
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log('Peso normal');
    } else if (imc >= 25.0 && imc <= 29.9) {
        console.log('Acima do peso (sobrepeso)');
    } else if (imc >= 30.0 && imc <= 34.9) {
        console.log('Obesidade grau I');
    } else if (imc >= 35.0 && imc <= 39.9) {
        console.log('Obesidade grau II');
    } else {
        console.log('Obesidade graus III e IV');
    }
}

const bmi = () => {
    const imc = (weight / (height ** 2)).toFixed(2);
    bmiStatus(imc);
    return imc;
}

console.log(`IMC: ${bmi()}`);
