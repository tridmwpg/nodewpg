const user = {
    username: 'batman',
    password: 'Alfred1960ROCKS',
    shouldOpenBatCave: function(username, password) {
        return (username === 'batman' && password === 'Alfred1960ROCKS')
    }
}

if (user.shouldOpenBatCave('batman', 'Alfred1960ROCKS')) {
    console.log('Welcome back batman!!');
} else {
    console.log('Sorry, you can\'t enter the Batcave, try again.');
}