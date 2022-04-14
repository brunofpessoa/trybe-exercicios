// Exercício 1
function romanNumberConverter(roman){
    const romanLibrary = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    roman = roman.toUpperCase();
    let auxNum = [];
    let result = 0;
    let afterHigherNum = false;
    if(roman.length < 2){
        console.log(romanLibrary[roman]);
        return romanLibrary[roman[0]];
    }
    for (let index = 0; index < roman.length; index += 1) {
        auxNum[index] = romanLibrary[roman[index]];
    }
    for (let index = 0; index < auxNum.length; index += 1) {
        if(auxNum[index] <= auxNum[index + 1]){
            result += auxNum[index];
            afterHigherNum = false;
        }else if (!afterHigherNum) {
            result = auxNum[index] - result;
            afterHigherNum = true;
        } else{
            result += auxNum[index]
        }
    }
    console.log(result);
    return result;
}
romanNumberConverter('XVI');

// Exercício 2
function arrayOfNumbers(vector){
    let evenNumber = [];
    for (let index = 0; index < vector.length; index += 1) {
        for (let secIndex = 0; secIndex < vector[index].length; secIndex++) {
            if(vector[[index]][secIndex] % 2 === 0){
                evenNumber.push(vector[[index]][secIndex]);
            }
        }
    }
    console.log(evenNumber);
    return evenNumber;
}
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
arrayOfNumbers(vector);

// Exercício 3
const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
  ];
function generateFruitBasket(basket){
    let fruitBasket = {};
    for (let index = 0; index < basket.length; index += 1) {
        if(fruitBasket[basket[index]] === undefined){
            fruitBasket[basket[index]] = 1;
        }else{
            fruitBasket[basket[index]] += 1;
        }
    }
    let resultToPrint = 'Sua cesta possui: ';
    for (let fruit in fruitBasket) {
        if(fruitBasket[fruit] > 1){
            resultToPrint += `${fruitBasket[fruit]} ${fruit}s, `
        }else{
            resultToPrint += `${fruitBasket[fruit]} ${fruit}, `
        }
    }
    console.log(resultToPrint.slice(0 , resultToPrint.length - 2));
}
generateFruitBasket(basket);

// Exercício 4
let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
console.log(`O morador do bloco 2 de nome ${moradores['blocoDois'][1].nome} ${moradores['blocoDois'][1].sobrenome} mora no ${moradores['blocoDois'][1].andar}° andar, apartamento ${moradores['blocoDois'][1].apartamento}`);

// Exercício 5
for (let bloco in moradores) {
    console.log(`Moradores do ${bloco}`);
    for (let index = 0; index < 2; index += 1) {
        console.log(moradores[bloco][index].nome);
    }
}