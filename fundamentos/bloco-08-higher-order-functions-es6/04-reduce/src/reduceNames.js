const books = require("./data.js");

const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames(data) {
  return data.reduce(
    (acc, curr, index, arr) =>
      index === arr.length - 1
        ? `${acc} ${curr.author.name}.`
        : `${acc} ${curr.author.name},`,
    ""
  );
}

console.log(reduceNames(books));
