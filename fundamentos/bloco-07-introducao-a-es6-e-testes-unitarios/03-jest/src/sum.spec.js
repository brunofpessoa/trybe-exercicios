const sum = require("./sum");

describe('Testes para a função sum', () => {
  it ('Testa resultado da soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  })

  it ('Retorna erro quando soma com string', () => {
    expect(() => sum(4, '5')).toThrowError();
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  })
})
