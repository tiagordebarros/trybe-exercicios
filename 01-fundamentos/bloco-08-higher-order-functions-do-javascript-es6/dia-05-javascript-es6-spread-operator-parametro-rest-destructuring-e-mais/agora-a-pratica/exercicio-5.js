const myList = [1, 2, 3];

const swap = ([first, second, third]) => [third, second, first];
console.log(swap(myList));

// Solução alternativa
// const swap = (array) => {
//   const [first, second, third] = array;
//   return [third, second, first];
// }
// console.log(swap(myList));
