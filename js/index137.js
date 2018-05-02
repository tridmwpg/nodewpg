let numbers = [];

for (i = 0; i <= 1000; i++) {
    numbers.push(i);
}

const result = numbers.map(function(number, index) {
    let item = 'index: ' + index + ', original number: ' + number + ', incremented value: ' + (number + 10);
    return item;
})

console.log(result);