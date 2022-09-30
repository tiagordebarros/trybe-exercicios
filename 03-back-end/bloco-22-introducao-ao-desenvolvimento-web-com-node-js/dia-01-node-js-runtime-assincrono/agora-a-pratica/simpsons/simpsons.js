const { log } = require('console');

const fs = require('fs').promises;

const readAll = async () => {
   const content = await fs.readFile('./simpsons.json', 'utf-8'); // Retorna a Promise { <pending> }
   const simpsons = JSON.parse(content); // Retorna o conteúdo do objeto JSON Parse
   const strings = simpsons.map(({id, name}) => `${id} - ${name}`); // Mapeados os objetos para strings em formato de array
   const result = strings.forEach((character) => console.log(character)); // Exibidos cada um dos personagens
   return result;
}
// readAll();

const getCharacterById = async (identify) => {
  const content = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(content);

  const getById = simpsons.filter(({ id }) => id === String(identify));
  console.log(getById);
  
  if(!getById){
      throw new error('ID não encontrado!');
  }

  return getById;
}
// getCharacterById(1);

const filterCharacters = async () => {
  const content = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(content);
  
  const filterSomeCharacters = simpsons.filter(({ id }) => Number(id) !== 6 && Number(id) !== 10);
  console.log(filterSomeCharacters);

  const result = await fs.writeFile('./simpsons.json', JSON.stringify(filterSomeCharacters));
  return result;
}
// filterCharacters();

const createSimpsonsFamily = async () => {
  const content = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(content);

  const ids = [1, 2, 3, 4]
  const simpsonFamily = simpsons.filter(({ id }) => {
    return ids.includes(Number(id));
  });
  console.log(simpsonFamily);

  const result = await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
  return result;
}
createSimpsonsFamily();
