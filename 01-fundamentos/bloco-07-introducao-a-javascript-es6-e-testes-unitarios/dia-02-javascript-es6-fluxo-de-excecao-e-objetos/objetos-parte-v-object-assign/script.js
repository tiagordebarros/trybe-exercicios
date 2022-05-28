// Exemplo 1 -> Utilizando Object.assign
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
//   };

//   const info = {
//     age: 23,
//     job: 'engenheiro',
//   };

//   const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
//   };

//   Object.assign(person, info, family)
//   console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

// Exemplo 2 -> Utilizando Object.assign para clonar um objeto
// const person = {
//     name: 'Roberto',
// };

// const lastName = {
//     lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// Exemplo 3 -> Outra forma de se clonar um objeto
// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;

// Exemplo 4 -> Utilizando Object.assign para copiar um objeto

const person = {
    name: 'Roberto',
};

const lastName = {
    lastName: 'Silva',
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = 'Gilberto';
console.log(newPerson);
console.log(person);
