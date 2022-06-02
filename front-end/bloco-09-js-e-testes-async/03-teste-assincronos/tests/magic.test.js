require('../simulator/fetchSimulator');
const { getMagicCard } = require('../src/magic.js');
const { card } = require('../simulator/card');

describe('Testa a função getMagicCard', () => {
  it('Deve possuir a propriedade name com o valor Ancestor\'s Chosen', async () => {
    expect.assertions(1);
    const response = await getMagicCard('130550');
    expect(response.name).toEqual(card.name);
  });

  it('should be a function', () => {
    expect.assertions(1);
    expect(typeof getMagicCard).toBe('function');
  });

  it('should call fetch method', async () => {
    await getMagicCard('130550');
    expect(fetch).toBeCalled();
  });

  it('should be called with the url https://api.magicthegathering.io/v1/cards/130550', async () => {
    const url = 'https://api.magicthegathering.io/v1/cards/130550';
    await getMagicCard('130550');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  it('should be igual card object', async () => {
    const result = await getMagicCard(130550);
    expect(result).toEqual(card);
  });

  it('should return an error', async () => {
    expect(await getMagicCard('idDesconhecido'))
      .toEqual(new Error('Id is not found!'));
  });

});
