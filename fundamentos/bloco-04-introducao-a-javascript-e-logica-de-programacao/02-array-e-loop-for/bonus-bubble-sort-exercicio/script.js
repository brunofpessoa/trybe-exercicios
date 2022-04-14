let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Requsito 1
function AscendingOrder() {
    for (let index = 1; index < numbers.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (numbers[index] < numbers[secondIndex]) {
                let position = numbers[index];
                numbers[index] = numbers[secondIndex];
                numbers[secondIndex] = position;
            }
        }
    }
    console.log(numbers);
}
AscendingOrder();

// Requisito 2
function DescendingOrder() {
    for (let index = 1; index < numbers.length; index += 1) {
        for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
            if (numbers[index] > numbers[secondIndex]) {
                let position = numbers[index];
                numbers[index] = numbers[secondIndex];
                numbers[secondIndex] = position;
            }
        }
    }
    console.log(numbers);
}
DescendingOrder();

// Requisito 3
let multipliedNumbers = [];
function MultiplyElementsOfNumbers() {
    let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
    for (let index = 0; index < numbers.length; index++) {

        if (index > numbers.length - 2) {
            multipliedNumbers.push(numbers[numbers.length - 1] * 2);
        } else {
            multipliedNumbers.push(numbers[index] * numbers[index + 1]);
        }
    }
    console.log(multipliedNumbers);
}
MultiplyElementsOfNumbers();