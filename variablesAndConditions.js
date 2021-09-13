let counter = 1;
const PI = 3.1415;
var name = "Luke Skywalker";

const SUM = counter === 1 ? 'Start' : 'In progress';

console.log('Counter status - ', SUM);
console.log(typeof counter);


if (PI === 3.14) {
    console.log('You have the correct PI number');
} else if (PI === 3.1415 && counter === 1) {
    console.log('You have the most correct PI number');
} else {
    console.log('You have not correct PI number');
}

const day = 9;

switch(day) {
    case 1: {
        console.log("It's Monday");
    }
    break;
    case 2: {
        console.log("It's Thuesday");
        counter +=1;
    }
    break;
    case 3: {
        console.log("It's Wednesday");
        counter += 2;
    }
    break;
    default: {
        console.log("We can't find the correct day");
        counter = 9;
        name = "Darth Vader";
    }
}

console.log('Counter is equal to - ', counter);
console.log('Name is equal to - ', name);
