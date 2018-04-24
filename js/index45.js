let playerName = 'Patrik Laine is lame';
let teams = 'New Jersey Devils, New York Rangers, Winnipeg jets & Pittsburgh Penguins';
let message = 'Winnipeg is the best Canadian citi, Go Winnipeg'; 

let message1 = playerName.slice(0,15);
let message2 = teams.slice(46,51);
let message3 = message.slice(12,20);
let message4 = message.slice(34,38);
let template;

console.log(message1);
console.log(message2);
console.log(message3);
console.log(message4);
console.log('------');

template = message1.slice(0,11).toUpperCase() + ' ' + message1.slice(13) + ' ' + message3 + ' ' +
            message2.charAt(0).toUpperCase() + message2.slice(1) + 'player' + message4 + ' '+
            message2.charAt(0).toUpperCase() + message2.slice(1) + '!!!';
console.log(template);