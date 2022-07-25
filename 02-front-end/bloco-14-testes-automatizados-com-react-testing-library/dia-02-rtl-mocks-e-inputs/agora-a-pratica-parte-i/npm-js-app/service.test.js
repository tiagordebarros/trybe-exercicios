const service = require("./service");

test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });

  test('Testa se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
    
    expect(service.randomNumber(10, 5)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 5);
  });
