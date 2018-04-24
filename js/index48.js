let message = '3.14 it\'s a great number but 42 it\'s the answer to life.';
let pi = parseFloat(message.slice(0,4));
let answerToLife = parseInt(message.slice(29,32));
let result1 = pi + answerToLife;
let result2 = result1.toString(); 

console.log(`pi: ${pi}, answer to life: ${answerToLife}`);
console.log('The result of adding:,', result1, typeof result1);
console.log('String: ',result2, typeof result2);