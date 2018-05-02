let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let result = [];
let string = mutants.forEach(function(mutant) {
    if (mutant === 'Iceman' || mutant === 'Logan' || mutant === 'Phoenix') {
        result.push(mutant);
    }
})

console.log(result.toString());