const codeList = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(frase) {
  let newFrase = [];
  for (let index in frase) {
    if (codeList[frase[index]] !== undefined) {
      newFrase.push(codeList[frase[index]]);
    } else {
      newFrase.push(frase[index]);
    }
  }
  return newFrase.join("");
}

function decode(phrase) {
  let newPhrase = [];
  for (let index in phrase) {
    if (
      Number(phrase[index]) ===
      Object.values(codeList).find(
        (codeNum) => codeNum === Number(phrase[index])
      )
    ) {
      newPhrase.push(
        Object.keys(codeList).find(
          (key) => codeList[key] === Number(phrase[index])
        )
      );
    } else {
      newPhrase.push(phrase[index]);
    }
  }
  return newPhrase.join("");
}

module.exports = { encode, decode };