// Exemplo 1
// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
//   };

// Exemplo 2
// const customer = {
//     firstName: 'Roberto',
//     lastName: 'Faria', // Propriedade adicionada.
//     age: 22,
//     job: 'Teacher',
// };

// Exemplo 3
// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

//Exemplo 4
// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);

// Prática

const returnNewObject = (object, key, value) => object = {[key]:value};
console.log(returnNewObject('Estudante', 'Nome', 'Tiago'));
//Não funciona com object.key = value, pois nesse caso, o .key seria o NOME DA PROPRIEDADE e não A VÁRIAVEL QUE CONTÉM A PROPRIEDADE, como no caso de [key]