const MATH_PI = 3.14;
const radius = 10;

let result;

result = radius !== 0
    ? MATH_PI * (radius * radius)
    : "Radius can not be equal to zero";

// console.log(result);

const userName = "Mark";

const discount = userName === "Tony" ? '30%' : '0%';

// console.log("Congrats! Your discount is " + discount);

const res = radius !== 0 && MATH_PI === 3.14
    ? MATH_PI * (radius * radius)
    : "Radius can not be equal to zero and Math PI should be correct";

const checkRadius = radius === 10 || radius < 100 ? 'Ok' : 'Not Ok';

console.log(checkRadius);

console.log('logical operator ', !radius)
