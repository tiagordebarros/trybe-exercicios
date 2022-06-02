const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((person) => person === name);

console.log(hasName(names, 'Ana'));