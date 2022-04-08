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

//Requisito 2
function InvertWords(word) {
    let reverse = "";
    for (let index = word.length - 1; index >= 0; index -= 1) {
        reverse += word[index];
    }
    console.log(reverse);
    return reverse;
}
InvertWords("tryber");