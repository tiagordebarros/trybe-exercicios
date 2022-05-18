// Versão simplificada
// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// const ordenaNumeros = (numberArray) => {
//   numberArray[0] = 2;
//   numberArray[1] = 3;
//   numberArray[2] = 4;
//   numberArray[3] = 7;
//   numberArray[4] = 10;
//   numberArray[5] = 13;

//   return numberArray;
// }
// ordenaNumeros(oddsAndEvens);
// console.log(ordenaNumeros(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`));


//Refatorado com o método .sort() - versão inícial
// const ordenaNumeros = (numberArray) => {
//    return numberArray.sort((a, b) => {
//        return a - b;
//   });
// }
// ordenaNumeros(oddsAndEvens);
// console.log(oddsAndEvens); // será necessário alterar essa linha

//Refatorado com o método .sort() - versão final
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const ordenaNumeros = (numberArray) => numberArray.sort((a, b) => a - b);
ordenaNumeros(oddsAndEvens);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); //"Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
