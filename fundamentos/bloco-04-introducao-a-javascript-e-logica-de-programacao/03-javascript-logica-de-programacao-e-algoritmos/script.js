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

// Requisito Bônus 1
function PrintSquare(n) {
    if (n <= 1) {
        console.log("O número deve ser maior que 1.")
        return;
    }
    let aux = "";
    for (let index = 0; index < n; index += 1) {
        aux = "";
        for (let secondIndex = 0; secondIndex < n; secondIndex += 1) {
            aux += "*";
        }
        console.log(aux);
    }
}
PrintSquare(2);

// Requisito Bônus 2
function PrintTriagule(baseSize) {
    let aux = "";
    for (let index = 0; index < baseSize; index += 1) {
        aux += "*";
        console.log(aux);
    }
}
PrintTriagule(5);

// Requisito Bônus 3
function PrintTriagule2(baseSize) {
    let aux = "";
    let spaces = "";
    for (let index = 0; index < baseSize; index += 1) {
        spaces = "";
        for (let secondIndex = index; secondIndex < baseSize - 1; secondIndex += 1) {
            spaces += " ";
        }
        aux += "*";
        console.log(spaces + aux);
    }
}
PrintTriagule2(5);

// Requisito Bônus 4
function PrintPyramid(baseSize) {
    let aux = "";
    let spaces = "";
    let maxSpaces = Math.ceil(baseSize / 2);
    for (let index = 0; index < maxSpaces; index += 1) {
        spaces = "";
        for (let secondIndex = index; secondIndex < maxSpaces - 1; secondIndex += 1) {
            spaces += " ";
        }
        aux += "*";
        if (index > 0) {
            aux += "*";
        }
        console.log(spaces + aux);
    }
}
PrintPyramid(9);