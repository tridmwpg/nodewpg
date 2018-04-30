const fibonacci = function() {
    let f = 0;
    let f1 = 1;
    let f2 = 1;
    let i = 0;
    
    console.log(f1);
    console.log(f2);
    while (i < 8) {
        f = f1 + f2;
        f1 = f2;
        f2 = f;
        i++;
        console.log(f);
    }
}
fibonacci();