const myRemove = require('./myRemove.js');

describe ('Exercício 2', () => {
    it('Testa se o retorno de myRemove([1, 2, 3, 4], 3) é [ 1, 2, 4 ]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([ 1, 2, 4 ]);
    });

    it('Testa se o retorno de myRemove([1, 2, 3, 4], 3) NÃO é [1, 2, 3, 4]', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([ 1, 2, 3, 4 ]);
    });

    it('Testa se o retorno de myRemove([1, 2, 3, 4], 5) é [ 1, 2, 3, 4 ]', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([ 1, 2, 3, 4 ]);
    });
});