// Requisito 1
let result = 1;
function Fatorial (number){
    while (number > 1) {
        result = result * number;
        number -= 1;
    }
    console.log(`O fatorial é: ${result}`);
    return result;
}
Fatorial(4);