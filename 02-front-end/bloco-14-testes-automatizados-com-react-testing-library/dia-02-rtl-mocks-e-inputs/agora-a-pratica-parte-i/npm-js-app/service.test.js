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

  test('Testa se a função foi chamada e qual o retorno da função.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(1, 2, 3)).toBe(6);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(1, 2, 3);
  });

  test('Testa se a implementação é resetada e retonra o dobro.', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber.mockImplementation((a) => a * 2);
    // service.randomNumber = jest.fn().mockImplementation((a) => a * 2); // Alternativamente podemos escrever desta forma

    expect(service.randomNumber(4)).toBe(8);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(4);
  });
