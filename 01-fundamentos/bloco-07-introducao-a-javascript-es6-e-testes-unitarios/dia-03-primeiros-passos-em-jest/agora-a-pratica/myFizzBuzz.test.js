const myFizzBuzz = require('./myFizzBuzz.js');

describe('Exercício 3', () => {
    it('Testa se um número divisível por 3 e 5 retorna `fizzbuzz` ', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    });

    it('Testa se um número divisível por 3 retorna `fizz` ', () => {
        expect(myFizzBuzz(9)).toEqual('fizz');
    });

    it('Testa se um número divisível por 5 retorna `buzz` ', () => {
        expect(myFizzBuzz(10)).toEqual('buzz');
    });

    it('Testa se um número que não é divisível por 3 e 5 retorna o próprio número', () => {
        expect(myFizzBuzz(2)).toEqual(2);
    });

    it('Testa se ao passar como argumento um valor que não é um número retorna `false`', () => {
        expect(myFizzBuzz('test')).toEqual(false);
    });
});