let username = '';
let password = '';
const validateUser = function(username, password) {
    if ((username === 'nacho' && password === 'Nerd1979') || 
    (username === 'pedro' && password === 'Batman0217') || 
    (username ==='marta' && password === 'Mother2312')) {
        return true;
    } else {
        return false;
    }
}

username = 'marta';
password = 'Mother2312'
if (validateUser(username, password)) {
    console.log(`Wellcome ${username}, nice to see you again`);
} else {
    console.log('Please input valid credentials');
}