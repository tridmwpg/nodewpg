let userAndPassword = 'pepito2017,12345';
let userName = userAndPassword.substr(0,10);
let password = userAndPassword.substr(11,5);

console.log(`The user ${userName} has ${password}`);