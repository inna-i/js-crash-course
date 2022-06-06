// pure function
const c = 10.14;

function sum(a, b) {
    return a + b;
}

function sumNotPure(a, b) {
    return a + b + c;
}

// callback function
function getResult(a, b, c, cb) {
    const result = cb(a, b);

    return result * c;
}

const res = getResult(10, 10, 10, (a,b) => a + b);

console.log(res);


// function declaration vs expression
// sayHello('Hector');

function sayHello(name) {
    hey('Hector');

    function hey(name) {
        console.log(`Hey, ${name}`);
    }

    console.log(`Hello, ${name}`);
}

const sayBye = function(name) {
    bye(name);

    function bye(name) {
        console.log(`Bye, ${name}`);
    }
    console.log(`Goodbye, ${name}`);
}

sayBye('Hector');


// HOF (high ordered function)
const ar = [100, 12, 101, 2, 5];

const sortedArray = ar.sort((a, b) => b - a);

// ['a', 'c', 'b'].sort()

console.log(sortedArray);


// return
function sayHi(name) {
    console.log('hello');

    return `Hi, ${name}`;
}
