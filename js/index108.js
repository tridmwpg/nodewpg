const sort = function(number1, number2, number3) {
    console.log(number2, number1, number3);
}
sort(10, 8, 25)

const sort1 = function(number1, number2, number3, highToLow) {
    if (highToLow) {
        console.log(number3, number1, number2);
    } else {
        console.log(number2, number1, number3);
    }
}
sort1(10, 8, 25, true)