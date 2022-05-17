const books = require('./index.js');

const oldBooks = () => books
  .filter( (book) => new Date().getFullYear() - book.releaseYear >= 60)
  .map( (book) => book.name);

  console.log(oldBooks());