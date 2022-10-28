// global visibility
const a = 10;
let b = 30;

console.log(this);
function sum() {
    // block visibility
    const a = 100;
    let b = 300;

    return a + b;
}

const sumAr = () => {
    const a = 1000;
    let b = 3000;

    return a + b;
}

console.log(sum());
console.log(sumAr());