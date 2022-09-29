const fs = require('fs').promises;

const readAll = async () => {
   const content = await fs.readFile('./simpsons.json', 'utf-8'); // Retorna a Promise { <pending> }
   const simpsons = JSON.parse(content); // Retorna o conteúdo do objeto JSON Parse
   const strings = simpsons.map(({id, name}) => `${id} - ${name}`); // Mapeados os objetos para strings em formato de array
   const result = strings.forEach((character) => console.log(character)); // Exibidos cada um dos personagens
   return result;
}

readAll();
