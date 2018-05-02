let mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

let mutantsModified = mutants.map(function(mutant) {
    if (mutant === 'Professor X' || mutant === 'Logan' || mutant === 'Phoenix' || mutant === 'Gambit') {
        mutant = '***' + mutant; 
    } 
    return mutant; 
})

console.log(mutants);
console.log(mutantsModified);