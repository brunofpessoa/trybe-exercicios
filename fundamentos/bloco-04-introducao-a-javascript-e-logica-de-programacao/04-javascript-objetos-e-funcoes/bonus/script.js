// Exercício 1
let valores = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
}
function conversorRomanos(romano) {
    if (romano.length < 2) {
        console.log(valores[romano]);
        return valores[romano];
    }
    let finalResult = 0;
    let increase = 0;
    let decrease = 0;
    let afterGreaterDigit = false;

    for (let index = 0; index < romano.length; index++) {
        if (!afterGreaterDigit) {
            if (valores[romano[index]] <= valores[romano[index + 1]]) {
                decrease += valores[romano[index]]
            } else {
                afterGreaterDigit = true;
                increase += valores[romano[index]];
            }
        }else{
            increase += valores[romano[index]];
        }
    }

    if (afterGreaterDigit) {
        finalResult = increase - decrease;
    } else {
        finalResult = decrease;
    }
    console.log(finalResult);
}
conversorRomanos('XIV');

// if(valores[romano[index]] <= valores[romano[Number(index)+1]] && !afterGreaterDigit){
//     result -= valores[romano[index]];
// }else{
//     afterGreaterDigit = true;
//     result += valores[romano[index]];
// }