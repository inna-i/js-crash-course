const square = (a) => { 
    return a * a
};

const square1 = a => a * a;

function square2(a) {
    return a * a;
}

const square3 = function(a) {
    return a * a;
}

const square4 = function(a, cb) {
    return cb(a);
}

// console.log('Arrow fn ', square(10));
// console.log('Fn expression ', square3(10));
// console.log('result 1 ', calc(10, 5));

// function declaration
function calc(a, b) {
    return a + b;
}

// function expression
const calc2 = function(a, b) {
    return a + b;
}
// console.log('result 2 ', calc2(10, 5));

const calc3 = function(a, b, c, d) {
    let result = a + b;

    // if (Number.isInteger(c) && result > c) {
    if (typeof c === 'number' && result > c) {
        result -= c;
    }

    if (d && d > 0) {
        result = result / d;
    }

    return result;
}

const resultCalc3 = calc3(10, 10, 4);

// console.log('result ', resultCalc3);


const calculator = function(num1, num2, type) {
    const sum = (a,b) => a + b;

    const division = (a, b) => a / b;
    
    const sumDivision = (a, b) => (a + b) / b;

    const square = function(a) {
        return a * a;
    }

    switch(type) {
        case 'sum':
            return sum(num1, num2);       
        case 'division':
            return division(num1, num2);
        case 'sumDivision':
            return sumDivision(num1, num2);        
        case 'square':
            return square(num1, num2);

        default:
            console.error('Please provide numbers')
    }
}

// const result = calculator();

console.log(result)

export function myFunc (a, b) {}