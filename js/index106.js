const getUserID = function() {
    return 50;
}

const isUserValid = function() {
    if (getUserID() > 10) {
        return true;
    } else {
        return false;
    }
}

if (isUserValid()) {
    console.log('User valid');
} else {
    console.log('User not valid');
}