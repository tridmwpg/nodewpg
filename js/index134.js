let numbers = [];

for (let i = 1; i <= 100; i ++) {
    numbers.push(i);
}

let j = 0;
for (let j = 0; j <= numbers.length - 1; j++) {
    if (numbers[j]%2 === 1) {
        console.log(numbers[j]);
    }  
} 

/* Create a new index134.js file
Define a numbers array
Assign values bettwen 1 and 1000
Iterate over the numbers array and add all numbers items
On each iteration show the partial result
1
3
6
... so on
If the final result equals 50005000 then show the following ouput: Good job!!!
Else show: Take a look to see if something is wrong */