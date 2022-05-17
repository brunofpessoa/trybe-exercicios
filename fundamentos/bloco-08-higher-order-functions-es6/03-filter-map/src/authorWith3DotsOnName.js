const books = require('./index.js');

const authorWith3DotsOnName = () => books
  .filter( (book) => book.author.name.match(/([A-z]\. ){3}/))
  .map( (book) => book.name);

// expected output: [ 'O Senhor dos Anéis' ]
console.log(authorWith3DotsOnName());