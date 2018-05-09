const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS'
}

console.log(user.username);
console.log(user.password);
console.log('--------');
console.log(user.username.toUpperCase());

let result = user.password.substr(0, user.password.length - 9) + ' ' + user.password.slice(user.password.length - 5);
console.log(result);