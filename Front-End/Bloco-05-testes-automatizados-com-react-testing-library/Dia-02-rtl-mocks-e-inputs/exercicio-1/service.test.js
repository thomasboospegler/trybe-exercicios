const service = require('./service');

describe("1 - Testando a função 'RandomNumber':", () => {
  it("testa se a função randomNumber devolce um numero", () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
  
  it("testa se a função randomNumber com dois parametros devolve a divisão deles", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);
  
    expect(service.randomNumber(10, 2)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
  });
  
  it("testa se a função randomNumber com tres parametros devolve a multiplicação deles", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(service.randomNumber(10, 2, 4)).toBe(80);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10, 2, 4);
  });
  
  it("testa se a função randomNumber com um parametros devolve o dobro desse numero", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a) => a * 2);
  
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(10);
  });
});

describe("2 - Testando a função 'toUpperCase':", () => {
  it("testa se a função tpUpperCase devolve uma string em caixa baixa", () => {
    // service.toUpperCase = jest.fn().mockImplementation(a => a.toLowerCase());
    const mockToUpperCase = jest.spyOn(service, "toUpperCase" ).mockImplementation(a => a.toLowerCase());

    expect(mockToUpperCase("UPPERCASE")).toBe("uppercase");
    // expect(service.toUpperCase("UPPERCASE")).toBe("uppercase");
    expect(service.toUpperCase).toHaveBeenCalledTimes(1);
    expect(service.toUpperCase).toHaveBeenCalledWith("UPPERCASE");
  });

  it("testa se ao restaurar a função toUpperCase ela retorna uma string em caixa alta", () => {
    service.toUpperCase.mockRestore();

    expect(service.toUpperCase("upercase")).toBe("UPERCASE");
  })
});

describe("3 - Testando a função 'firstLetter':", () => {
  it("testa se a função tpUpperCase devolve uma string em caixa baixa", () => {
    const mockFirstLetter = jest.spyOn(service, "firstLetter").mockImplementation(a => a.charAt(a.length - 1));

    expect(mockFirstLetter("letter")).toBe("r");
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenCalledWith("letter");
  });
});

describe("4 - Testando a função 'concatStrings':", () => {
  it("testa se a função tpUpperCase devolve uma string em caixa baixa", () => {
    const mockConcatStrings = jest.spyOn(service, "concatStrings").mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockConcatStrings("th", "om", "as")).toBe("thomas");
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenCalledWith("th", "om", "as");
  });
});

describe("5 - testando requisição a API", () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso a promise resolva", async () => {
    service.fetchDog.mockResolvedValue("request success");

    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });

  test("testando requisição caso a promise seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
});

