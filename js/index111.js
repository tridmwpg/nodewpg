let number = 4;
const even = function(numberParameter) {
    /* if (numberParameter%2 == 0) {
        return true;
    } else {
        return false;
    } */
    return (numberParameter%2 == 0);
}

if (even(number)) {
    console.log(`${number} is even number`);
} else {
    console.log(`${number} is odd number`);
}