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

  const result = await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamily));
  return result;
}
// createSimpsonsFamily();

const addNelsonToFamily = async () => {
  const content = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamily = JSON.parse(content);

  const nelsonMuntz = { id: '5', name: 'Nelson Muntz'};

  const simpsonFamilyNewMember = [
    ...simpsonFamily,
    nelsonMuntz
  ]

  const result = await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyNewMember));
  return result;
}
// addNelsonToFamily();

const replaceNelsonByMaggie = async () => {
  const content = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonFamily = JSON.parse(content);

  
  const simpsonFamilyFilterNelson = simpsonFamily.filter(({id}) => Number(id) !== 5);

  const maggieSimpson = { id: '5', name: 'Maggie Simpson' };

  const simpsonFamilyRepleacedMember = [
    ...simpsonFamilyFilterNelson,
    maggieSimpson
  ];

  const result = await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonFamilyRepleacedMember));
  return result;
}
// replaceNelsonByMaggie();
