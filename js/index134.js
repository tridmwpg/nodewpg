let numbers = [];

for (let i = 1; i <= 1000; i ++) {
    numbers.push(i);
}

let j = 0;
let sum = 0;
for (let j = 0; j <= numbers.length - 1; j++) {
        sum += numbers[j];
        console.log(sum); 
} 