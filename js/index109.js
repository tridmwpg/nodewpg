let username = 'marta';
let password = 'Mother2312';
const validateUser = function(usernamePara, passwordPara) {
    if ((usernamePara === 'nacho' && passwordPara === 'Nerd1979') || 
    (usernamePara === 'pedro' && passwordPara === 'Batman0217') || 
    (usernamePara ==='marta' && passwordPara === 'Mother2312')) {
        return true;
    } else {
        return false;
    }
}

if (validateUser(username, password)) {
    console.log(`Wellcome ${username}, nice to see you again`);
} else {
    console.log('Please input valid credentials');
}