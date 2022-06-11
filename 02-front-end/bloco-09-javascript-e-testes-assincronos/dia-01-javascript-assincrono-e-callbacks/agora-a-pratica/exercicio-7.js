const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

describe('Testa a função `uppercase`', () => {
    it('Verifica a chamada da callback da função uppercase', (done) => {
        uppercase('test', (str) => {
            try {
                expect(str).toBe('TEST');
                done();
              } catch (error) {
                done(error);
              }
        });
    });
});
