const numbers = [];

for (let i = 1000; i >= 1; i--) {
    numbers.push(i);
}

const numbersFillerEven = numbers.filter(function(number, index) {
    return ((number%2 === 0) && (index < 40));
})

console.log(numbersFillerEven);
console.log('--------');

const numbersFillerOdd = numbers.filter(function(number, index) {
    return (number%2 === 1) && (index < (numbers.length)) && (index >= (numbers.length - 20));
})

console.log(numbersFillerOdd);