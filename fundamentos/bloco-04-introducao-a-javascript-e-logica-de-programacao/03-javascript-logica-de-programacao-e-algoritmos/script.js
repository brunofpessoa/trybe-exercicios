// Requisito 1
let result = 1;
function Fatorial(number) {
    while (number > 1) {
        result = result * number;
        number -= 1;
    }
    console.log(`O fatorial é: ${result}`);
    return result;
}
Fatorial(4);

// Requisito 2
function InvertWords(word) {
    let reverse = "";
    for (let index = word.length - 1; index >= 0; index -= 1) {
        reverse += word[index];
    }
    console.log(reverse);
    return reverse;
}
InvertWords("tryber");

// Requisito 3
let array = ['java', 'javascript', 'python', 'html', 'css'];
function GreaterWord() {
    let top = array[0];
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length > top.length) {
            top = array[index];
        }
    }
    console.log(`${top} é a maior palavra.`);
    return top;
}
function MinorWord() {
    let bottom = array[0];
    for (let index = 0; index < array.length; index += 1) {
        if (array[index].length < bottom.length) {
            bottom = array[index];
        }
    }
    console.log(`${bottom} é a menor palavra.`);
    return bottom;
}
GreaterWord();
MinorWord();

// Requisito 4
function BiggestPrimeNumber(primeiroNum, ultimoNum) {
    let allPrimeNumbers = [];
    let divisionsCounter;
    for (let index = ultimoNum; index >= primeiroNum; index -= 1) {
        divisionsCounter = 0;
        for (let secondIndex = index - 1; secondIndex > 1; secondIndex -= 1) {
            if (index % secondIndex == 0) {
                divisionsCounter += 1;
            }
        }
        if (divisionsCounter === 0) {
            allPrimeNumbers.push(index);
        }
    }
    console.log(allPrimeNumbers);
    console.log(`O maior número primo do intervalo é ${allPrimeNumbers[0]}.`)
    return allPrimeNumbers[0];
}
BiggestPrimeNumber(1, 50);