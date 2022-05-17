const books = require('./index.js');

const oldBooksOrdered = () => books
  .filter( (book) => new Date().getFullYear() - book.releaseYear >= 60)
  .sort( (a, b) => a.releaseYear - b.releaseYear);

  console.log(oldBooksOrdered());