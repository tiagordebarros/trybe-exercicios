//Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
array.sort((a, b) => b.length - a.length);
console.log(`A MAIOR palavra é "${array[0]}".`);
console.log(`A MENOR palavra é "${array[array.length - 1]}".`);
