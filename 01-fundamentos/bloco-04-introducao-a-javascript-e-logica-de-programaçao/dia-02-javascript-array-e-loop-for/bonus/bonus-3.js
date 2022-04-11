//Exercício 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let novoArray = [];
let resultadoMultiplicacao = null;

for (let index = 0; index < numbers.length; index += 1) {
    if (index < index + 1){
        if (resultadoMultiplicacao = numbers[index] * numbers[index + 1]) {
            novoArray.push(resultadoMultiplicacao);
        } else {
            novoArray.push(numbers[index] * 2);
        }
    }
}
console.log(novoArray);
