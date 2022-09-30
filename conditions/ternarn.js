const MATH_PI = 3.14;
const radius = 10;

const result = radius > 0 
    ? MATH_PI * radius * radius
    : 'Radius cannot be less than 1';

// console.log(result)

const userName = 'Alex';
const birthDay = 9;

const discount = userName === 'Mark' || birthDay === 9
    ? '50%'
    : '0%';

const msg = discount === '0%'
    ? ''
    : "Congrats! Your discount is " + discount;

console.log(msg);


// const res = radius !== 0 && MATH_PI === 3.14
//     ? MATH_PI * (radius * radius)
//     : "Radius can not be equal to zero and Math PI should be correct";

// const checkRadius = radius === 10 || radius < 100 ? 'Ok' : 'Not Ok';

