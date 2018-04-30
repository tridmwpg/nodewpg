const showNumbers = function(start, end) {
    if (start > end) {
        for (let i = start; i >= end; i--) {
            console.log(i);
        }
    } else {
        for (let i = start; i <= end; i++) {
            console.log(i);
        }
    } 
}

showNumbers(10,1);