let f = 0;
let f1 = 0;
let f2 = 1;

console.log(f1);
console.log(f2);

for (let i =0; i <= 5; i++) {
    f = f1 + f2
    f1 = f2;
    f2 = f;
    console.log(f);
}