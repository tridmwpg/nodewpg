let number = 0;
let sum = 0;

do {
    console.log('number', number);
    sum = sum + number;
    number += 3;
} while (number <= 10)

console.log('------');
console.log('sum', sum);