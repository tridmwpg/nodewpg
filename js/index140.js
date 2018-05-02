const mutants = ['Professor X', 'Cyclops', 'Iceman', 'Angel', 'Magneto', 'Beast', 'Phoenix', 'Logan', 'Gambit'];

const result = mutants.filter(function(mutant) {
    return (mutant !== 'Magneto') && (mutant !== 'Iceman') && (mutant !== 'Gambit');
})

console.log(result);