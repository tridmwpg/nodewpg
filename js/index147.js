const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS',
    shouldOpenBatCave: function(username) {
        return username === 'batman';
    }
}

if (user.shouldOpenBatCave('Batcave')) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again.');
}