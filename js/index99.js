let j = 0;
for (let i = 0; i <= 1000; i ++) {
    if (i%2 == 1) {
        j++;
        if (j < 20) {
            console.log(i);
        } else {
            break;
        }   
    }
}    