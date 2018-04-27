let j = 0;
let k = 0;
for (let i = 0; i <= 1000; i ++) {
    k = i%2;
    if (k == 1) {
        j++;
        if (j < 20) {
            console.log(i);
        } else {
            break;
        }   
    }
}    