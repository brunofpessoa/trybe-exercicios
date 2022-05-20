const books = require("./data.js");

const expectedResult = {
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  genre: "Fantasia",
  author: {
    name: "George R. R. Martin",
    birthYear: 1948,
  },
  releaseYear: 1991,
};

// This don't seems a good use for reduce method, it's not looks like a conventional use of reduce
// But is what the statement asks to do
function longestNamedBook(data) {
  const longestName = data.reduce((acc, curr) => {
    if (curr.name.length > acc.name.length) {
      acc = curr;
    }
    return acc;
  });
  return longestName;
}

console.log(longestNamedBook(books));
