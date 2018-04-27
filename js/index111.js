let k = 0;
let number = 0;
const even = function(number) {
    k = number%2;
    if (k == 0) {
        return true;
    } else {
        return false;
    }
}

number = 4;
if (even(number)) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}