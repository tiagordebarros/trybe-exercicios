//Exercício 4

let numero = 50;
let maiorNumeroPrimo = [];
//Crivo de Eratóstenes
for (let index = 1; index <= numero; index += 1) {
    if ((index / 1 === index) && (index % 2 !== 0) && (index !== 1) && (index % 3 !== 0) && (index % 5 !== 0) & (index %7 !== 0) || (index === 2) || (index === 3) || (index === 5) || (index === 7)) {
        maiorNumeroPrimo.push(index);
 }
}
console.log(`O maior número primo é ${maiorNumeroPrimo[maiorNumeroPrimo.length - 1]}.`);
