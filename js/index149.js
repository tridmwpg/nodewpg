const user = {
    firstName: 'Tri',
    lastName: 'Dang',
    age: 36,
    canPlayHockey: false,
    kids: [{name: 'My', age: 4}],
    languages: function(language) {
        console.log(language);
    }
};

user.married = true;
user.visitorMinority = true;
user.nameOriginalContry = 'Vietnam';

console.log(user);