const createObject = (person) => {
  const email = person.toLowerCase().split(' ').join('_');
  const nwePerson = { person: person, email: `${email}@trybe.com` };
  return nwePerson;
};
// console.log(createObject('Pedro Guerra'));

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};
console.log(newEmployees(createObject));