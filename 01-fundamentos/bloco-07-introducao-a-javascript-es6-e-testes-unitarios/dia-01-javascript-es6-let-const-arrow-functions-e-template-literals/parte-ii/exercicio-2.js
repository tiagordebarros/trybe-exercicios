// Código inicial com o for e o if
const longestWord = (sentence) => {
    let words = sentence.split(' ');
    let largeWord = ' ';
    for (let index = 0; index < words.length; index += 1) {
        if (largeWord.length < words[index].length) {
            largeWord = words[index];
        }
    }
    return largeWord;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Código refatorado com reduce() e operador ternário -> Versão 1
//array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])) =>  Sintaxe do Array.prototype.reduce()

// const reduceToWords = (acc, cur) => cur.length > acc.length ? cur : acc;

// const longestWord = (sentence) => {
//    let words = sentence.split(' ');
//   return words.reduce(reduceToWords);
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Refatorado -> Versão 2
// const longestWord = (sentence) => {
//     let words = sentence.split(' ');
//     return words.reduce((acc, cur) => cur.length > acc.length ? cur : acc);
// }

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// Refatorado -> Versão 3
// const longestWord = (sentence) => sentence.split(' ').reduce((acc, cur) => cur.length > acc.length ? cur : acc);
// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); // retorna 'aconteceu'
