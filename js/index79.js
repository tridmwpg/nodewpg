let number = 0;
let sum = 0;

do {
    console.log('number', number);
    sum = sum + number;
    number++;
} while (number <= 1000) 
console.log('sum', sum);