const square = (a) => { 
    return a * a
};

const square1 = (a) => a * a;

function square2(a) {
    return a * a;
}

const square3 = function(a) {
    return a * a;
}

const square4 = function(a, cb) {
    return cb(a);
}

console.log('Fn expression ', square3(10));
console.log('Fn with anonymous fn', square4(10, square1));
