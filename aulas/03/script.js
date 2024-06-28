/**
 * Solicite dois números e faça as seguintes operações:
 * soma, subtração, multiplicação, divisão e resto de divisão.
 * 
 * Mostre um alert para o resultado de cada operação.
 */

let firstNumber = prompt ("Digite o primeiro número: ");
let secondNumber = prompt ("Digite o segundo número: ");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;

const sub = firstNumber - secondNumber;

const mult = firstNumber * secondNumber;

const div = firstNumber / secondNumber;

const rest = firstNumber % secondNumber;//resto da divisão

alert ("A soma é: " + sum);

alert ("A subtração é: " + sub);

alert ("A multiplicação é: " + mult);

alert ("A divisão é: " + div);

alert ("O resto da divisão é: " + rest);
