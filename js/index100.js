let k = 0;

function showEvenNumer() {
    for (let i = 0; i <= 100; i++) {
        k = i%2;
        if (k == 0) {
            console.log(i);
        } 
    }
}

showEvenNumer();