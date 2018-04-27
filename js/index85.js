let f = 0;
let f1 = 0;
let f2 = 1;

console.log(f1);
console.log(f2);

do {
    f = f1 + f2;
    f1 = f2;
    f2 = f;
    console.log(f);
} while (f <= 10)
