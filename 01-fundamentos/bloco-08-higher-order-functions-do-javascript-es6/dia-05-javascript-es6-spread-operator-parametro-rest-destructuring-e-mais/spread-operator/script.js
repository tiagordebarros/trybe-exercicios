// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'abacaxi', 'uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['kiwi', 'laranja', 'maçã'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];
console.log(fruitSalad(specialFruit, additionalItens));
