let perimiter = undefined;
const getShapePerimiter = function(base, height) {
    if (base === height) {
        return (4*height);
    } else {
        return (2*(base+height));
    }
}
perimiter = getShapePerimiter(100,10);
console.log(`${perimiter} is the shape perimiter`);

if (perimiter > 100) {
    console.log('The perimiter is to big');
} else {
    console.log('The perimiter is fine');    
}