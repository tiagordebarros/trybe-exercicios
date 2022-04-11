//Excercício 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log(numbers.sort());
console.log(numbers[0]);
console.log(numbers[9]);

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}

//Excercício 2

let soma = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5] + numbers[6] + numbers[7] + numbers[8] + numbers[9];
console.log(soma);

    //Solução alternativa

let resultadoSoma = 0;    
for (let index = 0; index < numbers.length; index += 1) {
 resultadoSoma += numbers[index];
 console.log(resultadoSoma);
}

//Excercício 3

let contador = 0;
let mediaAritmetica = null;
for (let index = 0; index < numbers.length; index += 1) {
    contador += numbers[index];
    mediaAritmetica = contador / numbers.length;
    console.log("A média aritmética da lista é: " + mediaAritmetica);
}

//Excercício 4

let contador = 0;
let mediaAritmetica = null;
for (let index = 0; index < numbers.length; index += 1) {
    contador += numbers[index];
    mediaAritmetica = contador / numbers.length;
    if (mediaAritmetica > 20) {
        console.log("Valor MAIOR que 20.");
    } else {
        console.log("Valor MENOR ou IGUAL a 20."); 
    }
}

//Excercício 5

let numeroMaisAlto = null;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > numeroMaisAlto) {
        numeroMaisAlto = numbers[index];
        console.log("O número mais alto é: " + numeroMaisAlto);
    }
}

    //Solução alternativa SEM O FOR
console.log(numbers.sort());
console.log("O maior valor da lista é: " + numbers[0]);

//Excercício 6

let numerosValoresImpares = 0;
let contadorNumerosImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0 ) {
        contadorNumerosImpares += 1;
        console.log("O número de valores ímpares da array é: " + contadorNumerosImpares);
    }
}

//Excercício 7

menorValor = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
    if (menorValor <= numbers[index]) {
        menorValor = numbers[index];
        console.log ("O menor valor da lista é: " + menorValor);
    }
}

    //Solução alternativa SEM O FOR
console.log(numbers.sort());
console.log("O menor valor da lista é: " + numbers[9]);

//Excercício 8

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
    console.log(numeros);
}

//Excercício 9

let numeros = [];

for (let index = 0.5; index <= 12.5; index += 0.5) {
    numeros.push(index);
    console.log(numeros);
}

    //Solução alternativa

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index] / 2);
};
