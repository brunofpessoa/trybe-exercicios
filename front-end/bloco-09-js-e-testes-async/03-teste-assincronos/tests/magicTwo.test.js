const { saveFavoriteMagicCard } = require('../src/magicTwo.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = () => {
  favoriteCards.splice(4, 2);
}

afterEach(() => {
  retrievesFavoriteCards();
});

describe(' Testa a função saveFavoriteMagicCard', () => {
  it('Testa se um novo card é adicionado a cada execução', async () => {
    expect.assertions(3);
    // implemente seus testes aqui
    await saveFavoriteMagicCard('130553');
    expect(favoriteCards).toHaveLength(5);
    expect(favoriteCards[4].name).toBe('Beacon of Immortality');
    await saveFavoriteMagicCard('130554');
    expect(favoriteCards).toHaveLength(6);
  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {
    expect.assertions(2);
    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui
    const favoriteCardsNames = favoriteCards.map((cards) => cards.name);
    const expectedResult = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad'];
    expect(favoriteCardsNames).toEqual(expectedResult);
  });
});
