const { encode, decode } = require('./encodeDecode.js');

describe('Exercício 4', () => {
    it('Testa se encode e decode são funções', () => {
        expect(typeof encode).toBe('function');
        expect(typeof decode).toBe('function');
    });
    
    it('Testa se a função `encode` converte as vogais a, e, i, o, u em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('hi there!')).toBe('h3 th2r2!');
        expect(encode('aeiou')).toBe('12345');
    });

    it('Testa se a função `decode` converte os números 1, 2, 3, 4 e 5 nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('h3 th2r2!')).toBe('hi there!');
        expect(decode('12345')).toBe('aeiou');
    });

    it('Testa se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('hello world')).toBe('h2ll4 w4rld');
        expect(decode('h2ll4 w4rld')).toBe('hello world');
        expect(encode('1234567890')).toBe('1234567890');
        expect(decode('aeiou67890')).toBe('aeiou67890');
    });

    it('Testa se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('hello world')).toHaveLength(11);
        expect(decode('h2ll4 w4rld')).toHaveLength(11);
        expect(encode('1234567890')).toHaveLength(10);
        expect(decode('aeiou67890')).toHaveLength(10);
    });
});