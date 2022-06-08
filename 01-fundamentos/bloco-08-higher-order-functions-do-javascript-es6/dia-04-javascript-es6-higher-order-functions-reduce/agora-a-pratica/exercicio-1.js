const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

// const flatten = () => {
//     return arrays.reduce((acc, array) => {
//       return acc.concat(array); 
//     }, []);
// };
// console.log(flatten());

// Refatorado
const flatten = () => arrays.reduce((acc, array) => acc.concat(array), []);
console.log(flatten());
