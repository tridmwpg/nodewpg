const tripExpenses = [120, 10000, 300];

let budget = 0;
let string = [];
let result = tripExpenses.map(function(expense, index) { 
    budget += expense; 
    if (index === 0) {
        string = 'hotel: ' + expense;
    } else if (index === 1) {
        string = string + ', trip: ' + expense;    
    } else {
        string = string + ', meals: ' + expense;    
    }
    return string;
})
console.log(string);
console.log('Toltal trip budget:', budget);