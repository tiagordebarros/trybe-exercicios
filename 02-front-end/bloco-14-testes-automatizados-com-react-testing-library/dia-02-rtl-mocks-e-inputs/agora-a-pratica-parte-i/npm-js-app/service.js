const randomNumber = () => (Math.random() * 100).toFixed(0);
// console.log(randomNumber());

const upperCase = (string) => string.toUpperCase();
// console.log(upperCase('Tiago'));

const firstLetter = (string) => string.charAt(0);
// console.log(firstLetter('Tiago'));

const concatStrings = (firstString, secondString) => firstString.concat(secondString);
// console.log(concatStrings('Tiago', 'Ione'));

module.exports = {
                   randomNumber,
                   upperCase,
                   firstLetter,
                   concatStrings
                 };
                 