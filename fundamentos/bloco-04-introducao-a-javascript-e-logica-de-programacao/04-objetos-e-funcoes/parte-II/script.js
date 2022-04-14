// Requisito 1
function verificaPalindromo(palavra) {
    if (palavra == palavra.split("").reverse().join(""))
        return true;
    return false;
}
console.log(verificaPalindromo('arara'));

// Requisito 2
function indiceDoMaiorNumero(array) {
    let valorInicial = array[0];
    let indiceDoMaior;
    for (let index in array) {
        if (array[index] > valorInicial) {
            indiceDoMaior = index;
        }
    }
    console.log(indiceDoMaior);
    return indiceDoMaior;
}
let arrayTeste = [2, 3, 6, 7, 10, 1];
indiceDoMaiorNumero(arrayTeste)

// Requisito 3
function indiceDoMenorNumero(array) {
    let valorInicial = array[0];
    let indiceDoMenor;
    for (let index in array) {
        if (array[index] < valorInicial) {
            indiceDoMenor = index;
        }
    }
    console.log(indiceDoMenor);
    return indiceDoMenor;
}
arrayTeste = [2, 4, 6, 7, 10, 0, -3];
indiceDoMenorNumero(arrayTeste)

// Requisito 4
arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function maiorPalavra(array) {
    let valor = array[0];
    for (let index in array) {
        if (array[index].length > valor.length) {
            valor = array[index];
        }
    }
    console.log(valor);
}
maiorPalavra(arrayTeste);

// Requisito 5
arrayTeste = [2, 3, 2, 5, 8, 2, 3];
function elementoMaisRepetido(array) {
    let counter = {};
    for (let index in array) {
        if (counter[array[index]] === undefined) {
            counter[array[index]] = 1;
        } else {
            counter[array[index]] += 1;
        }
    }
    let maisRepetido = { num: 0, repetições: 0 };
    for (let num in counter) {
        if (counter[num] > maisRepetido.num) {
            maisRepetido.num = num;
            maisRepetido.repetições = counter[num];
        }
    }
    console.log(`O valor mais repetido é o ${maisRepetido.num} com o total de ${maisRepetido.repetições} repetições`);
}
elementoMaisRepetido(arrayTeste);

// Requisito 6
function somaRegressiva(numero) {
    numero = parseInt(numero);
    if (numero < 0) {
        console.log("O número não pode ser negativo");
        return;
    }
    let resultado = 0;
    for (let index = 0; index <= numero; index += 1) {
        resultado += index;
    }
    console.log(`O resultado da soma regressiva é: ${resultado}`);
    return resultado;
}
somaRegressiva(5);

// Requisito 7
function verificaFimPalavra(word, ending) {
    if (ending.length > word.length) {
        console.log("O final da palavra não pode ser maior que a palavra");
        return;
    }
    let endingOfWord = '';
    for (let index = 0; index < ending.length; index += 1) {
        endingOfWord += word[word.length - ending.length + index];
    }
    if (endingOfWord === ending) {
        console.log(`'${ending}' corresponde ao final da palavra '${word}'.`)
        return true;
    } else {
        console.log(`'${ending}' NÃO corresponde ao final da palavra '${word}'.`)
        return false;
    }
}
verificaFimPalavra('trybe', 'be');