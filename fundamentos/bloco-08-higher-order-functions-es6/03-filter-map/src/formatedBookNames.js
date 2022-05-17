const books = require('./index.js');

const formatedBookNames = () => books
.map( (books) => (`${books.name} - ${books.genre} - ${books.author.name}`) );

console.log(formatedBookNames());
