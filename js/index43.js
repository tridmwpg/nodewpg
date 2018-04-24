let text = 'game of thrones';
let firstChar = text.charAt(0);
let secondChar = text.slice(5,6);
let thirdChar = text.slice(8,9);
let result = ''.concat(firstChar, secondChar, thirdChar);

console.log(result.toUpperCase());