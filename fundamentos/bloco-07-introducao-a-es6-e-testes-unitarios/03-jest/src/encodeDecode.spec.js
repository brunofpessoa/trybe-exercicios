const { encode, decode } = require("./encodeDecode");

describe('Testa a função encode', () => {
  it('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });

  it('encode é uma função', () => {
    expect(typeof encode).toEqual('function');
  });

  it('Verifica se a codificação está correta', () => {
    expect(encode('ana')).toEqual('1n1');
    expect(encode('ele')).toEqual('2l2');
    expect(encode('xixi')).toEqual('x3x3');
    expect(encode('ovo')).toEqual('4v4');
    expect(encode('nu')).toEqual('n5');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(encode('trybe').length).toEqual(5);
  });
});

describe('Testa a função decode', () => {
  it('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });

  it('decode é uma função', () => {
    expect(typeof decode).toEqual('function');
  });

  it('Verifica se a decodificação está correta', () => {
    expect(decode('1n1')).toEqual('ana');
    expect(decode('2l2')).toEqual('ele');
    expect(decode('x3x3')).toEqual('xixi');
    expect(decode('4v4')).toEqual('ovo');
    expect(decode('n5')).toEqual('nu');
  });

  it('checa se o retorno da função tem o mesmo número de caracteres', () => {
    expect(decode('trybe').length).toEqual(5);
  });
});
