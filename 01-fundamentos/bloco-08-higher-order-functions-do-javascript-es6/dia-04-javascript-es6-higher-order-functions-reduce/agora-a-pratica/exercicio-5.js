const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

const containsA = () => names.reduce((acc, curr) => acc + curr.split('').reduce((acc, curr) => (curr === 'a' || curr === 'A') ? acc + 1 : acc , 0) , 0);
console.log(containsA());
