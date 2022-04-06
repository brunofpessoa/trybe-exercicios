// Requisito 1
function Adicao(a, b) {
    return a + b;
}
function Subtracao(a, b) {
    return a - b;
}
function Multiplicacao(a, b) {
    return a * b;
}
function Divisao(a, b) {
    return a / b;
}
function Modulo(a, b) {
    return a % b;
}
// Requisito 2
function HigherNumber(a, b) {
    if (a > b) {
        return a;
    }
    return b;
}
// Requisito 3
function HigherOfThreeNumbers(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    }
    return c;
}
// Requisito 4
function PositiveNegativeDetector(number) {
    if (number > 0) {
        return "Positivo";
    } else if (number < 0) {
        return "Negativo";
    }
    return "Nulo";
}
// Requisito 5
function DetectTriangule(num1, num2, num3) {
    if ((num1 || num2 || num3) <= 0) {
        return "One or more numbers are not valid, please try another one."
    }
    if (num1 + num2 + num3 == 180) {
        return true;
    }
    return false;
}
// Requisito 6
function ChessMovements(pieceName) {

    const newPieceName = String(pieceName).toLowerCase();

    switch (newPieceName) {
        case "king":
            return "All directions.";
        case "pawn":
            return "Diagonal-Top.";
        case "rook":
            return "Cardinal Directions.";
        case "queen":
            return "All directions.";
        case "knight":
            return "Move in L.";
        case "bishop":
            return "Diagonals.";
        default:
            return "Piece name not found.";
        // break is not needed is this aplication
    }
}
// Requisito 7
function ScoreConverter(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else if (score >= 50) {
        return "E";
    } else {
        return "F";
    }
}
// Requisito 8
function OneOrMoreIsEven(number1, number2, number3) {

    const num1 = number1;
    const num2 = number2;
    const num3 = number3;

    if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
        return true;
    }
    return false;
}
// Requisito 9
function OneOrMoreIsOdd(number1, number2, number3) {
    const num1 = number1;
    const num2 = number2;
    const num3 = number3;

    if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
        return true;
    }
    return false;
}
// Requisito 10
function ProfitCalculator(productCost, saleValue) {
    if ((productCost || saleValue) < 0) {
        return "Values can not be negative.";
    }
    const profit = saleValue - productCost * 1.2;
    const profitFor1k = profit * 1000;
    return profitFor1k;
}
// Requisito 11
function TaxesCalculator(salaryValue) {
    let inssTaxes;
    let irTaxes;
    switch (true) {
        case salaryValue >= 5189.82:
            inssTaxes = 570.88;
            break;
        case salaryValue > 2594.93:
            inssTaxes = salaryValue * 0.11;
            break;
        case salaryValue > 1556.95:
            inssTaxes = salaryValue * 0.09;
            break;
        case salaryValue <= 1556.95:
            inssTaxes = salaryValue * 0.08;
            break;
        default:
            break;
    }
    const salaryPosInss = salaryValue - inssTaxes;
    switch (true) {
        case salaryPosInss > 4664.68:
            irTaxes = salaryPosInss * 0.275 - 869.36;
            break;
        case salaryPosInss > 3751.06:
            irTaxes = salaryPosInss * 0.225 - 636.13;
            break;
        case salaryPosInss > 2826.66:
            irTaxes = salaryPosInss * 0.15 - 354.80;
            break;
        case salaryPosInss > 1903.99:
            irTaxes = salaryPosInss * 0.075 - 142.8;
            break;
        case salaryPosInss <= 1903.98:
            irTaxes = 0;
            break;
        default:
            break;
    }
    return `O valor do salário deduzido os impostos é de ${salaryPosInss - irTaxes}. Chora não! ;(`
}
console.log(TaxesCalculator(3000));
// Result should be 2612.55. and it's exactly what it is :)