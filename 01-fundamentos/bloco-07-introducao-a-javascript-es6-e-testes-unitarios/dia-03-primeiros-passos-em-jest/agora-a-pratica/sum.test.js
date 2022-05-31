const sum = require('./sum.js');

describe ('Exercício 1', () => {
    it('Testa se o retorno de sum(4, 5) é 9', () => {
        expect(sum(4,5)).toBe(9);
    });

    it('Testa se o retorno de sum(0, 0) é 0', () => {
        expect(sum(0,0)).toBe(0);
    });

    it('Testa se o retorno de `sum(4,"5")` dispara um erro', () => {
        expect(()=> sum(4,'5')).toThrow(Error);
    });

    it('Testa se o retorno da mesagem de erro de `sum(4,"5")` é `parameters must be number`', () => {
        expect(()=> sum(4,'5')).toThrowError('parameters must be numbers');
    });
});