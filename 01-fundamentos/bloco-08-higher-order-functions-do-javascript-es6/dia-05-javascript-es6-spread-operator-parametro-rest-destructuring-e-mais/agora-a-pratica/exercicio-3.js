// const alex = {
//     name: 'Alex',
//     age: 26,
//     likes: ['fly fishing'],
//     nationality: 'Australian',
// };

// const gunnar = {
//     name: 'Gunnar',
//     age: 30,
//     likes: ['hiking', 'scuba diving', 'taking pictures'],
//     nationality: 'Icelandic',
// };

// // complete a assinatura da função abaixo
// const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

// Bônus - teste adicional, criando um novo objeto e atribuindo váriaveis na desestruturação do objeto (object destructuring), bem como default parameters
const tiago = {
    name: 'Tiago',
    age: 31,
    likes: ['reading', 'programming'],
};

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name: nome, age: idade, likes, nationality = 'Brazilian'}) => `${nome} is ${idade} years old and likes ${likes.join(', ')}. He is ${nationality}.`;

console.log(personLikes(tiago)); // Tiago is 31 years old and likes reading, programming. He is brazilian.
console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
