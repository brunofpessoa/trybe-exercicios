// Exercício 1
const factorial = num => num > 1 ? num * factorial(num - 1) : 1;
console.log(factorial(4));

// Exercício 2
const longestWord = (frase) => frase.split(' ').sort((a, b) => b.length - a.length)[0];
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

//Exercício 3 no HTML

// Exercício 4.1
const swampX = myString => {
  const randomString = 'Tryber x aqui!'
  let words = randomString.split(' ');
  const position = words.findIndex(element => element == 'x');
  words[position] = myString;
  const result = words.join(' ');
  return result;
}
swampX('Bruno');

// Exercício 4.2
const skills = ["HTML-5", "CSS", "ES6"];

function setPhrase() {
  const intro = swampX('Bruno');

  let phrase = `${intro}
  minhas principais habilidades são:`

  skills.forEach(skill => {
    phrase += `
    ${skill}`;
  });
  console.log(phrase);
  return phrase;
}

setPhrase();