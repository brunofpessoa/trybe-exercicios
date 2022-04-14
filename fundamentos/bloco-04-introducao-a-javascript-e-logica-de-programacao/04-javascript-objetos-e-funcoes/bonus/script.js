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
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
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
arrayOfNumbers(vector);