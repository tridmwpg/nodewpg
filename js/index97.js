let j = 0;
for (let i = 10000; i >=0; i--) {
    j++;
    if (j === 10) {
        j = 0;
        console.log(`** ${i} **`);
    } else {
        console.log(i);
    }    
}