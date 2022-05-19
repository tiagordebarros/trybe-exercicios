// Exemplo  1 - Apresentação do problema
// const sum = (value1, value2) => value1 + value2;
// console.log(sum(2, 3)); // resultado: 5
// console.log(sum(2, '3')); // resultado: 23 -> Erro: equivale a concatenação de '2' + '3'

// Exemplo 2 -> Solução sem tratamento de erros
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         return 'Os valores devem ser numéricos';
//     }
//     return value1 + value2;
// };

// console.log(sum(2, '3')); // Os valores devem ser numéricos

// Exemplo 3 -> Fazendo uso fluxo de exceção com throw
// const sum = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//       throw new Error('Os valores devem ser numéricos');
//     }
//     return value1 + value2;
//   };
  
//   console.log(sum(2, '3')); //  throw new Error('Os valores devem ser numéricos');

// Exemplo 4 -> Fazendo uso fluxo de exceção com throw, try/catch
const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      throw error.message;
    }
  };
  console.log(sum(7, 3)); // 10
  console.log(sum(2, '3')); // throw error.message; Os valores devem ser numéricos