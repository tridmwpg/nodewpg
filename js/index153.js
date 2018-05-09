const arithmetic = {
    add: function(a, b) {
        return (a + b);
    },
    substract: function(a, b) {
        return (a - b);
    },
    multiply: function(a, b) {
        return (a * b);
    },
    divide: function(a, b) {
        return (a / b);
    },
    remainder: function(a, b) {
        return (a % b);
    }
}

console.log(arithmetic.add(2, 10));
console.log(arithmetic.substract(10, 5));
console.log(arithmetic.multiply(3, 100));
console.log(arithmetic.divide(40, 2));
console.log(arithmetic.remainder(20, 2));