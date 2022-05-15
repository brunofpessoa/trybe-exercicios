// Requisito 1
function setEmployeeInfo(fullName) {
  const email = `${fullName.replace(/ /g, '_').toLowerCase()}@trybe.com`;

  return {
    name: fullName,
    email: email,
  }
}
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }

  return employees;
};
console.log(newEmployees(setEmployeeInfo));

// Requisito 2
const verifyNumber = (randomNumber, numberToCompare) => randomNumber === numberToCompare; 

const sortition = (number, verifyNumber) => {
  const randomNumber = Math.round(Math.random(0, 1) * 5);
  if (verifyNumber(randomNumber, number)) {
    return 'Parabéns você ganhou';
  }

  return 'Tente novamente';
}
console.log(sortition(2, verifyNumber));

// Requisito 3
const verifyAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer ) {
    return 1;
  }
  if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function getScore(rightAnswers, studentAnswers, verifyAnswers) {
  let score = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    score += verifyAnswers(rightAnswers[index], studentAnswers[index]);
  }
  return score;
}

console.log(getScore(rightAnswers, studentAnswers, verifyAnswers));