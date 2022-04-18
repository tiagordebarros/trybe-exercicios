//Exercício 2

let word = 'tryber';
let inversao = " ";
for (let index = word.length -1; index >= 0; index -= 1) {
    inversao += word[index];
}
console.log(inversao);
