const books = require('./index.js');

const nameAndAge = () => books
  .map( (book) => ({ 'Author': book.author.name, 'age': book.releaseYear - book.author.birthYear }) )
  .sort( (a, b) => a.age - b.age);

console.log(nameAndAge());
