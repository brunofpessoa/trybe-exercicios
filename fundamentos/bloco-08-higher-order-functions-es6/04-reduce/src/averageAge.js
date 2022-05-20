const books = require("./data.js");

const expectedResult = 43;

function averageAge(data) {
  const numberOfAuthors = data.length;
  const summedAges = data.reduce(
    (acc, curr) => acc + (curr.releaseYear - curr.author.birthYear),
    0
  );
  return summedAges / numberOfAuthors;
}

console.log(averageAge(books));
