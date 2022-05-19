const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//Utilizando o reduce
function flatten(array) {
  return array.reduce( (acc, curr) => acc.concat(curr));
}

console.log(flatten(arrays));
