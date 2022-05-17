const books = require('./index.js');

const fantasyOrScienceFiction = () => books
  .filter( (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica' );

  console.log(fantasyOrScienceFiction());