let firstPerson = ['Tri', 'Dang', '917 Waterford Ave', 37];
let secondPerson = ['Trang', 'Le', '918 Waterford Ave', 30];
let checkFirstPerson = firstPerson.reduce(function(accumulator, currentValue, index) {
    return accumulator.concat(' ' + currentValue);
}) 

let checkSecondPerson = secondPerson.reduce(function(accumulator, currentValue, index) {
    return accumulator.concat(' ' + currentValue);
}) 

console.log(checkFirstPerson);
console.log(checkSecondPerson);