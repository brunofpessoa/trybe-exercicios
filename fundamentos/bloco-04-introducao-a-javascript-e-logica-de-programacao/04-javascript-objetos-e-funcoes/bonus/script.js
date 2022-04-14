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