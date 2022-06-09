// Função com Default Parameters
const multiply = (number, value = 1) => number * value;
console.log(multiply(8)); // 8
console.log(multiply(8, 2)); // 16

// Sem Default Parameters retorna NaN
// const multiply = (number, value) => number * value;
// console.log(multiply(8)); // NaN
// console.log(multiply(8, 2)); // 16
