const user = {
    username: null,
    password: null,
    greet: function() {
        if (this.username !== null) {
            console.log('Hello, I\'m user', this.username);
        } else {
            console.log('Please assign a username value');
        }
    },    
    updatePassword: function(passwordParam) {
        this.password = passwordParam;
    },    
    updaterUsername: function(usernameParam) { 
        this.username = usernameParam; 
    }
}

user.greet();
user.updaterUsername('tridm');
user.updatePassword('123');
user.greet();