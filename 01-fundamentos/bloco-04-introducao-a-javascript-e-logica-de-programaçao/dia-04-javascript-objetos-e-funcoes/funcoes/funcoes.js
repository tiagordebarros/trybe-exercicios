//Exercício 1

function palindromeCheck(word) {
let palindromo = word;
// console.log(palindromo.split(""));
let splitArray = palindromo.split("");
//console.log(splitArray);
let reverseArray = splitArray.reverse();
// console.log(reverseArray);
let joinArray = reverseArray.join("");
// console.log(joinArray);
if (palindromo === joinArray) {
    return "true";
} else {
    return "false";
}
}
console.log(palindromeCheck("arara"));

//Exercício 2

function maiorIndice (arrayNumerica){
    let arrayInteiros = arrayNumerica;
    let max = Math.max(...arrayInteiros);
    // console.log(max);
    let indexMax = arrayInteiros.indexOf(max);
    return indexMax;
}
console.log(maiorIndice ([2, 3, 6, 7, 10, 1]));

//Exercício 3

function menorIndice (arrayNumericaNova) {
    let arrayInteirosNova = arrayNumericaNova;
    let min = Math.min(...arrayInteirosNova);
    // console.log(min);
    let indexMin = arrayInteirosNova.indexOf(min);
    return indexMin;
}
console.log(menorIndice ([2, 4, 6, 7, 10, 0, -3]));

//Exercício 4

let arrayNomes =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// console.log(arrayNomes[0].length);
let maiorNome = arrayNomes[0]; // José -> Lucas
for (let index in arrayNomes) {
    if (maiorNome.length < arrayNomes[index].length) { // 4 < 4 -> 4 < 5
        maiorNome = arrayNomes[index]; // 4!= 4 -> 4 = 5
        // console.log(maiorNome); // José -> Lucas
    }
}
console.log(maiorNome);


//Exercício 5

let matrizInteiros = [2, 3, 2, 5, 8, 2, 3];
function maisRepetido(numeros) {
    let contRepetido = 0;
    let contNumero = 0;
    let indexNumeroRepetido = 0;
    for (let index in numeros) {
      let verificaNumero = numeros[index];
      for (let index2 in numeros) {
        if (verificaNumero === numeros[index2]) {
          contNumero += 1;
        }
      }
      if (contNumero > contRepetido) {
        contRepetido = contNumero;
        indexNumeroRepetido = index;
      }
      contNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  }
console.log(maisRepetido(matrizInteiros));

//Exercício 6

let N = 5;
let contador = 0;
for (let index = 0; index <= N; index += 1) {
    contador += index;
}
console.log(contador);

//Exercício 7

function verificaFimPalavra(palavra, fimPalavra) {
    palavra = palavra.split('');
    fimPalavra = fimPalavra.split('');
    controle = true;
    for (let index = 0; index < fimPalavra.length; index += 1) {
      if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
        controle = false;
      }
    }
    return controle;
  }

console.log(verificaFimPalavra('trybe', 'be'));
