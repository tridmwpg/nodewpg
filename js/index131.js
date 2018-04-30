let femaleStudents = ['a', 'b', 'c', 'd', 'e'];
let maleStudents = ['a1', 'b1', 'c1', 'd1', 'e1'];
let students = femaleStudents.concat(maleStudents);
students.sort();

console.log(femaleStudents[0]);
console.log(femaleStudents[1]);
console.log(femaleStudents[2]);
console.log(femaleStudents[3]);
console.log(femaleStudents[4]);

let i = 0; 
while (i <= maleStudents.length - 1) {
    console.log(maleStudents[i]);
    i++;
}

for (let j = 0; j <= students.length - 1; j++) {
    console.log(students[j]);
}
