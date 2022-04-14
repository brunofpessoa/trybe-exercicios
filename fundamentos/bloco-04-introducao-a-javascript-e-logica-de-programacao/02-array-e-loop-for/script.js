let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Requisito 1
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}
// Requisito 2
let sun = 0;
for (let index = 0; index < numbers.length; index++) {
    sun += numbers[index];
}
console.log(`A soma é ${sun}`);

// Requisito 3
sun = 0;
let average = 0;
for (let index = 0; index < numbers.length; index++) {
    sun += numbers[index];
}
average = sun / numbers.length;
console.log(`A média é ${average}`);

// Requisito 4
if (average > 20) {
    console.log("Valor maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}

// Requisito 5
let greaterNum = 0;
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > greaterNum) {
        greaterNum = numbers[index];
    }
}
console.log(`${greaterNum} é o maior número.`);

// Requisito 6
let oddNumbers = [];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 != 0) {
        oddNumbers.push(numbers[index]);
    }
}
if (oddNumbers.length === 0) {
    console.log("Nenhum valor ímpar encontrado");
} else {
    console.log(oddNumbers);
}

// Requisito 7
let minorNum = numbers[0];
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < minorNum) {
        minorNum = numbers[index];
    }
}
console.log(`${minorNum} é o menor número`);

// Requisito 8
let deUmAVinteECinco = [];
for (let index = 1; index <= 25; index++) {
    deUmAVinteECinco.push(index);
}
console.log(deUmAVinteECinco);

// Requisito 9
let divididoPorDois = [];
for (let index = 0; index < deUmAVinteECinco.length; index++) {
    divididoPorDois.push(deUmAVinteECinco[index] / 2);
}
console.log(divididoPorDois);