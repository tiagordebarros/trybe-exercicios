// n! = n * (n - 1) * (n - 2) => Fórmula matemática do número fatorial

// const calcFatorial = (number) => {
//     let fatorial = 1;
//     for (let index = 0; index < number; index += 1) {
//         let resultfatorial = (number - index);
//         fatorial *= resultfatorial;
//     }
//     return fatorial;
// }
// calcFatorial(5);
// console.log(calcFatorial(5));

//Refatorado de forma recursiva com ternary operator
const calcFatorial = number => number > 1 ? number * calcFatorial(number - 1) : 1;
calcFatorial(5);
console.log(calcFatorial(5));