let mutants = ['Professor X',
                'Cyclops',
                'Iceman',
                'Angel',
                'Magneto',
                'Beast',
                'Phoenix',
                'Logan',
                'Gambit'];
let i = 0

while (i <= mutants.length - 1) {
    console.log(mutants[i]);
    i++;
    if (mutants[i] === 'Magneto') {
        break;
    }
}

const indexOfMageto = mutants.indexOf('Magneto');
if (indexOfMageto > -1) {
    mutants.splice(indexOfMageto, 1);
}
console.log('----');

let j = 0;
while (j <= mutants.length - 1) {
    console.log(j, mutants[j].toUpperCase());
    j++;
}