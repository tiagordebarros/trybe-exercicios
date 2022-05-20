// Exemplo 1 -> Utilizando FOR...IN
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// for (const property in coolestTvShow) {
//     console.log(property);
// }
//Retorna as CHAVES do OBEJTO:
// name
// genre
// createdBy
// favoriteCharacter
// quote
// seasons
// name
// genre

// Exemplo 2 -> Utilizando Object.keys
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// console.log(Object.keys(coolestTvShow));
// [ 'name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons' ]

// Prática
const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
};

const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
};

const skills = (student) => {
    const listOfSkills = Object.keys(student); // Object.keys -> Retorna um array
    //console.log(listOfSkills); -> O array retornado pelo Object.keys -> [ 'Html', 'Css', 'JavaScript', 'SoftSkills' ]
    for (let skill in listOfSkills) { // For...in -> Percorre o array e retorna strings
        console.log(`${listOfSkills[skill]}, Nível: ${student[listOfSkills[skill]]}`);
    };
}
console.log('Estudante 1');
console.log('----------');
(skills(student1));
console.log('');
console.log('Estudante 2');
console.log('----------');
(skills(student2));
