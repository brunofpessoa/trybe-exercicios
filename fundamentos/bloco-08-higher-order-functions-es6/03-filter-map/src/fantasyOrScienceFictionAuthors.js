const books = require('./index.js');

const fantasyOrScienceFictionAuthors = () => books
  .filter( (book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica' )
  .map( (book) => book.author.name)
  .sort();

  console.log(fantasyOrScienceFictionAuthors());