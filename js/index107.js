const biggerNumber = function(firstNumber, secondNumber) {
   if (typeof firstNumber === 'number' && typeof secondNumber === 'number') {
        if (firstNumber > secondNumber) {
            console.log(`Number ${firstNumber} is bigger than ${secondNumber}`);
        } else if (firstNumber < secondNumber) {
            console.log(`Number ${secondNumber} is bigger than ${firstNumber}`);
        } else {
            console.log(`Both numbers are ${firstNumber}`);
        }    
    } else {
        console.log(`One of these "${firstNumber}" or "${secondNumber}" is not a number`);
    }
}

biggerNumber('d', 5);