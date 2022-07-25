const fetch = require('node-fetch');

const randomNumber = () => (Math.random() * 100).toFixed(0);
// console.log(randomNumber());

const upperCase = (string) => string.toUpperCase();
// console.log(upperCase('Tiago'));

const firstLetter = (string) => string.charAt(0);
// console.log(firstLetter('Tiago'));

const concatStrings = (firstString, secondString) => firstString.concat(secondString);
// console.log(concatStrings('Tiago', 'Ione'));

const dogPictures = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random';
  const response = await fetch(url);
  const data = await response.json();
  const promise = ((json) => data.ok ? Promise.resolve(json) : Promise.reject(json));
  return promise;
}
// console.log(dogPictures());

// solução alternativa utulizando .then
// function fetchDog() {
//     return fetch("https://dog.ceo/api/breeds/image/random").then(response =>
//       response
//         .json()
//         .then(json =>
//           response.ok ? Promise.resolve(json) : Promise.reject(json)
//         )
//     );
//   }
//  console.log(fetchDog());

module.exports = {
                   randomNumber,
                   upperCase,
                   firstLetter,
                   concatStrings,
                   dogPictures
                 };
                 