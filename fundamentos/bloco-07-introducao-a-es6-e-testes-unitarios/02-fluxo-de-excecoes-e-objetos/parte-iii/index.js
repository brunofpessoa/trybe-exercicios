const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 1
function addToObject(lesson, newKey, newValue) { lesson[newKey] = newValue; }
addToObject(lesson2, 'turno', 'noite');

// Requisito 2
const listObjectKeys = (object) => Object.keys(object);
listObjectKeys(lesson1);

// Requisito 3
const getObjectLength = (object) => listObjectKeys(object).length;
getObjectLength(lesson2);

// Requisito 4
const getObjectValues = (object) => Object.values(object);
getObjectValues(lesson3);

// Requisito 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Requisito 6
const getTotalOfStudents = (object) => {
  let result = 0;
  for (const lesson of Object.values(object)) {
    result += lesson.numeroEstudantes;
  }
  return result;
}
console.log(getTotalOfStudents(allLessons));

// Requisito 7
const getValueByIndex = (object, index) => Object.values(object)[index];
console.log(getValueByIndex(lesson1, 0));

// Requisito 8
const verifyPair = (object, key, value) => object[key] === value;

console.log(verifyPair(lesson3, 'turno', 'noite')); // Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')); // Output: false
