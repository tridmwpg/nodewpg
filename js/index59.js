let firstNumber = 10;
let secondNumber = 20;

if (firstNumber === secondNumber) {
    message = 'They are the same number';
}
else if (firstNumber > secondNumber) {
    message = `${firstNumber} is bigger than ${secondNumber}`;
}
else if (firstNumber < secondNumber) {
    message = `${secondNumber} is bigger than ${firstNumber}`;
}
console.log(message);