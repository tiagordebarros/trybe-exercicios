const service = require("./service");

afterEach(() => jest.clearAllMocks());

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

  test('Testa se a função com mock retorna a string em caixa baixa.', () => {
    const mockUpperCase = jest.spyOn(service, "upperCase" ).mockImplementation(string => string.toLowerCase());

    expect(mockUpperCase("TIAGO")).toBe("tiago");
    expect(service.upperCase).toHaveBeenCalled();
    expect(service.upperCase).toHaveBeenCalledTimes(1);
    expect(service.upperCase).toHaveBeenCalledWith('TIAGO');
  });

  test('Testa se a função com mock retorna a última letra de uma string.', () => {
    const mockFirstLetter = jest.spyOn(service, "firstLetter").mockImplementation((string) => string.charAt(string.length - 1));

    expect(mockFirstLetter('Tiago')).toBe('o');
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith('Tiago');
  });

  test('Testa se a função com mock retorna três strings e as concatena.', () => {
    const mockConcatStrings = jest.spyOn(service, "concatStrings").mockImplementation((firstString, secondString, thirdString) => (firstString.concat(secondString)).concat(thirdString));

    expect(mockConcatStrings('Tiago', 'e', 'Ione')).toBe('TiagoeIone');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith('Tiago', 'e', 'Ione');
  });

  test('Testa se ao restaurar a implementação da primeira função, essa retorna em caixa alta', () => {
    service.upperCase.mockRestore();

    expect(service.upperCase('tiago')).toBe('TIAGO');
  });

  test('Testa se a requisição se resolveu e teve como valor "request success".', async () => {
    service.dogPictures = jest.fn();

    service.dogPictures.mockResolvedValue('request success');

    service.dogPictures();
    expect(service.dogPictures).toHaveBeenCalled();
    expect(service.dogPictures).toHaveBeenCalledTimes(1);
    await expect(service.dogPictures()).resolves.toBe('request success');
    expect(service.dogPictures).toHaveBeenCalledTimes(2);
  });

  test('Testa se a requisição se resolveu e teve como valor "request failed".', async () => {
    service.dogPictures = jest.fn();

    service.dogPictures.mockRejectedValue('request failed');

    expect(service.dogPictures).toHaveBeenCalledTimes(0);
    await expect(service.dogPictures()).rejects.toBe('request failed');
    expect(service.dogPictures).toHaveBeenCalledTimes(1);
  });
