const uppercase = require('./ex007');

describe('Tests uppercase function', () => {
  it('uppercase "test" to equal "TEST"', (done) => {
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