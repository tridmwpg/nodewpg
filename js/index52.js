const firstNumber = 10;
const secondNumber = 20;
let message = '';

if (firstNumber > secondNumber) {
    message = `Number ${firstNumber} is bigger than ${secondNumber}`;
}    
else {
    message = `Number ${secondNumber} is bigger than ${firstNumber}`;
}    
console.log(message);